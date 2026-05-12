# Compliance Evidence File — jdzd.com / 247iBET Platform

**Review date**: 2026-05-04  
**Reviewer**: Antigravity AI — iGaming compliance, SEO, UX, and frontend implementation review  
**Scope**: Full-site compliance audit, risk classification, and implementation of fixes  
**Branch**: Current main branch (feat/design-system-2026)  
**Previous audit**: COMPLIANCE_AUDIT_v0.3.md (2026-04-29)

---

## 1. Executive Summary

### What changed

| Category | Changes Made |
|---|---|
| **Ontario page** | Removed "AGCO Licensed · 19+" badge (unsupported licensing claim). Replaced `IBetShowcase` "Play in Ontario" CTA (inducement) with `AffiliateDisclosure` + iGaming Ontario directory link. |
| **Sportsbook page** | Removed "New customer offer / Sports welcome bonus / Claim now" heroOffer card. Removed "Weekly bet perks / Join club" card. Removed "Best odds guarantee" trust strip item. Removed "Exclusive bonuses" trust strip item. Updated meta title/description to remove "odds boosts" framing. Removed "sportsbook bonuses Canada" from keywords. |
| **Casino page** | Removed "Canada's #1 Rated Online Casino" badge. Removed unsupported CAD payout-speed claim. Removed "Canadian Licensed" safety strip item. Changed "Instant Payouts" to "Interac Payouts". Fixed payout FAQ to include KYC/approval caveats. Fixed legality FAQ to remove misleading "millions play safely" claim. |
| **Fast-payouts page** | Updated title from "Fast Payout Casino Canada" to "Interac Casino Withdrawal Guide Canada". Removed "Institutional-grade tracking" claim. Removed "zero unnecessary delays" promise. Fixed "fastest available" FAQ answer. Softened image badge language. |
| **AffiliateDisclosure component** | Expanded disclosure text to include full AGCO-aware language: "compensation does not determine licensing status, legality, or user eligibility". Added `cta` variant for near-CTA placement. |
| **Prohibited language test** | Created `tests/prohibited-language.test.ts` as CI gate against regulatory regressions. Scans all public `.svelte` route files for 20 prohibited pattern categories (P0/P1/P2 severity). |
| **Editorial policy** | Added explicit licensing-boundary and affiliate-disclosure language: 247iBET public content must not be represented as AGCO licensed, iGaming Ontario registered, or an Ontario operator without official documentary proof. |
| **Responsible gambling** | Reframed responsible-gambling copy as public guidance, added visible 19+ language, kept Ontario/Alberta official support/self-exclusion resources, and clarified that account controls live on the separate operating platform. |
| **Bonus terms** | Reframed `/bonus-terms` as a noindex archived creative snapshot, not a current offer page or public inducement, with required verification of eligibility, jurisdiction, licensing, and current operating-platform terms. |

### Why it changed

jdzd.com / 247iBET positioned itself as both an editorial guide AND implied operator functionality in several places. The key risk areas were:

1. **"AGCO Licensed" badge on the Ontario page** — with `agcoLicensed = false` in `ibet-brand.ts`, this was a direct false claim.
2. **Sportsbook page inducement offers** — "Claim now", "Sports welcome bonus", "Bet club / Weekly bet perks", "New customer offer" are Ontario AGCO-prohibited public-facing inducement language under the AGCO's advertising and marketing standards for internet gaming.
3. **Unsupported speed/stat superlatives** — ranking and payout-speed superlatives are performance claims requiring documented methodology under AGCO Rule 4.
4. **"Canadian Licensed" on casino safety strip** — `ibet-brand.ts` sets `licences = []` and `agcoLicensed = false`, making this a false claim.

### Remaining risks

| Risk | Severity | Status | Owner action required |
|---|---|---|---|
| `/bonus-terms` page — archived promotional creative at public URL | HIGH | Mitigated 2026-05-12 | Noindex retained; copy reframed as archived creative only, not a current offer or Ontario availability claim. Legal/product sign-off still required before relying on any terms. |
| `rel="sponsored"` on `SafeExternalLink` — already present | PASS | ✅ | — |
| No above-fold affiliate disclosure on `/` homepage | MEDIUM | Mitigated 2026-05-12 | Disclosure appears near high-intent handoff surfaces; keep proximity during future hero/CTA edits. |
| No above-fold affiliate disclosure on `/sportsbook` | MEDIUM | Mitigated 2026-05-12 | Disclosure appears near high-intent handoff surfaces; keep proximity during future hero/CTA edits. |
| `editorial-policy` page noindex and thin content | MEDIUM | Mitigated 2026-05-12 | Added affiliate disclosure reference and conservative AGCO/iGO licensing-boundary statement. |
| Gamblers Anonymous Canada missing from `/responsible-gambling` | MEDIUM | Fixed before 2026-05-12 | Present in `supportLinks` as peer-support resource. |
| AGLC self-exclusion registry link missing | MEDIUM | Fixed before 2026-05-12 | AGLC voluntary self-exclusion and responsible-gambling resources present in `supportLinks`. |
| `19+` statement missing from `/responsible-gambling` page body | MEDIUM | Fixed before 2026-05-12 | Visible hero copy says minimum age is 19+ in Ontario and 18+ in Alberta. |
| `/ontario/online-casino` – description used payout-speed shorthand | LOW | Mitigated 2026-05-12 | Public copy now uses verification/caveat language rather than operator-speed promises. |
| Odds data in sportsbook/casino tables (e.g. `2.10`, `1.92`) | LOW | No change — static sample data clearly labeled as comparison | Label as "sample odds" more clearly |

---

## 2. Pages Reviewed

| Page | Review Status | Primary Issues Found |
|---|---|---|
| `/` (homepage) | ✅ Updated | Uses handoff-oriented CTAs, nearby affiliate disclosure, and verification-first catalogue/payment wording. |
| `/ontario` | ✅ Fixed | "AGCO Licensed" badge removed. "Play in Ontario" CTA replaced. |
| `/alberta` | ✅ Reviewed | "AGLC · 18+ · Pending 2026" badge — acceptable framing. Uses "Launch Watch" and "Market Tracker" — editorial. |
| `/sportsbook` | ✅ Fixed | Inducement offer cards removed/reframed. Trust strip corrected. Meta cleaned. |
| `/casino` | ✅ Fixed | Licensing badge removed. Speed superlatives removed. FAQ corrected. |
| `/fast-payouts` | ✅ Fixed | Title corrected. Guarantee language removed. FAQ answer corrected. |
| `/responsible-gambling` | ✅ Updated | Public guidance framing, 19+ body copy, Ontario/iGO support information, AGLC self-exclusion/responsible-gambling links, and Gamblers Anonymous resource present. |
| `/editorial-policy` | ✅ Updated | Added affiliate disclosure reference and explicit licensing/operator-status boundary. |
| `/bonus-terms` | ⚠️ Mitigated | Noindex archived creative snapshot. Copy now says it is not a current offer, public inducement, or Ontario availability representation; current terms/licensing/eligibility still require official verification. |
| `/deposit` | ✅ Updated | Public payment guidance only; no repo-owned deposit, wallet, or transaction-completion claims. |
| `/interac` | ✅ Updated | Public Interac guide only; exact 247iBET payout-time and account-funding promises removed. |
| `/interac-casino-canada` | ✅ Updated | Educational Interac guide only; unsupported 247iBET payout-time and operator-test claims removed. |

---

## 3. Official Sources Checked

| Source | URL | Relevance |
|---|---|---|
| AGCO (Alcohol and Gaming Commission of Ontario) | https://www.agco.ca/ | Ontario gaming regulation and licensing registry |
| iGaming Ontario | https://www.igamingontario.ca/en | Ontario market operator information and player resources |
| iGaming Ontario regulated market directory | https://www.igamingontario.ca/en/player/regulated-igaming-market | Official reference for currently listed regulated operator sites; use before making Ontario operator-status claims. |
| iGaming Ontario responsible gambling | https://www.igamingontario.ca/en/player/responsible-gambling | Official Ontario responsible-gambling information. |
| iGaming Ontario player FAQs | https://www.igamingontario.ca/en/player/player-faqs | Official Ontario operator self-exclusion FAQ. |
| AGCO Registrar Standards for Internet Gaming (2022) | https://www.agco.ca/sites/default/files/2022-02/Registrar-Standards-for-Internet-Gaming.pdf | Advertising and inducement standards for Ontario |
| AGLC (Alberta Gaming, Liquor and Cannabis) | https://www.aglc.ca/gaming | Alberta gaming regulation and licensing |
| AGLC Responsible Gambling | https://www.aglc.ca/gaming/responsible-gambling | Alberta responsible gambling resources |
| ConnexOntario | https://www.connexontario.ca/ | Ontario mental health and gambling support |
| Alberta Health Services (Gambling Help) | https://www.albertahealthservices.ca/amh/Page16759.aspx | Alberta gambling support line |

---

## 4. Claims Removed

| Claim | Page | Reason for removal |
|---|---|---|
| "AGCO Licensed · 19+" | `/ontario` | `agcoLicensed = false` in brand data; false claim |
| "Play in Ontario" CTA (IBetShowcase banner) | `/ontario` | Ontario public inducement |
| "New customer offer / Sports welcome bonus / Claim now" | `/sportsbook` | Ontario public inducement (AGCO advertising standards) |
| "Weekly bet perks / Join club" | `/sportsbook` | Ontario public inducement |
| "Best odds guarantee" | `/sportsbook` | Unsupported comparative claim |
| "Exclusive bonuses" | `/sportsbook` | Unsupported specific bonus claim |
| "odds boosts" | `/sportsbook` meta description | Promotional inducement language in SEO metadata |
| "sportsbook bonuses Canada" | `/sportsbook` keywords | Inducement keyword |
| "Canada's #1 Rated Online Casino" | `/casino` | Unsupported superlative |
| Unsupported CAD payout-speed superlative | `/casino` hero | Unsupported speed claim |
| "Canadian Licensed" | `/casino` safety strip | False licensing claim (`agcoLicensed = false`) |
| "Instant Payouts" | `/casino` feature card | Misleading guaranteed speed claim |
| "fastest available to Canadian players" | `/casino` FAQ | Unsupported comparative |
| "most withdrawals process within 24 hours" (operator promise) | `/casino` FAQ | Operator performance claim without evidence |
| "Fast Payout Casino Canada" | `/fast-payouts` title | Misleading framing for editorial guide |
| "Institutional-grade tracking of casino withdrawal speeds" | `/fast-payouts` meta | Unsupported methodology claim |
| "247iBET prioritizes same-day processing" | `/fast-payouts` | False operator promise |
| "zero unnecessary delays" | `/fast-payouts` | Performance guarantee |
| "1–4 Hours · Interac Verified · CAD Native" | `/fast-payouts` hero | Speed framing without caveat |
| "generally the quickest practical method" | `/fast-payouts` FAQ | Unsupported comparative superlative |
| large casino-game catalogue claim | `/` | Unsupported current catalogue-size claim for this public repo |
| "Interac payouts, typically 15-30 minutes after approval" | `/`, `/interac`, `/interac-casino-canada` | Exact operator payout timing requires live platform evidence and legal/compliance approval |
| "In 247iBET testing across 18 licensed Ontario operators..." | `/interac-casino-canada` | Unsupported methodology and licence/market-scope implication |

---

## 5. Claims Retained (with Evidence / Rationale)

| Claim | Page | Evidence / Rationale |
|---|---|---|
| Catalogue/payment education | `/`, `/casino`, `/interac`, `/deposit` | Retained as guide content only. Current game catalogue, payment limits, fees, and timing must be verified against the separate gaming platform and official operator terms. |
| Interac timing caveats | `/interac`, `/interac-casino-canada`, `/fast-payouts` | Retained as educational explanation that timing varies by operator approval, KYC/bonus review, bank-side processing, and live cashier rules. No exact 247iBET payout-time promise retained. |
| "AGLC · 18+ · Pending 2026" | `/alberta` | Alberta launch date is July 13, 2026 per AGLC announcement. "Pending" framing is accurate. |
| "19+ · Independent Guide · Verify Licensing" | `/ontario` | Factual age (Ontario 19+) and editorial framing. No licensing claim. |
| Province helpline numbers | Footer / `/responsible-gambling` | Ontario: 1-866-531-2600 (ConnexOntario); Alberta: 1-866-332-2322 (AHS) — verified public numbers. |
| Affiliate disclosure full text | All pages (via SEOFooter) | Required disclosure — retained and expanded. |

---

## 6. Open Questions

| # | Question | Urgency | Owner |
|---|---|---|---|
| 1 | Is 247iBET registered in the iGaming Ontario operator directory? | HIGH | Legal / operator |
| 2 | Does 247iBET hold a valid AGCO-issued internet gaming licence? | HIGH | Legal / operator |
| 3 | Is 247iBET registered as a private operator under AGLC for July 2026 launch? | HIGH | Legal / operator |
| 4 | What is the current game catalogue and which approved operator/platform owns it? | MEDIUM | Product / operator |
| 5 | What documented platform evidence, if any, supports payout-speed claims? | MEDIUM | Product / compliance |
| 6 | Should the `/bonus-terms` page be removed, set to draft, or gated? | HIGH | Legal / operator |
| 7 | Is there a self-exclusion registry link for Ontario (iGO) and Alberta (AGLC)? | HIGH | Compliance |
| 8 | Should Gamblers Anonymous Canada be added to `/responsible-gambling`? | MEDIUM | Editorial |

---

## 7. QA Checklist

- [x] No unsupported license claims on public pages
- [x] No "AGCO Licensed" badge without documentary proof
- [x] No Ontario public inducement CTAs ("Claim now", "Welcome bonus", "Claim bonus")
- [x] No KYC-light claims ("No verification required", "Instant withdrawal guaranteed")
- [x] No unsupported payout superlatives ("fastest", "zero delays", "guaranteed payout", "#1 Rated")
- [x] Affiliate disclosure visible in footer on all pages (via SEOFooter layout)
- [x] Affiliate disclosure expanded with AGCO-aware language (compensation ≠ licensing)
- [x] Responsible gambling footer links present
- [x] Province-aware eligibility language in Ontario/Alberta pages
- [x] Structured data does not imply operator status (Organization schema is editorial)
- [x] `SafeExternalLink` uses `rel="nofollow sponsored noopener noreferrer"`
- [x] Prohibited language CI gate test created
- [x] Above-fold/proximate affiliate disclosure near audited high-intent CTA surfaces
- [x] Self-exclusion/support links for Ontario and Alberta
- [x] Gamblers Anonymous Canada in `/responsible-gambling`
- [x] 19+ age statement in `/responsible-gambling` body copy
- [x] `/editorial-policy` licensing-boundary and affiliate-disclosure posture added
- [x] `/bonus-terms` public copy reframed as noindex archived creative, not a current offer or Ontario availability claim

---

## 8. Launch Recommendation

**Classification: Launch with caveats**

The public website has a sound compliance foundation with proper affiliate disclosure in the layout shell, responsible gambling links in all footers, province-aware framing, and educational CTA language on the homepage and province pages.

The changes in this review materially reduce the highest-risk items. After the 2026-05-12 content hardening pass, the main pre-submission items are:

1. **`/bonus-terms` legal/product sign-off** — the page is noindex and framed as archived creative only, but any current offer, eligibility, jurisdiction, wagering, or account-rule reliance still needs product/compliance confirmation.
2. **Above-fold affiliate disclosure** — proximity requirement near CTAs on `/`, `/casino`, `/sportsbook` still partially unresolved (footer disclosure alone is insufficient on mobile).
3. **Licensing proof** — do not add Ontario operator, AGCO licence, or iGaming Ontario registration claims unless official documentary evidence is available and checked against regulator sources.

**Do not represent jdzd.com or 247iBET as AGCO-licensed, iGaming Ontario-registered, or an Ontario regulated operator** until Questions #1 and #2 in the Open Questions section are answered with documentary evidence and checked against official regulator sources.

---

## 9. Required Owner Sign-Off Before Launch

| Area | Required sign-off |
|---|---|
| Licensing status claims | Legal / Compliance Officer |
| Bonus terms accuracy | Product Manager + Compliance |
| Province eligibility language | Legal / Compliance Officer |
| Responsible gambling resources completeness | Compliance Officer |
| Affiliate disclosure proximity to CTAs | Compliance Officer |
