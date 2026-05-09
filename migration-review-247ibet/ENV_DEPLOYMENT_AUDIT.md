# Environment and Deployment Audit

## Infrastructure
- **Platform**: Vercel (managed via `@sveltejs/adapter-vercel`)
- **Runtime**: `nodejs24.x` (configured in `svelte.config.js`)
- **CI/CD**: standard GitHub Actions / Vercel automated deployments.

## Environment Variables
The application relies on:
- `PUBLIC_SITE_URL`: Should be set to `https://247ibet.ca` in the production environment.
- `VERCEL_URL`: Used as a fallback.
- `CSP_REPORT_URI`: Used for Content Security Policy monitoring.

## Configurations
- **`svelte.config.js`**: Contains a rigorous Content Security Policy (CSP).
- **Domain Configuration**: The `jdzd.com` migration relies entirely on Vercel's domain management settings to configure the 301 redirects. 

## Risks & Actions
- **Risk**: Stale environment variables overriding the canonical URLs.
- **Action**: Verify that Vercel production environment variables for `247ibet.ca` do not have legacy `jdzd.com` URLs hardcoded in `PUBLIC_SITE_URL` or custom Vercel edge configs.
- **Action**: Cache invalidation is not highly critical since the redirect happens at the Vercel edge level before the SvelteKit cache is hit.
