---
title: 247iBET SvelteKit
description: Repo-local guide for developing, operating, and maintaining the 247iBET SvelteKit site.
---

# 247iBET SvelteKit

247iBET is an independent Canadian iGaming guide built with SvelteKit 2, Svelte 5, Tailwind CSS 4, and Vercel. The site publishes casino, sportsbook, Interac payout, provincial market, responsible-gambling, and editorial-policy content for Canadian players.

## Quick start

```bash
pnpm install
pnpm dev
```

Local quality gates:

```bash
pnpm check
pnpm lint
pnpm test
pnpm build
```

Use Node 24.x. The repository pins that contract in `.node-version`, `package.json#engines`, SvelteKit adapter runtime config, and Vercel function route config.

## Documentation

The canonical repo-local documentation starts at [`docs/README.md`](docs/README.md). It follows Geistdocs-style principles — clear navigation, frontmatter, concise page summaries, task-oriented sections, and source-linked references — without adding a docs-site dependency.

Core pages:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — application boundaries, route architecture, data/config flow, security gates, workflow APIs.
- [`docs/CONTENT_MODEL.md`](docs/CONTENT_MODEL.md) — site taxonomy, page types, SEO/GEO/AEO metadata rules, editorial posture.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — design tokens, CSS modules, component patterns, accessibility rules.
- [`docs/OPERATIONS_DEPLOYMENT.md`](docs/OPERATIONS_DEPLOYMENT.md) — local commands, Vercel deployment, environment variables, cron/workflow operation, runbooks.

Existing specialist docs remain under `docs/` for CI, testing, security, performance, accessibility, compliance, agent labels, and historical improvement reports.

## Project map

| Area             | Path                                                   | Purpose                                                                        |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Routes           | `src/routes/**`                                        | SvelteKit page, server, XML, API, and workflow endpoints.                      |
| Components       | `src/lib/components/**`                                | Shared UI such as nav, footer, CTAs, disclosure, JSON-LD, and content blocks.  |
| Site config      | `src/lib/site.ts`, `src/lib/ibet-brand.ts`             | Brand, partner URLs, canonical URL helpers, CTA labels, trust/disclaimer copy. |
| Content registry | `src/lib/workflows/pages.ts`                           | Audited page registry used by SEO/GEO/AEO workflows.                           |
| Workflows        | `src/workflows/**`, `src/routes/api/workflows/**`      | SEO audit, GEO optimizer, AEO schema generation, and status surfaces.          |
| Styles           | `src/app.css`, `src/styles/**`, `DESIGN.md`            | Tailwind 4 theme, global CSS layers, prestige navy design tokens.              |
| Static assets    | `static/**`                                            | Favicons, Open Graph image, LLM maps, reports, and images served directly.     |
| Tests            | `tests/**`, `vitest.config.ts`, `playwright.config.ts` | Unit/integration and E2E coverage.                                             |
| Deployment       | `svelte.config.js`, `vite.config.ts`, `vercel.json`    | Adapter, plugins, CSP, headers, redirects, cron schedule, Node runtime.        |

## Operating guardrails

- Keep user-facing copy in an independent-guide posture. Do not drift into operator-style claims.
- Preserve transparent affiliate CTAs such as `Visit Partner Site` and safe link attributes.
- Treat licensing, payout timing, bonus, and game-count statements as claims that need caveats or current source verification.
- Do not add new documentation-site packages unless explicitly requested.
- Run `pnpm check`, `pnpm lint`, `pnpm test`, and `pnpm build` before shipping source or docs changes that might affect generated output.
