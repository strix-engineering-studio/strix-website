import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://strix.website",
  output: "static",
  trailingSlash: "always",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/work": "/case-studies/",
    "/work/[...path]": "/case-studies/[...path]",
    "/studio": "/about/",
    "/studio/[...path]": "/about/[...path]",
    "/project-inquiry": "/contact/",
    "/blog": "/insights/",
    "/blog/[...path]": "/insights/[...path]",
    "/uses": "/technology-decisions/",
    "/uses/[...path]": "/technology-decisions/[...path]"
  },
  markdown: {
    shikiConfig: { theme: "github-dark" }
  }
});