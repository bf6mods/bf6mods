export type Bf6Config = {
	mappings: [string, string][],
	registerMods: string[],
	build?: {
		transform?: {
			input?: (filePath: string, fileText: string) => string
			output?: (filePath: string, fileText: string) => [string, string]
		}
	}
}

export function defineBf6Config(bf6Config: Bf6Config): Bf6Config {
	return bf6Config;
};
