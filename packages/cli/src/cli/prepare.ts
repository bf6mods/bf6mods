import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import colors from "colors";
import { genExport, genInlineTypeImport } from "knitwork";
import { printToConsole } from "./utils.js";

export async function prepare() {
	try {
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);

		const _workingDir = path.resolve(".");
		const buildDir = path.resolve(".bf6");

		const resources = path.resolve(__dirname, "../resources/prepare");

		fs.cpSync(
			path.resolve(resources, "tsconfig.json"),
			path.resolve(buildDir, "tsconfig.json"),
		);
		fs.cpSync(
			path.resolve(resources, "bf6.d.ts"),
			path.resolve(buildDir, "bf6.d.ts"),
		);
		fs.cpSync(
			path.resolve(resources, "types", "config.ts"),
			path.resolve(buildDir, "types", "config.ts"),
		);

		const ConfigFileExports = genExport("./types/config.ts", [
			"defineBf6Config",
		]);
		fs.writeFileSync(
			path.resolve(buildDir, "imports.d.ts"),
			`${ConfigFileExports}\n`,
		);

		const augmentations: Record<string, string> = {
			defineBf6Config: genInlineTypeImport(
				"./types/config.ts",
				`defineBf6Config`,
			),
			MapId: genInlineTypeImport("./types/config.ts", `MapId`),
		};

		const args = genNamespaceAugmentation("global", augmentations);
		fs.writeFileSync(
			path.resolve(buildDir, "globals.d.ts"),
			`export {}\n\n${args}\n`,
		);

		printToConsole(`${colors.green.bold("✓")} Types generated in .bf6`);
	} catch (error) {
		console.error(error);
		printToConsole(
			`${colors.red.bold("✗")} Types failed to generate in .bf6`,
			true,
		);
	}
}

const genNamespaceAugmentation = (
	name: string,
	contents: Record<string, string>,
) => {
	if (!contents || Object.keys(contents).length === 0)
		return `declare ${name} {}`;
	const decls = Object.entries(contents)
		.map(([k, v]) => `\tconst ${k}: ${v};`)
		.join("\n");
	return `declare ${name} {\n${decls}\n}`;
};
