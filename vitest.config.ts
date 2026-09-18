import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		// Unit tests import the CLI source, which depends on the other workspace
		// packages; resolve those from source so tests do not need a prior build
		alias: {
			"@bf6mods/sdk": path.resolve(__dirname, "packages/sdk/src/index.ts"),
			"@bf6mods/portal": path.resolve(
				__dirname,
				"packages/portal/src/index.ts",
			),
		},
	},
});
