# User Account, Auth, and Session Audit

## Session Storage and Cookies
- **Local Storage Keys**: The frontend utilizes `localStorage` for UI state persistence rather than secure cookies.
  - `247ibet_age_verified`
  - `247ibet_newsletter_dismissed`
  - Legacy mapping exists for `canadacasa_age_verified` and `canadacasa_newsletter_dismissed` to maintain state. There is **no `jdzd` legacy key**.

## Authentication Flow
- **Current State**: The repository does **not** contain a full user database, OAuth implementation, JWT middleware, or payment token storage. It functions primarily as an informational/affiliate front-end.
- **Server Utilities**: `src/lib/server/auth.ts` implements a basic `timingSafeEqual` function from `node:crypto`, implying some minimal backend auth logic (possibly for admin dashboards or webhook validation).

## Migration Risks
- **Account Portability**: N/A. Since there is no user database in this frontend repo, there are no passwords, KYC records, or funds to securely port.
- **Cross-Domain Sessions**: N/A. `jdzd.com` users will simply be redirected to `247ibet.ca`. Because age-verification is client-side, they may be prompted to re-verify their age upon their first visit to the new domain.

## Action Plan
- Ensure `247ibet.ca` privacy policy covers the data collected.
- No user-data migration scripts are necessary for this repository.
