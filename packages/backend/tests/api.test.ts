import { describe, expect, test } from "bun:test";

describe("API", () => {
	test("basic", () => {
		expect(1 + 1).toBe(2);
	});

	test("env check", () => {
		expect(process.env.NODE_ENV).toBeDefined();
	});
});
