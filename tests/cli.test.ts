import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect } from "vitest";
import { createModTest, tmpdirTest } from "./test-extensions";
import {
    build,
    buildPackages,
    checkTypes,
    compareDirectories,
    runCli,
} from "./utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cliTarPath: string;
let sdkTarPath: string;
let portalTarPath: string;
describe.concurrent("@bf6mods/cli", async () => {
    [cliTarPath, sdkTarPath, portalTarPath] = await buildPackages();

    tmpdirTest.concurrent(
        "shows help when no args are provided",
        async ({ tmpdir }) => {
            const { stdout } = await runCli([], tmpdir);
            expect(stdout).toContain("Usage");
            expect(stdout).toContain("init");
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath).concurrent(
        "creates a new mod project via `init`",
        async ({ mod }) => {
            const expectedDir = path.resolve(
                __dirname,
                "resources",
                "expected",
                mod.path,
            );

            await compareDirectories(expectedDir, mod.fullPath);
        },
    );

    tmpdirTest.concurrent(
        "imports all existing JSON projects via `import`",
        {
            timeout: 100_000,
        },
        async ({ tmpdir }) => {
            const jsonFiles: string[] = [];
            const filesGlob = fs.promises.glob(
                path.resolve(
                    __dirname,
                    "resources",
                    "starting",
                    "imports",
                    "*.json",
                ),
            );
            for await (const entry of filesGlob) jsonFiles.push(entry);

            for (const inputFile of jsonFiles) {
                const outputDir = path.join(
                    tmpdir,
                    `imported-${path.parse(inputFile).name}`,
                );
                const expectedDir = path.resolve(
                    __dirname,
                    "resources",
                    "expected",
                    "imports",
                    path.parse(inputFile).name,
                );

                await runCli(
                    [
                        "import",
                        inputFile,
                        outputDir,
                        "--no-install-dependencies",
                    ],
                    tmpdir,
                );

                await compareDirectories(expectedDir, outputDir);
            }
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        installDependencies: true,
    }).concurrent(
        "create a new project and install dependencies",
        {
            timeout: 100_000,
        },
        async () => {},
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "Exfil",
        installDependencies: true,
    }).concurrent(
        "build & verify Exfil template",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "AcePursuit",
        installDependencies: true,
    }).concurrent(
        "build & verify AcePursuit template",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "BombSquad",
        installDependencies: true,
    }).concurrent(
        "build & verify BombSquad template",
        {
            timeout: 100_000,
        },
        async ({ mod, tmpdir }) => {
            console.log("tmpdir:", tmpdir);
            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "Vertigo",
        installDependencies: true,
    }).concurrent(
        "build & verify Vertigo template",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "Basic",
        installDependencies: true,
    }).concurrent(
        "build & verify Basic template",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "Complete",
        installDependencies: true,
    }).concurrent(
        "build & verify Complete template",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "Basic",
        installDependencies: true,
    }).concurrent(
        "verify sdk",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            console.log("mod.fullPath:", mod.fullPath);
            const index = path.resolve(mod.fullPath, "src", "index.ts");
            const sdkVerification = fs.readFileSync(
                path.resolve(
                    __dirname,
                    "resources",
                    "starting",
                    "sdk-verification",
                    "index.ts",
                ),
                { encoding: "utf-8" },
            );
            fs.writeFileSync(index, sdkVerification);

            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            const { exitCode: typeExit } = await checkTypes(mod.fullPath);
            expect(typeExit, "TypeScript type check failed!").toBe(0);
        },
    );

    createModTest(cliTarPath, sdkTarPath, portalTarPath, {
        template: "Basic",
        installDependencies: true,
    }).concurrent(
        "build with thumbnail integration",
        {
            timeout: 100_000,
        },
        async ({ mod }) => {
            // Add thumbnail to config
            const configPath = path.resolve(mod.fullPath, "bf6.config.ts");
            let config = await fs.promises.readFile(configPath, "utf8");

            // Copy placeholder image if it exists
            const placeholderPath = path.resolve(
                __dirname,
                "..",
                "packages",
                "cli",
                "src",
                "resources",
                "templates",
                "All",
                "placeholder.jpg",
            );

            if (fs.existsSync(placeholderPath)) {
                const srcDir = path.resolve(mod.fullPath, "src");
                await fs.promises.mkdir(srcDir, { recursive: true });
                await fs.promises.copyFile(
                    placeholderPath,
                    path.resolve(srcDir, "thumbnail.jpg"),
                );

                config = config.replace(
                    /entrypoint: 'src\/index\.ts',/,
                    'entrypoint: \'src/index.ts\',\n\tthumbnail: \'src/thumbnail.jpg\',',
                );
                await fs.promises.writeFile(configPath, config);
            }

            const { exitCode } = await build(mod.fullPath);
            expect(exitCode, "Exit code is not 0!").toBe(0);

            // Verify thumbnail file in dist if it was added
            if (fs.existsSync(placeholderPath)) {
                const thumbnailOutputPath = path.resolve(mod.fullPath, "dist", "thumbnail.jpg");
                expect(fs.existsSync(thumbnailOutputPath)).toBe(true);

                // Verify mod.json does NOT contain thumbnail field
                const modJsonPath = path.resolve(mod.fullPath, "dist", "mod.json");
                const modJson = JSON.parse(
                    await fs.promises.readFile(modJsonPath, "utf8"),
                );
                expect(modJson.thumbnail).toBeUndefined();
            }
        },
    );
});
