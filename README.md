# Strix Engineering Studio

The Strix public website is built with **Astro 7, React 19, MDX, and Tailwind CSS 4**. It follows the same static-first structure as [imrabo/website](https://github.com/imrabo/website), adapted to Strix's editorial design system and content.

## Stack

- **Astro 7** for routing, layouts, static generation, metadata, and sitemap.
- **React 19** for the homepage's composed React sections and future interactive islands.
- **MDX** for insight articles, case studies, and product pages, with typed content collections.
- **Tailwind CSS 4** through the Vite plugin.
- **GitHub Actions** for checks and GitHub Pages deployment.

## Development

Use Node.js 22.23.4 or newer and pnpm 10.

```bash
pnpm install
pnpm dev
```

Astro serves the local site at http://localhost:4321.

```bash
pnpm check
pnpm build
pnpm preview
```

## Project structure

```text
src/
├── components/
│   ├── layout/       # Astro header, footer, theme toggle
│   └── react/        # React sections rendered by Astro
├── content/
│   ├── insights/     # MDX journal
│   ├── case-studies/ # MDX project write-ups
│   └── products/     # MDX product profiles
├── layouts/          # Base document layout and SEO
├── pages/            # Astro routes and static route generation
├── seo/              # Existing Strix service and authority content
└── styles/           # Tailwind v4 and Strix design tokens
public/
└── assets/           # Existing logos, case-study and product imagery
```

## Content editing

Add or edit `.mdx` entries under `src/content/insights`, `src/content/case-studies`, or `src/content/products`. Collection metadata and validation are defined in `src/content.config.ts`.

New content becomes a static route during the build. The collection schemas are the source of truth for required frontmatter fields.

## Design

The existing Strix identity is retained: burnt orange `#F7931E`, antique gold `#D4AF75`, deep brown `#2A1E17`, warm-white surfaces, editorial serif headings, and a fine architectural grid.

## Contact inquiries

The former Next.js contact form posted to a Next-specific `/api/contact` endpoint. The Astro branch currently exposes direct email and WhatsApp channels rather than pretending a missing server endpoint is live. Configure a real form provider or a serverless endpoint before reintroducing an online submission form.

## Deployment

The GitHub Actions workflows run Astro checks and create the static `dist/` output. The deployment workflow publishes that folder to GitHub Pages when changes are pushed to `main`.

The production URL is https://strix.website. Keep the repository's GitHub Pages custom-domain setting and DNS configuration in place when switching the deployed build.
