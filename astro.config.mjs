import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://strix-engineering-studio.github.io",
  base: "/strix-website",
  output: "static",
  trailingSlash: "always",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/work": "/case-studies/",
    "/work/[slug]": "/case-studies/[slug]",
    "/studio": "/about/",
    "/project-inquiry": "/contact/",
    "/blog": "/insights/",
    "/blog/[slug]": "/insights/[slug]",
    "/uses": "/technology-decisions/",
  },
  markdown: {
    shikiConfig: { theme: "github-dark" }
  }
});