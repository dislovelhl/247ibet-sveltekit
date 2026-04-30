# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:

- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health

## Commands

```bash
pnpm dev          # start dev server (localhost:5173)
pnpm build        # production build
pnpm preview      # preview production build locally
pnpm check        # type-check via svelte-check (run before committing)
pnpm lint         # ESLint
```

No test suite exists yet. The three gates before pushing are: `pnpm check && pnpm lint && pnpm build`.

## Architecture

**Stack**: SvelteKit 2 + Svelte 5 (runes), Tailwind CSS v4, TypeScript strict, pnpm, deployed on Vercel via `@sveltejs/adapter-auto`.

### Key lib files

| File                         | Purpose                                                                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/site.ts`            | Single source of truth — `SITE`, `SEO`, `TRACKING`, `PARTNER` constants. All canonical URLs and brand strings come from here. |
| `src/lib/ibet-brand.ts`      | 247iBET product data — `IBET_PROFILE`, `IBET_URLS`, `IBET_CTA`, `IBET_DISCLAIMER`. Derives URLs from `$lib/site`.             |
| `src/lib/age-gate-client.ts` | Age verification backed by `localStorage` (v1). Session API stubs are no-ops — wired up in v2.                                |

### Layout shell (`src/routes/+layout.svelte`)

Every page is wrapped by: `AgeGate` modal → `Navbar` → `<main>` (fade transition on route change) → `SEOFooter` → `StickyMobileCTA`. Vercel Analytics and Speed Insights are injected on mount.

### Route groups

- `/casino/*`, `/sportsbook/*` — game-type sub-hubs
- `/ontario/*`, `/alberta/*` — province landing pages
- `/guides/[...slug]` — editorial guides (catch-all with specific named pages taking priority)
- `/reviews/[slug]`, `/events/[slug]`, `/news/[slug]`, `/payments/[slug]`, `/authors/[slug]` — dynamic content pages
- `/tools/*` — interactive calculators (odds, parlay, payout)
- `/admin/*` — internal affiliate/analytics dashboards
- `/design-system`, `/lab/design-exploration` — design reference pages (not production content)

All pages are currently client-rendered (no `+page.server.ts` or `+layout.server.ts` files; `hooks.server.ts` was removed).

### CSS architecture

`src/app.css` is the single entry point — it imports Tailwind v4 then six modular files:

| File                       | Contains                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `styles/theme.css`         | `@theme` block — all design tokens (colors, fonts, spacing, shadows)                                                        |
| `styles/base.css`          | Global resets and body defaults                                                                                             |
| `styles/animations.css`    | Keyframe animations                                                                                                         |
| `styles/glass.css`         | `.glass-thin/regular/thick/shimmer` glassmorphism utilities                                                                 |
| `styles/components.css`    | Reusable component classes (`.navy-card`, CTA buttons, etc.)                                                                |
| `styles/design-system.css` | Page-level typography utilities and iGaming-specific UI (`.page-hero-title`, `.odds`, `.live-dot`, `.jackpot-ticker`, etc.) |

**Tailwind v4 note**: tokens are declared in `@theme {}` inside `styles/theme.css`, not in a `tailwind.config.js`. Use Tailwind class names that map to those tokens (e.g. `text-prestige-gold`, `bg-navy-card`).

### Design tokens (key values)

- **Surfaces**: `navy-black` (#070C18), `navy-card` (#0D1629), `navy-raised` (#142038)
- **Accents**: `prestige-gold` (#D4943A), `slate-blue` (#4A9EBF)
- **Fonts**: Plus Jakarta Sans (body/heading), Be Vietnam Pro (display/sans), JetBrains Mono (numbers/odds)

### Svelte 5 patterns

This project uses Svelte 5 runes throughout — use `$state`, `$derived`, `$effect`, `$props` (not `let`, `reactive`, `onDestroy` patterns from Svelte 4).

### Vite quirk

`vite.config.ts` includes a `cssInlineSSRFix` plugin that works around a Vite 6 bug where `?inline` CSS modules lack `export default` in SSR mode. Do not remove it.

### Environment variables

SvelteKit public env vars use the `PUBLIC_` prefix (not `NEXT_PUBLIC_`). `PUBLIC_SITE_URL` overrides the canonical URL; `VERCEL_URL` is the automatic fallback on preview deployments.
