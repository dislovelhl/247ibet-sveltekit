---
title: Content Model
description: Editorial, SEO, GEO, and structured-content model for 247iBET pages.
---

# Content Model

247iBET content is the public brand, SEO, acquisition, compliance-content, and API-ready frontend shell for a separate gaming platform. Pages should help users understand casino, sportsbook, payment, bonus, market, and responsible-gambling topics without implying this SvelteKit repo is the gambling operator, sportsbook backend, casino backend, payment platform, player wallet, KYC system, or real-money gaming engine.

## Editorial posture

Best concise framing: **This is not the gaming product. This is the modern public web, acquisition, SEO, compliance-content, and integration shell for the separate gaming product.**

After hardening, describe this repo as a production-ready SvelteKit public web platform for the 247iBET brand, built for SEO growth, compliance-safe acquisition, affiliate/operator routing, API integration, CMS expansion, analytics, and future AI-assisted content workflows. Do not describe it as the gaming platform, sportsbook backend, casino backend, payment platform, player wallet, KYC system, or real-money gaming engine.


Use cautious review-site language:

- Prefer `independent guide`, `review`, `compare`, `verify`, `confirm before depositing`, and `partner site`.
- Avoid operator-style claims such as `we process withdrawals`, `our games`, `our cashier`, `your balance`, or `play now` unless the copy clearly refers to the separate gaming platform or partner/operator and includes eligibility caveats.
- Keep affiliate disclosure visible near high-intent CTAs and comparison/review sections.
- Claims about licensing, payout speed, game count, bonuses, support hours, or market availability need either current source support or clear caveats.
- CTA labels should generally use `Visit Platform`, `Explore Casino Guide`, `Explore Sportsbook Guide`, `Compare Payout Guidance`, `Review Terms`, or similar transparent language from `src/lib/ibet-brand.ts`.

## Page taxonomy

| Type | Route examples | Required model elements |
| --- | --- | --- |
| Home/review hub | `/` | Hero trust claims, affiliate disclosure, review criteria, partner CTA, author/review date, canonical, JSON-LD. |
| Casino hub | `/casino`, `/casino/*` | Game/category cards, payout/banking caveats, responsible-gambling links, FAQ/schema where applicable. |
| Sportsbook hub | `/sportsbook`, `/sportsbook/*` | Market coverage, odds/boost caveats, event content, safer-betting links, price-comparison framing. |
| Province hub | `/ontario`, `/alberta`, subroutes | Legal age/regulator context, launch/market status, source-oriented availability language. |
| Payment guide | `/interac*`, `/deposit`, `/fast-payouts` | Payment-method education, deposit/withdrawal flow explanations, KYC/approval caveats, limits, timing caveats, source checks; no repo-owned cashier state. |
| Bonus guide | `/casino-bonuses-canada`, `/sportsbook-bonuses-canada`, no-deposit/free-bets routes | Wagering, max bet, expiry, eligible games/markets, withdrawal restrictions; no repo-owned bonus engine or eligibility state. |
| Evergreen guide | `/guides/**` | Clear question/problem, steps, comparison criteria, internal links, reviewed date. |
| Tools | `/tools/*` | Inputs/outputs, educational disclaimer, no guarantee of settlement/payout. |
| Editorial/policy | `/about/**`, `/editorial-policy`, `/sources`, `/how-we-work` | Methodology, attribution, governance, disclosure, contact/escalation. |
| Responsible-gambling | `/responsible-gambling`, supporting guides | Age, limits, self-exclusion, help resources, non-promotional tone. |
| Search | `/search` | Query UI, featured searches, noindex/follow, no affiliate conversion pressure as the primary content. |
| Admin | `/admin/**` | Internal-only, feature-gated, no public SEO indexing assumptions. |

## Metadata contract

Every indexable public page should define:

1. `<title>` using the page phrase plus `247iBET`.
2. `<meta name="description">` with a concise, non-misleading summary.
3. Canonical URL via `canonicalUrl('/path')` from `src/lib/site.ts`.
4. Open Graph title/description where the default layout values are insufficient.
5. JSON-LD when a page has review, FAQ, breadcrumb, article, organization, or tool semantics.
6. Visible author/review metadata on review/editorial pages where feasible.
7. Affiliate disclosure near commercial comparisons or partner CTAs.

Sitewide metadata defaults live in `src/lib/site.ts`; page-specific metadata belongs in the route file.

## Structured data

Use `JsonLd.svelte` for schema payloads and keep serialization through `src/lib/json-ld.ts`. Common schema types:

- `WebPage` for landing, hub, and guide pages.
- `BreadcrumbList` for hierarchy and discovery.
- `FAQPage` when visible FAQ content exists.
- `Organization` / publisher fragments where useful.
- Tool-oriented schemas only when page behavior and claims are stable.

Structured data must match visible content. Do not add FAQ or review schema for content that is not shown to users.

## Source-of-truth fields

| Field | Source | Usage |
| --- | --- | --- |
| Site URL and canonical helper | `src/lib/site.ts` | Canonicals, schema URLs, OG image URL. |
| Default SEO title/description/keywords | `src/lib/site.ts` | Layout defaults and fallback copy. |
| Partner/platform URLs | `src/lib/site.ts`, `src/lib/ibet-brand.ts` | Commercial CTAs, operator-routing links, and future platform handoff seams. |
| CTA labels | `src/lib/ibet-brand.ts` | Avoid drift from transparent affiliate wording. |
| Affiliate/legal disclaimer | `src/lib/ibet-brand.ts`, `AffiliateDisclosure.svelte` | Commercial sections and footer. |
| Workflow page registry | `src/lib/workflows/pages.ts` | SEO/GEO/AEO audit coverage. |
| Sitemap | `src/routes/sitemap.xml/+server.ts` | Crawlable public route list. |
| LLM maps | `static/llms.txt`, `static/llms-full.txt` | Public AI crawler summaries. |

## Workflow registry model

`src/lib/workflows/pages.ts` currently tracks 19 priority pages across hub, guide, and utility tiers. It is not the full route list; it is the audit set for workflow jobs. Add a route to this registry when it becomes a high-value SEO/GEO/AEO page that should be measured regularly.

Registry fields:

| Field | Meaning |
| --- | --- |
| `slug` | Stable workflow identifier. |
| `path` | Public route path. |
| `hasFaq` | Whether FAQ extraction/scoring should expect FAQ content. |
| `tier` | `hub`, `guide`, or `utility` priority grouping. |

## Search model

`src/lib/search-index.ts` powers `/search` with ranked local search. Search content should be curated enough to avoid thin or misleading results. `/search` is `noindex, follow`, so it supports users and crawlers without inviting indexed search-result pages.

When adding a major public page:

1. Add or confirm internal navigation from relevant hubs.
2. Consider sitemap inclusion.
3. Consider search-index inclusion if users would look for it.
4. Consider workflow registry inclusion if it should be scored.
5. Check static LLM maps if public IA materially changes.

## Internal-linking model

Use hub-and-spoke linking:

- Hubs link to category pages, guides, tools, policies, and high-intent comparisons.
- Guides link back to the relevant hub and to safety/disclosure pages where claims touch risk.
- Payment and bonus pages link to terms, KYC, and responsible-gambling content while making clear that cashier, verification, account, and bonus execution live in the separate gaming platform.
- Province pages link to legal, payment, and market-readiness guides.
- Footer links should preserve trust, policy, and commercial discovery paths.

## Review checklist for new or edited content

- [ ] Uses public-web / independent-guide language rather than operator or backend language.
- [ ] Has title, description, canonical, and relevant OG metadata.
- [ ] Uses visible affiliate disclosure near partner/commercial CTAs.
- [ ] Includes responsible-gambling context where conversion intent is high.
- [ ] Gives caveats for payout, licensing, bonus, game-count, KYC, wallet, odds, and availability claims.
- [ ] Adds or updates JSON-LD only when visible content supports it.
- [ ] Updates sitemap/search/workflow/LLM surfaces when the route becomes a priority public page.
- [ ] Backend-dependent UI is labeled as static marketing content, mocked/demo content, future API integration point, or production API required.
- [ ] Passes `pnpm check`, `pnpm lint`, `pnpm test`, and `pnpm build` before shipping.
