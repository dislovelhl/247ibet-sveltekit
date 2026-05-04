---
title: Design System
description: Practical design-system guide for tokens, CSS layers, Svelte components, and accessibility.
---

# Design System

The visual system is a dark prestige navy iGaming interface with gold and slate-blue accents, glass surfaces, strong mobile CTAs, and editorial trust components. `DESIGN.md` remains the long-form visual source; this page maps it to the actual implementation files and usage rules.

## File map

| File | Responsibility |
| --- | --- |
| `DESIGN.md` | Human-readable design token and component rationale. |
| `src/app.css` | Imports Tailwind, self-hosted fonts, and modular CSS layers. |
| `src/styles/theme.css` | Tailwind 4 `@theme` tokens: colors, fonts, spacing, type scale, containers, shadows. |
| `src/styles/base.css` | Global body, focus, typography, selection, image, summary, and tap behavior. |
| `src/styles/components.css` | Card, button, CTA, table, and reusable utility classes. |
| `src/styles/design-system.css` | Page hero, prose, data/odds, breadcrumb, details, and high-level page utilities. |
| `src/styles/glass.css` | Glassmorphism tiers and related decorative effects. |
| `src/styles/animations.css` | Motion keyframes used by cards, live dots, shimmer, and premium effects. |

## Core tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-navy-black` | `#070c18` | Page background and dark base. |
| `--color-navy-card` | `#0d1629` | Cards, panels, sections. |
| `--color-navy-raised` | `#142038` | Elevated surfaces and active states. |
| `--color-prestige-gold` | `#d4943a` | Primary brand accent, CTAs, focus, key labels. |
| `--color-prestige-gold-light` | `#e8ac52` | Hover/gradient accent and jackpot highlights. |
| `--color-slate-blue` | `#4a9ebf` | Secondary brand, search focus, data accents. |
| `--color-text-primary` | `#f1f5f9` | Primary text. |
| `--color-text-body` | `#94a3b8` | Body text on navy backgrounds. |
| `--color-text-tertiary` | `#8293a9` | Captions/meta text with AA-aware contrast. |
| `--color-success` | `#22c55e` | Success/live/odds-up semantics. |
| `--color-warning` | `#f59e0b` | Warning states. |
| `--color-error` | `#ef4444` | Error and odds-down semantics. |

## Typography

Self-hosted font imports live in `src/app.css`:

- Display/headline: Be Vietnam Pro.
- Body/UI: Plus Jakarta Sans.
- Mono/numeric: JetBrains Mono.

CSS variables define `--font-sans`, `--font-display`, `--font-heading`, and `--font-mono`. Numeric UI such as odds, money, and stats should use the mono font with tabular numeric settings through `.odds`, `.money`, or `.stat`.

Fluid hero classes:

- `.money-hero-display`
- `.money-hero-lede`
- `.money-hero-kicker`
- `.page-hero-title`, `.page-hub-title`, `.page-detail-title`
- `.page-hero-subtitle`, `.page-hub-subtitle`, `.page-detail-copy`

## Layout and spacing

The theme uses an 8pt-aligned spacing scale from `--spacing-1` through `--spacing-32` and container tokens from `--container-sm` through `--container-2xl`. New pages should prefer existing container and utility patterns used by current hub pages instead of inventing bespoke breakpoints.

Default shell behavior:

- `+layout.svelte` gives pages top padding below the sticky navbar.
- `main [id]` targets receive scroll-margin offsets for anchor links.
- Breadcrumbs use a global style normalization in `design-system.css`.

## Surface patterns

| Class | Use |
| --- | --- |
| `.navy-card` | Default reusable dark card. |
| `.navy-card--elevated` | More pronounced depth without changing structure. |
| `.navy-card--flat` | Low-emphasis panels. |
| `.navy-card--interactive` | Clickable/hoverable cards. |
| `.luxury-card` | Premium visual cards with stronger shine/depth. |
| `.glass-thin`, `.glass-regular`, `.glass-thick`, `.glass-premium` | Layered glass panels from subtle to hero-grade. |
| `.shimmer-effect` | Decorative shimmer overlay; avoid on dense text blocks. |
| `.jackpot-ticker` | Jackpot/data-highlight panel. |

Prefer these classes before adding local one-off gradients. If a new variant is needed across more than one page, add it to the CSS layer rather than duplicating inline Tailwind strings.

## CTA patterns

Use shared CTA classes for consistency and mobile target size:

- `.page-cta-primary`, `.page-cta-primary-sm`
- `.page-cta-secondary`, `.page-cta-secondary-sm`
- `.page-cta-outline`, `.page-cta-outline-sm`
- `.hero-cta-primary`, `.hero-cta-secondary`, `.hero-cta-outline`
- `.btn-glossy-gold`
- `.view-all-link`

Commercial labels should come from `IBET_CTA` in `src/lib/ibet-brand.ts` where practical. For external partner links, use `SafeExternalLink.svelte` unless the route has a specific reason to emit raw anchors; raw anchors must include equivalent safe `rel` attributes.

## Component conventions

- Use shared components for nav, footer, sticky CTA, disclosures, JSON-LD, bylines, and policy layout.
- Keep commercial/legal copy centralized in `site.ts`, `ibet-brand.ts`, and disclosure components where feasible.
- New components should be small, route-agnostic, and backed by existing CSS tokens.
- Avoid adding dependencies for simple visual patterns; prefer Svelte, CSS, and existing lucide-svelte icons.
- Keep Svelte 5 idioms (`$state`, `$derived`, `$props`) consistent with adjacent files.

## Accessibility baselines

Implemented baselines:

- `:focus-visible` global outline uses prestige gold.
- Touch/interactive targets should be at least 44px tall.
- `+layout.svelte` includes a skip-to-content link.
- `main` wraps page content with `id="main-content"`.
- Icon-only controls need descriptive `aria-label`; decorative icons inside labelled controls should use `aria-hidden="true"`.
- FAQ/accordion content should use native `<button>`, `aria-expanded`, `aria-controls`, and hidden regions where appropriate.

Open follow-ups are tracked in `docs/A11Y.md`. Check contrast when using gold for small body text on card backgrounds and verify landmarks after layout changes.

## Motion and decorative effects

Motion tokens live in `theme.css`:

- `--dur-micro`: 100ms.
- `--dur-short`: 200ms.
- `--dur-medium`: 300ms.

Use decorative effects sparingly on content-heavy pages. Do not rely on animation to communicate critical betting, safety, age, or payment state.

## Design review checklist

- [ ] Uses existing tokens/classes before local one-off styles.
- [ ] Keeps copy readable on mobile, with balanced headings and pretty body text.
- [ ] Maintains 44px minimum tap targets for interactive elements.
- [ ] Keeps focus visible and keyboard navigation intact.
- [ ] Uses transparent affiliate CTA wording.
- [ ] Avoids hiding legal/affiliate disclaimers in compact variants.
- [ ] Verifies visual changes with `pnpm check`, `pnpm lint`, relevant tests, and browser/E2E smoke when UI behavior changes.
