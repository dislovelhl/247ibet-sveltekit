# Compliance Audit — Pre-Production v0.3

**Date**: 2026-04-29
**Scope**: Workstreams A2 (affiliate disclosure), A3 (responsible gambling links), A5 (terms accuracy).
**Methodology**: Read-only static audit (grep + file read). Browser-based DOM verification deferred to Workstream G2 smoke test.
**Branch audited**: `feat/design-system-2026`

---

## A2 — Affiliate Disclosure Visibility

### Overview of disclosure mechanism

The codebase provides two disclosure channels:

1. **`AffiliateDisclosure.svelte`** — a reusable component with `variant="inline"` and `variant="footer"`. The footer variant is rendered on every page via `SEOFooter.svelte`, which is wired into `+layout.svelte` and therefore present on all routes. This provides a sitewide footer-level disclosure.
2. **Inline `"Affiliate disclosure: This page may contain affiliate links."` text** — a plain-text string used directly in page markup on a subset of pages.
3. **`IBET_DISCLAIMER`** — imported from `$lib/ibet-brand.ts` (`"18+/19+ depending on province. Play responsibly. T&Cs apply. Please check localized regulations for features and availability."`). This is an age/T&C disclaimer, not an affiliate disclosure. Only `src/routes/sportsbook/+page.svelte` renders it inline.

### Pages with CTAs — disclosure audit

The following pages contain a "Play Now", "Join Now", "Enter Casino", or similar affiliate CTA linking to `IBET_URLS.register` / `PARTNER.url`. Column "Inline disclosure above fold?" answers whether an affiliate disclosure appears **before** the primary CTA on the page (footer disclosure is global but appears below the fold on all pages on mobile 375×812).

| Route | CTA snippet | Inline disclosure above fold? | Severity | Notes |
|---|---|---|---|---|
| `/` (home) | "Join 247iBET Now" (SafeExternalLink) | NO | HIGH | No AffiliateDisclosure or inline disclosure text. Footer disclosure is far below fold. |
| `/casino` | "Play Now" (SafeExternalLink, line 303) | NO | HIGH | No inline disclosure. Four CTA instances on page. |
| `/sportsbook` | "Enter Lobby" / "Visit site" (SafeExternalLink, lines 390–858) | YES — partial | MEDIUM | `IBET_DISCLAIMER` rendered at line 406 (age/T&C only, not affiliate), but no explicit affiliate disclosure above fold. |
| `/deposit` | "Interac Gateway" (SafeExternalLink, line 453) | NO | HIGH | No disclosure found. |
| `/interac` | "Play Now" (SafeExternalLink, line 371) | NO | HIGH | No disclosure found. |
| `/sportsbook/cfl` | "Bet Now" via IBetShowcase | YES | LOW | Inline "Play responsibly. 19+ only." at line 268 but no affiliate disclosure. However page links to `/responsible-gambling`. |
| `/sportsbook/nhl` | CTA via IBetShowcase | NO | HIGH | Zero disclosure mentions found. |
| `/sportsbook/nba` | CTA via IBetShowcase | NO | HIGH | Zero disclosure mentions found. |
| `/sportsbook/parlays` | CTA via IBetShowcase | NO | HIGH | Zero disclosure mentions found. |
| `/casino-bonuses-canada` | "Claim" / play CTAs | YES | LOW | Inline disclosure present (line 100) with link to `/about/affiliate-disclosure`. |
| `/free-bets-canada` | Play CTAs | YES | LOW | Inline disclosure at line 105, age notice at line 99. |
| `/new-player-bonuses-canada` | Play CTAs | YES | LOW | Inline disclosure at line 123. |
| `/sportsbook-bonuses-canada` | Play CTAs | YES | MEDIUM | Inline disclosure at line 110, but no per-offer age statement above fold. |
| `/no-deposit-bonus-canada` | Play CTAs | YES | LOW | Inline disclosure at line 137. |
| `/ontario/online-casino` | Play CTAs | YES | LOW | Inline disclosure at line 83. |
| `/ontario` | Play CTAs | YES | LOW | Inline disclosure at line 193. |
| `/casino/slots` | Play CTAs | YES | LOW | Inline disclosure at line 157. |

**Summary gap**: The five highest-traffic pages (`/`, `/casino`, `/deposit`, `/interac`, `/sportsbook`) carry affiliate CTAs but have **no inline above-fold disclosure**. They rely entirely on the `SEOFooter` `AffiliateDisclosure variant="footer"`, which is below the fold on all mobile viewports. AGCO Registrar Bulletin RA-2021-04 and ASC guidance require affiliate disclosure to be proximate to the CTA, not only in the footer.

### StickyMobileCTA disclosure

`StickyMobileCTA.svelte` (shown globally after 300 px scroll) contains two direct affiliate CTAs ("Casino" to `IBET_URLS.casino`, "Enter Lobby" to `IBET_URLS.register`). The component does include a mini disclaimer at line 144–146:

```
18+/19+ depending on province · Gamble responsibly · Terms apply
```

This is an age disclaimer, not an affiliate disclosure. The sticky bar itself carries no affiliate relationship statement. **Severity: MEDIUM.**

### Outbound link safety (`rel` attributes)

`SafeExternalLink.svelte` outputs `rel="noopener noreferrer"` (line 14). **It does NOT include `sponsored`.**

All affiliate outbound links are routed through either `SafeExternalLink` or bare `<a>` tags. Neither path includes `rel="nofollow sponsored"` as required by Google Webmaster Guidelines for paid/affiliate links.

| Component / location | href target | `rel` used | `sponsored` present? | Severity |
|---|---|---|---|---|
| `SafeExternalLink.svelte` (all usages) | `IBET_URLS.register`, `IBET_URLS.casino` | `noopener noreferrer` | NO | HIGH |
| `Navbar.svelte:336` (desktop "Play Now") | `PARTNER.url` | `noopener noreferrer` | NO | HIGH |
| `Navbar.svelte:473` (mobile "Play Now") | `PARTNER.url` | `noopener noreferrer` | NO | HIGH |
| `Navbar.svelte:349` (login icon) | `IBET_URLS.login` | `noopener noreferrer` | NO | MEDIUM |
| `StickyMobileCTA.svelte:109` (Casino CTA) | `IBET_URLS.casino` | `noopener noreferrer` | NO | HIGH |
| `StickyMobileCTA.svelte:121` (Sports CTA) | `IBET_URLS.register` | `noopener noreferrer` | NO | HIGH |
| `SEOFooter.svelte:89–128` (social links) | `x.com`, `instagram.com`, `t.me`, `tiktok.com` | `noopener noreferrer` | N/A | — (social, not affiliate) |
| `responsible-gambling/+page.svelte:291` (support links) | `connexontario.ca`, `albertahealthservices.ca` | `noopener noreferrer` | N/A | — (charitable, not affiliate) |

**`nofollow` is not used anywhere for affiliate links.** The two guide pages (`guides/uk-real-money-casinos` and `guides/problem-gambling-signs`) do use `noopener noreferrer nofollow` on their external reference links, but those are non-affiliate editorial links.

### A2 Findings & Recommendations

1. **(HIGH)** Add `sponsored nofollow` to `SafeExternalLink.svelte` `rel` attribute: change `rel="noopener noreferrer"` to `rel="noopener noreferrer nofollow sponsored"`. This fixes every affiliate link in one place.
2. **(HIGH)** Add `AffiliateDisclosure` component inline (variant="inline") near the primary hero CTA on `/`, `/casino`, `/deposit`, `/interac`, `/sportsbook`, `/sportsbook/nhl`, `/sportsbook/nba`, `/sportsbook/parlays`. Placement should be immediately above or below the first CTA button, before the fold at 375 px viewport height.
3. **(MEDIUM)** Add affiliate disclosure to `StickyMobileCTA.svelte`. The existing age disclaimer line could be extended: append "Affiliate link — we may earn a commission." or render `AffiliateDisclosure` variant="inline" below the button row.
4. **(LOW)** `Navbar.svelte` "Play Now" links use bare `<a>` tags (not `SafeExternalLink`). These also need `rel="nofollow sponsored noopener noreferrer"` and an `aria-label` noting the affiliate relationship.

---

## A3 — Responsible Gambling

### Footer link presence (per-route check via layout)

`SEOFooter.svelte` is the universal footer, mounted in `+layout.svelte` (line 44) and therefore rendered on every route. The `infoLinks` array (lines 30–38) includes `{ href: '/responsible-gambling', label: 'Responsible Gaming' }`. The `legalLinks` array (lines 40–45) also includes it. Both render as visible `<a>` tags in the footer markup.

**Result: `/responsible-gambling` link is present on every page via layout. PASS.**

The footer also renders helpline numbers directly at lines 176–181:

```
1-866-332-2322 (Alberta) · 1-866-531-2600 (Ontario)
```

Both are `<a href="tel:...">` links. This is a positive finding.

### /responsible-gambling content checklist

| Requirement | Present? | Evidence | Severity if missing |
|---|---|---|---|
| ConnexOntario reference | YES | `supportLinks` array line 43: name "ConnexOntario", href `connexontario.ca` | — |
| ConnexOntario phone 1-866-531-2600 | YES | `supportLinks[0].meta`: "24/7 · 1-866-531-2600 · connexontario.ca" (line 44) | — |
| AGLC RG resources (specific) | NO — partial | Alberta Health Services (1-866-332-2322) is listed but links to `albertahealthservices.ca`, NOT `aglc.ca/gaming` or `aglc.ca/responsible-gambling`. AGLC is the regulatory body; AHS is the treatment referral line. Both are relevant but AGLC's own RG page is the canonical regulatory reference for Alberta. | MEDIUM |
| Gamblers Anonymous Canada | NO | No mention of Gamblers Anonymous or `gamblersanonymous.org` anywhere on the page. | MEDIUM |
| Self-exclusion path (mention or link to provincial registry) | PARTIAL | "Self-Exclusion" is named as a platform tool (line 68–72, table row line 94) with CTA to `/contact`. No link to iGO (Ontario) or AGLC self-exclusion registry external pages. | HIGH |
| 19+ minimum age statement | PARTIAL | The page meta description and body do NOT contain a "19+" or "18+" age statement. The `controlTools` and assessment copy do not state the minimum age. The word "age" appears only in meta description ("safe play protocols"). The StickyMobileCTA and footer carry age notices, but the RG page itself has no explicit age floor statement in visible body copy. | MEDIUM |

- [ ] ConnexOntario (1-866-531-2600) — PRESENT
- [ ] AGLC RG resources — PARTIAL (AHS listed, AGLC.ca/responsible-gambling not linked)
- [ ] Gamblers Anonymous Canada — MISSING
- [ ] Self-exclusion path (provincial registry link) — PARTIAL (tool described, no external registry link)
- [ ] 19+ minimum age statement (visible body copy) — MISSING from page body

### A3 Findings & Recommendations

1. **(HIGH)** Self-exclusion section links to `/contact` but provides no link to the iGO voluntary self-exclusion program (Ontario) or AGLC's GameSense/self-exclusion registry (Alberta). Add external links to the actual provincial exclusion registries. This is a regulatory expectation under AGCO Registrar Standards for Internet Gaming (2022) and AGLC Policy 5.7.
2. **(MEDIUM)** Add Gamblers Anonymous Canada (`gamblersanonymous.org/ga/`) to the `supportLinks` array. GA is a standard reference on responsible gambling pages for Canadian regulators.
3. **(MEDIUM)** Add explicit AGLC responsible gambling page link (`aglc.ca/gaming/responsible-gambling`). Alberta Health Services treats problem gambling; AGLC regulates it — both should be referenced.
4. **(MEDIUM)** Add a visible "19+ in Ontario and Alberta" age statement to the `/responsible-gambling` page body. Currently absent from all visible copy on the page itself (only appears in meta tags and components that may not render on this specific page).

---

## A5 — Terms Accuracy

### bonus-terms findings

`src/routes/bonus-terms/+page.svelte` is `noindex, nofollow` (line 12) and is labelled "Archived Promotional Terms" in its `<title>` and `<h1>`. The page disclaims itself as "not a public inducement, advertisement, or current offer" (line 74–75).

| Claim in bonus-terms | Cross-reference | Status | Severity |
|---|---|---|---|
| Age: not stated | `IBET_PROFILE.minAge = 18` | The page has **no age statement** ("18+", "19+", or "must be of legal age"). The archived terms do not reference minimum age. | HIGH |
| Eligibility: "physically located in Canada" | `IBET_PROFILE.provinces` covers 10 provinces | Consistent — Canada-wide. PASS. | — |
| Deposit minimum: $10 | Not in `IBET_PROFILE` | No contradiction found in brand data, but $10 minimum is a specific claim not cross-checked against current operator terms. | LOW |
| Bonus: up to 200% of deposit | `IBET_PROFILE` has no bonus figure (cons entry: "Bonus details available on site only (AGCO compliance)") | The 200% figure appears on an archived, noindex page. However the label "Archived" only appears in the header; the URL `/bonus-terms` is not branded as "archived" to users who navigate directly. **Risk**: if AGCO auditors load `/bonus-terms`, the 200% figure is the most visible content, not the "archived" disclaimer. | HIGH |
| Wagering: 40× combined (deposit + bonus) | Not in `IBET_PROFILE` | 40× wagering is a specific claim. The brand file explicitly states "Bonus details available on site only (AGCO compliance)". Displaying a 40× wagering figure on a page accessible via direct URL (even noindex) may conflict with AGCO Rule 4(3)(b) on promotional material accuracy. | HIGH |
| Bonus validity: 14 days | Not in `IBET_PROFILE` | Specific claim on a page accessible at canonical URL. Same concern as wagering requirement. | MEDIUM |
| Payment methods: none mentioned | `IBET_PROFILE.paymentMethods = ['Interac']` | No conflict. | — |
| Jurisdiction language | "physically located in Canada" | Appropriate for a Canada-wide operator. No "all players" language found. | — |

**Key structural concern**: Although `bonus-terms` is `noindex, nofollow`, the page is publicly accessible at `https://247ibet.ca/bonus-terms`, indexed by `<link rel="canonical">`, and linked from the `<section class="sr-only">` related-resources list. The combination of a 200% deposit match and 40× wagering requirement on a live canonical URL — even framed as "archived" — may be treated as active promotional content by AGCO/ASC if the page is discovered. The page lacks any age gate or minimum-age statement.

### editorial-policy findings

`src/routes/editorial-policy/+page.svelte` is `noindex, nofollow` (line 12). Content is sparse — three principle rows in a table (Independence, Evidence, Clarity) with brief descriptions. No affiliate disclosure language, no age statement, no reference to AGCO/AGLC compliance.

| Claim in editorial-policy | Cross-reference | Status | Severity |
|---|---|---|---|
| "Commercial partners do not direct conclusions." | Consistent with `IBET_PROFILE.trustPanel` "No pay-to-rank placement" | Consistent. | — |
| No mention of AGCO/AGLC compliance | `IBET_PROFILE.agcoLicensed = false`, `licences = []` | The editorial policy does not claim regulatory licensing, which is consistent with the brand data (not AGCO-licensed). However for AGCO editorial expectations, this page is thin. | MEDIUM |
| No affiliate disclosure reference | — | A page titled "Editorial Standards" that does not link to or summarize the affiliate disclosure relationship is incomplete under AGCO/ASC editorial transparency expectations. | MEDIUM |
| No methodology description | — | `about/how-we-test/+page.svelte` exists separately and is more detailed. The editorial-policy page does not cross-link it. | LOW |

### A5 Findings & Recommendations

1. **(HIGH)** `bonus-terms`: Add a prominent 19+ (Ontario/Alberta) age gate notice at the top of the page, immediately after the breadcrumb, before any bonus content. Even for an "archived" page accessible at a canonical URL, the absence of an age statement is a regulatory gap.
2. **(HIGH)** `bonus-terms`: Either: (a) move the 200% / 40× wagering content behind a modal or gate that makes the "archived" status unambiguous, or (b) remove the specific figures and replace with a reference to the operator's live terms URL. Displaying specific bonus percentages and wagering multiples on an AGCO-market-facing page — even noindex — carries regulatory exposure.
3. **(MEDIUM)** `editorial-policy`: Add an affiliate disclosure summary and a link to `/about/affiliate-disclosure`. AGCO's advertising standards expect editorial pages to address the commercial relationship.
4. **(MEDIUM)** `editorial-policy`: Reference AGCO/AGLC compliance posture. Given `agcoLicensed = false`, this is a nuanced area — but the editorial policy should state something about the operator's licensing status and how that affects editorial scope.

---

## Severity Summary

| Severity | Count | Top examples |
|---|---|---|
| HIGH | 9 | `SafeExternalLink` missing `sponsored nofollow` (all affiliate links); no above-fold disclosure on `/`, `/casino`, `/deposit`, `/interac`, `/sportsbook`, `/sportsbook/nhl`, `/sportsbook/nba`, `/sportsbook/parlays`; no provincial self-exclusion registry links; bonus-terms 200%/40× on live canonical URL without age statement |
| MEDIUM | 8 | StickyMobileCTA missing affiliate disclosure; Navbar bare `<a>` without `sponsored`; AGLC canonical RG page missing; Gamblers Anonymous Canada missing; RG page no visible 19+ age statement; editorial-policy no affiliate reference; editorial-policy no AGCO posture statement; bonus-terms 14-day validity on live URL |
| LOW | 4 | Several sportsbook sub-pages have no inline disclosure (CFL has RG notice only); editorial-policy no cross-link to how-we-test; bonus-terms $10 minimum not independently verified; `about/affiliate-disclosure` page exists but is not linked from primary nav |

**Total findings: 21** (9 HIGH, 8 MEDIUM, 4 LOW)

---

## Verdict

**NEEDS_FIX**

The site has a sound structural foundation for compliance: `AffiliateDisclosure` renders in the footer on every page via the layout shell, the `/responsible-gambling` route exists with ConnexOntario and Alberta helplines, and most bonus/promotion-focused pages carry inline disclosures. However three systemic issues prevent a PASS verdict:

1. **`rel="sponsored"` is absent from every affiliate outbound link** — a clear Google Webmaster Guidelines violation and an AGCO advertising transparency gap. This is a single-file fix in `SafeExternalLink.svelte` but affects every CTA sitewide.
2. **The five highest-traffic pages with affiliate CTAs** (`/`, `/casino`, `/deposit`, `/interac`, `/sportsbook`) carry no above-fold affiliate disclosure. Footer disclosure alone does not satisfy the AGCO Registrar's proximity requirement for affiliate relationship disclosure.
3. **`/bonus-terms` presents specific bonus percentages (200%) and wagering multiples (40×) at a live canonical URL** without a minimum-age statement. Even with `noindex` and an "archived" label, this page constitutes publicly accessible promotional material under AGCO Rule 4 standards, and the missing age gate is an audit risk for an Ontario/Alberta-facing operator.

The responsible-gambling page gaps (missing Gamblers Anonymous, no external self-exclusion registry link, missing AGLC canonical link) are material for AGCO/AGLC editorial review but are secondary to the three systemic findings above.

All HIGH items must be resolved before production launch. MEDIUM items should be addressed before first AGCO/ASC editorial review submission.
