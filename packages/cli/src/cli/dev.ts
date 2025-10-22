import fs from "node:fs";
import { glob } from "node:fs/promises";
import path from "node:path";
import chokidar, { type FSWatcher } from "chokidar";
import colors from "colors";
import { build, getBf6Config } from "./build/index.ts";
import { Bf6Logger } from "./log.ts";
import { printToConsole } from "./utils.ts";

export async function dev() {
	const workingDir = path.resolve(".");
	let config = await getBf6Config(workingDir);
	const outDir = path.resolve(workingDir, config.outDir);
	fs.mkdirSync(outDir, { recursive: true });

	printToConsole(colors.cyan(`▶ Starting dev for ${config.name}`));

	let watcher: FSWatcher | undefined;

	// biome-ignore lint/suspicious/noExplicitAny: doesn't really matter in this case
	function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
		let timer: NodeJS.Timeout | undefined;
		return (...args: Parameters<T>) => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => fn(...args), delay);
		};
	}

	const rebuild = async (trigger: string) => {
		printToConsole(
			colors.yellow(
				`↻ Change detected in ${path.basename(trigger)}, rebuilding...`,
			),
		);
		const start = performance.now();
		try {
			await build();
			const duration = ((performance.now() - start) / 1000).toFixed(2);
			printToConsole(
				`${colors.green.bold("✓")} Updated mod.json (${duration}s)`,
			);
		} catch (err) {
			printToConsole(
				colors.red(
					`${colors.red.bold("✗")} Rebuild failed: ${(err as Error).message}`,
				),
				true,
			);
		}
	};

	const debouncedRebuild = debounce(rebuild, 200);

	async function collectWatchTargets(): Promise<string[]> {
		const targets: string[] = [];

		if (config.entrypoint)
			targets.push(path.resolve(workingDir, config.entrypoint));
		if (config.scenes)
			for (const [, scene] of config.scenes)
				targets.push(path.resolve(workingDir, scene));
		if (config.strings) targets.push(path.resolve(workingDir, config.strings));
		for await (const entry of glob("bf6.config.*")) targets.push(entry);
		for await (const entry of glob("src/**/*")) targets.push(entry);

		return targets;
	}

	async function setupWatcher() {
		if (watcher) {
			await watcher.close();
			printToConsole(
				colors.grey("♻ Reloading watcher due to config change..."),
			);
			await new Promise((r) => setTimeout(r, 10));
		}

		const watchTargets = await collectWatchTargets();
		printToConsole(colors.cyan(`👀 Watching ${watchTargets.length} files...`));

		watcher = chokidar.watch(watchTargets, {
			persistent: true,
			ignoreInitial: true,
			awaitWriteFinish: { stabilityThreshold: 250, pollInterval: 100 },
			ignored: [outDir, `${outDir}/**`, "node_modules/**", ".git/**"],
		});

		watcher.on("error", (err) => {
			printToConsole(
				colors.red(`⚠ Watcher error: ${(err as Error).message}`),
				true,
			);
			setTimeout(setupWatcher, 1000);
		});

		watcher.on("change", async (file) => {
			if (file.includes("bf6.config.")) {
				printToConsole(
					colors.magenta("⚙ Config changed — reloading watcher..."),
				);
				config = await getBf6Config(workingDir);
				await setupWatcher();
				return;
			}
			debouncedRebuild(file);
		});

		watcher.on("add", debouncedRebuild);
		await rebuild("initial");
	}

	process.on("SIGINT", async () => {
		printToConsole(colors.red(`\n${colors.red.bold("✗")} Exiting dev mode...`));
		await watcher?.close();
		process.exit(0);
	});

	await setupWatcher();

	let logger: Bf6Logger | undefined;
	try {
		logger = new Bf6Logger();
		logger.start();
	} catch (error) {
		printToConsole(
			colors.grey(
				"Failed to start logging for the following reason (building will still work)",
			),
			true,
		);
		printToConsole((error as Error).message, true);
	}
}
