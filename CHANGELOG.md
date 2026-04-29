# Changelog

All notable changes to 247iBET are documented here.

## [0.2.0] - 2026-04-29

### Added
- **SEO/GEO/AEO Workflow Automation** — three durable Vercel Workflow pipelines (`aeo-schema`, `seo-audit`, `geo-optimizer`) with Vercel Cron triggers (daily/weekly) and a unified status polling endpoint
- **AEO Schema Injection** — `SchemaInjector` component fetches and injects `FAQPage` JSON-LD into page `<head>` for AI citation engines; initial `faq-faq.json` artifact committed
- **Hero Images** — 21 page-specific hero images generated and committed to `static/assets/heroes/` covering all major routes
- **Sportsbook Pillar Expansion** — comprehensive content for NBA, NFL, NHL, MLB, soccer, UFC/MMA betting guides with live odds context
- **Prestige Navy Design System** — new token set (`navy-black`, `navy-card`, `navy-raised`, `prestige-gold`, `slate-blue`), Plus Jakarta Sans + Playfair Display + JetBrains Mono font stack, CSS architecture split into 6 modular files under `src/styles/`

### Changed
- **Navbar** — full three-tier responsive redesign (64px mobile / 136px desktop) with glass effect and structured nav groups
- **SEO Footer** — elegance rewrite with grid layout, partner logos, and structured link columns
- **Layout** — `<main>` now carries `pt-16 lg:pt-[136px]` for single-source navbar clearance; page-level compensating padding removed across all routes
- **Accent unification** — all `slate-blue` accent usage converted to `prestige-gold`; decorative ornaments and card-on-card nesting removed
- **Brand sweep** — competitor brand names removed from all comparison copy; `Interac` and `Connex` references normalized to generic payment method labels
- **CTA patterns** — collapsed paired primary/secondary CTAs to single strong CTA per section; secondary feature-grids replaced with link strips

### Fixed
- Navbar/content overlap on all pages caused by missing layout-level padding clearance
- Circular `--font-sans` CSS custom property token reference
- Navbar user icon pointing to non-existent `/login` route
- Vercel deployment framework preset and Node 20 runtime pin for `@sveltejs/adapter-vercel` compatibility
- Duplicate `<h1>` in HomeIntro section

### Removed
- `src/hooks.server.ts` — removed as client-rendered architecture requires no server hooks
