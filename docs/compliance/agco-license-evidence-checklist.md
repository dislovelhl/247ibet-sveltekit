# AGCO / iGaming Ontario Licence Evidence Checklist

This file defines the evidence required before the public 247iBET web platform may claim any of the following:

- AGCO licensed
- iGaming Ontario registered
- Ontario regulated operator
- fully registered and approved Operator
- equivalent regulator-approved/licensed language

## Current repository state

As of 2026-05-12:

- `IBET_PROFILE.agcoLicensed` is `false`.
- `IBET_PROFILE.licences` is empty.
- The public site is intentionally written in verification-first language.
- The iGaming Ontario regulated-market directory rechecked on 2026-05-12 said it was accurate as of 2026-05-07 and did not show a `247iBET` listing.
- The user states that a licence exists, but no documentary proof has been added to this repository.

## Evidence required before enabling licence claims

Use `docs/compliance/agco-license-evidence.template.json` as the committed intake shape for non-secret metadata. For a real activation rehearsal, initialize a gitignored local scaffold, fill the non-secret metadata plus private evidence references, and run:

```bash
pnpm compliance:agco:evidence:init
```

The initializer creates `docs/compliance/agco-license-evidence.local.json` from the committed template and refuses to overwrite an existing local file unless `--force` is passed directly to `scripts/agco-evidence-init.mjs`.

```bash
AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence
```

This complete-evidence rehearsal validates the private evidence fields without requiring public brand metadata to be activated yet. `docs/compliance/agco-license-evidence.local.json`, other `docs/compliance/*.local.json` files, and `docs/compliance/*.private.json` files are gitignored. Confidential licence documents, screenshots, and legal approvals should live in the private legal evidence system and be referenced from the evidence JSON rather than committed directly.

Do not use placeholders such as `TBD`, `pending`, `unknown`, `placeholder`, `not available`, or `N/A` in any required evidence field. Do not use synthetic, mock, dummy, or `example.invalid` references as stand-ins for private legal evidence. The AGCO evidence gate rejects placeholder/demo values in approved-evidence mode.

Add these artifacts or references in a private/legal evidence system before changing public copy:

1. **Legal operator identity**
   - legal entity name;
   - business/trade names covered by the licence;
   - domain(s) covered by the approval, including whether `247ibet.ca` is explicitly covered.

2. **AGCO registration evidence**
   - AGCO registration number;
   - registration type/category, which must be `Internet Gaming Operator` before this public web repo may publish Ontario operator-status claims;
   - effective date that is not future-dated;
   - expiry or renewal date that is current and not expired;
   - public registry URL or official document reference.

3. **iGaming Ontario operating agreement evidence**
   - iGO operating agreement confirmation;
   - approved site/brand list;
   - jurisdiction scope, which must include `Ontario` before this public web repo may publish Ontario operator-status claims;
   - launch/activation conditions.

4. **Ontario go-live readiness references**
   - AGCO Certificate of Registration reference;
   - technology compliance confirmation reference;
   - regulatory reporting setup reference;
   - secure data/channel setup reference;
   - final go-live approval or outstanding launch-condition reference.

   iGaming Ontario's public "Steps to Join the Ontario Market" guidance says Operators must work with both iGO and AGCO before being allowed to provide products/services to Ontario players; it also states that executing the iGO Operating Agreement requires a Certificate of Registration as an Internet Gaming Operator from AGCO and completion of other AGCO/iGO steps.

5. **Regulator-directory reconciliation**
   - exact iGaming Ontario directory listing name;
   - listing date shown by iGO that is not future-dated;
   - directory category using the current iGO taxonomy: Casino, Sports Betting, Poker, Bingo, or Betting Exchange;
   - screenshot or archived evidence if the directory changes.

6. **Public-copy approval**
   - legal/compliance approver;
   - approval date that is not future-dated;
   - approved licence wording that includes the approved legal operator name, AGCO registration type, and AGCO registration number;
   - approved badge/logo usage rules;
   - pages/components allowed to display the claim.

7. **Release-owner activation sign-off**
   - release owner name or role recorded in `releaseGate.releaseOwnerNameOrRole`;
   - release approval date recorded in `releaseGate.approvalDate`, not future-dated and not earlier than the AGCO effective date, iGO listing date, or public-copy approval date;
   - confirmation that every command in `releaseGate.mustRun` has passed after the approved wording and brand metadata changes.

## Required implementation changes after evidence is approved

Only after the evidence above is approved:

1. Update `src/lib/ibet-brand.ts` with exact licence metadata.
2. Replace generic verification-first language with approved regulator wording only where approved.
3. Update `tests/agco-licensing-boundary.test.ts` so it validates exact documentary fields instead of merely preventing licence claims.
4. Re-run:
   - `pnpm check`
   - `pnpm lint`
   - `pnpm test`
   - `pnpm build`
   - `pnpm compliance:agco`
   - `AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence`
   - `pnpm compliance:agco:licensed` to prove the default committed evidence cannot accidentally activate claims
   - `AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed` after exact public-safe brand licence metadata is activated
   - `git diff --check`
5. Attach legal sign-off to the release record.

## Non-negotiable guardrail

Do not add licence badges, iGO-logo confidence language, or “AGCO licensed” claims to public pages based only on verbal confirmation. The public site may say to verify licensing against official sources until documentary evidence is present and approved.
