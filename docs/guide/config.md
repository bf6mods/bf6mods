# Configuration

Bf6mods has many different configuration options that are found in the `bf6mods.config.ts` file.

## The basic config structure.

The basic config structure is as follows...

```ts
export default defineBf6Config({
    name: 'My Mod',
    description: 'My Mod description',
    outDir: 'dist',
    entrypoint: 'src/index.ts',
    strings: 'src/strings.json',
    thumbnail: "my_thumbnail.jpg",
    scenes: [MapId.EmpireState, '/path/to/export/scene.json', MapId.NewSobekCity],
    game: {
      mutators: {
        // ...
      }
    },
})
```

A complete list of mutators can be found [here](https://github.com/bf6mods/bf6mods/blob/main/packages/sdk/src/config/mutators/index.ts). However, it's generally recommend to import an existing project with your prefered settings from [portal.battlefield.com](portal.battlefield.com).

Here is the documentation for the config.

```ts
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
	 * The unique identifier of your mod experience.
	 *
	 * You can find this ID in the URL when editing your experience:
	 * [https://portal.battlefield.com/bf6/experience/settings/mode?id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx](https://portal.battlefield.com/bf6/experience/settings/mode?id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
	 *
	 * This ID is referenced when deploying your mod using:
	 * npx \@bf6mods/cli deploy
	 */
	id?: string;

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
	 * Generate strings automatically, by default this is enabled
	 */
	generateStrings?: boolean;

	/**
	 * Path to a thumbnail image for the mod.
	 *
	 * The image must meet BF6 Portal requirements:
	 * - Max file size: 78KB
	 * - Dimensions: 352x248 pixels
	 * - Format: JPEG or PNG
	 *
	 * @example
	 * ```ts
	 * thumbnail: "assets/thumbnail.png"
	 * // or
	 * thumbnail: "thumbnail.jpg"
	 * ```
	 */
	thumbnail?: string;

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
```
