# Deploying Project to Portal

There are two different ways of deploying a project to portal.

## Manually Import

Just run `npm run build` in your project dir, open [portal.battlefield.com](https://portal.battlefield.com), click import, and select the `dist/mod.json` file.

## `npx @bf6mods/cli deploy`

To use this, you must first install puppeteer via `npm -g i puppeteer`, but after doing so you can just run this command, and you will
have your project deploy automatically for you.

Important note on this. The [portal.battlefield.com](https://portal.battlefield.com) will not update showing the changes from the deployed code. This is due to the browsers cache.
