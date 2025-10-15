import fs from "node:fs";
import path from "node:path";

import { ConfigType, AttachmentType } from "@bf6mods/sdk";
import { installDependencies, startProject } from "./init.ts";

import { MapId as MapIdEnum } from "../resources/prepare/types/config.ts";

async function writeFileSafe(filePath: string, data: string | Buffer) {
	const dir = path.dirname(filePath);
	await fs.promises.mkdir(dir, { recursive: true });
	await fs.promises.writeFile(filePath, data);
}

function getMapKeyByValue(value: string): keyof typeof MapIdEnum | undefined {
	return Object.keys(MapIdEnum).find(
		k => MapIdEnum[k as keyof typeof MapIdEnum] === value
	) as keyof typeof MapIdEnum | undefined;
}

export async function importFile(input: string, output: string) {
	const workingDir = path.resolve(".");
	const entrypoint = path.resolve(workingDir, input);
	const outDir = path.resolve(workingDir, output);

	if (!fs.existsSync(entrypoint))
		throw new Error("Cannot find strings file");

	const config = JSON.parse(
		await fs.promises.readFile(entrypoint, { encoding: "utf8" }),
	) as ConfigType;
	console.log("config:", config);

	if (!fs.existsSync(outDir))
		await fs.promises.mkdir(outDir, { recursive: true });

	startProject(outDir, config.name, "None");

	let typescriptFile: string | undefined;
	let stringsFile: string | undefined;
	const scenes: [string, string][] = [];
	const promises: Promise<any>[] = [];

	if (config.attachments) {
		for (const attachment of config.attachments) {
			if (attachment.attachmentType === AttachmentType.TypeScript)
				typescriptFile = attachment.filename;

			if (attachment.attachmentType === AttachmentType.Strings)
				stringsFile = attachment.filename;

			if (attachment.attachmentType === AttachmentType.SpatialData) {
				promises.push(
					writeFileSafe(path.resolve(outDir, "src", "scenes", attachment.filename), atob(attachment.attachmentData.original)),
				);
				continue;
			}

			promises.push(
				writeFileSafe(path.resolve(outDir, "src", attachment.filename), atob(attachment.attachmentData.original)),
			);
		}
	}

	// Extract spatial scenes from mapRotation instead of guessing
	if (config.mapRotation?.length) {
		for (const map of config.mapRotation) {
			scenes.push([map.id, `src/scenes/${map.spatialAttachment.filename}`]);
		}
	}

	// build the new bf6.config.ts structure
	const bf6Config = {
		name: config.name,
		description: config.description,
		outDir: "dist",
		entrypoint: typescriptFile ? `src/${typescriptFile}` : undefined,
		scenes: scenes ? scenes.map(([id, path]) => [`MapId.${getMapKeyByValue(id) ?? id}`, path]) : undefined,
		strings: stringsFile ? `src/${stringsFile}` : undefined,
		game: {
			mutators: config.mutators,
			assetRestrictions: config.assetRestrictions,
			gameMode: config.gameMode,
			teamComposition: config.teamComposition,
		},
	};

	const bf6ConfigContent = `export default defineBf6Config(${stringifyWithRaw(
		bf6Config,
	)});\n`;

	promises.push(
		writeFileSafe(path.resolve(outDir, "bf6.config.ts"), bf6ConfigContent),
	);

	await Promise.all(promises);

	installDependencies(outDir);
}

function stringifyWithRaw(value: any, replacer?: any, space = 4) {
	return JSON.stringify(value, replacer, space)
		// remove quotes around MapId references like "MapId.LiberationPeak"
		.replace(/"MapId\.([A-Za-z0-9_]+)"/g, "MapId.$1");
}
