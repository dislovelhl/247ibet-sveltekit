# AGCO/iGaming Ontario Licence-Claim Activation Runbook

_Last updated: 2026-05-12_

## Purpose

Use this runbook only after legal/compliance has provided approved documentary evidence for the 247iBET operating entity, AGCO registration, iGaming Ontario operating agreement status, approved domains, and exact public wording.

This repository is the public web/acquisition/integration shell. It must not become the gaming backend, wallet, KYC system, payment processor, sportsbook engine, casino engine, or real-money transaction system during licence activation.

## Inputs required before code changes

Do not edit public licence claims until all inputs below are available:

1. Completed non-secret evidence metadata using either:
   - `docs/compliance/agco-license-evidence.template.json` for committed metadata, or
   - `docs/compliance/agco-license-evidence.local.json` for private activation rehearsal metadata.
   Required fields must contain concrete evidence references, not placeholders such as `TBD`, `pending`, `unknown`, `placeholder`, `not available`, or `N/A`, and not synthetic, mock, dummy, or `example.invalid` stand-ins.
2. Private evidence-system references for confidential documents and screenshots.
3. Exact legal operator entity and business/trade names covered by the licence.
4. AGCO registration number, `Internet Gaming Operator` registration type, non-future effective date, and current/non-expired expiry or renewal date.
5. iGaming Ontario operating agreement or equivalent Ontario activation evidence, with jurisdiction scope including `Ontario`, if Ontario play is offered.
6. AGCO/iGO go-live readiness references: Certificate of Registration, technology compliance confirmation, regulatory reporting setup, secure data/channel setup, and final go-live approval or outstanding conditions.
7. Approved domains/sites/brands, including whether `247ibet.ca` is covered.
8. Current iGaming Ontario directory listing name, current iGO category (`Casino`, `Sports Betting`, `Poker`, `Bingo`, or `Betting Exchange`), and non-future date shown by iGO.
9. Legal/compliance-approved public wording that includes the approved legal operator name, AGCO registration type, and AGCO registration number, plus non-future approval date and badge/logo rules.
10. Release owner sign-off that public pages may display the approved claim, recorded in `releaseGate.releaseOwnerNameOrRole` with a non-future `releaseGate.approvalDate` that is on or after the AGCO effective date, iGO listing date, and public-copy approval date.

## Activation steps

1. Create the gitignored local evidence scaffold with `pnpm compliance:agco:evidence:init`, then fill it without committing confidential documents.
2. Update `src/lib/ibet-brand.ts` with exact approved licence metadata only.
3. Replace verification-first public wording only in approved pages/components.
4. Keep all operational-gaming dependencies as handoffs to the separate gaming platform.
5. Update `tests/agco-licensing-boundary.test.ts` so it validates the exact approved fields and still blocks unapproved licence variants.
6. Confirm the separate gaming platform, not this repo, owns the AGCO/iGO operational go-live controls and that this repo only consumes public-safe handoff/API status.
7. Update `docs/compliance/agco-web-surface-control-matrix.md` with the approval reference and check date.
8. Update `docs/compliance/agco-completion-audit-2026-05-12.md` or create a new dated completion audit.
9. Run the verification gate below.

## Required verification gate

Run all commands from the repository root.

Evidence-only rehearsal, before public brand metadata is activated:

```bash
AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence
```

Final licence-claim activation, after exact public-safe brand licence metadata and approved public wording are in the diff:

```bash
pnpm compliance:agco:licensed
AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed
pnpm check
pnpm lint
pnpm test
pnpm build
pnpm compliance:agco
AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence
git diff --check
```

`pnpm compliance:agco` must pass in either the current no-documentary-proof posture or in approved-evidence mode after all required fields are filled. `pnpm compliance:agco:licensed` is the strict activation gate and must fail until release gates, brand licence metadata, and private evidence references are all complete. The change is not release-ready if any command fails, if public copy includes unapproved variants of the licence claim, or if any page implies this repo owns real-money account, wallet, payment, KYC, betting, odds, game, risk, or bonus execution.

The release evidence `releaseGate.mustRun` list must include the complete-evidence rehearsal (`AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence`), the bare strict gate (`pnpm compliance:agco:licensed`, proving the committed template cannot activate claims), and the private-evidence strict gate (`AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed`, proving the approved private evidence package can activate the exact public metadata).

## Rollback rule

If any licence evidence is disputed, expired, mismatched to the domain, or absent from the approved private evidence system, revert to the current no-proof posture:

- `IBET_PROFILE.agcoLicensed = false`
- `IBET_PROFILE.licences = []`
- public pages use verification-first official-source language
- no licence badges or regulator-logo confidence language

## Current status

As of 2026-05-12, this runbook has not been activated. The repository remains hardened for a no-documentary-proof public-web posture, and licence claims remain disabled.
