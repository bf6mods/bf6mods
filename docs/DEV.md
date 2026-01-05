# Dev Guide

If you want to contribute or test locally you can follow these steps.

## Setup 

1. **Install dependencies** for all packages:
   ```bash
   npm install
   ```

2. **Build all packages** (SDK, Portal, and CLI):
   ```bash
   npm run build
   ```

##  Making Changes to the CLI

When you make changes to the CLI source code (`packages/cli/src/`), you need to rebuild and repackage:

1. **Build the CLI** (compiles TypeScript to JavaScript):
   ```bash
   npm run build:cli
   ```

2. **Pack the CLI** (creates a `.tgz` package file):
   ```bash
   cd packages/cli
   npm pack
   cd ../..
   ```

## Testing Your Changes

After building and packing, test your changes in a local mod project:

1. **Navigate to your test project** (e.g., `bob/` or any mod folder):
   ```bash
   cd bob
   ```

2. **Install the locally built CLI**:
   ```bash
   npm install ../packages/cli/bf6mods-cli-1.6.0.tgz
   ```

3. **Test the CLI commands**:
   ```bash
   npm run build
   npm run dev
   ```

4. **Fixing linting issues**:
    ```bash
    npm run lint:fix    # Auto-fix issues
    ```

## Running Tests

Run the test suite to ensure everything works:

```bash
npm test
```
