import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [robotsTxt(), sitemap(), tailwind()],
  site: "https://system-bridge.timmo.dev",
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: false,
    },
  },
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
