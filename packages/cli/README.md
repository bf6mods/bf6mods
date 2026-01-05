# bf6mods

Create Battlefield 6 mods quickly with a vite like development experience.

## Getting Started

To create a new project, simply run the following command and answer the questions, ensure that you are using Node v22 and above, and if on Linux install `libsecret-1-0`.

```
npx @bf6mods/cli init
```

![Initializing a repo](https://raw.githubusercontent.com/bf6mods/bf6mods/refs/heads/main/media/terminal.gif "Initializing a repo")

## Import from JSON

Already have a project? Just export your currently existing project in [portal.battlefield.com](https://portal.battlefield.com), by editing your mod, clicking the three dots on the top right, click export. Finally just run...

```
npx @bf6mods/cli import <export file> <output directory>
```

## Full Documentation

The full documentation can be found [here](https://bf6mods.github.io/bf6mods/guide/getting-started.html)!

## Features

- Use multiple different files, instead of just one large TypeScript file!
- Use a programatic interface for defining your gamemode.
- Extensive documentation
- Extended standard library (still in progress)
- Hot reload
- Automatic string injection
- **Automatic thumbnail resizing** - Add any image to your project and it will be automatically resized and optimized to meet BF6 Portal requirements (352x248, max 78KB)
- Logging from BF6! (Only when in hosting locally)

## @bf6mods/sdk

This is a seperate library that exports the `PortalSdk`'s `mod` and `modlib`. Additionally it exports some stdlib helper functions and classes to help accelerate development.

## Links

- [Documentation](https://bf6mods.github.io/bf6mods/)
- [Contributing Guide](https://bf6mods.github.io/bf6mods/contributing/how-to-contribute.html)
- [Discord](https://discord.gg/2gJ9fheYYK)
- [Portal](https://portal.battlefield.com/bf6/en-gb/)
