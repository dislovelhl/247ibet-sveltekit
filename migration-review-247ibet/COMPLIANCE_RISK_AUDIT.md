# Compliance Risk Audit

## Risky Claims & Wording
The following language requires legal and compliance review to ensure it accurately aligns with `247ibet.ca`'s current regulatory standing.

### 1. "Licensed" and "Regulated" Claims
- **Location**: `src/lib/components/VcuAiDashboard.svelte`
  - **Phrase**: `regulator: 'AGCO / iGaming Ontario'`
- **Location**: `src/styles/components.css`
  - **Phrase**: `.status-badge--licensed`
- **Location**: `src/lib/authors.ts`
  - **Phrase**: `credentials: ['AGCO compliance training', 'RGDAP certification']`
- **Location**: `src/lib/search-index.ts`
  - **Phrase**: `'Find regulated casino options...'`

**Risk Level**: High. 
**Action**: If 247iBET is *not* licensed by AGCO or iGaming Ontario, these references must be removed or heavily qualified as informational only to avoid regulatory fines. 

### 2. Payout Speed Promises
- **Location**: `src/lib/ibet-brand.ts` and `src/lib/site.ts`
  - **Phrase**: `'Lightning-fast Interac payouts (15-30 mins)'`
- **Location**: `src/lib/components/PayoutProgress.svelte`
  - **Phrase**: `'247iBET Interac payouts typically hit your account 15-30 minutes after operator approval.'`

**Risk Level**: Medium/High.
**Action**: While specific ("after operator approval"), guaranteeing payout times can cause compliance friction. Confirm this aligns with actual SLA capabilities and regulatory guidelines on inducements.

### 3. KYC and Age Verification
- **Location**: `src/lib/site.ts`
  - **Key**: `ageVerifiedKey: '247ibet_age_verified'`
- **Location**: `src/lib/components/PayoutTimeChecker.svelte`
  - **Phrases**: `'KYC complete'`, `'KYC friction'`

**Risk Level**: Medium.
**Action**: The site appears to rely on LocalStorage (`247ibet_age_verified`) for the age gate. Real-money operations will require backend KYC.

## Recommendations
- **Legal Review Needed**: Submit `PayoutProgress.svelte` and `ibet-brand.ts` strings to compliance for approval on payout speed claims.
- **Clarify Licensing**: If `247ibet.ca` operates offshore/unregulated in Ontario, remove AGCO claims immediately.
