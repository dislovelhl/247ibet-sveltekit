# Codebase Map

## Architecture Overview
The repository (`247ibet-sveltekit`) is a modern frontend web application built for high performance and strong SEO.

- **Framework**: SvelteKit 2 + Svelte 5 (using Runes)
- **Language**: TypeScript (`strict` mode)
- **Styling**: Tailwind CSS v4 (using `@theme` tokens in `src/styles/theme.css`)
- **Package Manager**: pnpm
- **Build System**: Vite 6
- **Deployment Model**: Vercel Serverless (using `@sveltejs/adapter-vercel`)
- **Architecture Type**: Server-Side Rendered (SSR) / Hybrid SPA with heavy static optimizations.
- **Node Environment**: Node.js 24.x

## Key Directories
- `src/routes/`: Core application routing (e.g., `/casino`, `/sportsbook`, `/guides`).
- `src/lib/`:
  - `site.ts`: Single source of truth for canonical URLs, brand strings, and SEO defaults.
  - `ibet-brand.ts`: 247iBET product data, deriving URLs from `$lib/site`.
  - `components/`: Reusable Svelte components (e.g., `SEOFooter.svelte`, `Navbar.svelte`).
  - `server/`: Server-only code, including HMAC and basic auth utilities.
- `src/styles/`: Centralized CSS architecture.
- `tests/`: End-to-end and unit tests using Playwright and Vitest.
- `docs/`: Internal planning and compliance documents (e.g., `SUBDOMAIN_AND_UI_MAPPING_PLAN.md`).

## Integration Highlights
- **Analytics/Monitoring**: Vercel Analytics (`@vercel/analytics`) and Speed Insights (`@vercel/speed-insights`).
- **SEO/Routing**: Global routing intercepts handled server-side (`src/routes/+layout.server.ts`), comprehensive `sitemap.xml` generation.
- **No Heavy Backend**: The application relies on external APIs (`https://boapi.ibet247.ca` defined in `site.ts`) rather than maintaining a monolithic database.
