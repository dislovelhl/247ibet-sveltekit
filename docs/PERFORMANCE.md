# Performance Budget — v0.3.0

**Status**: Workstream B framework. Lighthouse baseline pending preview-deploy URL.
**Last updated**: 2026-04-29
**Scope**: Mobile-first iGaming affiliate site, Canadian market.

## Budget Thresholds

All thresholds measured at **mobile p75** (slow 4G, mid-tier Android profile via Lighthouse mobile preset).

| Metric | Budget | Why |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Brand-trust gate; regulated affiliate first impression |
| **INP** (Interaction to Next Paint) | < 200ms | Replaces FID in CWV core set |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Hero/CTA stability — bounce on shifty layouts |
| **TBT** (Total Blocking Time) | < 200ms | Proxy for INP during synthetic Lighthouse |
| **Lighthouse Performance score** | ≥ 90 | Top-3 routes hard gate; long-tail routes target ≥ 85 |
| **JS bundle (compressed, per route)** | ≤ 200 KB | Blocks shipping if any single chunk > 100 KB compressed without code-split or written justification |

**Targeted routes for v0.3.0 baseline**: `/`, `/casino`, `/sportsbook`, `/ontario`, `/alberta`. Long-tail routes audited per-release.

## Image Optimization (B2 — DECIDED)

**Choice**: Option (i) `@sveltejs/enhanced-img` (Vite plugin). Confirmed in `package.json` (`@sveltejs/enhanced-img@^0.3.9`) and `vite.config.ts:38` (`enhancedImages()` plugin wired).

**Why over Vercel Blob**:
- Build-time AVIF/WebP transcoding + responsive `srcset` generation, no runtime cost.
- Hero images stay in `/static/` so existing `vercel.json` `Cache-Control: public, max-age=86400, stale-while-revalidate=604800` + `Vercel-CDN-Cache-Control: max-age=31536000` rules continue to apply unchanged.
- No new origin to add to CSP `img-src`.
- Zero risk of Scenario 3 (LCP regression from origin migration).

**Why not BFG-purge**: Defer to v0.3.1. Repo size impact (183MB hero history) is a clone-time problem, not a runtime LCP problem. Build-time optimization addresses LCP first; history rewrite is a separate maintenance task.

**Migration policy**: Per-route opt-in. Replace `<img>` → `<enhanced:img src="..." />` route-by-route with before/after Lighthouse comparison; revert any route that regresses LCP. **No bulk migration in v0.3.0** — too high collision risk with the 42-file dirty tree.

## Font Loading (B3 — Audit pending)

Current state per `package.json`:
- `@fontsource/be-vietnam-pro` (body — primary)
- `@fontsource/jetbrains-mono` (numbers/odds)
- `@fontsource/playfair-display` (display/serif)
- `@fontsource/plus-jakarta-sans` (legacy — investigate if still used)

**Acceptance criteria**:
- All `@fontsource/*` imports subset to `latin` only (no full family).
- `font-display: swap` confirmed via `@fontsource` defaults.
- `<link rel="preload">` only for the body weight rendered above the fold (Be Vietnam Pro 400/500/600).
- Lighthouse "Avoid invisible text during webfont load" passes.

## Bundle Composition (B4 — Pending build-analyze)

**Per route, top 5 chunks (compressed)**: TBD — populated after `pnpm build` with rollup-plugin-visualizer or `vite build --mode analyze`. Save treemap to `static/reports/bundle-v0.3.html`.

**Hard rule**: any single chunk > 100 KB compressed must be either:
1. code-split via dynamic `import()`, OR
2. justified in writing in this doc with a one-paragraph note.

**Known concerns to investigate**:
- `lucide-svelte` icon imports — confirm tree-shaking works (named imports only, not `import * from`).
- `workflow` + `braintrust` SDK weight — should land in admin/api routes only, not in client bundles for `/`, `/casino`, `/sportsbook`.

## Hero Image Optimization (B5 — Per-route audit pending)

**LCP candidate**: each route has one above-the-fold image that becomes the LCP. Confirm:
- Format: AVIF first, WebP fallback, original last (handled by `enhanced-img` automatically).
- LCP candidate has `loading="eager" fetchpriority="high"`.
- All other above-the-fold images have `loading="lazy" decoding="async"`.

## Generated Hero Asset Policy

Route-consumed generated hero imagery lives in `static/images/generated/` and should be referenced as `/images/generated/<asset>.webp`.

Performance rules:

- Commit optimized `.webp` assets for route usage.
- Keep the matching `.png` source only for future re-optimization or replacement; route markup should not reference the `.png`.
- Use the existing 16:9-ish hero size convention unless the consuming component changes.
- Aim for WebP sizes comparable to existing hero assets; investigate any new generated hero that is materially larger than the current 50-150 KB range.
- Do not add remote image origins for generated hero work unless CSP and cache policy are updated deliberately.

Current trust/support generated hero stems:

- `contact-support-hero`
- `policy-document-hero`
- `regulatory-sources-hero`
- `transparency-report-hero`
- `faq-help-hero`
- `security-protection-hero`

## Route Prefetch Tuning (B6 — Audit pending)

Current `+layout.svelte` and `Navbar.svelte` use SvelteKit's default `data-sveltekit-preload-data="hover"` (the framework default). Audit for over-aggressive viewport prefetch on mobile:
- Mobile-only links (e.g. StickyMobileCTA) should use `data-sveltekit-preload-data="tap"` to avoid wasted prefetch on slow connections.
- High-traffic internal links keep hover prefetch.

## Cache-Coherency Constraint (Iteration-3 ADR amendment)

**Do NOT** add `s-maxage` or `Vercel-CDN-Cache-Control` to HTML route entries in `vercel.json` `headers[]` while the hooks-based age gate (Workstream A1) is live. Vercel CDN caching of HTML routes would serve a cached gambling-content page to an unverified visitor whose request never reaches the gate (cookie-bypass).

Image and static-asset cache headers are unaffected — keep them. Only HTML route caching is forbidden.

If a future workstream wants HTML edge cache, it must coordinate with Workstream A and either:
1. Move the gate to Vercel Routing Middleware (cache-vary-by-cookie correctly), OR
2. Cache only the interstitial route, not gambling content routes.

## How to Run Baseline Locally

```bash
pnpm build
pnpm preview &  # binds to :4173
sleep 3

# Mobile baseline (default Lighthouse preset)
for route in "" casino sportsbook ontario alberta; do
  npx lighthouse "http://localhost:4173/$route" \
    --output=json \
    --output-path="static/reports/lighthouse-baseline-v0.3-${route:-home}-mobile.json" \
    --chrome-flags="--headless --no-sandbox" \
    --only-categories=performance
done

# Desktop control
for route in "" casino sportsbook; do
  npx lighthouse "http://localhost:4173/$route" \
    --preset=desktop \
    --output=json \
    --output-path="static/reports/lighthouse-baseline-v0.3-${route:-home}-desktop.json" \
    --chrome-flags="--headless --no-sandbox" \
    --only-categories=performance
done

kill %1  # stop preview
```

**Better**: run against the Vercel preview URL once the branch deploys. Mobile profiles on real Vercel infra are the durable artifacts for the release-gate decision.

## Release Gate (from plan §4)

Top-3 routes (`/`, `/casino`, `/sportsbook`) MUST meet:
- Performance score ≥ 90 (mobile)
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

If any route fails, ship is blocked until either the regression is fixed or the founder approves a one-time exception with watch-and-fix scope for v0.3.1.

## Follow-ups for v0.3.1

- BFG purge of the 183MB hero image history from a mirror clone.
- Bulk migration of `<img>` → `<enhanced:img>` once per-route audits show consistent LCP wins.
- Consider Vercel Image Optimization on top of `enhanced-img` for query-string-based size negotiation.
- Per-route SSR migration (Workstream F2) with `+page.server.ts` and edge HTML caching, gated on cache-coherency analysis with the A1 age gate.

## Related documentation

- [CI quality gates](CI.md) — baseline commands that should remain green before performance profiling.
- [Testing guide](TESTING.md) — Playwright setup and E2E notes for browser-based performance runs.
- [Design system](../DESIGN.md) — token and typography constraints that affect layout stability.
