import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
	type Attachment,
	AttachmentType,
	type ConfigType,
	type MapType,
} from "@bf6mods/sdk";
import colors from "colors";
import { createJiti } from "jiti";
import { rolldown } from "rolldown";
import {
	type Bf6Config,
	MapId as MapIdEnum,
} from "../../resources/prepare/types/config.ts";
import { printToConsole } from "../utils.ts";
import { extractBf6Strings } from "./generated-strings.ts";

declare global {
	var defineBf6Config: ((config: Bf6Config) => Bf6Config) | undefined;
	var MapId: typeof MapIdEnum | undefined;
}

/**
 * Dynamically imports and validates bf6.config.ts
 */
export async function getBf6Config(rootDir: string): Promise<Bf6Config> {
	globalThis.defineBf6Config = (c) => c;
	globalThis.MapId = MapIdEnum;
	const jiti = createJiti(rootDir, { interopDefault: true });
	const result = await jiti.import("./bf6.config", { default: true });
	delete globalThis.defineBf6Config;
	delete globalThis.MapId;
	return result as Bf6Config;
}

/**
 * Builds the entire mod project once (for production or single run).
 */
export async function build() {
	const workingDir = path.resolve(".");
	const config = await getBf6Config(workingDir);

	const outDir = path.resolve(workingDir, config.outDir);
	if (fs.existsSync(outDir))
		fs.rmSync(outDir, { recursive: true, force: true });
	fs.mkdirSync(outDir, { recursive: true });

	const minifyJson =
		typeof config.minify === "boolean"
			? config.minify
			: (config.minify?.json ?? false);

	const generatedStrings = {};
	let tsAttachment: Attachment | undefined;
	if (config.entrypoint) {
		const entryAbs = path.resolve(workingDir, config.entrypoint);
		const compiled = await buildEntrypoint(
			entryAbs,
			generatedStrings,
			config.generateStrings ?? true,
		);
		tsAttachment = createTsAttachment(entryAbs, compiled);
	}

	const { attachments, mapRotation } = await collectAttachments(
		config,
		workingDir,
		tsAttachment,
		generatedStrings,
	);

	await writeModJson(config, outDir, attachments, mapRotation, minifyJson);
	printToConsole(`${colors.green.bold("✓")} Built mod: ${config.name}`);
}

/**
 * Compiles the TypeScript entrypoint using rolldown and returns the compiled code.
 */
export async function buildEntrypoint(
	entry: string,
	bf6Strings: Record<string, string>,
	generateStringsFromLiterals: boolean,
): Promise<string> {
	const bundle = await rolldown({
		input: entry,
		plugins: [extractBf6Strings(bf6Strings, generateStringsFromLiterals)],
		logLevel: "debug",
	});
	const result = await bundle.generate({
		format: "esm",
		inlineDynamicImports: true,
	});

	const code = result.output[0].code;
	return code;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const spatialsDir = path.resolve(__dirname, "../resources/maps/spatial");
/**
 * Collects all attachments (TS, scenes, strings) and returns them + mapRotation.
 */
export async function collectAttachments(
	config: Bf6Config,
	workingDir: string,
	tsAttachment: Attachment | undefined,
	generatedStrings: Record<string, number | string> | undefined,
) {
	const attachments: Attachment[] = [];
	const mapRotation: MapType[] = [];

	if (tsAttachment) attachments.push(tsAttachment);

	// Strings
	if (config.strings) {
		const strPath = path.resolve(workingDir, config.strings);
		if (!fs.existsSync(strPath)) throw new Error("Cannot find strings file");
		const raw = await fs.promises.readFile(strPath, "utf8");
		const attachment = createStringsAttachment(strPath, raw, generatedStrings);
		attachments.push(attachment);
	}

	// Scenes
	if (config.scenes) {
		let mapIdx = 0;
		for (const map of config.scenes) {
			let mapId: MapIdEnum;
			let scene: string;
			if (Array.isArray(map)) {
				[mapId, scene] = map;
			} else {
				mapId = map;
				scene = path.resolve(spatialsDir, `${mapId}.spatial.json`);
			}

			const scenePath = path.resolve(workingDir, scene);
			if (!fs.existsSync(scenePath))
				throw new Error(`Cannot find spatial data file: ${scene}`);
			const raw = await fs.promises.readFile(scenePath, "utf8");
			const spatial = createSpatialAttachment(scenePath, raw, mapIdx++);
			attachments.push(spatial);
			mapRotation.push({ id: mapId, spatialAttachment: spatial });
		}
	}

	return { attachments, mapRotation };
}

/**
 * Writes the mod.json output to disk.
 */
export async function writeModJson(
	config: Bf6Config,
	outDir: string,
	attachments: ConfigType["attachments"],
	mapRotation: MapType[],
	minify: boolean,
) {
	const baseGame = config.game;
	const finalJson: ConfigType = {
		name: config.name,
		description: config.description,
		gameMode: "ModBuilderCustom",
		mutators: baseGame.mutators ?? {},
		assetRestrictions: baseGame.assetRestrictions ?? {},
		teamComposition: baseGame.teamComposition ?? [],
		mapRotation,
		attachments,
	};

	const jsonOutput = minify
		? JSON.stringify(finalJson)
		: JSON.stringify(finalJson, null, 2);
	await fs.promises.writeFile(path.resolve(outDir, "mod.json"), jsonOutput);

	if (config.outputArtifacts && finalJson?.attachments) {
		for (const attachment of finalJson.attachments) {
			const attachmentsDir = path.resolve(outDir, "attachments");
			if (!fs.existsSync(attachmentsDir))
				fs.mkdirSync(attachmentsDir, {
					recursive: true,
				});
			await fs.promises.writeFile(
				path.resolve(outDir, "attachments", attachment.filename),
				atob(attachment.attachmentData.original),
			);
		}
	}
}

export function createTsAttachment(
	filePath: string,
	compiled: string,
): Attachment {
	return {
		id: crypto.randomUUID(),
		version: "1.0",
		filename: `${path.parse(filePath).name}.js`,
		isProcessable: true,
		processingStatus: 2,
		attachmentType: AttachmentType.TypeScript,
		attachmentData: { original: toBase64(compiled), compiled: "" },
		errors: [],
	};
}

export function createStringsAttachment(
	filePath: string,
	raw: string,
	generatedStrings?: Record<string, number | string> | undefined,
): Attachment {
	let result = raw;
	if (generatedStrings) {
		result = JSON.stringify(
			{
				...generatedStrings,
				...JSON.parse(raw),
			},
			null,
			4,
		);
	}

	return {
		id: crypto.randomUUID(),
		version: "1.0",
		filename: path.basename(filePath),
		isProcessable: true,
		processingStatus: 2,
		attachmentType: AttachmentType.Strings,
		attachmentData: { original: toBase64(result), compiled: "" },
		errors: [],
	};
}

export function createSpatialAttachment(
	filePath: string,
	raw: string,
	mapIdx: number,
): MapType["spatialAttachment"] {
	return {
		id: crypto.randomUUID(),
		version: "1.0",
		filename: path.basename(filePath),
		isProcessable: true,
		processingStatus: 2,
		attachmentType: AttachmentType.SpatialData,
		attachmentData: { original: toBase64(raw), compiled: "" },
		metadata: `mapIdx=${mapIdx}`,
		errors: [],
	};
}

export function toBase64(input: string | Buffer): string {
	return Buffer.isBuffer(input)
		? input.toString("base64")
		: Buffer.from(input, "utf8").toString("base64");
}
