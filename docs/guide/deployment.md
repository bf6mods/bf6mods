# Deploying Project to Portal

There are two different ways of deploying a project to portal.

## Manually Import

Just run `npm run build` in your project dir, open [portal.battlefield.com](https://portal.battlefield.com), click import, and select the `dist/mod.json` file.

## `npx @bf6mods/cli deploy`

Run `npm run build` first, then `npx @bf6mods/cli deploy`. The CLI creates the experience on your account if it does not exist yet, or updates it in place if it does.

Which experience gets updated is decided in this order:

1. `--id <id>` on the command line
2. `id` in `bf6.config.ts`
3. An experience you own with the same `name` as the mod

The first deploy prints the id of the created experience; add it to `bf6.config.ts` so later deploys can never pick the wrong experience by name.

### Authentication

The CLI needs a Portal session. On the first run it opens a browser window for you to log in, which requires puppeteer (`npm i -g puppeteer`). The session is stored in your system keychain and reused afterwards.

Alternatively pass a session id directly with `--session-id web-xxxx`. You can copy it from the `x-gateway-session-id` request header in your browser's dev tools while on [portal.battlefield.com](https://portal.battlefield.com).

### Options

- `--publish` publishes the experience instead of leaving it as a draft.
- `--dry-run` prints the request that would be sent without touching your account.

Important note on this. The [portal.battlefield.com](https://portal.battlefield.com) will not update showing the changes from the deployed code. This is due to the browsers cache.
