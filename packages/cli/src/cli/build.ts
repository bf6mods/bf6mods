import fs from "node:fs";
import path from "node:path";
import { AttachmentType, type ConfigType, type MapType } from "@bf6mods/sdk";
import { createJiti } from "jiti";
import { rolldown } from "rolldown";
import {
	type Bf6Config,
	MapId as MapIdEnum,
} from "../resources/prepare/types/config.ts";

declare global {
	var defineBf6Config: ((config: Bf6Config) => Bf6Config) | undefined;
	var MapId: typeof MapIdEnum | undefined;
}

export const getBf6Config = async (rootDir: string) => {
	globalThis.defineBf6Config = (c) => c;
	globalThis.MapId = MapIdEnum;
	const jiti = createJiti(rootDir, { interopDefault: true });
	const result = await jiti.import("./bf6.config", { default: true });
	delete globalThis.defineBf6Config;
	delete globalThis.MapId;
	return result as Bf6Config;
};

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

	// --- Collect attachments ---
	const attachments: ConfigType["attachments"] = [];
	const mapRotation: MapType[] = [];

	// --- Compile TypeScript ---
	if (config.entrypoint) {
		const entryAbs = path.resolve(workingDir, config.entrypoint);
		const compiled = await buildTs(entryAbs, outDir, !!config.outputArtifacts);

		attachments.push({
			id: crypto.randomUUID(),
			version: "1.0",
			filename: `${path.parse(entryAbs).name}.js`,
			isProcessable: true,
			processingStatus: 2,
			attachmentType: AttachmentType.TypeScript,
			attachmentData: {
				original: toBase64(compiled),
				compiled: "",
			},
			errors: [],
		});
	}

	// --- Strings attachment ---
	if (config.strings) {
		const strPath = path.resolve(workingDir, config.strings);
		if (!fs.existsSync(strPath)) throw new Error("Cannot find strings file");
		const raw = await fs.promises.readFile(strPath, "utf8");

		attachments.push({
			id: crypto.randomUUID(),
			version: "1.0",
			filename: path.basename(strPath),
			isProcessable: true,
			processingStatus: 2,
			attachmentType: AttachmentType.Strings,
			attachmentData: {
				original: toBase64(raw),
				compiled: "",
			},
			errors: [],
		});
	}

	// --- Spatial (map) attachments ---
	if (config.scenes) {
		let mapIdx = 0;
		for (const [mapId, scene] of config.scenes) {
			const scenePath = path.resolve(workingDir, scene);
			if (!fs.existsSync(scenePath))
				throw new Error(`Cannot find spatial data file: ${scene}`);

			const raw = await fs.promises.readFile(scenePath, "utf8");
			const id = crypto.randomUUID();

			const spatialAttachment = {
				id,
				version: "1.0",
				filename: path.basename(scenePath),
				isProcessable: true,
				processingStatus: 2,
				attachmentType: AttachmentType.SpatialData,
				attachmentData: {
					original: toBase64(raw),
					compiled: "",
				},
				metadata: `mapIdx=${mapIdx++}`,
				errors: [],
			};

			attachments.push(spatialAttachment);

			mapRotation.push({
				id: mapId,
				spatialAttachment,
			});
		}
	}

	// --- Base config (game-level) ---
	const baseGame = config.game;

	// --- Final JSON object ---
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

	const jsonOutput = minifyJson
		? JSON.stringify(finalJson)
		: JSON.stringify(finalJson, null, 2);

	await fs.promises.writeFile(path.resolve(outDir, "mod.json"), jsonOutput);
}

/**
 * Compiles TypeScript entrypoint using rolldown.
 * Returns the compiled code as a string.
 */
async function buildTs(entrypoint: string, outDir: string, emitFiles: boolean) {
	const bundle = await rolldown({
		input: entrypoint,
	});
	const result = await bundle.generate({
		format: "esm",
		inlineDynamicImports: true,
	});
	const code = result.output[0].code;
	if (emitFiles) {
		await fs.promises.writeFile(path.resolve(outDir, "index.ts"), code);
	}
	return code;
}

/** Encodes text or buffer to base64 */
function toBase64(input: string | Buffer) {
	return Buffer.isBuffer(input)
		? input.toString("base64")
		: Buffer.from(input, "utf8").toString("base64");
}

/**
 * This is taken directly from the portal.battlefield.com website. It searches a typescript file for all strings, then outputs them into json.
 */
// function _generateStringFile(V: string) {
// 	const X: Record<string | number, string> = {},
// 		J = V.split(`
// `),
// 		ne = V.replaceAll(
// 			`
// `,
// 			"",
// 		),
// 		ue =
// 			/(?:const|let|var)\s+godotStrings\s+=\s\{(\s*(["']([\w ]*)["'])\s*:\s*(["']([\w ]*)["'])\s*,?\s*)*\}/g,
// 		ce = ne.match(ue);
// 	if (ce && ce.length > 0) {
// 		const _e = ce[0].indexOf("=") + 1,
// 			Se = JSON.parse(ce[0].slice(_e));
// 		Object.keys(Se).forEach((ye) => {
// 			X[ye] = Se[ye];
// 		});
// 	}
// 	const me = /'([^'"]*)'|"([^'"]*)"/g,
// 		ge = new Set();
// 	return (
// 		J.forEach((_e) => {
// 			for (const Se of _e.matchAll(me)) {
// 				const Ie = Se[1] ? Se[1] : Se[2];
// 				ge.add(Ie);
// 			}
// 		}),
// 		Array.from(ge).forEach((_e, Se: number) => {
// 			// @ts-expect-error
// 			X[Se] = _e;
// 		}),
// 		JSON.stringify(X, null, 2)
// 	);
// }
