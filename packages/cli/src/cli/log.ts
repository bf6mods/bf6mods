import fs from "node:fs";
import path from "node:path";
import chokidar, { type FSWatcher } from "chokidar";
import colors from "colors";
import { printToConsole } from "./utils.ts";

export class Bf6Logger {
	private static instance: Bf6Logger | undefined;

	private watchTarget: string;
	private watcher?: FSWatcher;
	private lastSize: number;

	constructor(input?: string) {
		if (Bf6Logger.instance) {
			printToConsole(
				colors.yellow("⚠ Existing logger found — closing it first..."),
			);
			Bf6Logger.instance.stop();
		}

		if (input) this.watchTarget = path.resolve(input);
		else if (process.env.LOCALAPPDATA)
			this.watchTarget = path.resolve(
				process.env.LOCALAPPDATA,
				"temp",
				"Battlefieldâ„¢ 6",
				"PortalLog.txt",
			);
		else
			throw new Error(
				`${colors.red.bold("✗")} Env variable LOCALAPPDATA not defined, and input file to watch was not provided!`,
			);

		if (!fs.existsSync(this.watchTarget))
			throw new Error(
				`${colors.red.bold("✗")} Cannot find file '${this.watchTarget}' to watch for changes`,
			);

		this.lastSize = fs.statSync(this.watchTarget).size;
		Bf6Logger.instance = this;
	}

	async start() {
		printToConsole(
			colors.cyan(
				`👀 Watching Battlefield logs at: ${colors.yellow(this.watchTarget)}`,
			),
		);

		this.watcher = chokidar.watch(this.watchTarget, {
			persistent: true,
			ignoreInitial: true,
		});

		this.watcher.on("change", this.handleChange.bind(this));
	}

	async stop() {
		if (this.watcher) {
			this.watcher.close();
			this.watcher = undefined;
			printToConsole(
				colors.yellow(
					`${colors.red.bold("✗")} Stopped watching: ${colors.gray(this.watchTarget)}`,
				),
			);
		}
		Bf6Logger.instance = undefined;
	}

	private handleChange(file: string, stats?: fs.Stats) {
		if (!stats) return;
		if (stats.size > this.lastSize) {
			const newBytes = stats.size - this.lastSize;
			const fd = fs.openSync(file, "r");
			const buffer = Buffer.alloc(newBytes);
			fs.readSync(fd, buffer, 0, newBytes, this.lastSize);
			fs.closeSync(fd);

			const newContent = buffer
				.toString("utf8")
				.split("QuickJS: ")
				.filter((debug) => debug.trim() !== "")
				.map((debug) => debug.trim())
				.map((debug) => {
					if (debug.startsWith("console.log: ")) {
						return {
							type: "console.log",
							text: debug.replace("console.log: ", ""),
						};
					} else if (debug.startsWith("Exception:")) {
						return {
							type: "exception",
							text: debug.replace("Exception:", ""),
						};
					}

					return {
						type: "unknown",
						text: debug,
					};
				});

			for (const content of newContent) {
				if (content.type === "console.log")
					printToConsole(colors.gray(content.text));
				else if (content.type === "exception")
					printToConsole(colors.red(content.text), true);
				else printToConsole(colors.bold(content.text));
				console.log("");
			}
		}
		this.lastSize = stats.size;
	}
}
