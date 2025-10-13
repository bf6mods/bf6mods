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
	// can't use this instead of process.on, because of https://github.com/egoist/tsup/issues/700
	// onSuccess: async () => {
	// },
});


process.on('beforeExit', (code) => {
  if (code === 0) {
    if (!fs.existsSync(resourcesDir))
		fs.mkdirSync(resourcesDir, {
			recursive: true,
		});

	fs.cpSync(path.resolve(__dirname, "src", "resources"), resourcesDir, {
		recursive: true,
		force: true,
		verbatimSymlinks: true,
	});
  }
})