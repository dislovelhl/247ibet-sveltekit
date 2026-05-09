# Cutover Runbook

Because the codebase requires zero changes, the migration heavily relies on Infrastructure (Vercel) routing.

## Phase 0 — Decision Gates
- [ ] Legal/compliance signoff on "AGCO" and "Interac" wording on `247ibet.ca`.
- [ ] Ensure DNS access to `jdzd.com` registrar.
- [ ] Ensure Vercel project admin access.
- [ ] Google Search Console access for both domains.

## Phase 1 — Staging Preparation
- [ ] Ensure `247ibet.ca` production is stable.
- [ ] Verify `PUBLIC_SITE_URL` in Vercel is strictly set to `https://247ibet.ca`.

## Phase 2 — Code Changes
- [x] **Complete**: No codebase changes required. The codebase has been fully stripped of `jdzd.com` dependencies.

## Phase 3 — Pre-launch Validation
- [ ] Verify SvelteKit `sitemap.xml` generates correctly.
- [ ] Run Playwright E2E suite (`pnpm test:e2e`).

## Phase 4 — Cutover
1. Go to Vercel Dashboard -> `247ibet-sveltekit` project -> Settings -> Domains.
2. Add `jdzd.com` and `www.jdzd.com`.
3. Configure both domains to **Redirect to `247ibet.ca`** with a **301 Permanent** status code.
4. Update DNS records for `jdzd.com` to point to Vercel's nameservers/A records as prompted by Vercel.
5. In Google Search Console, use the **Change of Address** tool to signal the move from `jdzd.com` to `247ibet.ca`.

## Phase 5 — Post-launch Monitoring
- [ ] Monitor Vercel Edge Logs for 500s or redirect loops.
- [ ] Manually test `jdzd.com` links in incognito mode.
- [ ] Monitor Google Search Console for coverage drops or canonical mismatches.
