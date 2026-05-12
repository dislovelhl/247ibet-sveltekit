---
title: Gaming Platform Integration Contract
description: Boundary contract between the 247iBET public SvelteKit web platform and the separate operational gaming platform.
---

# Gaming Platform Integration Contract

## Important architecture clarification

The actual gaming platform is a separate project.

This repository should **not** implement or pretend to implement:

- casino games;
- sportsbook odds engine;
- betting transactions;
- wallet or balance;
- deposits or withdrawals;
- KYC;
- risk engine;
- bonus engine;
- player account backend;
- gaming provider integrations;
- real-money game execution.

This repository is the public-facing 247iBET web platform:

- brand website;
- SEO landing pages;
- acquisition funnel;
- affiliate/operator CTA layer;
- compliance-safe content surface;
- age-gated public experience;
- signup/lead capture surface;
- CMS-ready frontend;
- API-ready frontend shell;
- AI-ready content/workflow surface;
- integration layer for the separate gaming project.

Best concise framing: **This is not the gaming product. This is the modern public web, acquisition, SEO, compliance-content, and integration shell for the separate gaming product.**

## Production positioning

After hardening, describe this repo as:

> A production-ready SvelteKit public web platform for the 247iBET brand, built for SEO growth, compliance-safe acquisition, affiliate/operator routing, API integration, CMS expansion, analytics, and future AI-assisted content workflows.

Do not describe this repo as:

- the gaming platform;
- a sportsbook backend;
- a casino backend;
- a payment platform;
- a player wallet;
- a KYC system;
- a real-money gaming engine.

## Ownership matrix

| Capability | Frontend web repo owns | Shared / handoff responsibility | Separate gaming platform owns | Explicitly not owned by this repo |
| --- | --- | --- | --- | --- |
| Brand and SEO pages | Public page rendering, metadata, structured data, internal links, static fallback content. | Alignment on claims that reference live platform availability. | Source data for any live product availability, if exposed by API. | Game execution, live odds, wallet balances, transaction state. |
| Acquisition funnel | CTA placement, disclosure, age-gated public experience, lead capture, operator/platform handoff links. | Destination URLs, jurisdiction copy, campaign tracking, consent language. | Registration completion, account creation, eligibility checks, consent storage, account lifecycle. | Player-account creation, account status, deposit/withdrawal completion. |
| Signup / registration | `src/routes/api/signup` lead workflow and validation; optional handoff URL construction. | Handoff URL, referral identifiers, analytics event taxonomy. | Player registration, authentication, KYC, fraud checks, session issuance, account status. | Credentials, MFA, KYC decisions, session issuance. |
| Login handoff | Safe external link or future SSO handoff button. | SSO/handoff UX if a future protocol is approved. | Login form, credentials, MFA, session cookies/tokens, player profile. | Login processing, token minting, player profile storage. |
| Promotions and bonuses | Static educational content, creative snapshots, API-ready display components, terms links. | Display rules, jurisdictional restrictions, terms URL, stale-data handling. | Bonus eligibility, award issuance, wagering progress, expiry, bonus balances, offer opt-in. | Bonus engine, eligibility decisions, bonus balances, wagering progress. |
| Casino / sportsbook content | Guides, explainers, market/category pages, responsible-gambling context, operator-routing CTAs. | Platform availability copy and current terms links. | Games, game sessions, sportsbook markets, odds engine, bet slip, settlement, provider integrations. | Casino games, sportsbook odds execution, bet placement, settlement, providers. |
| Payments | Payment-method education and display data if API-backed. | Read-only method availability and public cashier-link routing. | Cashier, deposits, withdrawals, wallet, balances, payment tokens, transaction confirmations. | Wallet, cashier actions, deposits, withdrawals, balances, payment tokens. |
| Responsible gambling | Public education, support links, self-exclusion/resource routing. | Canonical platform RG URLs and compliance-reviewed copy. | Account-level limits, cool-offs, exclusions, affordability controls, enforcement state. | Account-level limits, cool-offs, exclusions, enforcement state. |
| Analytics | Web analytics, content performance, CTA events that do not expose sensitive player state. | Cross-system event names, attribution identifiers, privacy review. | Player/account/product telemetry subject to gaming-platform privacy and compliance controls. | Sensitive player telemetry, wallet/account/bet/payment/KYC event payloads. |
| AI/content workflows | SEO/GEO/AEO audits and content workflow endpoints. | Approved content modules and safe personalization constraints. | Any AI-assisted personalization that uses player state, if allowed by platform policy. | Player-state personalization without a privacy-reviewed platform API contract. |

## Expected API integration points

These are expected seams, not implemented backend guarantees in this repository:

| Integration point | Frontend behavior | Production API requirement |
| --- | --- | --- |
| Signup / registration handoff | Collect lead email or route to platform registration. | Stable registration/handoff URL or API response with success/error states. |
| Login handoff | Link to platform login or future SSO handoff. | Auth/session protocol owned by the gaming platform. |
| Operator CTA handoff | Use safe external links with disclosure and age/responsible-play copy. | Canonical destination URLs and compliance-reviewed CTA rules. |
| Promotions / bonus data | Show static educational content or API-backed display cards. | Bonus data endpoint with terms, eligibility text, expiry, jurisdiction, and safe fallback. |
| Payment method display data | Show general payment education or API-backed method availability. | Read-only payment-method endpoint; no wallet or cashier action in this repo. |
| Responsible gaming links | Link to public resources and platform RG pages. | Canonical account-level RG URLs from the platform. |
| User session handoff | Not assumed. Use only after platform-defined protocol exists. | SSO/session handoff spec, CSRF rules, token lifetime, logout behavior, privacy review. |
| Analytics events | Emit public-web events such as CTA click, signup lead submitted, page viewed. | Event taxonomy and privacy rules for any platform-side event ingestion. |
| Future content/personalization APIs | Render safe content modules with static fallback. | API contract defining allowed personalization inputs, caching, privacy, and failure behavior. |

## AGCO/iGaming Ontario operational handoff

This public web repository can document public-safe licence evidence references, but it does not own the operational controls required to conduct or manage gaming in Ontario. Those controls belong to the separate gaming platform and the licensed operating entity.

| Compliance / readiness area | Public web repo responsibility | Separate gaming platform / operator responsibility |
| --- | --- | --- |
| Legal operator identity | Display only legal/compliance-approved public wording after evidence-gate activation. | Maintain the legal entity, business/trade names, licence records, renewal calendar, and regulator correspondence. |
| AGCO registration | Store public-safe registration metadata in `src/lib/ibet-brand.ts` only after `pnpm compliance:agco:licensed` passes with approved evidence. | Hold the AGCO Certificate of Registration, registration number/type, expiry/renewal evidence, and any registration conditions. |
| iGaming Ontario operating agreement | Link or display only approved public wording and directory/source references. | Maintain the iGO operating agreement, approved brands/sites, Ontario launch conditions, and commercial obligations. |
| Technology and game readiness | Do not claim games, critical gaming systems, or payment systems are certified from this repo. | Own ITL certification, technology compliance confirmation, game/provider readiness, regulatory reporting setup, secure data/channel setup, and go-live approval or conditions. |
| Responsible-gambling operations | Provide education and official support/resource links. | Own account-level limits, play breaks, self-exclusion enforcement, player-risk monitoring, interventions, and supporting records. |
| AML, finance, and reporting | Avoid collecting or displaying sensitive player/account/payment state. | Own AML submissions, financial information submissions, GGR/funds-transfer testing, FINTRAC/reporting setup, and ongoing regulator notifications. |
| Public regulatory status API | Render neutral fallback copy if status is unavailable or ambiguous. | Provide a versioned, public-safe regulatory status contract if the web layer will display live licence or platform-readiness state. |

Activation rule: the web repo may not publish AGCO/iGO licence claims, badges, Ontario operator-status claims, go-live claims, or regulated-site availability claims until the private evidence package is complete and the strict evidence gate passes. If the platform cannot provide confirmed status, this repo must stay in verification-first no-proof posture.

## Backend-dependency labels

When UI implies a backend dependency, make the state explicit in code comments, docs, or copy:

- **Static marketing content** — editorial or brand content authored in this repo.
- **Mocked/demo content** — non-production demonstration; must not imply live account/game/payment state.
- **Future API integration point** — visible seam that needs a later platform contract.
- **Production API required** — must remain hidden, disabled, or safely linked out until the platform API is available.

Do not hard-code fake gaming state such as wallet balances, KYC status, bonus eligibility, active odds, bet-slip state, deposit status, withdrawal status, game-session state, or transaction completion.

## Security assumptions

- The public web repo does not store player credentials, wallet balances, KYC documents, payment tokens, bet slips, or transaction records.
- Platform authentication, account state, payment state, KYC state, and real-money transaction confirmation are owned by the separate gaming platform.
- External platform links must use safe-link attributes and should preserve age/responsible-play/disclosure context.
- Any future API integration must define CSRF behavior, CORS origins, token storage rules, rate limits, PII handling, audit logging, and cacheability before launch.
- Analytics events from this repo should avoid sensitive player state unless a privacy-reviewed platform event contract explicitly permits it.
- If an API returns ambiguous, partial, or stale state, the UI must prefer neutral fallback copy over transactional claims.

## Required environment variables

Current known environment variables in this repository remain focused on site, admin, workflow, analytics, and partner routing. Future gaming-platform integration should use explicit environment variables rather than hard-coded endpoints.

| Variable | Status | Purpose |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Existing | Canonical site URL. |
| `VERCEL_URL` | Existing platform-provided | Deployment URL fallback. |
| `ADMIN_ENABLED` | Existing | Enables internal admin pages. |
| `ADMIN_TOKEN` | Existing | Shared admin session token. |
| `WORKFLOW_SECRET` | Existing | Authenticates workflow POST routes. |
| `CRON_SECRET` | Existing | Authenticates cron GET routes. |
| `PUBLIC_GAMING_PLATFORM_URL` | Required before platform handoff launch | Public base URL for registration/login/operator handoffs. |
| `PUBLIC_GAMING_API_BASE_URL` | Required before API-backed display launch | Public/read-only API base for promotions, payment-method display, responsible-gaming links, and content modules. |
| `GAMING_API_SERVER_TOKEN` | Required only for server-side platform API calls | Server-only token for approved backend-to-backend reads; never expose to browser code. |
| `PUBLIC_ANALYTICS_WRITE_KEY` | Optional/future | Public-web event collection if not handled by Vercel Analytics. |

## Failure behavior

If the gaming-platform API or handoff destination is unavailable:

- show safe fallback content such as educational copy, static terms links, or a neutral “check the platform for current availability” message;
- hide or disable backend-dependent account, betting, payment, bonus-eligibility, or session UI;
- do not expose broken account, betting, wallet, deposit, withdrawal, KYC, or payment controls;
- do not imply a bet, deposit, withdrawal, bonus award, KYC approval, registration, login, or transaction completed unless the separate gaming platform confirms it;
- log web-layer errors without capturing credentials, payment details, KYC data, wallet state, or sensitive player account data;
- preserve SEO pages and responsible-gambling resources even when live platform data is unavailable.

## Launch blockers

The public web platform can launch as a brand/acquisition/content site before the gaming backend is connected, but the following are blockers for any API-backed gaming/platform feature:

- no approved API contract for the relevant integration point;
- no canonical platform URL or handoff route for registration/login/operator CTAs;
- no legal/compliance review of promotion, payment, responsible-gaming, jurisdiction, or account-state copy;
- no approved AGCO/iGaming Ontario evidence handoff for public licence, go-live, directory, or operating-agreement claims;
- no confirmed platform owner for AGCO registration renewal, iGO operating-agreement conditions, ITL certification, technology compliance confirmation, regulatory reporting, secure data/channel setup, AML/financial submissions, responsible-gambling operations, and player-risk monitoring;
- no failure-state design for unavailable, ambiguous, or stale platform data;
- no security review for CORS, CSRF, token storage, PII handling, rate limits, audit logging, and analytics taxonomy;
- UI displays wallet balances, KYC status, active odds, bonus eligibility, payment state, bet state, or transaction completion without platform API confirmation;
- environment variables for the target deployment are missing or point to non-production/demo services without clear labeling.

## Acceptance criteria for future changes

- The repo clearly separates public web responsibilities from gaming-platform responsibilities.
- No page pretends to provide real gaming functionality.
- Future API integration points are documented before implementation.
- The site can launch as a brand/acquisition platform before the gaming backend is connected.
- Backend-dependent UI uses static/demo/future-API/production-API-required labels until live platform contracts exist.
