import path from "node:path";
import { createJiti } from "jiti";
import type { Bf6Config } from "../resources/prepare/types/config.ts";
import { rolldown } from "rolldown";
import fs from 'fs';

declare global {
	var defineBf6Config: ((config: Bf6Config) => Bf6Config) | undefined;
}

export const getBf6Config = async (rootDir: string) => {
	globalThis.defineBf6Config = (c) => c;
	const jiti = createJiti(rootDir, { interopDefault: true });
	const result = await jiti.import("./bf6.config", { default: true });
	delete globalThis.defineBf6Config;
	return result as Bf6Config;
};

export async function build() {
	const workingDir = path.resolve(".");
	const config = await getBf6Config(workingDir);

	const minifyJs = typeof config.minify === "boolean"
		? config.minify
		: config.minify?.js ?? false;

	const minifyJson = typeof config.minify === "boolean"
		? config.minify
		: config.minify?.json ?? false;

	const outDir = path.resolve(workingDir, config.outDir);
	if (config.entrypoint) buildTs(path.resolve(workingDir, config.entrypoint), outDir, minifyJs);
	if (config.strings) buildStrings(path.resolve(workingDir, config.strings), outDir, minifyJson);
	if (config.config) buildConfig(path.resolve(workingDir, config.config), outDir, minifyJson);
	if (config.tscn) buildTscn(path.resolve(workingDir, config.tscn), outDir);
}

async function buildTs(entrypoint: string, outDir: string, minify: boolean) {
	const bundle = await rolldown({
		input: entrypoint,
	});

	await bundle.write({
		format: 'esm',
		file: `${outDir}/index.ts`,
		inlineDynamicImports: true,
		minify
	});
}

async function buildStrings(entrypoint: string, outDir: string, minify: boolean) {
	if (!fs.existsSync(entrypoint)) throw new Error('Cannot find strings file');
	let output = await fs.promises.readFile(entrypoint, { encoding: 'utf8' });
	if (minify) output = JSON.stringify(JSON.parse(output));
	await fs.promises.writeFile(path.resolve(outDir, 'strings.json'), output);
}

async function buildConfig(entrypoint: string, outDir: string, minify: boolean) {
	if (!fs.existsSync(entrypoint)) throw new Error('Cannot find config file');
	let output = await fs.promises.readFile(entrypoint, { encoding: 'utf8' });
	if (minify) output = JSON.stringify(JSON.parse(output));
	await fs.promises.writeFile(path.resolve(outDir, 'config.json'), output);
}

async function buildTscn(entrypoint: string, outDir: string) {
	if (!fs.existsSync(entrypoint)) throw new Error('Cannot find tscn file');
	await fs.promises.copyFile(entrypoint, path.resolve(outDir, 'levels.tscn'));
}