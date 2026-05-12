# AGCO/iGaming Ontario Web Surface Control Matrix

_Last updated: 2026-05-12_

## Scope

This matrix applies to the 247iBET SvelteKit repository as a public web, SEO, acquisition, affiliate/operator-routing, responsible-gambling, and API-ready integration shell. It does **not** certify the separate gaming platform, and it does not permit this repository to claim AGCO/iGaming Ontario licensing until documentary evidence is approved.

## Official source anchors

Use these official sources when reviewing public claims:

- iGaming Ontario regulated market directory: <https://www.igamingontario.ca/en/player/regulated-igaming-market>
- iGaming Ontario player FAQs, including operator self-exclusion and centralized self-exclusion status: <https://www.igamingontario.ca/en/player/player-faqs>
- iGaming Ontario responsible gambling page: <https://igamingontario.ca/en/player/responsible-gambling>
- iGaming Ontario player homepage/logo guidance: <https://www.igamingontario.ca/en/player/players-homepage>
- iGaming Ontario steps to join the Ontario market: <https://www.igamingontario.ca/en/operator/steps-join-ontario-market>
- AGCO Registrar's Standards for Internet Gaming, including advertising/marketing and inducement controls: <https://www.agco.ca/sites/default/files/2022-02/Registrar-Standards-for-Internet-Gaming.pdf>
- AGCO guidance for iGaming operators on players at risk of harm: <https://agco.ca/en/lottery-and-gaming/guidance-igaming-operators-identifying-and-supporting-players-risk-harm>
- AGCO technology certification guidance for internet gaming: <https://www.agco.ca/en/book/export/html/245876>

The iGaming Ontario regulated-market directory was rechecked on 2026-05-12. The public directory text available then said it was accurate as of 2026-05-07 and no `247iBET` listing was found in the public page text. This is a public-source check only; it does not replace private legal evidence review.

## Control matrix

| Control area | Required public-web posture | Primary repo controls | Regression evidence |
|---|---|---|---|
| Licence / regulator claims | Do not claim `247iBET` is AGCO licensed, iGaming Ontario registered, regulator-approved, or an Ontario regulated operator until documentary evidence is approved. Use verification-first language and official-source links. | `src/lib/ibet-brand.ts`; `docs/compliance/agco-license-evidence-checklist.md`; `docs/compliance/agco-license-evidence.template.json`; `docs/compliance-evidence.md` | `tests/agco-licensing-boundary.test.ts`; `tests/regulatory-claims.test.ts` |
| Public web vs gaming platform boundary | This repo owns public content, routing, acquisition, SEO, analytics, and frontend handoff. The separate gaming platform owns accounts, wagering, wallet, KYC, payments, odds, games, risk, and bonus execution. | `docs/integration/gaming-platform-contract.md`; `docs/SECURITY.md`; `README.md`; `docs/ARCHITECTURE.md`; public copy across routes | `tests/integration-boundary.test.ts`; `tests/agco-licensing-boundary.test.ts` |
| Bonus and promotion surfaces | Avoid exact current-offer values, direct inducement language, and guaranteed eligibility unless legal/compliance approves current terms. Archived creative must be noindexed and clearly non-current. | `src/routes/bonus-terms/+page.svelte`; `src/routes/new-player-bonuses-canada/+page.svelte`; `src/routes/free-bets-canada/+page.svelte`; `src/lib/ibet-brand.ts` | `tests/agco-licensing-boundary.test.ts`; `tests/prohibited-language.test.ts` |
| Advertising and inducement controls | Public Ontario-facing surfaces must not advertise inducements, bonuses, credits, boosted odds, claim-now offers, or equivalent public promotional CTAs. Public copy should stay educational, comparison-oriented, and terms-verification-first unless legal/compliance confirms the exact channel and consent posture. | `docs/compliance-evidence.md`; `src/routes/bonus-terms/+page.svelte`; `src/routes/sportsbook/+page.svelte`; `src/routes/ontario/+page.svelte`; public metadata and CTA components | `tests/prohibited-language.test.ts`; `tests/agco-licensing-boundary.test.ts`; `scripts/agco-evidence-gate.mjs` |
| Affiliate/operator CTA routing | Handoffs must be disclosed and marked with sponsored/nofollow link attributes. CTA wording should describe review, comparison, guide, or handoff behavior rather than implying a transaction completed here. | `src/lib/components/SafeExternalLink.svelte`; `src/lib/components/Navbar.svelte`; `src/lib/components/StickyMobileCTA.svelte`; `src/routes/about/affiliate-disclosure/+page.svelte` | `tests/agco-licensing-boundary.test.ts`; `tests/integration-boundary.test.ts` |
| Responsible gambling and age framing | Public pages may provide education and official support links. Account-level limits, exclusions, interventions, or player monitoring belong to the operating platform. Age language must remain province-aware. Do not claim Ontario centralized self-exclusion is live unless the iGO source has changed and legal/compliance approves the updated wording. | `src/routes/responsible-gambling/+page.svelte`; `src/routes/guides/problem-gambling-signs/+page.svelte`; `src/routes/faq/+page.svelte`; `docs/integration/gaming-platform-contract.md` | `tests/agco-licensing-boundary.test.ts`; `tests/prohibited-language.test.ts` |
| Payments and payout claims | Do not guarantee withdrawal speed, deposit completion, payout completion, or bank-level outcomes from this public repo. Use caveated, operator-verified, current-terms wording. | `src/routes/fast-payouts/+page.svelte`; `src/routes/interac/+page.svelte`; `src/routes/interac/deposit/+page.svelte`; `src/routes/interac/withdraw/+page.svelte`; `src/routes/interac-casino-canada/+page.svelte` | `tests/agco-licensing-boundary.test.ts`; `tests/integration-boundary.test.ts` |
| Game / sportsbook functionality claims | Public pages may explain markets, game categories, odds concepts, and availability checks. They must not imply this repo offers real-money wagering, a sportsbook backend, casino game execution, or live betting transactions. | Event, sportsbook, casino, ranking, guide, and design-system route copy; `docs/integration/gaming-platform-contract.md` | `tests/agco-licensing-boundary.test.ts`; `tests/integration-boundary.test.ts` |
| Source freshness and review cadence | Regulator directory references must include check date/source context. Future licence activation requires exact public-directory reconciliation and private legal evidence. | `docs/compliance/agco-license-evidence-checklist.md`; `docs/compliance/agco-license-evidence.template.json`; this matrix | `tests/agco-licensing-boundary.test.ts`; release checklist review |
| Safe failure behavior | If a future gaming API is unavailable, show safe fallback content. Do not expose broken account, betting, wallet, deposit, withdrawal, KYC, or bonus UI; do not imply a transaction completed without gaming-platform confirmation. | `docs/integration/gaming-platform-contract.md`; frontend copy that marks future API dependencies | `tests/integration-boundary.test.ts` |
| Ontario go-live readiness | Public licence activation must not outrun AGCO/iGO operational readiness. The separate gaming platform owns certificate, technology compliance, regulatory reporting, secure channel, and go-live-condition controls; this repo only records public-safe references and displays approved public wording. | `docs/compliance/agco-license-evidence.template.json`; `docs/compliance/agco-license-activation-runbook.md`; `docs/integration/gaming-platform-contract.md` | `scripts/agco-evidence-gate.mjs`; `tests/agco-licensing-boundary.test.ts` |

## Licence-claim activation gate

Before any public page, schema, sitemap, workflow endpoint, metadata, badge, or component can claim AGCO/iGaming Ontario status, the release owner must complete the evidence template and obtain legal/compliance approval for exact wording:

1. Create or refresh the gitignored local evidence scaffold with `pnpm compliance:agco:evidence:init`, then fill `docs/compliance/agco-license-evidence.local.json` with private evidence references. Keep the committed template in its disabled no-proof posture unless legal/compliance explicitly approves non-secret metadata for commit.
2. Confirm legal operator identity, AGCO registration number/type/dates, iGaming Ontario operating agreement status, Ontario go-live readiness references, approved domain/brand list, and exact directory listing name/date/category.
3. Update `src/lib/ibet-brand.ts` only with approved metadata.
4. Update tests to validate exact approved fields and forbid any unapproved variants.
5. Run `pnpm check`, `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm compliance:agco`, `AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence`, `pnpm compliance:agco:licensed`, `AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed`, and `git diff --check`.

Until this gate is complete, `IBET_PROFILE.agcoLicensed` must remain `false`, `IBET_PROFILE.licences` must remain empty, and public copy must stay verification-first.
