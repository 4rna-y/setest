import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [devtools(), solidPlugin(), tailwindcss()],
	server: {
		port: 3000,
		host: "0.0.0.0",
		strictPort: true,
	},
	build: {
		target: "esnext",
	},
	cacheDir: "/tmp/vite-cache",
});
