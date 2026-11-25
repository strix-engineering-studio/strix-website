import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://strix.website",
  integrations: [react(), mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  output: "static",
  build: { format: "directory" },
  markdown: { shikiConfig: { theme: "github-dark" } }
});