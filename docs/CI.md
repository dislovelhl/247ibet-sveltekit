# CI — Quality Gates

## Overview

Every push to `main` and every pull request targeting `main` runs two parallel jobs defined in
`.github/workflows/ci.yml`: `quality-gates` (5 sequential gates) and `e2e` (Playwright).
**All five gates must pass** in `quality-gates`, and the `e2e` job must also pass, before a PR
can be merged. The workflow uses `actions/setup-node@v4` with `node-version: 24` to match local
development, `package.json#engines`, and the Vercel runtime contract.

## The Gates

`quality-gates` job:

| Step | Command | What it checks |
|------|---------|----------------|
| Type check | `pnpm check` | SvelteKit + TypeScript types via `svelte-check` |
| Lint | `pnpm lint` | ESLint rules across `.svelte`, `.ts`, `.js` files |
| Unit + integration tests | `pnpm test` | Current Vitest unit and integration suite |
| Build | `pnpm build` | Full production build via Vite and `@sveltejs/adapter-vercel` |
| AGCO compliance guard | `pnpm compliance:agco` | No-documentary-proof licence posture, public-copy risk scan, and evidence-gate integrity |

`e2e` job (parallel):

| Step | Command | What it checks |
|------|---------|----------------|
| Install Playwright | `pnpm exec playwright install --with-deps chromium` | Chromium binary + Linux deps |
| Build | `pnpm build` | Same production build (e2e webServer serves it via `pnpm preview`) |
| Playwright E2E | `pnpm test:e2e` | `tests/e2e/**` across `chromium-mobile` + `chromium-desktop` projects |

On failure the `e2e` job uploads `static/reports/playwright-report/` as a `playwright-report`
artifact (7-day retention) so PR reviewers can download the HTML report.

## Running Locally

Run all six gates before pushing:

```bash
pnpm check && pnpm lint && pnpm test && pnpm build && pnpm compliance:agco && pnpm test:e2e
```

First-time `pnpm test:e2e` run on a machine: `npx playwright install chromium` (≈200 MB).

For licence-claim activation work, also run the strict private-evidence gate from the AGCO runbook:

```bash
pnpm compliance:agco:evidence:init
AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence
AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed
```

The initializer creates the gitignored local evidence JSON scaffold. Fill it with approved legal/compliance references before expecting the complete-evidence rehearsal or strict private-evidence gate to pass.

All commands must exit with code 0. Fix any failures before pushing — never iterate via CI.

## Required GitHub Branch Protection (for `main`)

Navigate to **Settings → Branches → Branch protection rules** and configure:

1. **Require a pull request before merging** — enable, require at least 1 approval
2. **Require status checks to pass before merging** — enable
   - Check **Require branches to be up to date before merging**
   - Add required status checks: `quality-gates` **and** `e2e`
3. **Do not allow bypassing the above settings** — ensure this is NOT checked (no admin bypass)

## Recovery: If a Gate Fails on a PR

1. Reproduce the failure locally:
   - `quality-gates` failure → `pnpm check && pnpm lint && pnpm test && pnpm build && pnpm compliance:agco`
   - `e2e` failure → `pnpm test:e2e` (download the `playwright-report` artifact from the failed
     run for the HTML report; one intentional `test.skip` on `csp-synthetic-crawl` is expected)
2. Fix the root cause in your local branch
3. Commit the fix and push to the **PR branch** — CI will re-run automatically
4. **NEVER force-push to `main`** — this can overwrite others' work and bypass protection rules

## Dependency Updates

Dependabot opens weekly PRs (Mon 08:00 America/Toronto) per `.github/dependabot.yml`:

- **npm** — grouped into `sveltekit`, `tooling`, `types`; max 5 open PRs. The 5 transitive CVE
  pins from `package.json#pnpm.overrides` (`undici`, `devalue`, `uuid`, `cookie`,
  `node-gyp-build-optional-packages`) are explicitly ignored — bump those by editing the override
  block, not by accepting a Dependabot PR.
- **github-actions** — workflow action version bumps; max 5 open PRs.

Each Dependabot PR runs the same `quality-gates` + `e2e` jobs and merges only if both pass.

## Related documentation

- [Testing guide](TESTING.md) — local unit, component, and E2E test commands used by the CI gates.
- [Security policy](SECURITY.md) — CSP, admin-surface, and vulnerability-reporting checks that CI protects.
- [Performance budget](PERFORMANCE.md) — Lighthouse and Core Web Vitals thresholds for release readiness.
