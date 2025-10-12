import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsup";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resourcesDir = path.resolve(__dirname, "dist", "resources");

export default defineConfig({
	entry: ["src/index.ts", "src/cli/index.ts"],
	sourcemap: true,
	clean: true,
	dts: true,
	bundle: true,
	format: "esm",
	onSuccess: async () => {
		if (!fs.existsSync(resourcesDir))
			fs.mkdirSync(resourcesDir, {
				recursive: true,
			});

		fs.cpSync(path.resolve(__dirname, "resources"), resourcesDir, {
			recursive: true,
			force: true,
		});
	},
});
