import fs from "node:fs";
import path from "node:path";
import colors from "colors";
import sharp from "sharp";
import { printToConsole } from "../utils.ts";

/**
 * BF6 Portal thumbnail requirements:
 * - Max file size: 78KB
 * - Dimensions: 352x248 pixels
 * - Format: JPEG or PNG
 */
export const THUMBNAIL_REQUIREMENTS = {
	maxSizeBytes: 78 * 1024, // 78KB
	width: 352,
	height: 248,
	supportedFormats: [".jpg", ".jpeg", ".png"],
} as const;

/**
 * Validates that an image buffer meets BF6 Portal requirements
 */
export function validateThumbnail(
	buffer: Buffer,
	filename: string,
): { valid: boolean; errors: string[] } {
	const errors: string[] = [];

	// Check file size
	if (buffer.length > THUMBNAIL_REQUIREMENTS.maxSizeBytes) {
		errors.push(
			`File size is ${(buffer.length / 1024).toFixed(2)}KB, must be less than 78KB`,
		);
	}

	// Check file format
	const ext = path.extname(filename).toLowerCase();
	if (
		!THUMBNAIL_REQUIREMENTS.supportedFormats.includes(
			ext as (typeof THUMBNAIL_REQUIREMENTS.supportedFormats)[number],
		)
	) {
		errors.push(
			`File format ${ext} is not supported. Must be ${THUMBNAIL_REQUIREMENTS.supportedFormats.join(" or ")}`,
		);
	}

	// Check image dimensions using basic image header parsing
	const dimensions = getImageDimensions(buffer, ext);
	if (dimensions) {
		if (
			dimensions.width !== THUMBNAIL_REQUIREMENTS.width ||
			dimensions.height !== THUMBNAIL_REQUIREMENTS.height
		) {
			errors.push(
				`Image dimensions are ${dimensions.width}x${dimensions.height}, must be ${THUMBNAIL_REQUIREMENTS.width}x${THUMBNAIL_REQUIREMENTS.height}`,
			);
		}
	}

	return { valid: errors.length === 0, errors };
}

/**
 * Gets image dimensions from buffer by reading image headers
 */
function getImageDimensions(
	buffer: Buffer,
	ext: string,
): { width: number; height: number } | null {
	try {
		if (ext === ".png") {
			// PNG: Read IHDR chunk (bytes 16-23 contain width and height)
			if (buffer.length >= 24 && buffer.toString("ascii", 1, 4) === "PNG") {
				const width = buffer.readUInt32BE(16);
				const height = buffer.readUInt32BE(20);
				return { width, height };
			}
		} else if (ext === ".jpg" || ext === ".jpeg") {
			// JPEG: Parse SOF (Start of Frame) marker
			let offset = 2; // Skip initial 0xFFD8
			while (offset < buffer.length) {
				// Find marker
				if (buffer[offset] !== 0xff) break;
				const marker = buffer[offset + 1];
				offset += 2;

				// SOF markers (0xC0-0xCF except 0xC4, 0xC8, 0xCC)
				if (
					marker >= 0xc0 &&
					marker <= 0xcf &&
					marker !== 0xc4 &&
					marker !== 0xc8 &&
					marker !== 0xcc
				) {
					// Height is at offset+3, width at offset+5 (both 2 bytes, big-endian)
					const height = buffer.readUInt16BE(offset + 3);
					const width = buffer.readUInt16BE(offset + 5);
					return { width, height };
				}

				// Skip segment
				const segmentLength = buffer.readUInt16BE(offset);
				offset += segmentLength;
			}
		}
	} catch (_error) {
		// Failed to parse dimensions
	}
	return null;
}

/**
 * Processes a thumbnail file for BF6 Portal
 * Saves the resized thumbnail to the output directory
 */
export async function processThumbnail(
	thumbnailPath: string,
	workingDir: string,
	outDir: string,
): Promise<boolean> {
	const fullPath = path.resolve(workingDir, thumbnailPath);

	if (!fs.existsSync(fullPath)) {
		printToConsole(
			colors.yellow(`⚠️  Thumbnail file not found: ${thumbnailPath}`),
		);
		return false;
	}

	let buffer: Buffer = await fs.promises.readFile(fullPath);
	const filename = path.basename(fullPath);
	const ext = path.extname(fullPath);

	// Validate thumbnail
	const validation = validateThumbnail(buffer, filename);
	if (!validation.valid) {
		printToConsole(
			colors.yellow(
				`⚠️  Thumbnail doesn't meet requirements, attempting to resize and optimize...`,
			),
		);

		// Attempt to resize and optimize
		try {
			buffer = Buffer.from(await resizeThumbnail(buffer, fullPath));
			printToConsole(
				colors.green(
					`✓ Thumbnail resized and optimized: ${filename} (${(buffer.length / 1024).toFixed(2)}KB)`,
				),
			);
		} catch (error) {
			printToConsole(
				colors.red(
					`✗ Failed to resize thumbnail: ${error instanceof Error ? error.message : "Unknown error"}`,
				),
			);
			printToConsole(
				colors.yellow(
					`\nThumbnail requirements:\n  - Size: max 78KB\n  - Dimensions: 352x248 pixels\n  - Format: JPEG or PNG`,
				),
			);
			return false;
		}
	} else {
		printToConsole(
			`${colors.green.bold("✓")} Thumbnail validated: ${filename} (${(buffer.length / 1024).toFixed(2)}KB)`,
		);
	}

	// Save to output directory with standardized name
	const outputPath = path.resolve(outDir, `thumbnail${ext}`);
	await fs.promises.writeFile(outputPath, buffer);
	printToConsole(
		colors.green(
			`✓ Thumbnail saved to: ${path.relative(workingDir, outputPath)}`,
		),
	);

	return true;
}

/**
 * Resizes and optimizes an image to meet BF6 Portal thumbnail requirements
 */
export async function resizeThumbnail(
	buffer: Buffer,
	originalPath: string,
): Promise<Buffer> {
	const ext = path.extname(originalPath).toLowerCase();
	const isJpeg = ext === ".jpg" || ext === ".jpeg";

	// Start with target dimensions
	let result = await sharp(buffer)
		.resize(THUMBNAIL_REQUIREMENTS.width, THUMBNAIL_REQUIREMENTS.height, {
			fit: "cover",
			position: "center",
		})
		.toBuffer();

	// If it's a JPEG or we need to convert to JPEG for size optimization
	if (isJpeg || result.length > THUMBNAIL_REQUIREMENTS.maxSizeBytes) {
		// Try with progressive quality reduction
		for (let quality = 90; quality >= 60; quality -= 10) {
			result = await sharp(buffer)
				.resize(THUMBNAIL_REQUIREMENTS.width, THUMBNAIL_REQUIREMENTS.height, {
					fit: "cover",
					position: "center",
				})
				.jpeg({ quality, progressive: true })
				.toBuffer();

			if (result.length <= THUMBNAIL_REQUIREMENTS.maxSizeBytes) {
				break;
			}
		}
	} else {
		// For PNG, try optimization
		result = await sharp(buffer)
			.resize(THUMBNAIL_REQUIREMENTS.width, THUMBNAIL_REQUIREMENTS.height, {
				fit: "cover",
				position: "center",
			})
			.png({ compressionLevel: 9, quality: 90 })
			.toBuffer();
	}

	// Final check
	if (result.length > THUMBNAIL_REQUIREMENTS.maxSizeBytes) {
		throw new Error(
			`Unable to compress image below 78KB (current: ${(result.length / 1024).toFixed(2)}KB). Try using a simpler image or pre-compressing it.`,
		);
	}

	return result;
}

/**
 * Helper to create a data URL from base64 thumbnail data
 */
export function createThumbnailDataUrl(
	base64: string,
	format: "png" | "jpeg",
): string {
	const mimeType = format === "png" ? "image/png" : "image/jpeg";
	return `data:${mimeType};base64,${base64}`;
}
