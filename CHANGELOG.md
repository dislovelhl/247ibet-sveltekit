# Changelog

All notable changes to 247iBET are documented here.

## [0.3.0.0] - 2026-04-29

### Added

- **Nonce-based CSP scaffold** (Workstream A0) — SvelteKit `csp: { mode: 'auto' }` config in `svelte.config.js` with `script-src ['self']`. Vercel `Content-Security-Policy-Report-Only` header in `vercel.json` hardened from `'unsafe-inline'` → `'strict-dynamic'`. Enforcement on top-3 routes (`/`, `/casino`, `/sportsbook`) gated on synthetic Playwright crawl + 72h soak (Workstream A6).
- **Admin defense-in-depth** (Workstream E1) — all three `/admin/*` server pages now wrap the existing `error(401)` hard-deny with a `ADMIN_ENABLED` feature flag returning `error(404)` in production. Admin surface is invisible by default unless explicitly enabled in env.
- **[Security docs](docs/SECURITY.md)** — threat model, accepted-risk register (3 HIGH undici CVEs documented with watch-and-bump policy), CSP policy explanation, admin-surface gating, vulnerability reporting placeholder.
- **[Accessibility docs](docs/A11Y.md)** — WCAG 2.2 AA target documented, focus-visible patterns, accordion ARIA pattern reference, aria-label audit table, gold-on-navy contrast warning for designer follow-up, axe-core integration notes.
- **[Performance docs](docs/PERFORMANCE.md)** — mobile p75 budget thresholds (LCP <2.5s, INP <200ms, CLS <0.1, performance ≥90), `@sveltejs/enhanced-img` decision (chosen over Vercel Blob to avoid LCP regression), bundle-composition tracking, cache-coherency constraint with the A1 hooks-based age gate, runnable Lighthouse script.
- **[CI docs](docs/CI.md)** — 4-gate quality-gates job documentation, branch-protection setup, local re-run guide, PR recovery procedure.
- **[Testing docs](docs/TESTING.md)** — test-layer tabulation, run scripts per layer, one-time `npx playwright install chromium` setup, jsdom environment configuration note for component tests.
- **[Compliance audit](docs/COMPLIANCE_AUDIT_v0.3.md)** — read-only audit of affiliate disclosure visibility (A2), responsible-gambling link presence (A3), and bonus-terms / editorial-policy accuracy (A5).
- **GitHub Actions CI** (Workstream D4) — `.github/workflows/ci.yml` runs `pnpm check && pnpm lint && pnpm test && pnpm build` on every PR and push to `main`. Branch protection on `main` requires the `quality-gates` check (one-time founder UI step, screenshot artifact in `static/reports/branch-protection-v0.3.png` after configuration).
- **Playwright + component test scaffolds** (Workstream D2/D3/D5/D6) — `playwright.config.ts` with chromium-mobile (Pixel 5) + chromium-desktop projects, sample smoke test, CSP synthetic-crawl skeleton (`test.skip` until A4 sink lands), `tests/components/` placeholder tests using `@testing-library/svelte`, `@axe-core/playwright` installed.
- **`@sveltejs/enhanced-img`** dev dependency wired in `vite.config.ts` for build-time AVIF/WebP transcoding + responsive `srcset`. Per-route migration of `<img>` → `<enhanced:img>` deferred to v0.3.1 (per-route audit gate).
- **Casino FAQ accordion** — converted from non-functional static button list to a WCAG 2.2 AA-compliant accordion with `aria-expanded`, `aria-controls` / `role="region"` pairing, native `<button>` keyboard support, chevron rotation transition. Single-open state via `$state<number | null>`.
- **Responsible-gambling resource expansion** (Workstream A3 / Codex audit F-4/F-5) — `/responsible-gambling` now lists provincial self-exclusion registries (iGO Ontario, AGLC Voluntary Self-Exclusion), AGLC's canonical RG page, and Gamblers Anonymous Canada alongside the existing ConnexOntario and Alberta Health Services helplines. Required under AGCO Registrar Standards for Internet Gaming (2022) and AGLC Policy 5.7.
- **Bonus-terms 19+ age notice** (Codex audit F-3) — `/bonus-terms` now renders a prominent age & responsible-gambling banner above the archived bonus copy, with a direct link to ConnexOntario. AGCO treats publicly accessible bonus copy as promotional material regardless of `noindex` meta; the page is reachable at a live canonical URL so the banner is required.

### Changed

- **`SafeExternalLink.svelte`** — default `rel` upgraded from `noopener noreferrer` → `nofollow sponsored noopener noreferrer` for AGCO/AGLC affiliate-compliance. Caller can override via `rel` prop for non-affiliate external links. Codex review HIGH-1 finding closed.
- **Workflow `aeo-schema` POST handler** — now validates body shape (allowed keys `pages`, `force`; pages array max 50; slug-safe regex; size guard at 10KB). Returns 400 on invalid input, 413 on oversized payload. Codex MEDIUM-4 closed.
- **Workflow `status/[runId]` GET handler** — returns a narrow `RunStatusDTO` (runId, status, startedAt, completedAt, durationMs only) instead of the raw `workflow/api` `Run` object. Prevents internal/runtime-state disclosure. Codex MEDIUM-5 closed.
- **`Navbar.svelte` + `StickyMobileCTA.svelte`** — Svelte 4 `onMount` lifecycle migrated to Svelte 5 `$effect` runes. Behavior-equivalent; cleanup semantics preserved via returned function.
- **`StickyMobileCTA.svelte`** — added `aria-hidden="true"` on the `<Download>` icon inside the Install App button (icon-only-with-visible-text pattern; prevents AT double-announcement).
- **`vercel.json:32`** CSP header — `'unsafe-inline'` removed from `script-src` directive, replaced with `'strict-dynamic'`. Cutover from Report-Only to enforced is gated on the synthetic crawl + 72h soak (A6).

### Removed

- **`src/lib/components/PrestigeImage.svelte`** — orphan component with zero references in `src/`. Dead code deleted (Workstream F1).

### Security

- Codex independent review (`.omc/codex-review.md`) returned NEEDS_CHANGES at the start of the hardening sprint. HIGH-1 (SafeExternalLink rel compliance) and MEDIUM-4 / MEDIUM-5 (workflow input validation + status DTO narrowing) closed in this release. HIGH-2 (server-side age verification) was addressed by implementing cookie-based HMAC verification at the layout server load layer.

### Open / Deferred to v0.3.1

- A4: external CSP report sink choice (Sentry CSP / report-uri.com / Cloudflare Worker)
- A6: enforced CSP cutover on top-3 routes (gated on 24-48h synthetic crawl + 72h soak)
- B1: Lighthouse mobile baseline runs against Vercel preview URL (deferred from local-Chromium runs)
- C1: Design-review pass on the 42 modified routes/components
- C2: WCAG 2.2 AA axe-core audit run against the 5 audited routes
- F2: SSR evaluation follow-up for `/`, `/casino`, `/sportsbook` hot paths (tracked from [Performance docs](docs/PERFORMANCE.md#follow-ups-for-v031))
- G1: Atomic-commit reorg of the dirty tree (per-hunk policy for `+layout.svelte`, `vercel.json`, `package.json`, `+page.svelte`; target 8-12 commits with workstream-ID prefixes)
- BFG-purge of 183MB hero image history (clone-time, not runtime)
- Real admin auth (token + rate-limit + audit log + MFA)
- Comprehensive component-test coverage beyond the 4 named placeholders

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
 missing layout-level padding clearance
- Circular `--font-sans` CSS custom property token reference
- Navbar user icon pointing to non-existent `/login` route
- Vercel deployment framework preset and Node 20 runtime pin for `@sveltejs/adapter-vercel` compatibility
- Duplicate `<h1>` in HomeIntro section

### Removed

- `src/hooks.server.ts` — removed as client-rendered architecture requires no server hooks
