# Strings

Bf6mods has some features to make using strings easier when developing a mod.

## Methods of adding strings

There are 3 different ways of adding strings into your project.

### Using a `strings.json` File

You can use a strings.json file by just specifying it in the `bf6mods.config.ts`.

### Automatically Generate Strings

By default, bf6mods will generate strings for your mod, so that you don't even have to think about strings. This can be disabled in `bf6mods.config.ts`.

### Explicitly add Strings in Code

You can explicitly add strings by exporting them in any source file in your project.

```ts
export async function OnGameModeStarted() {}

export const bf6Strings = {
	__sdk__CountdownUI: "{}",
};
```
