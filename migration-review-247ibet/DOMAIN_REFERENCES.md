# Domain and Routing Audit

## 247ibet.ca References
The application is already universally bound to the `247ibet.ca` domain. 

- **`src/lib/site.ts`**:
  - `DEFAULT_SITE_URL` = `https://247ibet.ca`
  - `PARTNER.url` = `https://247ibet.ca/home`
  - `PARTNER.casinoUrl` = `https://247ibet.ca/casino`
  - `SITE.sameAs` links directly to social profiles (`@247ibet`).
- **Tests**:
  - `tests/pages.test.ts` expects canonical canonical links for `https://247ibet.ca/...`

## jdzd.com References
There are **zero active code references** to `jdzd.com` within `src/`.
References are purely historical/planning:
- `docs/SUBDOMAIN_AND_UI_MAPPING_PLAN.md`: Explicitly dictates that `jdzd.com` will be mapped to `247ibet.ca` via 301 redirects at the Vercel level.
- `videos/jdzd-reference-capture/`: Contains historical artifacts from the `jdzd.com` site.

## CORS, Cookies, and Canonical URLs
- **Canonical URLs**: `src/lib/site.ts` has a `canonicalUrl()` helper that utilizes `SITE.url` (`https://247ibet.ca`). This ensures all pages naturally self-canonicalize correctly to the new domain.
- **Cookies/Storage**: The only localStorage keys defined (`247ibet_age_verified`, `247ibet_newsletter_dismissed`) operate on the active domain. Legacy keys (`canadacasa_age_verified`) exist but no `jdzd` keys are present.
- **API Endpoints**: The backend API is hardcoded to `https://boapi.ibet247.ca`.

## Action Required
- **No codebase changes needed** for domain references. The repo is already pristine for `247ibet.ca`.
