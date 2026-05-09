# Testing Gaps and Quality Audit

## Test Suite Execution
A run of `pnpm check && pnpm lint && pnpm test` was performed on the repository.
- **Unit/Integration Tests**: 153 tests passed across 19 files.
- **Error Flagged**: A missing `jsdom` dependency caused a failure during the test environment setup (`ERR_MODULE_NOT_FOUND`). 

## Missing Tests for Migration
Since the migration is purely a Vercel-level 301 redirect, the following tests must be implemented externally (e.g., Playwright or Postman):
1. **Redirect Assertion Tests**: 
   - Assert `http://jdzd.com/foo` -> `https://247ibet.ca/foo` (Status 301)
   - Assert `https://www.jdzd.com/foo` -> `https://247ibet.ca/foo` (Status 301)
2. **E2E Canonical Checks**:
   - Crawl `247ibet.ca` to ensure `canonical` link tags match the root domain (no stray `jdzd.com` URLs injected through misconfigured env vars).
3. **Analytics Tests**:
   - Verify Vercel Analytics properly logs traffic originating from the 301 redirects.

## Action Required
- Run `pnpm install jsdom --save-dev` to fix the local vitest environment.
- Create a Playwright redirect test suite (`tests/redirects.test.ts`) to validate the cutover once the Vercel domains are attached.
