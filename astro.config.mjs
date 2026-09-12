// @ts-check
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
	site: "https://louiszn.fyi",
	security: {
		allowedDomains: [
			{
				hostname: "louiszn.fyi",
				protocol: "https",
			},
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [mdx(), icon()],
	adapter: node({ mode: "standalone" }),
	env: {
		schema: {
			REDIS_URL: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
		}
	}
});
