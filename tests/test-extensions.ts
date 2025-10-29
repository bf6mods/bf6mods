import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "vitest";
import type { templates } from "../packages/cli/src/cli/init";
import { installDependenciesForMod, runCli } from "./utils";

interface TmpDirFixture {
	tmpdir: string;
}

interface ModFixture extends TmpDirFixture {
	mod: {
		path: string;
		name: string;
		onExists: string;
		template: string;
		fullPath: string;
	};
}

async function createTempDir() {
	const ostmpdir = os.tmpdir();
	const tmpdir = path.join(ostmpdir, "unit-test-");
	return await fs.mkdtemp(tmpdir);
}

export const tmpdirTest = test.extend<TmpDirFixture>({
	// biome-ignore lint/correctness/noEmptyPattern: required for test.extend
	tmpdir: async ({}, use) => {
		const directory = await createTempDir();

		await use(directory);

		await fs.rm(directory, { recursive: true });
	},
});

export function createModTest(
	cliTarPath: string,
	sdkTarPath: string,
	portalTarPath: string,
	{
		template = "Exfil",
		modPath = "./test-mod",
		modName = "TestMod",
		onExists = "cancel",
		installDependencies = false,
	}: {
		template?: (typeof templates)[number];
		modPath?: string;
		modName?: string;
		onExists?: string;
		installDependencies?: boolean;
	} = {},
) {
	const modTest = test.extend<ModFixture>({
		// biome-ignore lint/correctness/noEmptyPattern: required for test.extend
		tmpdir: async ({}, use) => {
			const directory = await createTempDir();
			await use(directory);
			await fs.rm(directory, { recursive: true, force: true });
		},

		mod: async ({ tmpdir }, use) => {
			// Create a new mod
			await runCli(
				[
					"init",
					modPath,
					"--name",
					modName,
					"--on-exists",
					onExists,
					"--template",
					template,
					"--no-install-dependencies",
				],
				tmpdir,
			);

			const fullPath = path.join(tmpdir, modPath);
			if (installDependencies)
				await installDependenciesForMod(fullPath, cliTarPath, sdkTarPath, portalTarPath);

			// Provide modDir to the test
			await use({
				path: modPath,
				name: modName,
				onExists: onExists,
				template,
				fullPath,
			});
		},
	});

	return modTest;
}
