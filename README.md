# bf6mods

Create Battlefield 6 mods quickly with a vite like development experience.

## Getting Started

To create a new project, simply run the following command and answer the questions

```
npx @bf6mods/cli init
```

![Initializing a repo](https://raw.githubusercontent.com/bf6mods/bf6mods/refs/heads/main/media/terminal.gif "Initializing a repo")

## Import from JSON

Already have a project? Just export your currently existing project in [portal.battlefield.com](https://portal.battlefield.com), and run...

```
npx @bf6mods/cli import <input> <output>
```

## Deploying Project to Portal

Just run `npm run build` in your project dir, open [portal.battlefield.com](https://portal.battlefield.com), click import, and select the `dist/mod.json` file.

## Features

- Use multiple different files, instead of just one large TypeScript file!
- Use a programatic interface for defining your gamemode.
- Extensive documentation
- Extended standard library (still in progress)
- Hot reload
- Automatic string injection
- Logging from BF6! (Only when in hosting locally)

## Structure

`bf6mods` is very configurable, but the following structure is what can be expected from any mod.

```
my-mod/
├─ src/
│  ├─ index.ts
│  ├─ scenes/
│  │  └─ MyMap.spatial.json
├─ bf6.config.ts
├─ package.json
└─ dist/
   └─ mod.json
```

## `bf6.config.ts`

Here is a short example of a `bf6.config.ts`.

```ts
export default defineBf6Config({
	name: "AcePursuit",
	description: "A fast-paced race mod",
	outDir: "dist",
	entrypoint: "src/index.ts",
	scenes: [[MapId.LiberationPeak, "src/scenes/AcePursuit.spatial.json"]],
	game: {
		mutators: {
			// ...
		},
	},
});
````

## @bf6mods/sdk

This is a seperate library that exports the `PortalSdk`'s `mod` and `modlib`. Additionally it exports some stdlib helper functions and classes to help accelerate development.

## Join the discord with fellow modders!

You can join the discord by clicking this [link](https://discord.gg/2gJ9fheYYK)!
