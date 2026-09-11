// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [mdx(), icon()],
	output: "static",
});
