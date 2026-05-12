---
title: Operations & Deployment
description: Local development, quality gates, Vercel deployment, workflow operation, and recovery runbooks.
---

# Operations & Deployment

This page describes how to run, verify, deploy, and operate the 247iBET SvelteKit application from the current repo.

## Runtime contract

| Contract | Source |
| --- | --- |
| Node 24.x | `.node-version`, `package.json#engines`, `svelte.config.js` adapter runtime, API route `config.runtime`. |
| Package manager | `pnpm` via lockfile `pnpm-lock.yaml`. |
| Framework | SvelteKit 2 / Svelte 5. |
| Hosting | Vercel with `@sveltejs/adapter-vercel`. |
| Styling | Tailwind CSS 4 Vite plugin plus modular CSS files. |

Before debugging a build or runtime issue, confirm the active Node version matches Node 24.x.

## Local commands

```bash
pnpm install
pnpm dev
pnpm preview
```

Quality gates:

```bash
pnpm check      # svelte-kit sync + svelte-check
pnpm lint       # ESLint over repo source
pnpm test       # Vitest suite
pnpm build      # production build
pnpm test:e2e   # Playwright, when browser deps are installed
```

Preferred pre-ship sequence:

```bash
pnpm check && pnpm lint && pnpm test && pnpm build
```

For documentation-only changes, still run at least `pnpm lint`, `pnpm test`, and `pnpm build` when docs include path/command/source references that could drift or when repository policy requires the full gate.

## Environment variables

`.env.example` contains local placeholders:

| Variable | Used by | Purpose |
| --- | --- | --- |
| `WORKFLOW_SECRET` | `/api/workflows/*` POST routes | Shared secret for manual workflow triggers. |
| `CRON_SECRET` | `/api/workflows/*` GET routes | Bearer token expected from Vercel Cron. |
| `ADMIN_ENABLED` | `/admin/*` routes | Feature flag that exposes the admin surface when set to `true`. |
| `ADMIN_TOKEN` | `/admin/login`, `src/lib/server/admin.ts` | Shared admin authorization token stored in the session cookie after a successful login. |

Other environment-dependent behavior:

- `PUBLIC_SITE_URL` overrides canonical site URL in `src/lib/site.ts`.
- `VERCEL_URL` is used as a fallback canonical base on Vercel when `PUBLIC_SITE_URL` is absent.
- `ADMIN_ENABLED=true` and `ADMIN_TOKEN` are required together for admin access; `/admin/login` exchanges the token for a 24-hour HTTP-only session cookie, and logout clears it.
- The admin login route keeps a best-effort in-process rate limit and writes structured audit logs for success, failure, rate limiting, and logout.
- `CSP_REPORT_URI` can populate the SvelteKit CSP `report-uri` directive.

Do not commit real secrets. Vercel project environments should hold production, preview, and cron secrets.

## Vercel deployment

Deployment config lives in `vercel.json`:

- Framework: `sveltekit`.
- Favicon redirect: `/favicon.ico` → `/favicon.png`.
- Cron jobs:
  - `/api/workflows/aeo-schema` daily at 03:00 UTC.
  - `/api/workflows/seo-audit` weekly Monday at 04:00 UTC.
  - `/api/workflows/geo-optimizer` monthly on day 1 at 05:00 UTC.
- Security headers on all paths.
- Long-lived static image cache headers for `/images/**` and `/og-image.png`.

SvelteKit adapter configuration in `svelte.config.js` sets `runtime: 'nodejs24.x'` and image formats/sizes for Vercel image handling.

## Workflow operation

Manual workflow POSTs require `x-workflow-secret`:

```bash
curl -X POST "$PUBLIC_SITE_URL/api/workflows/seo-audit" \
  -H "x-workflow-secret: $WORKFLOW_SECRET" \
  -H "content-type: application/json" \
  -d '{}'
```

Cron-style GETs require `Authorization: Bearer $CRON_SECRET`:

```bash
curl "$PUBLIC_SITE_URL/api/workflows/geo-optimizer" \
  -H "authorization: Bearer $CRON_SECRET"
```

AEO schema supports a constrained JSON body:

```bash
curl -X POST "$PUBLIC_SITE_URL/api/workflows/aeo-schema" \
  -H "x-workflow-secret: $WORKFLOW_SECRET" \
  -H "content-type: application/json" \
  -d '{"pages":["home","casino"],"force":true}'
```

The workflow route wrappers return:

- `202 { runId, status: 'started' }` when the workflow runtime accepts the run.

Shared route behavior lives in `src/lib/server/workflow-route.ts`; use that helper for workflow secret checks, cron bearer checks, and start-response formatting instead of duplicating per-route logic.

Status lookup:

```bash
curl "$PUBLIC_SITE_URL/api/workflows/status/$RUN_ID" \
  -H "x-workflow-secret: $WORKFLOW_SECRET"
```

The status endpoint returns only `runId`, `status`, `startedAt`, `completedAt`, and `durationMs`.

## Report artifacts

Workflow/report outputs are expected under `static/reports/**` when generated locally or by workflow code. Existing report families include SEO, GEO, performance, lighthouse, and mobile typography artifacts. Do not quote report metrics as current unless the artifact was regenerated for the branch being discussed.

## Generated image artifacts

Project-bound generated hero images live under `static/images/generated/` and should be committed when they are referenced by route markup.

Operational rules:

- Route markup should reference `.webp` files.
- Keep the matching `.png` source beside the `.webp` unless a future storage policy says otherwise.
- Optimize new generated images with WebP before staging them.
- Run a missing-reference scan before release when adding or renaming generated images.

Example missing-reference scan:

```bash
python3 - <<'PY'
from pathlib import Path
import re

missing = []
pattern = re.compile(r'''/images/generated/([^"'\s)]+)''')
for p in Path('src').rglob('*'):
    if p.is_file() and p.suffix in {'.svelte', '.ts', '.js'}:
        for m in pattern.finditer(p.read_text(errors='ignore')):
            target = Path('static/images/generated') / m.group(1)
            if not target.exists():
                missing.append((str(p), str(target)))

if missing:
    for source, target in missing:
        print(f'{source}: missing {target}')
    raise SystemExit(1)
print('All generated image references resolve.')
PY
```

## Security operations

- CSP is report-only in SvelteKit config; Vercel headers add browser hardening and a reporting endpoint.
- Avoid adding `unsafe-inline` or broad third-party origins without reviewing both `svelte.config.js` and `vercel.json`.
- Never add HTML `s-maxage` / CDN caching without resolving age-gate cache-vary requirements.
- Keep workflow route secrets required; never make workflow endpoints public.
- Admin surfaces should remain unavailable unless a specific auth workstream lands.
- Security reporting process and remaining work live in `docs/SECURITY.md`.

## Release checklist

- [ ] Confirm Node 24.x locally.
- [ ] Review changed files for source/docs drift.
- [ ] Run `pnpm check`.
- [ ] Run `pnpm lint`.
- [ ] Run `pnpm test`.
- [ ] Run `pnpm build`.
- [ ] Run targeted Playwright/browser checks for user-visible UI changes.
- [ ] Confirm no secrets or generated scratch files are staged.
- [ ] Confirm generated project assets under `static/images/generated/` have matching route references and optimized `.webp` variants.
- [ ] If public IA changed, update sitemap/search/workflow registry/LLM maps as appropriate.
- [ ] If claims changed, verify licensing/payout/bonus/game-count caveats.

## Recovery runbooks

### Build fails after dependency/runtime changes

1. Confirm `node --version` is 24.x.
2. Run `pnpm install` to sync lockfile and `node_modules`.
3. Run `pnpm check` to separate Svelte/TS issues from bundling issues.
4. Run `pnpm build` and inspect the first source error, not downstream generated output.
5. Check `vite.config.ts` build-only plugins if failures mention workflow or Braintrust generated files.

### Workflow endpoint returns 401

1. Confirm `WORKFLOW_SECRET` or `CRON_SECRET` is set in the environment used by the route.
2. Confirm POST requests use `x-workflow-secret` and GET cron calls use `Authorization: Bearer ...`.
3. Confirm no whitespace or shell quoting errors in the secret.
4. Check logs for route-level validation errors after auth passes.

### AEO schema input returns 400

1. Body must be a JSON object.
2. Allowed keys are `pages` and `force` only.
3. `pages` must contain at most 50 slug-safe strings matching `[a-z0-9/_-]` and length limits.
4. `force` must be boolean.

### Search results look wrong

1. Review `src/lib/search-index.ts` entries and ranking behavior.
2. Check `/search` manually for featured and query states.
3. Run `pnpm test -- search-index` or the closest available test command for search tests.
4. Keep `/search` `noindex, follow` unless SEO strategy changes.

### Public route added but not discoverable

1. Add navigation/internal links from the relevant hub.
2. Consider adding to `src/routes/sitemap.xml/+server.ts` unless it should be excluded.
3. Consider `src/lib/search-index.ts` inclusion.
4. Consider `src/lib/workflows/pages.ts` inclusion for priority audit pages.
5. Update `static/llms.txt` / `static/llms-full.txt` if the public site map or positioning materially changed.
