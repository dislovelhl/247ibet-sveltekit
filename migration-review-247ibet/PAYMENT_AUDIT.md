# Payment and Transaction Flow Audit

## Payment Processors
The codebase heavily features informational UI components discussing **Interac** and **Crypto** payment methods.
- `src/lib/components/PayoutProgress.svelte`
- `src/lib/components/PayoutTimeChecker.svelte`
- `src/lib/ibet-brand.ts` (e.g., `withdrawalSpeed`, `paymentMethods: ['Interac']`)

## Transaction Infrastructure
- **Implementation**: There are **no active payment gateway integrations** (e.g., Stripe, Interac APIs, Crypto wallets) within this repository. 
- **Webhooks**: There are no webhook endpoints receiving transaction statuses.

## Risk Assessment
- **Migration Risk**: Low. Since this repo acts as a marketing/informational portal, migrating domains will not break live deposit/withdrawal pipelines.
- **Dependencies**: Any "Deposit" or "Play Now" CTAs redirect to external operator endpoints or backend APIs (`https://boapi.ibet247.ca`). As long as `boapi.ibet247.ca` accepts traffic originating from `247ibet.ca`, the payment funnel remains intact.

## Actions Required
- QA test all "Deposit" and "Play Now" CTAs after migration to ensure they correctly append affiliate/tracking tags and resolve to the correct backend portal.
