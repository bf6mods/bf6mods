export type Bf6Config = {
	outDir: string;
	entrypoint?: string;
	tscn?: string;
	strings?: string;
	config?: string;
	minify?: {
		js?: boolean;
		json?: boolean;
	} | boolean;
};

export function defineBf6Config(bf6Config: Bf6Config): Bf6Config {
	return bf6Config;
}
