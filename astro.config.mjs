// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import icon from "astro-icon";

import { unified } from "@astrojs/markdown-remark";
import rehypeCallouts from "rehype-callouts";

import { externalLinks } from "#/integrations/external-links";

const SITE_URL = "https://louiszn.fyi";

export default defineConfig({
	site: SITE_URL,
	adapter: node({ mode: "standalone" }),
	integrations: [mdx(), icon(), externalLinks({ site: SITE_URL })],

	security: {
		allowedDomains: [{
			hostname: new URL(SITE_URL).hostname,
			protocol: "https"
		}],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	markdown: {
		processor: unified({ rehypePlugins: [rehypeCallouts] }),
	},

	env: {
		schema: {
			REDIS_URL: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
		},
	},
});
