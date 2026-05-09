# 247iBET Technical & Design Execution Plan (v2)

> **Reframe note (2026-05-09)**: this plan was rewritten after a /autoplan dual-voice review (CEO + Design + Eng) found that the v1 draft restated ~70% of v0.3.0 work that already shipped in PR #6. v2 scopes only genuine deltas, with concrete acceptance criteria. Full review at `~/.gstack/projects/247ibet-sveltekit/main-autoplan-review-20260509-060625.md`.

## Premise (verified against the codebase)

**Already shipped in v0.3.0** — do NOT re-implement:
- Prestige-gold scale (`theme.css:14-32`) including the 4-stop foil gradient `--gradient-prestige-gold-foil` (#f2d6af, #d4943a, #a9824b, #f2c586)
- `--font-luxury` (Playfair Display, `theme.css:69`) + `.font-luxury` class (`components.css:124`); imported in `app.css:13`
- `.luxury-border` (`components.css:112`), `.luxury-card`, `.text-gold-foil`
- `.glow-gold` and `.glow-navy` radial-gradient utilities (`base.css:36`, `:49`)
- `.navy-card` + `.navy-card--elevated` + hover variant (`components.css:3`)
- `GlintCard.svelte` (mouse-tracking + dual radial gradient + reveal integration)
- `PayoutProgress.svelte` (3-step Approval/Processing/Funds Sent UI, gold checkmark, pulsing active step)
- `Atmosphere.svelte` (35-particle canvas + 3 blur orbs + `prefers-reduced-motion` guard)
- `BackgroundAtmosphere.svelte`
- `StickyMobileCTA.svelte` with `env(safe-area-inset-bottom)` and 48px touch targets (lines 114, 125, 135, 147)
- `prefers-reduced-motion` guards across `glass.css:88`, `animations.css:234, 467`, `TiltCard.svelte:48`
- HMAC-signed server-side age gate (`+layout.server.ts:34`, `routes/age-gate/+page.server.ts`)

**Compliance posture (per `docs/COMPLIANCE_AUDIT_v0.3.md` and `IBET_PROFILE.agcoLicensed = false`)**: the operator is **not** AGCO-licensed. Any "Boutique/Luxury" framing must coexist with affiliate disclosures and accurate licensing claims. This plan does NOT defer compliance — it gates on it.

## Goals

1. Ship the genuine remaining design deltas (HeroBanner, polish items) **without duplicating** shipped utilities.
2. Make every shipped component robust against missing states (error, empty, reduced-motion, mobile).
3. Coordinate with the jdzd → 247ibet.ca migration so redirected users have a coherent first-visit experience.

---

## Sprint A — Pre-cutover safety net (1 week)

**Goal**: lock the test infrastructure and security gates so the migration cutover and the polish sprint don't ship blind.

### A1 — Install component-test runtime
- `pnpm add -D jsdom @testing-library/svelte`
- Acceptance: `pnpm test` exits 0 on a fresh clone without `ERR_MODULE_NOT_FOUND`. `tests/components/BackgroundAtmosphere.test.ts` continues to pass.

### A2 — Component tests for shipped primitives
- Add `tests/components/GlintCard.test.ts`: mount, hover, mouse-move math, mobile no-op when `pointer: coarse`.
- Add `tests/components/PayoutProgress.test.ts`: `activeStep` transitions 1→2→3, edge cases (0, 4), reduced-motion variant.
- Add `tests/components/Navbar.test.ts`: smoke test + active-link highlight.
- Acceptance: 3 new files, ≥9 assertions total, all pass.

### A3 — Path-preserving redirects in `vercel.json`
- Add a `redirects: []` block to `vercel.json` (currently the file holds only crons). Move the 301s out of the Vercel Dashboard and into versioned config.
- Acceptance:
  ```jsonc
  // vercel.json (additive)
  "redirects": [
    { "source": "/:path*", "destination": "https://247ibet.ca/:path*",
      "permanent": true, "has": [{ "type": "host", "value": "jdzd.com" }] },
    { "source": "/:path*", "destination": "https://247ibet.ca/:path*",
      "permanent": true, "has": [{ "type": "host", "value": "www.jdzd.com" }] }
  ]
  ```
- Snapshot test: `tests/redirects.test.ts` (Playwright) asserts `curl -I jdzd.com/foo → 301 → 247ibet.ca/foo` (path preserved).

### A4 — CSP fix for partner API
- `boapi.ibet247.ca` (referenced as `PARTNER.apiBase` in `site.ts:64`) is currently absent from CSP `connect-src` (see `svelte.config.js`). Choose ONE:
  - **(preferred)** proxy partner calls via `/api/*` SvelteKit endpoints — keeps CSP tight and adds rate-limit + observability hooks.
  - **(alternative)** add `https://boapi.ibet247.ca` to `connect-src` and document required CORS headers on the API side.
- Acceptance: a fetch from a homepage component to the partner API succeeds without a console CSP violation.

### A5 — Regulatory-claim build gate
- Add `tests/regulatory-claims.test.ts`: scan `src/` for `/AGCO|iGaming Ontario/` and assert each match either:
  1. is paired with a verified `licences[]` entry in `IBET_PROFILE`, OR
  2. is wrapped in clearly-marked review/comparison context (per `docs/CONTENT_MODEL.md`).
- Currently `IBET_PROFILE.agcoLicensed = false` and 16+ files assert AGCO regulation — the test must initially fail. Resolve by either updating `IBET_PROFILE` (if license is obtained) or removing/qualifying assertions.
- Acceptance: build fails (red) on unpaired AGCO claim; passes once claims are reconciled.

### A6 — Age-gate cleanup
- The v1 localStorage path (`src/lib/age-gate-client.ts`) is dead code; the live gate is the HMAC server-side flow. Delete the v1 file, OR annotate it with `@deprecated` and remove all imports.
- Replace the IP+UA HMAC binding in `+layout.server.ts:13` with UA-hash + a server-side rotating secret (mobile carrier IP rotation currently invalidates the cookie within minutes).
- Audit the bot bypass at `+layout.server.ts:18` — substring UA match is trivially spoofable. Either reverse-DNS-verify Googlebot or accept the bypass is gating-only (not auth) and document the trade-off.
- Acceptance: `tests/age-gate-flow.e2e.test.ts` (Playwright) covers cookie set + redirect-back + mobile re-gate scenario.

---

## Sprint B — Migration cutover safety (1 week, can overlap A)

Wires the migration plan's missing pieces. See `docs/SUBDOMAIN_AND_UI_MAPPING_PLAN.md` for the cutover steps; the engineering deltas live here.

### B1 — Promote `REDIRECT_MAP_DRAFT.csv`
- Move `migration-review-247ibet/REDIRECT_MAP_DRAFT.csv` into a versioned source (suggest `static/redirect-map.json` or `vercel.json` `redirects[]` directly).
- Acceptance: every entry in the source is reflected in the deployed redirects (verified by Sprint A's snapshot test).

### B2 — Catch-all for known-dead jdzd paths
- Add `src/routes/[...catchall]/+page.server.ts` that returns 410 Gone with a logging hook for paths in a known-dead list (sourced from a future jdzd backlink audit). Default behaviour for unknown paths remains the path-preserving 301.
- Acceptance: a known-dead path (TBD by SEO audit) returns 410, not 404; logs surface to Vercel observability.

### B3 — Canary check post-cutover
- Run `/canary` skill after the Vercel domain switch. The canary must assert:
  1. `curl -I jdzd.com/foo` → 301 to `247ibet.ca/foo` (path preserved).
  2. HSTS header still set on `247ibet.ca` responses.
  3. `/age-gate` still triggers on a clean cookieless GET.
- Acceptance: canary passes within 5 minutes of cutover; rollback triggered if any assertion fails.

---

## Sprint C — Genuine UI polish (3–5 days, ships after A + B)

Only the items that don't already exist in the v0.3.0 design system.

### C1 — `HeroBanner.svelte` (the one truly new component)
- Pick a single hero pattern (recommend: data-dense — a verified-payout ticker with timestamps from `boapi.ibet247.ca` once A4 lands).
- Uses existing `--gradient-prestige-gold-foil`, `--font-luxury`, `.luxury-border`. Does NOT redefine tokens.
- 3D parallax gated behind `@media (hover: hover) and (prefers-reduced-motion: no-preference)` AND viewport `IntersectionObserver` — disabled outside the visible region.
- LCP candidate: above-the-fold hero image with `loading="eager" fetchpriority="high"` (per `docs/PERFORMANCE.md` §B5).
- jdzd-redirect-aware variant: detect `?from=jdzd` query (set by Sprint A's redirect rule) and render a one-time welcome ribbon ("You've been redirected from jdzd.com — same operator, same accounts. [Dismiss]"). Cookie-stamp the dismissal.
- Acceptance: Lighthouse mobile p75 LCP < 2.5s on `/` with HeroBanner visible; INP < 200ms; AA contrast on hero text against any 4-stop ramp position.

### C2 — Hover refinements
- Add a `.hover-scale` utility to `components.css`: `transform: scale(1.02)` only inside `@media (hover: hover) and (pointer: fine)`.
- Apply only to non-touch contexts. On touch, replace with `:active { transform: scale(0.98) }` (already present at `components.css:744-747` for `.btn-magnetic`).
- Acceptance: no scale flicker on iOS Safari tap; lighthouse a11y score unchanged.

### C3 — Multi-layer navy-tinted shadows
- Extend `theme.css` with new tokens (do NOT replace existing `--shadow-navy`, `--shadow-navy-deep` — additive):
  - `--shadow-navy-soft-1`, `--shadow-navy-soft-2` documented with usage notes.
- Apply via class only (`.shadow-navy-stack`), not as global override on `.card-hover-lift`.
- Acceptance: existing `.card-hover-lift` behaviour unchanged unless opted in; new utility documented in `/design-system` route.

### C4 — Live Now badge pulse
- Already present on game tiles (`+page.svelte:780`). Add a `prefers-reduced-motion` guard that swaps the pulse for a static dot.
- Acceptance: animation respects reduced-motion across all tile variants.

### C5 — Pull-to-refresh overscroll color
- Add to `app.css`: `html { background-color: var(--color-navy-black); overscroll-behavior-y: contain; }`.
- Acceptance: iOS Safari pull-to-refresh shows navy-black, not white.

### C6 (skipped — was in v1 plan as "noise grain")
- Adding a noise-grain SVG overlay on top of the existing 35-particle canvas + 3 blur orbs would be a fourth atmospheric layer with iOS-Safari-scroll repaint cost. **Decision: do not ship.** If atmospheric grain is wanted, it replaces (not stacks over) the existing canvas.

---

## What's explicitly NOT in this plan

- Any "implement" for shipped utilities (`.glow-gold`, `.luxury-border`, gold ramp, Playfair, GlintCard, PayoutProgress, Atmosphere, safe-area, 48px targets) — these exist; treat as primitives.
- Operator-vs-affiliate identity reconciliation — separate workstream; gates Sprint C copy decisions but not engineering.
- Server-side age gate v2 expansion (KYC integration) — see `docs/DEVELOPMENT_PLAN.md` P2-15.
- Lighthouse CI (`docs/DEVELOPMENT_PLAN.md` P2-13).
- BFG history purge of 183MB hero images — clone-time concern, deferred to v0.3.1.

## Sequencing & gates

- **Sprint A blocks Sprint C.** Component tests + CSP fix must land before HeroBanner ships.
- **Sprint A.A5 (regulatory-claim gate) blocks Sprint B (cutover).** Redirecting jdzd traffic into a site that asserts unverified AGCO licensing amplifies regulatory exposure.
- **Sprint B blocks Sprint C.C1.** The redirect-aware welcome ribbon needs the `?from=jdzd` query param plumbed by B1.
- Do NOT ship visible UI changes during the redirect cutover window — the analytics property change (per migration plan) makes it impossible to attribute metric movement to UI vs. redirect.

## Success metrics

- Lighthouse Performance ≥ 90 on `/`, `/casino`, `/sportsbook` mobile p75 post-Sprint C
- 0 unresolved AGCO claims in src/ (test gate)
- Redirect snapshot test green for ≥ 30 days post-cutover
- INP < 200ms on the page that hosts the new HeroBanner (mid-tier Android)
- 0 increase in age-gate re-prompt rate after Sprint A.A6 (mobile carrier IP rotation fix)

## Sprint A — pre-cutover (1 week)
## Sprint B — migration (overlaps A, 1 week)
## Sprint C — genuine polish (3–5 days, after A + B)

**Total scope: ~2.5 weeks. v1 estimated 4 sprints (~6 weeks). Reduction = recognising shipped work as primitives, not greenfield.**
