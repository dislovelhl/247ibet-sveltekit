# Compliance Audit v0.3 — AGCO/iGO Public-Web Hardening

**Date:** 2026-05-12
**Scope:** 247iBET SvelteKit public web platform: brand/acquisition pages, affiliate CTAs, responsible-gambling content, archived promotion surfaces, regulatory-copy guardrails, and public-web/gaming-platform boundary.
**Architecture boundary:** This repository is the public web, SEO, acquisition, compliance-content, and API-ready integration shell. The separate gaming platform owns operational gaming, player accounts, wallet, KYC, payments, odds, game execution, and any regulated transactional flows.

## Executive status

**Current engineering verdict:** Compliance-hardened for public-web launch posture, with legal-proof caveats.

The prior v0.3 audit identified high-risk AGCO/iGO editorial and affiliate issues. Those engineering items have now been mitigated in code and tests:

- affiliate handoff links use sponsored/nofollow relationship attributes;
- high-traffic public CTAs have nearby affiliate disclosure;
- responsible-gambling pages include visible age copy and official Ontario/Alberta resources;
- archived bonus creative is noindex and no longer exposes exact current-offer values in public 247iBET bonus surfaces;
- public copy preserves the separate gaming-platform boundary; and
- tests guard against unsupported AGCO/iGaming Ontario licensing claims.

**Legal caveat:** The user states that 247iBET has a licence, but this repository does not currently contain documentary proof, a licence number, an iGaming Ontario operator contract reference, or a regulator-directory record for 247iBET. `docs/compliance/agco-license-evidence-checklist.md` now defines the required proof package before licence claims are enabled. Until those artifacts are added and verified, the public site must continue to avoid stating that 247iBET is AGCO licensed, iGaming Ontario registered, or an Ontario regulated operator.

## Official-source checks

| Source | Current engineering use | Status |
|---|---|---|
| iGaming Ontario regulated market directory | Used as the official source before Ontario operator-status claims. The directory says it is accurate as of 2026-05-07. | Rechecked 2026-05-12; no `247iBET` listing found in the current public directory during this hardening pass. |
| iGaming Ontario player FAQs | Used for the rule that fully regulated Ontario operators show the iGO logo and that operators must be registered/approved. | Referenced in docs and responsible-gambling/support context. |
| iGaming Ontario responsible gambling | Used for Ontario responsible-gambling resource routing. | Linked from `/responsible-gambling`. |
| AGLC responsible gambling | Used for Alberta responsible-gambling/self-exclusion resource routing. | Linked from `/responsible-gambling`. |
| AGCO Registrar Standards for Internet Gaming | Used as advertising/inducement and responsible-gambling context. | Referenced as compliance evidence; legal review still required before certification claims. |

## Current control checklist

| Control | Evidence | Status |
|---|---|---|
| Public-web/gaming-platform boundary | `docs/integration/gaming-platform-contract.md`, `docs/ARCHITECTURE.md`, `README.md`, `tests/integration-boundary.test.ts` | PASS |
| No unsupported AGCO/iGO licence claim | `IBET_PROFILE.agcoLicensed === false`, `licences === []`, `tests/agco-licensing-boundary.test.ts`, `tests/prohibited-language.test.ts`, `docs/compliance/agco-license-evidence-checklist.md` | PASS until proof is added |
| Affiliate link relationship attributes | `SafeExternalLink.svelte`, `Navbar.svelte`, `StickyMobileCTA.svelte`, AGCO boundary tests | PASS |
| Above-fold/proximate affiliate disclosure | `/`, `/casino`, `/deposit`, `/interac`, `/sportsbook`, footer disclosure, sticky mobile disclosure | PASS for audited high-traffic surfaces |
| Responsible-gambling content | `/responsible-gambling` includes 19+ Ontario/Alberta copy, ConnexOntario, AHS, iGO, AGLC, Gamblers Anonymous Canada, and platform-control boundary | PASS |
| Archived bonus terms | `/bonus-terms` is `noindex,nofollow`, framed as archived creative, not current offer/inducement, and requires current platform verification | PASS with legal caveat |
| Exact 247iBET bonus-value exposure | Public 247iBET bonus creative data and new-player page now avoid exact C$ values/free-spin counts | PASS |
| Public inducement language | `tests/prohibited-language.test.ts` and AGCO boundary tests scan public route copy | PASS |
| Current no-proof build/test guardrails | `pnpm check`, `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm compliance:agco`, `git diff --check` | PASS in latest hardening run; build emitted warning-only package/version-resolution and Vite/Svelte externalization notices |
| Strict licence-claim activation guardrail | `pnpm compliance:agco:licensed` | Expected to fail until documentary evidence, release-gate approval, and exact brand licence metadata are present |

## Remaining launch blockers for a licensed-operator claim

These are not SvelteKit implementation blockers, but they are required before the site can say “AGCO licensed”, “iGaming Ontario registered”, “regulated Ontario operator”, or equivalent:

1. Add documentary proof to a private/legal evidence location outside public marketing copy:
   - AGCO registration number or official registration record;
   - legal operator entity name;
   - iGaming Ontario operating agreement confirmation, if Ontario play is offered;
   - approved brand/site URL(s) covered by the registration/agreement;
   - effective date, expiry/renewal date, and jurisdiction scope.
2. Reconcile brand naming: confirm whether the regulated entity/site is `247iBET`, `247ibet.ca`, `jdzd.com`, or another legal/operator entity.
3. Re-run the iGaming Ontario directory check and record the exact official listing date.
4. Obtain legal/compliance sign-off before changing `IBET_PROFILE.agcoLicensed` from `false` or adding licence badges.
5. If licence proof is added, update tests to require exact documentary fields rather than generic marketing claims.

## Final positioning

This repo should be described as:

> A compliance-hardened SvelteKit public web platform for the 247iBET brand, built for SEO growth, acquisition, affiliate/operator routing, responsible-gambling content, public-web compliance guardrails, API integration, CMS expansion, analytics, and future AI-assisted content workflows.

Do **not** describe this repo as:

- the gaming platform;
- a sportsbook backend;
- a casino backend;
- a payment platform;
- a player wallet;
- a KYC system;
- a real-money gaming engine; or
- AGCO/iGO licensed until documentary proof is added and verified.
