# Open Questions

## 1. Compliance and Licensing
The `247ibet.ca` codebase asserts it is "regulated" and mentions "AGCO / iGaming Ontario" in components (`VcuAiDashboard.svelte`, `authors.ts`). 
- **Question**: Does `247ibet.ca` hold an active AGCO license? If not, these references represent a severe legal risk and must be scrubbed before traffic is redirected.

## 2. Affiliate/Backend Systems
The repository sends traffic to external URLs (e.g., `https://boapi.ibet247.ca`).
- **Question**: Is `boapi.ibet247.ca` prepared to receive traffic explicitly originating from `247ibet.ca`? Do affiliate tracking IDs (`utmSource: '247ibet'`) align with the backend's expectations?

## 3. SEO Equity
- **Question**: Are there high-value backlinks pointing to specific `jdzd.com` subpages that need precise mapping, or is the wildcard 301 redirect sufficient for all traffic?

## 4. Legacy Users
- **Question**: Do users of `jdzd.com` expect to log in to `247ibet.ca` using their old credentials? Since there is no user DB in this frontend, how is the backend handling user account merges, if at all?
