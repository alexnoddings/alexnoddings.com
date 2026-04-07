// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://alexnoddings.com",
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-header",
      weights: [400, 500, 600, 700]
    },
    {
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-body",
      weights: [400, 700]
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono"
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [incrementHeadingsPlugin],
  },
});

function incrementHeadingsPlugin() {
  return incrementHeadings;
}
function incrementHeadings(tree, _) {
  // Increment heading depths by one to allow Markdown file headings to start at #
  // We only want one h1 on a page (provided by Astro), everything else should be h2 or lower
  for (const treeElement of tree.children) {
    if (treeElement.type === "heading" && !!treeElement.depth) {
      treeElement.depth = treeElement.depth + 1;
    }
  }
}
