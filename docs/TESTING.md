# Testing Guide

## Test layers

| Layer | Runner | Location | Count |
|---|---|---|---|
| Unit | vitest | `tests/*.test.ts` | 113 tests (14 files) |
| E2E | Playwright | `tests/e2e/**/*.spec.ts` | Scaffold (1 spec file, skipped) |

---

## Running each suite locally

### Unit tests (existing — always run first)

```bash
pnpm test
```

Runs all `tests/**/*.test.ts` under the `node` environment. Must exit 0.

### Component tests

```bash
pnpm test:components
```

Equivalent to `vitest run --environment jsdom 'tests/components/**'`. Placeholder tests pass immediately. Real render tests require the jsdom environment fix described below.

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

## Known gaps / follow-up items for orchestrator

### 1. jsdom environment for component tests

`vitest.config.ts` currently sets `environment: 'node'` globally. Component tests that mount Svelte components need `jsdom`. Two options:

**Option A — per-glob override (recommended):** Add `environmentMatchGlobs` to `vitest.config.ts`:

```ts
test: {
  environmentMatchGlobs: [
    ['tests/components/**', 'jsdom'],
  ],
  // ...existing config
}
```

**Option B — per-file directive:** Add `// @vitest-environment jsdom` as the very first line of each component test file.

`vitest.config.ts` is **outside Team E's file scope** — do not modify it until the orchestrator approves. The placeholder component tests (`expect(true).toBe(true)`) pass today without jsdom. Real render tests will fail until one of the above options is applied.

### 2. D6 synthetic CSP crawl placeholder

`tests/e2e/csp-synthetic-crawl.spec.ts` is scaffolded but skipped via `test.skip`. It will be unskipped after:

- A4 reporting sink is wired
- The `top20Routes` array is filled out from the real sitemap (15 route comments are pre-stubbed in the file)

### 3. Playwright browser install in CI

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
