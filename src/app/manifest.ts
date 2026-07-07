import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: "Strix Engineering Studio",

    short_name: "Strix",

    description:
      "System Before Software. Architecture-first product engineering for scalable software, AI systems, platforms, and digital products.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    display_override: [
      "window-controls-overlay",
      "standalone",
      "minimal-ui",
    ],

    orientation: "portrait-primary",

    background_color: "#081316",

    theme_color: "#081316",

    lang: "en",

    categories: [
      "business",
      "developer",
      "productivity",
      "technology",
    ],

    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}