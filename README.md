# Auren

Auren is a premium engineering systems company site focused on operational software, product engineering, AI-enabled workflows, infrastructure, and long-term technical partnership.

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Project Notes

- The homepage is composed from shared sections in `components/sections/home-sections.tsx`.
- Design tokens, palette, and theme surfaces live in `app/globals.css`.
- Shared content, navigation, and case-study data live in `lib/site.ts`.
- Intake forms submit to `app/api/contact/route.ts`.
- The site uses Inter Tight for headings, Inter for body copy, and Geist Mono for code surfaces.

## Deployment

The site is designed for a dark-first premium presentation with a light theme fallback through the built-in toggle.
