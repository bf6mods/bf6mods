import path from "node:path";
import { createJiti } from "jiti";
import type { Bf6Config } from "../resources/prepare/types/config.ts";
import { rolldown } from "rolldown";

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

	const bundle = await rolldown({
		input: config.entrypoint,
	});

	await bundle.write({
		format: 'esm',
		file: `${config.outDir}/index.ts`,
		inlineDynamicImports: true,
		minify: minifyJs
	});
}
