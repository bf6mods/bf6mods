import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "vitest";
import {
	THUMBNAIL_REQUIREMENTS,
	processThumbnail,
	resizeThumbnail,
	validateThumbnail,
} from "../packages/cli/src/cli/build/thumbnail";
import { createModTest, tmpdirTest } from "./test-extensions";
import { build, buildPackages } from "./utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cliTarPath: string;
let sdkTarPath: string;
let portalTarPath: string;

describe.concurrent("Thumbnail Processing", async () => {
	[cliTarPath, sdkTarPath, portalTarPath] = await buildPackages();

	test("THUMBNAIL_REQUIREMENTS are correct", () => {
		expect(THUMBNAIL_REQUIREMENTS.maxSizeBytes).toBe(78 * 1024);
		expect(THUMBNAIL_REQUIREMENTS.width).toBe(352);
		expect(THUMBNAIL_REQUIREMENTS.height).toBe(248);
		expect(THUMBNAIL_REQUIREMENTS.supportedFormats).toEqual([
			".jpg",
			".jpeg",
			".png",
		]);
	});

	test("validateThumbnail rejects oversized image", () => {
		// Create a buffer larger than 78KB
		const largeBuffer = Buffer.alloc(80 * 1024);
		const result = validateThumbnail(largeBuffer, "test.jpg");
		expect(result.valid).toBe(false);
		expect(result.errors.length).toBeGreaterThan(0);
		expect(result.errors[0]).toContain("78KB");
	});

	test("validateThumbnail rejects unsupported format", () => {
		const buffer = Buffer.alloc(1024);
		const result = validateThumbnail(buffer, "test.gif");
		expect(result.valid).toBe(false);
		expect(result.errors.some((e) => e.includes("not supported"))).toBe(true);
	});

	test("validateThumbnail accepts correct dimensions", async () => {
		// Create a simple 352x248 PNG
		const pngBuffer = await createTestPng(352, 248);
		const result = validateThumbnail(pngBuffer, "test.png");
		// May fail size check but should pass format and dimension
		expect(result.errors.some((e) => e.includes("dimensions"))).toBe(false);
	});

	test("resizeThumbnail processes large image", async () => {
		const largeThumbnail = path.resolve(
			__dirname,
			"resources",
			"thumbnails",
			"large-thumbnail.jpg",
		);

		if (!fs.existsSync(largeThumbnail)) {
			console.warn("Skipping test: large-thumbnail.jpg not found");
			return;
		}

		const buffer = await fs.promises.readFile(largeThumbnail);
		const resized = await resizeThumbnail(buffer, largeThumbnail);

		expect(resized.length).toBeLessThanOrEqual(
			THUMBNAIL_REQUIREMENTS.maxSizeBytes,
		);
		expect(Buffer.isBuffer(resized)).toBe(true);
	});

	tmpdirTest.concurrent(
		"processThumbnail returns false for missing file",
		async ({ tmpdir }) => {
			const outDir = path.resolve(tmpdir, "dist");
			await fs.promises.mkdir(outDir, { recursive: true });
			const result = await processThumbnail("nonexistent.jpg", tmpdir, outDir);
			expect(result).toBe(false);
		},
	);

	tmpdirTest.concurrent(
		"processThumbnail saves file to outDir",
		async ({ tmpdir }) => {
			// Copy test thumbnail to tmpdir
			const testThumb = path.resolve(
				__dirname,
				"resources",
				"thumbnails",
				"large-thumbnail.jpg",
			);
			if (!fs.existsSync(testThumb)) {
				console.warn("Skipping test: large-thumbnail.jpg not found");
				return;
			}

			const targetPath = path.resolve(tmpdir, "thumbnail.jpg");
			await fs.promises.copyFile(testThumb, targetPath);

			const outDir = path.resolve(tmpdir, "dist");
			await fs.promises.mkdir(outDir, { recursive: true });

			const result = await processThumbnail("thumbnail.jpg", tmpdir, outDir);
			expect(result).toBe(true);

			// Verify thumbnail file was created in outDir
			const outputPath = path.resolve(outDir, "thumbnail.jpg");
			expect(fs.existsSync(outputPath)).toBe(true);

			// Verify file size is under limit
			const stats = await fs.promises.stat(outputPath);
			expect(stats.size).toBeLessThanOrEqual(
				THUMBNAIL_REQUIREMENTS.maxSizeBytes,
			);
		},
	);

	createModTest(cliTarPath, sdkTarPath, portalTarPath, {
		template: "Basic",
		installDependencies: true,
	}).concurrent(
		"build mod with thumbnail",
		{
			timeout: 100_000,
		},
		async ({ mod }) => {
			// Copy test thumbnail to mod's src directory
			const testThumb = path.resolve(
				__dirname,
				"resources",
				"thumbnails",
				"large-thumbnail.jpg",
			);

			if (!fs.existsSync(testThumb)) {
				console.warn("Skipping test: large-thumbnail.jpg not found");
				return;
			}

			const modSrcDir = path.resolve(mod.fullPath, "src");
			await fs.promises.mkdir(modSrcDir, { recursive: true });
			const thumbnailPath = path.resolve(modSrcDir, "thumbnail.jpg");
			await fs.promises.copyFile(testThumb, thumbnailPath);

			// Update bf6.config.ts to include thumbnail
			const configPath = path.resolve(mod.fullPath, "bf6.config.ts");
			let config = await fs.promises.readFile(configPath, "utf8");
			config = config.replace(
				/entrypoint: 'src\/index\.ts',/,
				'entrypoint: \'src/index.ts\',\n\tthumbnail: \'src/thumbnail.jpg\',',
			);
			await fs.promises.writeFile(configPath, config);

			// Verify config was updated
			const updatedConfig = await fs.promises.readFile(configPath, "utf8");
			expect(updatedConfig).toContain("thumbnail:");

			// Build the mod
			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Build should succeed").toBe(0);

			// Verify thumbnail file exists in dist
			const thumbnailOutputPath = path.resolve(mod.fullPath, "dist", "thumbnail.jpg");
			expect(fs.existsSync(thumbnailOutputPath), "Thumbnail file should exist in dist").toBe(true);

			// Verify thumbnail is correct size
			const stats = await fs.promises.stat(thumbnailOutputPath);
			expect(stats.size).toBeGreaterThan(0);
			expect(stats.size).toBeLessThanOrEqual(
				THUMBNAIL_REQUIREMENTS.maxSizeBytes,
			);

			// Verify mod.json does NOT contain thumbnail field
			const modJsonPath = path.resolve(mod.fullPath, "dist", "mod.json");
			expect(fs.existsSync(modJsonPath), "mod.json should exist").toBe(true);

			const modJson = JSON.parse(
				await fs.promises.readFile(modJsonPath, "utf8"),
			);
			expect(modJson.thumbnail, "mod.json should NOT have thumbnail field").toBeUndefined();
		},
	);
});

/**
 * Helper to create a minimal PNG buffer for testing
 * This creates a very basic PNG with the specified dimensions
 */
async function createTestPng(
	width: number,
	height: number,
): Promise<Buffer> {
	// Use sharp if available, otherwise create a minimal PNG
	try {
		const sharp = await import("sharp");
		return await sharp({
			create: {
				width,
				height,
				channels: 3,
				background: { r: 0, g: 0, b: 0 },
			},
		})
			.png()
			.toBuffer();
	} catch {
		// Fallback: create minimal PNG header (won't be a valid image but tests header parsing)
		const header = Buffer.alloc(24);
		header.write("\x89PNG\r\n\x1a\n", 0, "binary");
		header.writeUInt32BE(width, 16);
		header.writeUInt32BE(height, 20);
		return header;
	}
}

