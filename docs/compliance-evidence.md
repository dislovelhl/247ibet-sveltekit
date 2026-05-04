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
| **Casino page** | Removed "Canada's #1 Rated Online Casino" badge. Removed "lightning-fast CAD payouts" claim. Removed "Canadian Licensed" safety strip item. Changed "Instant Payouts" to "Interac Payouts". Fixed payout FAQ to include KYC/approval caveats. Fixed legality FAQ to remove misleading "millions play safely" claim. |
| **Fast-payouts page** | Updated title from "Fast Payout Casino Canada" to "Interac Casino Withdrawal Guide Canada". Removed "Institutional-grade tracking" claim. Removed "zero unnecessary delays" promise. Fixed "fastest available" FAQ answer. Softened image badge language. |
| **AffiliateDisclosure component** | Expanded disclosure text to include full AGCO-compliant language: "compensation does not determine licensing status, legality, or user eligibility". Added `cta` variant for near-CTA placement. |
| **Prohibited language test** | Created `tests/prohibited-language.test.ts` as CI gate against regulatory regressions. Scans all public `.svelte` route files for 20 prohibited pattern categories (P0/P1/P2 severity). |

### Why it changed

jdzd.com / 247iBET positioned itself as both an editorial guide AND implied operator functionality in several places. The key risk areas were:

1. **"AGCO Licensed" badge on the Ontario page** — with `agcoLicensed = false` in `ibet-brand.ts`, this was a direct false claim.
2. **Sportsbook page inducement offers** — "Claim now", "Sports welcome bonus", "Bet club / Weekly bet perks", "New customer offer" are Ontario AGCO-prohibited public-facing inducement language under the AGCO's advertising and marketing standards for internet gaming.
3. **Unsupported speed/stat superlatives** — "Canada's #1 Rated", "lightning-fast", "fastest available", "zero delays" are performance claims requiring documented methodology under AGCO Rule 4.
4. **"Canadian Licensed" on casino safety strip** — `ibet-brand.ts` sets `licences = []` and `agcoLicensed = false`, making this a false claim.

### Remaining risks

| Risk | Severity | Status | Owner action required |
|---|---|---|---|
| `/bonus-terms` page — 200% / 40× wagering content at live canonical URL | HIGH | Not fixed in this pass | Needs noindex validation + age gate addition |
| `rel="sponsored"` on `SafeExternalLink` — already present | PASS | ✅ | — |
| No above-fold affiliate disclosure on `/` homepage | MEDIUM | Partially addressed via component upgrade | Add `<AffiliateDisclosure />` near hero CTA on `/+page.svelte` |
| No above-fold affiliate disclosure on `/sportsbook` | MEDIUM | Pending | Add `<AffiliateDisclosure />` near hero section |
| `editorial-policy` page noindex and thin content | MEDIUM | Not fixed | Needs affiliate disclosure reference and AGCO posture statement |
| Gamblers Anonymous Canada missing from `/responsible-gambling` | MEDIUM | Not fixed | Add to `supportLinks` array |
| AGLC self-exclusion registry link missing | MEDIUM | Not fixed | Add `aglc.ca/responsible-gambling` link |
| `19+` statement missing from `/responsible-gambling` page body | MEDIUM | Not fixed | Add to visible page body text |
| `/ontario/online-casino` – description says "fast payouts" | LOW | Not fixed in this pass | Review and soften |
| Odds data in sportsbook/casino tables (e.g. `2.10`, `1.92`) | LOW | No change — static sample data clearly labeled as comparison | Label as "sample odds" more clearly |

---

## 2. Pages Reviewed

| Page | Review Status | Primary Issues Found |
|---|---|---|
| `/` (homepage) | ✅ Reviewed | Good — uses "Visit Partner Site" CTAs, has affiliate disclaimer in hero. `500+ games` citation present. |
| `/ontario` | ✅ Fixed | "AGCO Licensed" badge removed. "Play in Ontario" CTA replaced. |
| `/alberta` | ✅ Reviewed | "AGLC · 18+ · Pending 2026" badge — acceptable framing. Uses "Launch Watch" and "Market Tracker" — editorial. |
| `/sportsbook` | ✅ Fixed | Inducement offer cards removed/reframed. Trust strip corrected. Meta cleaned. |
| `/casino` | ✅ Fixed | Licensing badge removed. Speed superlatives removed. FAQ corrected. |
| `/fast-payouts` | ✅ Fixed | Title corrected. Guarantee language removed. FAQ answer corrected. |
| `/responsible-gambling` | ⚠️ Partial | Existing structure good. Missing: 19+ in body, AGLC link, Gamblers Anonymous. |
| `/editorial-policy` | ⚠️ Partial | noindex + thin content. Needs affiliate disclosure reference. |
| `/bonus-terms` | ❌ Not fixed | 200%/40× on live URL — highest remaining risk. |
| `/deposit` | ✅ Reviewed | Good framing — uses "Varies" and "KYC required" language. |
| `/interac-casino-canada` | ✅ Reviewed | Educational framing. No unsupported speed guarantee found in primary copy. |

---

## 3. Official Sources Checked

| Source | URL | Relevance |
|---|---|---|
| AGCO (Alcohol and Gaming Commission of Ontario) | https://www.agco.ca/ | Ontario gaming regulation and licensing registry |
| iGaming Ontario | https://www.igamingontario.ca/en | Ontario market operator directory and public registrant list |
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
| "lightning-fast CAD payouts" | `/casino` hero | Unsupported speed claim |
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

---

## 5. Claims Retained (with Evidence / Rationale)

| Claim | Page | Evidence / Rationale |
|---|---|---|
| "500+ games, including slots and live dealer" (hero trust card) | `/` | Present in review materials per brand data. Caveated as "cited in review materials" in comparison table. Marked as "Verify current catalogue" check. |
| "Interac payouts, typically 15-30 minutes after approval" | `/` | Conditional — "after approval" caveat included. KYC and bank delay caveats present. Not a guarantee. |
| "Interac payouts may complete within 15–30 minutes after operator approval for verified accounts" | `/casino` FAQ (new) | Conditional framing with KYC/approval caveats. "May" qualifier. |
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
| 4 | What is the current game count (for "500+" claim validation)? | MEDIUM | Product |
| 5 | What is the documented methodology for payout speed data? | MEDIUM | Editorial |
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
- [x] Affiliate disclosure expanded with AGCO-compliant language (compensation ≠ licensing)
- [x] Responsible gambling footer links present
- [x] Province-aware eligibility language in Ontario/Alberta pages
- [x] Structured data does not imply operator status (Organization schema is editorial)
- [x] `SafeExternalLink` uses `rel="nofollow sponsored noopener noreferrer"`
- [x] Prohibited language CI gate test created
- [ ] Above-fold affiliate disclosure near hero CTAs on `/`, `/casino`, `/sportsbook` (partial)
- [ ] Self-exclusion registry links for Ontario and Alberta
- [ ] Gamblers Anonymous Canada in `/responsible-gambling`
- [ ] 19+ age statement in `/responsible-gambling` body copy
- [ ] `/bonus-terms` 200%/40× content resolved or gated

---

## 8. Launch Recommendation

**Classification: Launch with caveats**

The platform has a sound compliance foundation with proper affiliate disclosure in the layout shell, responsible gambling links in all footers, province-aware framing, and educational CTA language on the homepage and province pages.

The changes in this review materially reduce the highest-risk items. However, three areas must be resolved before AGCO/AGLC editorial review submission:

1. **`/bonus-terms`** — 200% / 40× bonus figures on a live canonical URL without age gate is the single highest remaining regulatory risk.
2. **Above-fold affiliate disclosure** — Proximity requirement near CTAs on `/`, `/casino`, `/sportsbook` still partially unresolved (footer disclosure alone is insufficient on mobile).
3. **Self-exclusion registry links** — iGO and AGLC self-exclusion links are absent from `/responsible-gambling`. AGCO Registrar Standards § 4.3 expects these.

**Do not represent jdzd.com as AGCO-licensed or iGaming Ontario-registered** until Questions #1 and #2 in the Open Questions section are answered with documentary evidence.

---

## 9. Required Owner Sign-Off Before Launch

| Area | Required sign-off |
|---|---|
| Licensing status claims | Legal / Compliance Officer |
| Bonus terms accuracy | Product Manager + Compliance |
| Province eligibility language | Legal / Compliance Officer |
| Responsible gambling resources completeness | Compliance Officer |
| Affiliate disclosure proximity to CTAs | Compliance Officer |
