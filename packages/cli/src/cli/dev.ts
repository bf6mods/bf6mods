import fs from "node:fs";
import { glob } from "node:fs/promises";
import path from "node:path";
import chokidar, { type FSWatcher } from "chokidar";
import colors from "colors";
import { build, getBf6Config } from "./build/index.ts";

export async function dev() {
	const workingDir = path.resolve(".");
	let config = await getBf6Config(workingDir);
	const outDir = path.resolve(workingDir, config.outDir);
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

	console.log(colors.cyan(`▶ Starting dev for ${config.name}`));

	let watcher: FSWatcher | undefined;

	async function rebuild(trigger: string) {
		console.log(
			colors.yellow(
				`↻ Change detected in ${path.basename(trigger)}, rebuilding...`,
			),
		);
		const start = performance.now();
		try {
			await build();
			const end = performance.now();
			const duration = ((end - start) / 1000).toFixed(2);
			console.log(colors.green(`✔ Updated mod.json (${duration}s)`));
		} catch (err) {
			console.error(colors.red(`✖ Rebuild failed: ${(err as Error).message}`));
		}
	}

	async function collectWatchTargets(): Promise<string[]> {
		const targets: string[] = [];

		if (config.entrypoint)
			targets.push(path.resolve(workingDir, config.entrypoint));
		if (config.scenes) {
			for (const [, scene] of config.scenes) {
				targets.push(path.resolve(workingDir, scene));
			}
		}
		if (config.strings) targets.push(path.resolve(workingDir, config.strings));

		const srcDir = path.resolve(workingDir, "src");
		for await (const entry of glob(`${srcDir}/**/*`)) targets.push(entry);

		for await (const entry of glob("bf6.config.*")) targets.push(entry);

		return targets;
	}

	async function setupWatcher() {
		if (watcher) {
			await watcher.close();
			console.log(colors.grey("♻ Reloading watcher due to config change..."));
		}

		const watchTargets = await collectWatchTargets();

		watcher = chokidar.watch(watchTargets, {
			persistent: true,
			ignoreInitial: true,
			awaitWriteFinish: true,
			ignored: [path.resolve(outDir), `${path.resolve(outDir)}/**`],
		});

		watcher.on("change", async (file) => {
			if (file.includes("bf6.config.")) {
				console.log(
					colors.magenta(
						"⚙ Config changed — reloading and rebuilding watcher...",
					),
				);
				try {
					config = await getBf6Config(workingDir);
					await setupWatcher();
				} catch (err) {
					console.error(
						colors.red(`✖ Failed to reload config: ${(err as Error).message}`),
					);
				}
				return;
			}

			await rebuild(file);
		});

		watcher.on("add", async (file) => await rebuild(file));

		await rebuild("initial");
	}

	await setupWatcher();
}
