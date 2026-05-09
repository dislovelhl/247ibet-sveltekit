# Domain Unification Plan — jdzd.com → 247ibet.ca (v2)

> **Reframe note (2026-05-09)**: rewritten after /autoplan eng review found that "zero codebase changes" understated the work. The redirect itself is straightforward, but path-preservation, versioned config, rollback, GSC change-of-address, and CORS coordination need to be addressed in code. v1 lives in git history if the original phrasing is needed.

## 0. What this plan covers (and what it doesn't)

This plan covers redirecting `jdzd.com` traffic to **the marketing front** at `247ibet.ca`, which is the SvelteKit app in this repo. The actual operator product — admin (Vue 3), member end (Vue 3 + PWA + Firebase push), KYC (Vue 3 + Pinia + Element Plus), and the C# ASP.NET Core + SQL Server backend at `boapi.ibet247.ca` — lives in **separate repositories** and is **not affected** by this redirect. Users redirected from `jdzd.com` land on the SvelteKit marketing front and click out to the Vue member-end app the same way any other inbound user does.

What's in scope here: SvelteKit marketing front + Vercel infra + DNS + SEO. What's out of scope: anything inside `boapi.ibet247.ca`, the Vue member-end / admin / KYC apps, or jdzd.com's user-account database (if any) — those need their own migration plans owned by the ASP.NET team.

## 1. Goal

`247ibet.ca` is the surviving brand for the marketing front. `jdzd.com` and `www.jdzd.com` are sunset. Traffic from jdzd is mapped to 247ibet.ca via path-preserving 301 redirects, configured in versioned infrastructure (`vercel.json`), with a coordinated SEO and analytics handoff. Account / payment / live-data continuity (i.e., whether a jdzd account holder can log into the Vue member-end app post-cutover) is a separate concern owned by the ASP.NET team.

## 2. Technical mapping (versioned, not Dashboard-only)

The redirect lives in `vercel.json` so it ships and rolls back with the application code.

```jsonc
// vercel.json — additive block (this plan adds it; current file has only crons)
"redirects": [
  {
    "source": "/:path*",
    "destination": "https://247ibet.ca/:path*",
    "permanent": true,
    "has": [{ "type": "host", "value": "jdzd.com" }]
  },
  {
    "source": "/:path*",
    "destination": "https://247ibet.ca/:path*",
    "permanent": true,
    "has": [{ "type": "host", "value": "www.jdzd.com" }]
  }
]
```

**Why not dashboard-only**: a dashboard `Redirect to` is unversioned (invisible in PR review), can't be rolled back atomically with `git revert`, disappears if the project is re-created or transferred, and is apex-to-apex by default — meaning `jdzd.com/casino` would land on `247ibet.ca` (root) instead of `247ibet.ca/casino`, losing path equity.

**Vercel domain attachment** (still required): add `jdzd.com` and `www.jdzd.com` to the project in Vercel Dashboard → Settings → Domains so the `has.host` matcher fires. Do not configure a "Redirect to" target in the dashboard; let the `vercel.json` block own the destination.

## 3. Path-mapping table

Before cutover, decide the disposition of any `jdzd.com` paths that don't have an exact equivalent on `247ibet.ca`. The catch-all 301 above handles the common case; this table covers exceptions.

| jdzd path pattern | Disposition | Notes |
|---|---|---|
| `/` and any path with a 247ibet.ca equivalent | 301 (path-preserved) | default catch-all |
| `/casino-fr/*` (if jdzd had French content) | TBD — confirm if French routes exist on 247ibet | If not, redirect to `/` with a translation flag, OR 410 |
| `/legacy/*` or campaign-specific URLs | 410 Gone with logging | implemented via `routes/[...catchall]/+page.server.ts` (Sprint B.B2 in TECHNICAL_DESIGN_PLAN.md) |
| Any path returning 404 on 247ibet.ca | 301 to `/` (homepage) with `?redirected=stale` query | safer than 404 for backlink equity |

`migration-review-247ibet/REDIRECT_MAP_DRAFT.csv` is the source draft. Promote to `static/redirect-map.json` (or directly into `vercel.json`) before cutover.

## 4. Compliance + cross-stack gate (blocks cutover)

Per `migration-review-247ibet/CUTOVER_RUNBOOK.md` Phase 0 and `migration-review-247ibet/OPEN_QUESTIONS.md` #1, the cutover is gated on the SvelteKit-side items below AND on confirmation from the ASP.NET-team (operator backend) that nothing breaks downstream.

**SvelteKit / marketing front (this repo):**
- [ ] Legal/compliance signoff on the wording "AGCO" and "iGaming Ontario" on 247ibet.ca pages. `IBET_PROFILE.agcoLicensed = false` per `docs/COMPLIANCE_AUDIT_v0.3.md` — redirecting jdzd traffic into a site that asserts unverified AGCO regulation amplifies regulatory exposure for both brands.
- [ ] Sprint A.A5 (regulatory-claim build gate) green: every `AGCO|iGaming Ontario` reference in `src/` is either paired with a verified licence or qualified as review/comparison context.
- [ ] Sprint A.A4 (CSP `connect-src` includes `boapi.ibet247.ca`, OR partner calls proxied through `/api/*`) — otherwise users redirected from jdzd will see broken CTAs.

**Cross-stack (ASP.NET team owns these):**
- [ ] `boapi.ibet247.ca` rate-limiter + CORS allowlist confirms `https://247ibet.ca` as a valid origin (proxy variant: confirm Vercel egress IP range isn't blocked).
- [ ] Account-continuity decision documented: do jdzd-issued accounts exist in the operator DB? If yes, are they auto-migrated, manually re-verified, or required to re-register? This determines whether the marketing front can promise "same accounts" in jdzd-redirect copy (Sprint C.C1 in `docs/TECHNICAL_DESIGN_PLAN.md`).
- [ ] Affiliate / `utmSource: '247ibet'` tracking continues to attribute correctly post-cutover (check with operator analytics owner).

Cutover does not start until all three boxes are checked.

## 5. Pre-cutover checklist

- [ ] Vercel project admin access confirmed
- [ ] DNS access to `jdzd.com` registrar confirmed
- [ ] Google Search Console properties exist for both `jdzd.com` and `247ibet.ca`
- [ ] DNS TTL for `jdzd.com` lowered to 300s ≥ 24 hours before cutover (so a rollback propagates fast)
- [ ] `pnpm test` green including new `tests/redirects.test.ts` snapshot
- [ ] Backlink audit completed for `jdzd.com` (Ahrefs / GSC referring-domains export); top backlinks confirmed to land on a 200 path
- [ ] Analytics dual-tagging in place (GA4 / PostHog) for the 30-day handoff window
- [ ] Compliance gate (§4) green

## 6. Cutover

1. Merge the PR adding `redirects[]` to `vercel.json` to main; deployment goes green on Vercel.
2. In Vercel Dashboard → Project → Settings → Domains: add `jdzd.com` and `www.jdzd.com`. Do NOT set a "Redirect to" target — leave the host attached so the `vercel.json` matcher fires.
3. Update `jdzd.com` DNS records (A / CNAME) to point at Vercel as prompted.
4. Verify with `curl -I https://jdzd.com/foo` from outside Vercel — expect `301 Moved Permanently`, `Location: https://247ibet.ca/foo`.
5. Run `/canary` skill (or equivalent post-deploy assertion) — see Sprint B.B3 in `docs/TECHNICAL_DESIGN_PLAN.md`.
6. In Google Search Console for `jdzd.com`, file the Change of Address request pointing to `247ibet.ca`.

## 7. Post-cutover monitoring (30 / 60 / 90 days)

| Cadence | Signal | Owner | Trigger threshold |
|---|---|---|---|
| Daily, first 72h | Vercel Edge Logs: 500s, redirect loops | Platform | any non-zero |
| Daily, first 7 days | GSC `jdzd.com` coverage report; canonical mismatches on `247ibet.ca` | SEO | any new "duplicate without user-selected canonical" |
| Weekly, 4 weeks | Vercel Analytics: did organic traffic absorb cleanly? | Marketing | -20% week-over-week vs combined baseline |
| Weekly, 12 weeks | GSC Change of Address status | SEO | rejection or "not processed" status |
| One-time, day 30 | Backlink-equity audit: are former jdzd backlinks now showing 247ibet authority? | SEO | any ≥5DR backlink still pointing at a 4xx |

## 8. Rollback

If the canary fails or any of these conditions are met inside the first 72h:

- Severe drop in `247ibet.ca` conversion attributable to the redirect (≥30% W/W on bonus-CTA clicks)
- Legal/compliance order to halt traffic mixing
- Infinite redirect loops detected (canary or Vercel logs)
- AGCO/AGLC enforcement notice received

**Rollback is a single revert + a DNS revert:**

1. `git revert <vercel.json redirects commit>` and merge — Vercel re-deploys without the 301 block (instant; no rebuild needed for vercel.json-only changes).
2. In Vercel Dashboard → Domains: remove `jdzd.com` and `www.jdzd.com` from the project.
3. Restore `jdzd.com` DNS to its prior provider (DNS TTL was lowered in §5; propagation should complete within 1 hour).
4. In GSC: cancel the Change of Address request on `jdzd.com`.

Recovery time objective: 15 min (revert + redeploy) + DNS propagation (≤1h with 300s TTL).

## 9. Cross-references

- `docs/TECHNICAL_DESIGN_PLAN.md` — engineering deltas (Sprint A, B, C) that this plan depends on.
- `migration-review-247ibet/EXECUTIVE_SUMMARY.md` — original audit summary.
- `migration-review-247ibet/CUTOVER_RUNBOOK.md` — original phase-by-phase runbook (this plan supersedes the Code Changes phase).
- `migration-review-247ibet/REDIRECT_MAP_DRAFT.csv` — source for §3 path-mapping table.
- `migration-review-247ibet/OPEN_QUESTIONS.md` — answers required before §4 compliance gate can be closed.
- `migration-review-247ibet/SECURITY_AUDIT.md` and `PAYMENT_AUDIT.md` — partner-API and payment-CTA confirmations.
