import type { ConfigType } from "@bf6mods/sdk";

export enum MapId {
	FireStorm = "MP_FireStorm-ModBuilderCustom0",
	SiegeOfCairo = "MP_Abbasid-ModBuilderCustom0",
	EmpireState = "MP_Aftermath-ModBuilderCustom0",
	IberianOffensive = "MP_Battery-ModBuilderCustom0",
	LiberationPeak = "MP_Capstone-ModBuilderCustom0",
	ManhattanBridge = "MP_Dumbo-ModBuilderCustom0",
	SaintsQuarter = "MP_Limestone-ModBuilderCustom0",
	NewSobekCity = "MP_Outskirts-ModBuilderCustom0",
	MirakValley = "MP_Tungsten-ModBuilderCustom0",
}

/**
 * Represents the root configuration for a Battlefield 6 mod project.
 *
 * This file combines both build-level settings (like entrypoints and output directories)
 * and in-game configuration data (such as mutators and asset restrictions)
 * under the `game` key.
 *
 * Use {@link defineBf6Config} to define and validate this structure
 * in your `bf6.config.ts` file.
 */
export type Bf6Config = {
	/**
	 * The human-readable name of the mod.
	 *
	 * Typically matches the project name used in the BF6 mod editor or
	 * the display name shown in the in-game mod browser.
	 */
	name: string;

	/**
	 * A short description of the mod’s purpose or content.
	 * Used for display and metadata purposes.
	 */
	description: string;

	/**
	 * The output directory where compiled or bundled files are written.
	 * Usually something like `"dist"` or `"build"`.
	 */
	outDir: string;

	/**
	 * Whether or not to output the built files like the entrypoint typescript file
	 */
	outputArtifacts?: boolean;

	/**
	 * The main entrypoint for your mod’s TypeScript source file.
	 *
	 * This is typically something like `"src/index.ts"` or `"src/main.ts"`.
	 */
	entrypoint?: string;

	/**
	 * One or more scene file paths (.json) that the mod includes.
	 * If no file path is provided, it loads in the default spatial data.
	 */
	scenes?: ([MapId, string] | MapId)[];

	/**
	 * Path to a JSON file or other source that defines localized strings
	 * used by the mod (optional).
	 */
	strings?: string;

	/**
	 * Generate strings automatically
	 */
	generateStrings?: boolean;

	/**
	 * Controls whether build output should be minified.
	 *
	 * Can be a boolean (to toggle all minification),
	 * or an object specifying independent settings for JS and JSON files.
	 *
	 * @example
	 * ```ts
	 * minify: true
	 * // or
	 * minify: { js: true, json: false }
	 * ```
	 */
	minify?:
		| {
				/** Whether to minify JavaScript output. */
				js?: boolean;
				/** Whether to minify JSON output. */
				json?: boolean;
		  }
		/** Enables or disables all minification. */
		| boolean;

	/**
	 * The underlying in-game configuration derived from `ConfigType`
	 * in the BF6 SDK. Includes gameplay-level details like mutators,
	 * asset restrictions, and team compositions.
	 *
	 * The following properties are **excluded**:
	 * - `attachments`
	 * - `workspace`
	 * - `mapRotation`
	 * - `name`
	 * - `description`
	 *
	 * since those are either redundant or handled elsewhere.
	 */
	game: Omit<
		ConfigType,
		"attachments" | "workspace" | "mapRotation" | "name" | "description"
	>;
};

/**
 * Defines and validates a Battlefield 6 mod configuration object.
 *
 * This helper ensures your config is properly typed and can be
 * statically analyzed by TypeScript.
 *
 * @example
 * ```ts
 * export default defineBf6Config({
 *   name: "My Custom Mod",
 *   description: "Adds custom rules",
 *   outDir: "dist",
 *   entrypoint: "src/main.ts",
 *   game: {
 *     mutators: [],
 *     assetRestrictions: {},
 *     teamComposition: [],
 *   },
 * });
 * ```
 *
 * @param bf6Config The configuration object to validate and return.
 * @returns The validated Battlefield 6 configuration object.
 */
export function defineBf6Config(bf6Config: Bf6Config): Bf6Config {
	return bf6Config;
}
