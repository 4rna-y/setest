import tailwindcss from "@tailwindcss/vite";
import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [solidPlugin(), tailwindcss()],
	test: {
		environment: "jsdom",
		globals: true,
		include: ["tests/**/*.test.{ts,tsx}"],
		testTransformMode: {
			web: ["/.[jt]sx?$/"],
		},
	},
});
