import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import type { AstroIntegration } from "astro";
import type { Element, Root } from "hast";
import { rehype } from "rehype";
import { visit } from "unist-util-visit";

const LOCAL_HOSTNAMES = ["localhost", "127.0.0.1", "[::1]"];

export function externalLinks({ site }: { site: string }): AstroIntegration {
	const internalHosts = new Set([new URL(site).hostname, ...LOCAL_HOSTNAMES]);

	const markExternalLinks = () => (tree: Root) => {
		visit(tree, "element", (node: Element) => {
			const href = node.properties.href;
			if (node.tagName !== "a" || typeof href !== "string") {
				return;
			}

			try {
				const url = new URL(href, site);

				if (url.protocol.startsWith("http") && !internalHosts.has(url.hostname)) {
					node.properties.target = "_blank";
					node.properties.rel = ["noopener", "noreferrer"];
				}
			} catch {
				// leave the link untouched
			}
		});
	};

	const processor = rehype().use(markExternalLinks);

	return {
		name: "external-links",
		hooks: {
			"astro:build:done": async ({ dir, logger }) => {
				const root = fileURLToPath(dir);
				const files = (await readdir(root, { recursive: true })).filter((file) =>
					file.endsWith(".html"),
				);

				for (const file of files) {
					const path = join(root, file);
					const html = await readFile(path, "utf8");
					await writeFile(path, String(await processor.process(html)));
				}

				logger.info(`Processed ${files.length} HTML files in ${root}`);
			},
		},
	};
}
