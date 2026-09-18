import { describe, expect, test } from "vitest";
import {
	asciiSafeJsonStringify,
	createStringsAttachment,
	toBase64,
} from "../packages/cli/src/cli/build/index";

describe("Non-ASCII strings encoding", () => {
	describe("asciiSafeJsonStringify", () => {
		test("escapes Chinese characters to \\uXXXX sequences", () => {
			const result = asciiSafeJsonStringify({ greeting: "你好世界" });
			expect(result).not.toContain("你");
			expect(result).toContain("\\u4f60\\u597d\\u4e16\\u754c");
		});

		test("escapes Japanese characters", () => {
			const result = asciiSafeJsonStringify({ text: "こんにちは" });
			expect(result).not.toContain("こ");
			expect(result).toContain("\\u3053\\u3093\\u306b\\u3061\\u306f");
		});

		test("escapes Korean characters", () => {
			const result = asciiSafeJsonStringify({ text: "안녕하세요" });
			expect(result).not.toContain("안");
			expect(result).toContain("\\u");
		});

		test("leaves ASCII characters untouched", () => {
			const result = asciiSafeJsonStringify({ key: "Hello World 123!@#" });
			expect(result).toContain("Hello World 123!@#");
		});

		test("escapes accented Latin characters (>= U+0080)", () => {
			const result = asciiSafeJsonStringify({ text: "café résumé" });
			expect(result).not.toContain("é");
			expect(result).toContain("\\u00e9");
		});

		test("output is pure ASCII (no bytes >= 0x80)", () => {
			const input = {
				chinese: "你好",
				japanese: "こんにちは",
				korean: "안녕",
				accented: "über naïve",
				emoji: "😀",
			};
			const result = asciiSafeJsonStringify(input);
			for (let i = 0; i < result.length; i++) {
				expect(
					result.charCodeAt(i),
					`Character at index ${i} ('${result[i]}') is non-ASCII`,
				).toBeLessThan(128);
			}
		});

		test("preserves JSON structure with 4-space indentation", () => {
			const result = asciiSafeJsonStringify({ a: 1, b: "test" });
			const parsed = JSON.parse(result);
			expect(parsed).toEqual({ a: 1, b: "test" });
			expect(result).toContain("    "); // 4-space indent
		});

		test("handles nested objects", () => {
			const input = { outer: { inner: "日本語" } };
			const result = asciiSafeJsonStringify(input);
			const parsed = JSON.parse(result);
			expect(parsed.outer.inner).toBe("日本語");
		});

		test("handles empty object", () => {
			const result = asciiSafeJsonStringify({});
			expect(result).toBe("{}");
		});
	});

	describe("createStringsAttachment", () => {
		test("base64-encoded data survives atob() round-trip for ASCII strings", () => {
			const raw = JSON.stringify({ hello: "world" });
			const attachment = createStringsAttachment("strings.json", raw);
			const decoded = atob(attachment.attachmentData.original);
			const parsed = JSON.parse(decoded);
			expect(parsed.hello).toBe("world");
		});

		test("base64-encoded data survives atob() round-trip for non-ASCII strings", () => {
			const raw = JSON.stringify({ greeting: "你好世界" });
			const attachment = createStringsAttachment("strings.json", raw);
			// atob() decodes base64 to Latin1 — this is what Portal does
			const decoded = atob(attachment.attachmentData.original);
			const parsed = JSON.parse(decoded);
			// The non-ASCII chars should be preserved as \uXXXX in the JSON,
			// so after JSON.parse they should be the original characters
			expect(parsed.greeting).toBe("你好世界");
		});

		test("merges generated strings with raw strings", () => {
			const raw = JSON.stringify({ existing: "value" });
			const generated = { generated: "auto" };
			const attachment = createStringsAttachment(
				"strings.json",
				raw,
				generated,
			);
			const decoded = Buffer.from(
				attachment.attachmentData.original,
				"base64",
			).toString("utf8");
			const parsed = JSON.parse(decoded);
			expect(parsed.existing).toBe("value");
			expect(parsed.generated).toBe("auto");
		});

		test("raw strings take precedence over generated strings", () => {
			const raw = JSON.stringify({ key: "from-raw" });
			const generated = { key: "from-generated" };
			const attachment = createStringsAttachment(
				"strings.json",
				raw,
				generated,
			);
			const decoded = Buffer.from(
				attachment.attachmentData.original,
				"base64",
			).toString("utf8");
			const parsed = JSON.parse(decoded);
			expect(parsed.key).toBe("from-raw");
		});

		test("attachment metadata is correct", () => {
			const raw = JSON.stringify({ test: "data" });
			const attachment = createStringsAttachment("my-strings.json", raw);
			expect(attachment.filename).toBe("my-strings.json");
			expect(attachment.attachmentType).toBe(4); // AttachmentType.Strings
			expect(attachment.isProcessable).toBe(true);
			expect(attachment.processingStatus).toBe(2);
		});
	});

	describe("toBase64", () => {
		test("encodes string to base64", () => {
			const result = toBase64("Hello World");
			expect(result).toBe(Buffer.from("Hello World").toString("base64"));
		});

		test("encodes Buffer to base64", () => {
			const buf = Buffer.from("Hello World");
			const result = toBase64(buf);
			expect(result).toBe(buf.toString("base64"));
		});

		test("handles UTF-8 strings correctly", () => {
			const result = toBase64("你好");
			expect(Buffer.from(result, "base64").toString("utf8")).toBe("你好");
		});
	});
});
