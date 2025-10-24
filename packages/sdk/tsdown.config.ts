import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsdown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modFile = path.resolve(__dirname, "./src/mod/index.d.ts");
const additionalModFile = path.resolve(__dirname, "./src/mod/additional.d.ts");

const modFileWithoutDeclare = fs.readFileSync(modFile, "utf-8").replace("declare", "");
const additionalModFileWithoutDeclare = fs.readFileSync(additionalModFile, "utf-8").replace("declare", "");

export default defineConfig([
	{
		entry: ["src/index.ts"],
		sourcemap: true,
		clean: true,
		dts: {
			banner: `declare global {\n${modFileWithoutDeclare}\n${additionalModFileWithoutDeclare}\n}`,
		},
		format: "esm",
	},
	{
		entry: ["src/std/index.ts"],
		outDir: "dist/std",
		format: "esm",
		sourcemap: true,
		dts: true,
	},
]);
