# Security Policy

## 1. Threat Model

247iBET is a public Canadian iGaming brand, SEO, acquisition, responsible-gambling, and platform-handoff web layer. The separate gaming platform owns real-money wagering, player accounts, wallet, payments, KYC, odds, and game execution. This site handles public content, affiliate/operator handoff links, age-gated presentation, responsible-gambling disclosures, and admin-only editorial/lead surfaces. Threats of primary concern are: cross-site scripting (XSS) attacks injecting malicious scripts into public handoff or content surfaces; clickjacking on CTA pages; information disclosure via admin surfaces; and third-party supply-chain compromise through injected analytics or CDN scripts. The admin dashboard may aggregate affiliate and signup/lead metadata — unauthorized access would expose partner intelligence. All defenses are layered: CSP limits script execution, SvelteKit server routes gate admin access, and feature flags provide an additional kill switch.

## 2. Known Accepted Risks

### HIGH — undici CVEs (upstream block)

Three HIGH-severity CVEs affect the `undici` HTTP client, which is pulled in transitively by `@sveltejs/kit` and related `@workflow` packages:

| CVE | Summary |
|-----|---------|
| CVE-2025-47279 | Request smuggling via malformed headers |
| CVE-2025-22150 | Insufficient randomness in multipart boundaries |
| CVE-2024-30260 | Authorization header not stripped on cross-origin redirect |

**Why accepted**: These CVEs are in `undici` versions pinned by upstream SvelteKit. We cannot patch them unilaterally without forking. They affect server-to-server HTTP requests made by the framework internals, not browser-facing endpoints.

**Watch process**: Subscribe to the SvelteKit GitHub releases feed. On any SvelteKit patch that bumps `undici`, update immediately and run `pnpm audit` to verify resolution. Review quarterly at minimum.

## 3. CSP Policy

### Architecture

SvelteKit is configured with `csp.mode: 'auto'` in `svelte.config.js`. In `auto` mode, SvelteKit generates a cryptographic nonce for each server-side render and injects it into every `<script>` and `<style>` tag it controls. This nonce is unique per request and unguessable by attackers.

The Vercel `Content-Security-Policy-Report-Only` header in `vercel.json` mirrors the policy in report-only mode for monitoring purposes.

### What removing `'unsafe-inline'` from script-src protects against

`'unsafe-inline'` permits any inline `<script>` block or `javascript:` URL to execute — the primary XSS vector in modern browsers. Removing it means:

- Injected inline scripts from XSS attacks are blocked by the browser.
- Only scripts with the correct server-issued nonce (or matching an explicit hash) execute.
- `'strict-dynamic'` (CSP3) is added alongside: it allows nonce-trusted scripts to dynamically load further scripts, enabling modern bundlers and analytics loaders while keeping the baseline restriction.

### How to add a new first-party script

**Option A — SvelteKit-managed (preferred)**: Place the script inside a `.svelte` component or `+layout.svelte`. SvelteKit automatically injects the nonce attribute. No config change needed.

**Option B — External script (e.g., a new analytics vendor)**: Add the script's origin to `script-src` in both `svelte.config.js` (the `directives` block) and the CSP string in `vercel.json`. Example: `'https://cdn.newvendor.com'`. Avoid `'unsafe-inline'` — use the vendor's nonce-compatible loader if available.

**Option C — Hash allowlisting**: For a small static inline script that cannot be nonced, compute its SHA-256 hash (`openssl dgst -sha256 -binary script.js | openssl base64`) and add `'sha256-<hash>'` to `script-src`. Hashes are brittle — any whitespace change breaks them.

## 4. Admin Surface

### Double-gate architecture

All routes under `/admin/*` are protected by two independent layers:

**Gate 1 — Feature flag** (`ADMIN_ENABLED` env var):

```ts
if (env.ADMIN_ENABLED !== 'true') {
  error(404, 'Not Found');
}
```

The env var defaults to absent/unset on all Vercel deployments (preview and production). An absent var evaluates as `undefined !== 'true'`, so the 404 fires. Returning 404 rather than 401 or 403 minimizes information disclosure — an attacker scanning routes gets no confirmation that an admin surface exists.

**Gate 2 — Token-backed session cookie** (`ibet_admin_session`):

`requireAdminSession()` compares the cookie value against `ADMIN_TOKEN` with constant-time equality. Missing or mismatched tokens redirect to `/admin/login?redirectTo=...` instead of exposing the protected page. The `/admin/login` portal accepts the authorization token, sets an HTTP-only, Secure, `SameSite=Strict` cookie for 24 hours, and the logout action clears that cookie.

The login route is also best-effort rate limited per client key and emits structured audit logs for login success, failure, rate limiting, and logout events. Those logs intentionally exclude the raw token.

To enable the admin surface on a deployment, set both `ADMIN_ENABLED=true` and `ADMIN_TOKEN` in the Vercel project environment variables for that environment only. The feature flag remains the outer kill switch even though the token-based login flow is shipped.

## 5. Reporting a Vulnerability

To report a security vulnerability in this project:

**Email**: security@247ibet.ca (placeholder — update before public launch)

**Process**:
1. Email the address above with a description of the vulnerability, steps to reproduce, and potential impact.
2. Do not open a public GitHub issue for security vulnerabilities.
3. You will receive an acknowledgment within 48 hours and a resolution timeline within 7 days.
4. We follow responsible disclosure: we ask for 90 days to remediate before public disclosure.

For urgent/critical issues affecting live user data, include "URGENT" in the subject line.

## Related documentation

- [Compliance audit](COMPLIANCE_AUDIT_v0.3.md) — affiliate, responsible-gambling, and terms findings that intersect with security posture.
- [CI quality gates](CI.md) — required checks before pushing security-sensitive changes.
- [Testing guide](TESTING.md) — unit and E2E test commands for validating security fixes.
