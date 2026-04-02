import type { Config, Status } from "./types.ts";
import { defaultConfig } from "./types.ts";

const config: Config = defaultConfig;
const status: Status = "active";

export function getConfig(): Config {
	return config;
}
