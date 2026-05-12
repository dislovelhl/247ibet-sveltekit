# Testing Guide

## Test layers

| Layer | Runner | Location | Count |
| --- | --- | --- | --- |
| Unit/integration | Vitest | `tests/**/*.test.ts` | Run `pnpm test` for the current count |
| Component | Vitest + jsdom | `tests/components/**` | Included in `pnpm test`; can also be targeted with `pnpm test:components` |
| E2E | Playwright | `tests/e2e/**/*.spec.ts` | Available via `pnpm test:e2e`; some diagnostic/speculative crawls remain intentionally skipped |

---

## Running each suite locally

### Unit/integration tests (existing — always run first)

```bash
pnpm test
```

Runs all `tests/**/*.test.ts`. Must exit 0. Re-run before quoting test counts outside the repository because the number changes as coverage is added.

### Component tests

```bash
pnpm test:components
```

Equivalent to `vitest run --environment jsdom 'tests/components/**'`.

### E2E tests (Playwright)

```bash
pnpm test:e2e
```

Requires the app to be built and previewing on port 4173, OR a running dev server (Playwright's `webServer` config launches `pnpm preview` automatically when none is detected). The synthetic CSP crawl test (`csp-synthetic-crawl.spec.ts`) is marked `test.skip` and will not run until the A4 sink lands.

---

## One-time setup: install Playwright browsers

Playwright ships without browser binaries. Run this once per machine (approx 200 MB download):

```bash
npx playwright install chromium
```

To install all configured browsers (chromium-mobile uses the same Chromium binary as chromium-desktop):

```bash
npx playwright install
```

---

## Recent coverage additions

- Signup request validation lives in `src/lib/server/signup.ts` and is covered by `tests/api-signup.test.ts`.
- Workflow route auth helpers live in `src/lib/server/workflow-route.ts` and are covered by `tests/workflow-route.test.ts`.
- Author registry fallback behavior is covered by `tests/authors.test.ts`.
- Dynamic route canonical regressions are covered in `tests/pages.test.ts`.

## Known gaps / follow-up items

### 1. D6 synthetic CSP crawl placeholder

`tests/e2e/csp-synthetic-crawl.spec.ts` is scaffolded but skipped via `test.skip`. It will be unskipped after:

- A4 reporting sink is wired
- The `top20Routes` array is filled out from the real sitemap (15 route comments are pre-stubbed in the file)

### 2. Playwright browser install in CI

The [CI pipeline](CI.md) should add a step before `pnpm test:e2e`:

```yaml
- run: npx playwright install chromium --with-deps
```

`--with-deps` installs OS-level browser dependencies on Linux runners.

---

## Peer-dependency notes

`@testing-library/svelte` 5.x targets Svelte 5. If pnpm reports peer-dep conflicts, re-run with:

```bash
pnpm install --strict-peer-dependencies=false
```

Document any pinned versions here if the constraint is applied.

## Related documentation

- [CI quality gates](CI.md) — required check order and branch-protection setup.
- [Accessibility guide](A11Y.md) — axe-core and WCAG coverage targets for future Playwright tests.
- [Performance budget](PERFORMANCE.md) — Lighthouse and Core Web Vitals checks that complement the test suite.
- [Security policy](SECURITY.md) — CSP and admin-surface behavior that should stay covered by tests.
