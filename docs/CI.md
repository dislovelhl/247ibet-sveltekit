# CI — Quality Gates

## Overview

Every push to `main` and every pull request targeting `main` runs the `quality-gates` job
defined in `.github/workflows/ci.yml`. All five gates must pass before a PR can be merged.
The workflow uses `actions/setup-node@v4` with `node-version: 24` to match local development,
`package.json#engines`, and the Vercel runtime contract.

## The 5 Gates

| Step | Command | What it checks |
|------|---------|----------------|
| Type check | `pnpm check` | SvelteKit + TypeScript types via `svelte-check` |
| Lint | `pnpm lint` | ESLint rules across `.svelte`, `.ts`, `.js` files |
| Unit + integration tests | `pnpm test` | Current Vitest unit and integration suite |
| Build | `pnpm build` | Full production build via Vite and `@sveltejs/adapter-vercel` |
| AGCO compliance guard | `pnpm compliance:agco` | No-documentary-proof licence posture, public-copy risk scan, and evidence-gate integrity |

## Running Locally

Run all five gates in order before pushing:

```bash
pnpm check && pnpm lint && pnpm test && pnpm build && pnpm compliance:agco
```

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
   - Add required status check: `quality-gates`
3. **Do not allow bypassing the above settings** — ensure this is NOT checked (no admin bypass)

## Recovery: If a Gate Fails on a PR

1. Reproduce the failure locally: `pnpm check && pnpm lint && pnpm test && pnpm build && pnpm compliance:agco`
2. Fix the root cause in your local branch
3. Commit the fix and push to the **PR branch** — CI will re-run automatically
4. **NEVER force-push to `main`** — this can overwrite others' work and bypass protection rules

## E2E Tests (Planned)

The `tests/e2e/` directory is reserved for Playwright end-to-end tests (Team E, future workstream).
Once scaffolded, a second CI job `e2e` will be added to the workflow.

## Related documentation

- [Testing guide](TESTING.md) — local unit, component, and E2E test commands used by the CI gates.
- [Security policy](SECURITY.md) — CSP, admin-surface, and vulnerability-reporting checks that CI protects.
- [Performance budget](PERFORMANCE.md) — Lighthouse and Core Web Vitals thresholds for release readiness.
