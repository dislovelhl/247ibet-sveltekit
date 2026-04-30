# Mobile Typography Coverage Matrix

Generated: `2026-04-30T04:51:48Z`

Scope: exhaustive static inventory for the approved mobile typography plan. This artifact intentionally does not modify CSS/component/route code; it gives implementation and verification lanes a complete per-file map.

## Inventory Commands

```bash
rg --files src/lib/components -g '*.svelte'
rg --files src/routes -g '+page.svelte' -g '+page.js'
```

## Summary

- Reusable components inventoried: `14`
- Concrete route files inventoried: `127`
- Total rows below: `141`
- Risk buckets: high `87`, medium `45`, low `9`
- Status semantics: `audited` means present in the exhaustive matrix with static typography-risk evidence; migration/visual-check status should be updated by implementation/verification lanes as they complete those phases.

## Typography Risk Heuristic

- High: explicit sub-contract tiny text (`text-[10px]`, `text-[11px]`, sub-12px arbitrary text), wide tracking above the mobile ceiling, or dense `text-xs` usage.
- Medium: isolated `text-xs`, ad-hoc large heading utilities, CTA/nav/action density, or legal/affiliate disclosure context that needs readability confirmation.
- Low: no obvious static typography floor/tracking risk markers found.

## Component Coverage

| file | route/representative URL | category | typography risk | status | reason/evidence |
| --- | --- | --- | --- | --- | --- |
| src/lib/components/AffiliateDisclosure.svelte | (component) | reusable component | medium | audited | 1 text-xs; 6 legal/affiliate terms |
| src/lib/components/AgeGate.svelte | (component) | reusable component | high | audited | 1 text-[10/11px]; 1 text-xs; 1 wide tracking; 9 action/nav/link markers; 4 legal/affiliate terms |
| src/lib/components/AuthorByline.svelte | (component) | reusable component | medium | audited | 2 text-xs |
| src/lib/components/GuideHighlights.svelte | (component) | reusable component | high | audited | 2 text-[10/11px]; 2 text-xs; 3 wide tracking; 8 action/nav/link markers; 8 legal/affiliate terms |
| src/lib/components/HeroBanner.svelte | (component) | reusable component | high | audited | 5 text-[10/11px]; 1 sub-12px/rem tiny text; 4 wide tracking; 5 action/nav/link markers |
| src/lib/components/HomeIntro.svelte | (component) | reusable component | high | audited | 2 text-xs; 3 wide tracking; 1 action/nav/link markers; 2 legal/affiliate terms |
| src/lib/components/IBetShowcase.svelte | (component) | reusable component | high | audited | 9 text-[10/11px]; 7 text-xs; 3 wide tracking; 2 ad-hoc large heading; 14 action/nav/link markers |
| src/lib/components/IntentHubs.svelte | (component) | reusable component | high | audited | 2 text-[10/11px]; 1 sub-12px/rem tiny text; 1 text-xs; 3 wide tracking; 4 action/nav/link markers |
| src/lib/components/JsonLd.svelte | (component) | reusable component | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/lib/components/Navbar.svelte | (component) | reusable component | high | audited | 6 text-[10/11px]; 5 wide tracking; 16 action/nav/link markers; 14 legal/affiliate terms |
| src/lib/components/ReadyToPlay.svelte | (component) | reusable component | high | audited | 1 text-[10/11px]; 1 text-xs; 1 ad-hoc large heading; 12 action/nav/link markers; 3 legal/affiliate terms |
| src/lib/components/SEOFooter.svelte | (component) | reusable component | high | audited | 3 text-[10/11px]; 4 text-xs; 4 wide tracking; 4 action/nav/link markers; 22 legal/affiliate terms |
| src/lib/components/SafeExternalLink.svelte | (component) | reusable component | medium | audited | 2 legal/affiliate terms |
| src/lib/components/StickyMobileCTA.svelte | (component) | reusable component | high | audited | 1 text-[10/11px]; 3 text-xs; 9 action/nav/link markers; 1 legal/affiliate terms |

## Route Coverage

| file | route/representative URL | category | typography risk | status | reason/evidence |
| --- | --- | --- | --- | --- | --- |
| src/routes/+page.svelte | / | homepage | high | audited | 6 text-[10/11px]; 24 text-xs; 13 wide tracking; 6 ad-hoc large heading; 23 action/nav/link markers; 39 legal/affiliate terms |
| src/routes/about/+page.svelte | /about | legal/static | medium | audited | 4 text-xs; 4 legal/affiliate terms |
| src/routes/about/affiliate-disclosure/+page.svelte | /about/affiliate-disclosure | legal/static | high | audited | 1 text-[10/11px]; 5 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 26 legal/affiliate terms |
| src/routes/about/contact/+page.js | /about/contact | legal/static | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/about/editorial-policy/+page.js | /about/editorial-policy | legal/static | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/about/how-we-test/+page.svelte | /about/how-we-test | legal/static | high | audited | 1 text-[10/11px]; 1 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 9 legal/affiliate terms |
| src/routes/about/privacy-policy/+page.js | /about/privacy-policy | legal/static | medium | audited | 1 legal/affiliate terms |
| src/routes/about/terms/+page.svelte | /about/terms | legal/static | medium | audited | 2 legal/affiliate terms |
| src/routes/admin/affiliate-dashboard/+page.svelte | /admin/affiliate-dashboard | admin | medium | audited | 2 legal/affiliate terms |
| src/routes/admin/optimization/+page.svelte | /admin/optimization | admin | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/admin/signup-lookup/+page.svelte | /admin/signup-lookup | admin | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/age-gate/+page.svelte | /age-gate | marketing/content | high | audited | 1 text-[10/11px]; 1 text-xs; 1 wide tracking; 6 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/ai-search-optimization/+page.svelte | /ai-search-optimization | marketing/content | high | audited | 1 text-[10/11px]; 9 text-xs; 4 wide tracking; 2 ad-hoc large heading; 5 action/nav/link markers; 12 legal/affiliate terms |
| src/routes/alberta/+page.svelte | /alberta | province | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 2 ad-hoc large heading; 7 action/nav/link markers; 22 legal/affiliate terms |
| src/routes/alberta/online-casino/+page.svelte | /alberta/online-casino | province | high | audited | 3 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 5 legal/affiliate terms |
| src/routes/alberta/sports-betting/+page.svelte | /alberta/sports-betting | province | high | audited | 4 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/authors/[slug]/+page.svelte | /authors/:slug | dynamic content | medium | audited | 1 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers |
| src/routes/best-betting-apps-canada/+page.svelte | /best-betting-apps-canada | marketing/content | medium | audited | 4 text-xs; 2 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/best-betting-sites-canada/+page.js | /best-betting-sites-canada | marketing/content | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/best-casino-apps-canada/+page.svelte | /best-casino-apps-canada | marketing/content | medium | audited | 4 text-xs; 3 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/best-online-casinos-canada/+page.svelte | /best-online-casinos-canada | marketing/content | medium | audited | 7 text-xs; 5 action/nav/link markers; 18 legal/affiliate terms |
| src/routes/best-paying-online-casinos-canada/+page.svelte | /best-paying-online-casinos-canada | marketing/content | medium | audited | 7 text-xs; 3 action/nav/link markers; 9 legal/affiliate terms |
| src/routes/best-sports-betting-sites-canada/+page.svelte | /best-sports-betting-sites-canada | marketing/content | medium | audited | 4 text-xs; 4 action/nav/link markers; 5 legal/affiliate terms |
| src/routes/bonus-terms/+page.svelte | /bonus-terms | legal/static | medium | audited | 1 text-xs; 2 ad-hoc large heading; 2 action/nav/link markers; 45 legal/affiliate terms |
| src/routes/casino/+page.svelte | /casino | casino | high | audited | 8 text-xs; 5 wide tracking; 3 ad-hoc large heading; 19 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/casino/baccarat/+page.svelte | /casino/baccarat | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/casino/blackjack/+page.svelte | /casino/blackjack | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/casino/cad/+page.svelte | /casino/cad | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/casino/live-casino/+page.svelte | /casino/live-casino | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/casino/mobile/+page.svelte | /casino/mobile | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/casino/roulette/+page.svelte | /casino/roulette | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/casino/slots/+page.svelte | /casino/slots | casino | high | audited | 1 text-[10/11px]; 1 sub-12px/rem tiny text; 2 text-xs; 2 wide tracking; 4 action/nav/link markers; 5 legal/affiliate terms |
| src/routes/casino-bonuses-canada/+page.svelte | /casino-bonuses-canada | casino | medium | audited | 7 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 27 legal/affiliate terms |
| src/routes/contact/+page.svelte | /contact | legal/static | medium | audited | 1 text-xs; 2 ad-hoc large heading; 2 action/nav/link markers; 12 legal/affiliate terms |
| src/routes/cookie-policy/+page.svelte | /cookie-policy | legal/static | medium | audited | 2 text-xs; 2 ad-hoc large heading; 2 action/nav/link markers; 30 legal/affiliate terms |
| src/routes/deposit/+page.svelte | /deposit | payment | high | audited | 3 text-[10/11px]; 4 text-xs; 3 wide tracking; 1 ad-hoc large heading; 16 action/nav/link markers; 2 legal/affiliate terms |
| src/routes/design-system/+page.svelte | /design-system | marketing/content | high | audited | 71 text-[10/11px]; 67 wide tracking; 81 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/editorial-policy/+page.svelte | /editorial-policy | legal/static | medium | audited | 4 text-xs; 2 action/nav/link markers |
| src/routes/events/[slug]/+page.svelte | /events/:slug | event/sports guide | medium | audited | 2 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/events/nba-betting-canada/+page.svelte | /events/nba-betting-canada | event/sports guide | high | audited | 9 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/events/ufc-betting-canada/+page.svelte | /events/ufc-betting-canada | event/sports guide | high | audited | 8 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/events/world-cup-betting-canada/+page.svelte | /events/world-cup-betting-canada | event/sports guide | high | audited | 1 text-[10/11px]; 8 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/faq/+page.svelte | /faq | marketing/content | medium | audited | 4 text-xs; 2 ad-hoc large heading; 5 action/nav/link markers; 20 legal/affiliate terms |
| src/routes/fast-payouts/+page.svelte | /fast-payouts | payment | high | audited | 1 sub-12px/rem tiny text; 5 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 9 legal/affiliate terms |
| src/routes/free-bets-canada/+page.svelte | /free-bets-canada | marketing/content | high | audited | 1 text-[10/11px]; 7 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 22 legal/affiliate terms |
| src/routes/gambling-age-canada/+page.svelte | /gambling-age-canada | legal/static | high | audited | 1 text-[10/11px]; 8 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 28 legal/affiliate terms |
| src/routes/gambling-laws-canada/+page.svelte | /gambling-laws-canada | legal/static | high | audited | 1 text-[10/11px]; 5 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 48 legal/affiliate terms |
| src/routes/guides/+page.svelte | /guides | guide | medium | audited | 3 text-xs; 2 action/nav/link markers; 11 legal/affiliate terms |
| src/routes/guides/[...slug]/+page.svelte | /guides/:slug* | guide | medium | audited | 1 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers |
| src/routes/guides/alberta-operator-readiness-index/+page.svelte | /guides/alberta-operator-readiness-index | guide | high | audited | 5 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 14 legal/affiliate terms |
| src/routes/guides/blackjack-online-canada/+page.svelte | /guides/blackjack-online-canada | guide | high | audited | 2 text-[10/11px]; 1 sub-12px/rem tiny text; 16 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 8 legal/affiliate terms |
| src/routes/guides/casino-login/+page.svelte | /guides/casino-login | guide | medium | audited | 1 text-xs; 4 action/nav/link markers; 11 legal/affiliate terms |
| src/routes/guides/casino-payment-methods/+page.svelte | /guides/casino-payment-methods | guide | medium | audited | 1 text-xs; 4 action/nav/link markers; 2 legal/affiliate terms |
| src/routes/guides/crypto-casino-canada/+page.svelte | /guides/crypto-casino-canada | guide | high | audited | 1 text-[10/11px]; 5 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 13 legal/affiliate terms |
| src/routes/guides/deposit-free-spins/+page.svelte | /guides/deposit-free-spins | guide | medium | audited | 1 text-xs; 4 action/nav/link markers; 20 legal/affiliate terms |
| src/routes/guides/free-casino-games/+page.svelte | /guides/free-casino-games | guide | medium | audited | 1 text-xs; 4 action/nav/link markers; 14 legal/affiliate terms |
| src/routes/guides/how-to-choose-online-casino/+page.svelte | /guides/how-to-choose-online-casino | guide | high | audited | 3 text-[10/11px]; 5 text-xs; 6 wide tracking; 2 ad-hoc large heading; 14 action/nav/link markers; 21 legal/affiliate terms |
| src/routes/guides/how-to-withdraw-casino-winnings/+page.svelte | /guides/how-to-withdraw-casino-winnings | guide | high | audited | 1 text-[10/11px]; 7 text-xs; 5 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 13 legal/affiliate terms |
| src/routes/guides/interac/+page.svelte | /guides/interac | guide | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/guides/interac-e-transfer-casino/+page.svelte | /guides/interac-e-transfer-casino | guide | high | audited | 9 text-[10/11px]; 8 text-xs; 14 wide tracking; 3 ad-hoc large heading; 4 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/guides/jackpot-casino-games/+page.svelte | /guides/jackpot-casino-games | guide | medium | audited | 1 text-xs; 4 action/nav/link markers; 10 legal/affiliate terms |
| src/routes/guides/kyc-verification-online-casino/+page.svelte | /guides/kyc-verification-online-casino | guide | high | audited | 4 text-[10/11px]; 3 text-xs; 5 wide tracking; 4 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/guides/legal-online-casino-canada/+page.svelte | /guides/legal-online-casino-canada | guide | high | audited | 1 text-[10/11px]; 16 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 56 legal/affiliate terms |
| src/routes/guides/legit-safe-online-casinos/+page.svelte | /guides/legit-safe-online-casinos | guide | high | audited | 3 text-[10/11px]; 10 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 11 legal/affiliate terms |
| src/routes/guides/live-dealer-casino-canada/+page.svelte | /guides/live-dealer-casino-canada | guide | high | audited | 2 text-[10/11px]; 12 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/guides/new-casino-canada/+page.svelte | /guides/new-casino-canada | guide | high | audited | 13 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 19 legal/affiliate terms |
| src/routes/guides/no-deposit-free-spins/+page.svelte | /guides/no-deposit-free-spins | guide | high | audited | 3 text-[10/11px]; 9 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 17 legal/affiliate terms |
| src/routes/guides/online-gambling-canada/+page.svelte | /guides/online-gambling-canada | guide | high | audited | 10 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 48 legal/affiliate terms |
| src/routes/guides/ontario-casino-operator-checks/+page.svelte | /guides/ontario-casino-operator-checks | guide | high | audited | 10 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/guides/ontario-sportsbook-registration-checklist/+page.svelte | /guides/ontario-sportsbook-registration-checklist | guide | high | audited | 10 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 11 legal/affiliate terms |
| src/routes/guides/optimization/+page.svelte | /guides/optimization | guide | medium | audited | 2 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/guides/paypal-casino-canada/+page.svelte | /guides/paypal-casino-canada | guide | high | audited | 1 text-[10/11px]; 12 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/guides/problem-gambling-signs/+page.svelte | /guides/problem-gambling-signs | guide | high | audited | 1 text-[10/11px]; 10 text-xs; 3 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 56 legal/affiliate terms |
| src/routes/guides/regulated-vs-offshore/+page.svelte | /guides/regulated-vs-offshore | guide | high | audited | 1 text-[10/11px]; 8 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 17 legal/affiliate terms |
| src/routes/guides/sign-up-bonus-no-deposit/+page.svelte | /guides/sign-up-bonus-no-deposit | guide | high | audited | 1 text-[10/11px]; 9 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 10 legal/affiliate terms |
| src/routes/guides/single-game-betting-canada/+page.svelte | /guides/single-game-betting-canada | guide | high | audited | 1 text-[10/11px]; 9 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 18 legal/affiliate terms |
| src/routes/guides/slots-no-deposit-bonuses/+page.svelte | /guides/slots-no-deposit-bonuses | guide | high | audited | 1 text-[10/11px]; 10 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 17 legal/affiliate terms |
| src/routes/guides/slots-tips-canada/+page.svelte | /guides/slots-tips-canada | guide | high | audited | 1 text-[10/11px]; 12 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 17 legal/affiliate terms |
| src/routes/guides/sports-betting-odds-explained/+page.svelte | /guides/sports-betting-odds-explained | guide | high | audited | 4 text-[10/11px]; 8 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/guides/strategy/+page.svelte | /guides/strategy | guide | high | audited | 3 text-[10/11px]; 5 text-xs; 5 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 8 legal/affiliate terms |
| src/routes/guides/uk-real-money-casinos/+page.svelte | /guides/uk-real-money-casinos | guide | high | audited | 1 text-[10/11px]; 13 text-xs; 2 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 28 legal/affiliate terms |
| src/routes/guides/upcoming-alberta-sportsbooks/+page.svelte | /guides/upcoming-alberta-sportsbooks | guide | high | audited | 1 text-[10/11px]; 10 text-xs; 1 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 15 legal/affiliate terms |
| src/routes/guides/wagering-requirements-explained/+page.svelte | /guides/wagering-requirements-explained | guide | high | audited | 10 text-[10/11px]; 5 text-xs; 11 wide tracking; 4 action/nav/link markers; 42 legal/affiliate terms |
| src/routes/guides/win-big-online-casino/+page.svelte | /guides/win-big-online-casino | guide | high | audited | 3 text-[10/11px]; 9 text-xs; 4 wide tracking; 1 ad-hoc large heading; 5 action/nav/link markers; 10 legal/affiliate terms |
| src/routes/handler/[...stack]/+page.svelte | /handler/:stack* | dynamic content | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/how-we-work/+page.svelte | /how-we-work | legal/static | medium | audited | 3 text-xs; 4 legal/affiliate terms |
| src/routes/interac/+page.svelte | /interac | payment | high | audited | 1 text-[10/11px]; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 15 action/nav/link markers; 5 legal/affiliate terms |
| src/routes/interac/deposit/+page.svelte | /interac/deposit | payment | medium | audited | 4 text-xs; 5 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/interac/withdraw/+page.svelte | /interac/withdraw | payment | high | audited | 8 text-xs; 4 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/interac-casino-canada/+page.svelte | /interac-casino-canada | payment | high | audited | 1 text-[10/11px]; 5 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/lab/design-exploration/+page.svelte | /lab/design-exploration | marketing/content | low | audited | No obvious typography floor/tracking risk patterns in static scan. |
| src/routes/legal-online-gambling-canada/+page.svelte | /legal-online-gambling-canada | legal/static | high | audited | 9 text-[10/11px]; 9 text-xs; 11 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 30 legal/affiliate terms |
| src/routes/low-wagering-casinos-canada/+page.svelte | /low-wagering-casinos-canada | marketing/content | high | audited | 1 text-[10/11px]; 3 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 40 legal/affiliate terms |
| src/routes/march-madness-betting-canada/+page.svelte | /march-madness-betting-canada | event/sports guide | medium | audited | 4 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/new-online-casinos-canada/+page.svelte | /new-online-casinos-canada | marketing/content | medium | audited | 3 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 12 legal/affiliate terms |
| src/routes/new-player-bonuses-canada/+page.svelte | /new-player-bonuses-canada | marketing/content | high | audited | 2 text-[10/11px]; 7 text-xs; 2 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 22 legal/affiliate terms |
| src/routes/news/+page.svelte | /news | news | high | audited | 6 text-xs; 1 wide tracking; 3 ad-hoc large heading; 2 action/nav/link markers |
| src/routes/news/[slug]/+page.svelte | /news/:slug | news | medium | audited | 2 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/news/vcu-ai-launch-2026/+page.svelte | /news/vcu-ai-launch-2026 | news | high | audited | 1 text-[10/11px]; 8 text-xs; 4 wide tracking; 1 ad-hoc large heading; 4 action/nav/link markers; 6 legal/affiliate terms |
| src/routes/nhl-betting-canada/+page.svelte | /nhl-betting-canada | event/sports guide | medium | audited | 5 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/no-deposit-bonus-canada/+page.svelte | /no-deposit-bonus-canada | payment | medium | audited | 4 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 19 legal/affiliate terms |
| src/routes/ontario/+page.svelte | /ontario | province | high | audited | 1 sub-12px/rem tiny text; 4 text-xs; 1 wide tracking; 2 ad-hoc large heading; 4 action/nav/link markers; 25 legal/affiliate terms |
| src/routes/ontario/online-casino/+page.svelte | /ontario/online-casino | province | medium | audited | 5 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/ontario/sports-betting/+page.svelte | /ontario/sports-betting | province | high | audited | 8 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/payments/[slug]/+page.svelte | /payments/:slug | payment | medium | audited | 2 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/privacy-policy/+page.svelte | /privacy-policy | legal/static | medium | audited | 2 text-xs; 2 ad-hoc large heading; 2 action/nav/link markers; 41 legal/affiliate terms |
| src/routes/responsible-gambling/+page.svelte | /responsible-gambling | legal/static | high | audited | 1 text-[10/11px]; 4 text-xs; 3 wide tracking; 1 ad-hoc large heading; 22 action/nav/link markers; 33 legal/affiliate terms |
| src/routes/reviews/[slug]/+page.svelte | /reviews/:slug | review detail | medium | audited | 2 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/search/+page.svelte | /search | search | high | audited | 2 text-[10/11px]; 3 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 2 legal/affiliate terms |
| src/routes/security/+page.svelte | /security | legal/static | medium | audited | 4 legal/affiliate terms |
| src/routes/sources/+page.svelte | /sources | legal/static | medium | audited | 5 text-xs; 2 ad-hoc large heading; 2 action/nav/link markers; 27 legal/affiliate terms |
| src/routes/sportsbook/+page.svelte | /sportsbook | sportsbook | high | audited | 14 text-[10/11px]; 16 text-xs; 19 wide tracking; 27 action/nav/link markers; 7 legal/affiliate terms |
| src/routes/sportsbook/cfl/+page.svelte | /sportsbook/cfl | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 5 legal/affiliate terms |
| src/routes/sportsbook/football/+page.svelte | /sportsbook/football | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/live-betting/+page.svelte | /sportsbook/live-betting | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/mobile/+page.svelte | /sportsbook/mobile | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/nba/+page.svelte | /sportsbook/nba | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/nhl/+page.svelte | /sportsbook/nhl | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/parlays/+page.svelte | /sportsbook/parlays | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/soccer/+page.svelte | /sportsbook/soccer | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook/ufc/+page.svelte | /sportsbook/ufc | sportsbook | high | audited | 1 sub-12px/rem tiny text; 2 text-xs; 1 wide tracking; 1 ad-hoc large heading; 2 action/nav/link markers; 4 legal/affiliate terms |
| src/routes/sportsbook-bonuses-canada/+page.svelte | /sportsbook-bonuses-canada | sportsbook | medium | audited | 4 text-xs; 1 ad-hoc large heading; 2 action/nav/link markers; 11 legal/affiliate terms |
| src/routes/terms-of-service/+page.svelte | /terms-of-service | legal/static | medium | audited | 1 text-xs; 2 ad-hoc large heading; 2 action/nav/link markers; 53 legal/affiliate terms |
| src/routes/tools/odds-calculator/+page.svelte | /tools/odds-calculator | tool | high | audited | 8 text-xs; 2 wide tracking; 2 ad-hoc large heading; 3 action/nav/link markers |
| src/routes/tools/parlay-calculator/+page.svelte | /tools/parlay-calculator | tool | medium | audited | 3 text-xs; 2 ad-hoc large heading; 3 action/nav/link markers; 1 legal/affiliate terms |
| src/routes/tools/payout-time-checker/+page.svelte | /tools/payout-time-checker | tool | medium | audited | 6 text-xs; 2 ad-hoc large heading; 5 action/nav/link markers; 9 legal/affiliate terms |
| src/routes/vcu-ai/+page.svelte | /vcu-ai | marketing/content | high | audited | 2 text-xs; 1 wide tracking; 3 ad-hoc large heading |

## Representative Route Classes Required By Test Spec

| required class | selected file | representative URL | inventory status |
| --- | --- | --- | --- |
| Homepage | src/routes/+page.svelte | / | audited |
| Casino hub | src/routes/casino/+page.svelte | /casino | audited |
| Sportsbook hub | src/routes/sportsbook/+page.svelte | /sportsbook | audited |
| Province hub | src/routes/ontario/+page.svelte | /ontario | audited |
| Guides index | src/routes/guides/+page.svelte | /guides | audited |
| Named guide | src/routes/guides/interac-e-transfer-casino/+page.svelte | /guides/interac-e-transfer-casino | audited |
| Dynamic guide fallback | src/routes/guides/[...slug]/+page.svelte | /guides/:slug* | audited |
| Review detail | src/routes/reviews/[slug]/+page.svelte | /reviews/:slug | audited |
| Search | src/routes/search/+page.svelte | /search | audited |
| Tool page | src/routes/tools/odds-calculator/+page.svelte | /tools/odds-calculator | audited |
| Legal/static page | src/routes/responsible-gambling/+page.svelte | /responsible-gambling | audited |
| Admin page | src/routes/admin/optimization/+page.svelte | /admin/optimization | audited |

## Follow-Up Notes For Other Lanes

- Prioritize high-risk component and route rows before medium/low rows.
- Keep legal/affiliate disclosure text at or above the contract floor during migration.
- Update `status` from `audited` to `migrated` / `visual-checked` only with code or Playwright evidence; do not remove rows.
