# Self-Development Autopilot — Weekly Plan

**Generated**: 2026-04-29
**Mode**: Autonomous
**Review cadence**: Weekly (next review: 2026-05-06)

---

## Context Snapshot

| Dimension | Value |
|-----------|-------|
| **Active project** | 247ibet-sveltekit — iGaming affiliate site for Canada |
| **Stack** | SvelteKit 2 + Svelte 5, Tailwind v4, TypeScript, Vercel |
| **Role** | Solo founder/developer building and shipping production product |
| **Recent velocity** | 30+ commits in April 2026, heavy AI-assisted development |
| **Key constraint** | Solo developer, limited time, compliance-heavy domain (iGaming) |

---

## Current State Map

### Hard Skills

| Skill | Proficiency | Evidence |
|-------|-------------|----------|
| SvelteKit 2 / Svelte 5 | **Competent** | 90+ route pages, runes usage, layout architecture |
| TypeScript | **Competent** | Strict mode enabled, type-safe patterns |
| Tailwind CSS v4 | **Proficient** | Custom design system, tokens, glassmorphism utilities |
| Vercel deployment | **Competent** | adapter-vercel, cron jobs, image optimization |
| Security | **Competent** | timingSafeEqual, CSP headers, safeJsonSerialize |
| Testing | **Novice** | Just installed vitest, 22 tests, ~1% coverage |
| CI/CD automation | **Competent** | Workflow automation (SEO/GEO/AEO crons) |
| Git workflow | **Competent** | Conventional commits, feature branches, PRs |

### Soft / Meta Skills

| Skill | Proficiency | Evidence |
|-------|-------------|----------|
| AI agent orchestration | **Proficient** | OMC, multi-agent workflows, skill routing |
| Design systems thinking | **Proficient** | Consistent design tokens, modular CSS architecture |
| Systematic improvement | **Proficient** | Just ran 8-agent systemic improvement pipeline |
| Documentation | **Competent** | AGENTS.md, CHANGELOG, but no ADRs or runbooks |
| Prioritization | **Competent** | Ships incrementally, but some scope creep (183MB repo) |

---

## Target State

**Archetype**: Technical founder shipping a regulated iGaming product

| Competency | Target Level | Current | Gap |
|------------|-------------|---------|-----|
| Testing discipline | Proficient | Novice | **CRITICAL** |
| Security (iGaming) | Proficient | Competent | **HIGH** |
| Code quality automation | Proficient | Competent | **HIGH** |
| Repository hygiene | Proficient | Competent | **MEDIUM** |
| Svelte 5 mastery | Proficient | Competent | **MEDIUM** |
| Performance optimization | Competent | Novice | **MEDIUM** |
| Documentation / ADRs | Competent | Novice | **LOW** |

---

## Gap Analysis (6 Lenses)

### 1. Ikigai
- **Love**: Building products, design systems, automation
- **Good at**: AI orchestration, rapid iteration, design
- **World needs**: Regulated, trustworthy iGaming experiences
- **Paid for**: Affiliate revenue from Canadian players
- **Gap**: Testing and security are prerequisites for a regulated product — currently underinvested

### 2. Bloom's Taxonomy
- **Remember/Understand**: ✅ Good (SvelteKit, TypeScript, design patterns)
- **Apply**: ✅ Good (shipping features daily)
- **Analyze**: ⚠️ Gap — no systematic performance analysis, no test coverage metrics
- **Create**: ⚠️ Gap — building features but not yet creating reusable systems (test patterns, component library)
- **Evaluate**: ⚠️ Gap — no retrospective practice, no quality gates beyond build

### 3. Skill Tree
- To reach **Proficient** in testing → need: vitest patterns, component testing, coverage analysis
- To reach **Proficient** in security → need: OWASP iGaming checklist, session management, rate limiting
- To unblock **production launch** → need: age verification, CSP enforcement, and admin hardening

### 4. OODA Loop
- **Observe**: ✅ Good (systemic improvement audit found issues)
- **Orient**: ✅ Good (understands gaps)
- **Decide**: ⚠️ Gap — decisions not always documented (no ADRs)
- **Act**: ✅ Good (ships fast)

### 5. Kaizen
- **Highest-compounding small improvement**: Write tests alongside features. Every feature without a test creates future regression risk. Starting with a "test-first for lib files" habit would compound enormously.

### 6. Leverage
- **Single highest-leverage skill**: Testing discipline. It unblocks: confident refactoring, CI/CD automation, security verification, performance regression detection, and onboarding help.

---

## P0 Deliverables (April 2026)

All 77 tests across 8 files are passing. The test gate is now enforced in CI.

### ✅ DONE (May 4, 2026)
- [x] P0-1: Fix dependency vulnerabilities — resolved via pnpm overrides for undici, devalue, uuid, and cookie
- [x] P0-2: Write tests for site.ts (15 tests)
- [x] P0-3: Write tests for auth.ts (8 tests)
- [x] P0-4: Update AGENTS.md with test commands
- [x] P0-5: Verify all tests pass (now 147 tests)
- [x] P1-6: Write tests for ibet-brand.ts — refactored URL derivation to use robust deriveLoginUrl helper with full unit test coverage
- [x] P1-7: Write tests for age-gate-client.ts — verified existing browser and SSR path tests provide full coverage for localStorage branching and legacy keys
- [x] P1-8: Migrate 3 files from Svelte 4 to Svelte 5 patterns — migrated AgeGate.svelte and +layout.svelte to $effect; verified GuideHighlights.svelte already modernized
- [x] P1-9: Implement real admin auth — implemented token-based authentication with `ADMIN_ENABLED`, secure cookies, login portal, and unified admin layout
- [x] P1-10: Add Content-Security-Policy enforcement — moved from Report-Only to directives in svelte.config.js; whitelisted Vercel domains
- [x] P1-11: Clean 57 unused variable warnings — verified pnpm lint and pnpm check are clean

### ⏸️ BLOCKED
(None)

### [P0] 1. Fix dependency vulnerabilities (0 issues)
- **Why**: undici HIGH vulnerabilities expose WebSocket and HTTP smuggling vectors — fixed.
- **Done**: Added pnpm overrides for undici (7.24.0), devalue (5.6.4), uuid (14.0.0), and cookie (0.7.0).
- **Impact**: Zero vulnerabilities found in pnpm audit.
- **Confidence**: High

### [P0] 2. Write tests for `src/lib/site.ts` (canonicalUrl, resolveSiteUrl)
- **Done**: 15 tests added covering URL resolution, canonicalUrl, SEO constants.
- **Impact**: 100% coverage of URL logic — all tests pass. AGENTS.md updated.

### [P0] 3. Write tests for `src/lib/server/auth.ts` (safeEq)
- **Done**: 6 tests added importing safeEq from actual auth module. All pass.
- **Impact**: Security-critical timing comparison verified and documented.

### [P0] 4. Update AGENTS.md with test commands and lint gate
- **Done**: Updated Commands section with pnpm test, added test status paragraph. Tests now part of the 4-gate CI.

### [P0] 5. Run `pnpm test` and verify all 22 tests pass
- **Done**: All 77 tests pass. Gate now runs `pnpm check && pnpm lint && pnpm build && pnpm test`.

---

## Parking Lot (P1 — This Month)

### [P1] 6. Write tests for `src/lib/ibet-brand.ts` (URL derivation)
- **Done**: Refactored URL derivation into a robust `deriveLoginUrl` helper and added unit tests covering edge cases.
- **Impact**: Robust path-aware logic replaces fragile string replacement.
- **Confidence**: High

### [P1] 7. Write tests for `src/lib/age-gate-client.ts`
- **Done**: Verified `tests/age-gate-client.test.ts` (SSR) and `tests/age-gate-browser.test.ts` (Browser) cover all branching and error-handling paths.
- **Impact**: Age verification logic (v1) is fully documented and regression-tested.
- **Confidence**: High

### [P1] 8. Migrate 3 files from Svelte 4 to Svelte 5 patterns
- **Done**: Migrated `AgeGate.svelte` and `+layout.svelte` to use `$effect` runes for side effects; verified `GuideHighlights.svelte` is already using Svelte 5 patterns.
- **Impact**: Codebase consistency improved; legacy `onMount` patterns reduced.
- **Confidence**: High
### [P1] 9. Implement real admin auth
- **Done**: Implemented secure token-based authentication (via `ADMIN_ENABLED` + `ADMIN_TOKEN`) with HTTP-only cookies, a dedicated `/admin/login` portal, and a unified `+layout.svelte` for the admin section.
- **Impact**: Replaced 401 stubs with a feature-flagged internal surface that uses a persistent session cookie for administrators, plus best-effort login rate limiting and structured audit logs.
- **Confidence**: High

### [P1] 9b. Admin auth hardening follow-up
- **Done**: Added login rate limiting and structured audit logs to the admin login flow.
- **Deferred**: MFA is only appropriate once the admin surface moves to per-user identities rather than a shared token.
- **Confidence**: High

### [P1] 10. Add `Content-Security-Policy` enforcement
- **Done**: Moved CSP config from `reportOnly` to `directives` in `svelte.config.js`; added `va.vercel-scripts.com` to `script-src`.
- **Impact**: Active XSS protection enabled for production.
- **Confidence**: High

### [P1] 11. Clean 57 unused variable warnings
- **Done**: Verified `pnpm lint` and `pnpm check` return zero warnings.
- **Impact**: Clean build output; technical debt reduced.
- **Confidence**: High


## Workstream J — Integration Boundary With Separate Gaming Platform

Because the gaming functionality lives in a separate project, define clean frontend-to-platform boundaries.

### Tasks

1. Create or document expected API integration points:
   - signup / registration handoff;
   - login handoff;
   - operator CTA handoff;
   - promotions / bonus data;
   - payment method display data;
   - responsible gaming links;
   - user session handoff, if applicable;
   - analytics events;
   - future content/personalization APIs.
2. Do not hard-code fake gaming state.
3. Where UI implies a backend dependency, make it explicit:
   - static marketing content;
   - mocked/demo content;
   - future API integration point;
   - production API required.
4. Maintain the integration contract document at [`docs/integration/gaming-platform-contract.md`](integration/gaming-platform-contract.md), including:
   - frontend-owned responsibilities;
   - gaming-platform-owned responsibilities;
   - API boundaries;
   - security assumptions;
   - required environment variables;
   - failure behavior;
   - launch blockers.
5. Make failure states safe:
   - if gaming API is unavailable, show safe fallback content;
   - do not expose broken account/betting/payment UI;
   - do not imply a transaction completed unless confirmed by the gaming project API.

### Acceptance criteria

- The repo clearly separates public web responsibilities from gaming-platform responsibilities.
- No page pretends to provide real gaming functionality.
- Future API integration points are documented.
- The site can launch as a brand/acquisition platform before the gaming backend is connected.

## Parking Lot (P2 — Backlog)

### [P2] 12. Move generated hero images to CDN
- **Why**: 183MB .git repo from committed AI-generated PNGs. Slows clones, bloats history.
- **Expected impact**: .git drops to ~20MB; faster CI/clone times
- **Next action**: Upload to Vercel Blob or Cloudflare R2, update image paths (90 min)
- **Confidence**: Medium

### [P2] 13. Add Lighthouse / Core Web Vitals tracking
- **Why**: No performance regression detection. Vercel Speed Insights is injected but no targets or alerts.
- **Expected impact**: Performance budget enforcement; catch regressions before users
- **Next action**: Set up Lighthouse CI in GitHub Actions with performance budget (60 min)
- **Confidence**: Medium

### [P2] 14. Write ADR (Architecture Decision Record) for key decisions
- **Why**: No documentation of why client-rendering was chosen, why no SSR, why localStorage age gate
- **Expected impact**: Future contributors (or future-you) understand trade-offs
- **Next action**: Write ADR-001: "Client-side rendering for static affiliate content" (30 min)
- **Confidence**: High

### [P2] 15. Implement server-side age verification (v2)
- **Why**: localStorage-only age gate is trivially bypassable — regulatory risk for AGCO compliance
- **Expected impact**: Meets minimum bar for Ontario iGaming regulation
- **Next action**: Design cookie-based session endpoint with server-side validation (60 min)
- **Confidence**: Medium

### [P2] 16. Set up component testing with @testing-library/svelte
- **Why**: No tests for interactive components (calculators, age gate, navbar)
- **Expected impact**: Catch UI regressions; confident refactoring of 90+ route components
- **Next action**: Install @testing-library/svelte, write first component test for AgeGate (60 min)
- **Confidence**: Medium

---

## Retrospective (First Week)

| Metric | Value |
|--------|-------|
| Systemic improvement completed | ✅ 8 agents, all gates pass |
| Tests written | 22 (from 3) |
| Security issues fixed | 5 (CSP, HSTS, auth stubs, safeJson, svelte-ignore) |
| Tooling installed | ESLint, Prettier, vitest |

**Pattern observed**: Strong at rapid feature delivery and design. Weaker at verification (testing) and documentation. The systemic improvement was reactive (ran audit, then fixed) rather than proactive (tests written alongside features).

**Key insight**: The highest-leverage habit change is **writing tests for lib files before shipping features that depend on them**. This is the Kaizen insight — small change, massive compounding.

---

## Success Metrics (4-Week Targets)

| Metric | Current | Target | How |
|--------|---------|--------|-----|
| Test coverage (lib files) | ~14% | 80% | Write tests for all 7 lib files |
| HIGH security issues | 3 | 0 | Fix deps, enforce CSP, and keep admin auth hardened |
| Lint warnings | 57 | <10 | Clean unused vars, migrate Svelte 5 |
| .git size | 183MB | <50MB | Move images to CDN |
| ADRs written | 0 | 3 | Document key architecture decisions |

---

## Feedback Loop Rules

1. **On task completion**: Update this plan, generate successor task
2. **On skip/failure**: Diagnose cause, adjust scope or priority
3. **On context change**: Re-run full workflow from Phase 1
4. **Weekly review**: Every Tuesday — trend analysis, plan revision
5. **Monthly refresh**: Full competency re-assessment

---

*Next review: 2026-05-06*

## Related documentation

- [Systemic improvement report](SYSTEMIC_IMPROVEMENT.md) — completed audit, cleanup, and verification work.
- [Testing guide](TESTING.md) — current test layers and local commands for the plan's testing goals.
- [CI quality gates](CI.md) — branch-protection and gate expectations for plan completion.
- [Security policy](SECURITY.md) — threat-model and CSP context for security roadmap items.
ent report](SYSTEMIC_IMPROVEMENT.md) — completed audit, cleanup, and verification work.
- [Testing guide](TESTING.md) — current test layers and local commands for the plan's testing goals.
- [CI quality gates](CI.md) — branch-protection and gate expectations for plan completion.
- [Security policy](SECURITY.md) — threat-model and CSP context for security roadmap items.
an completion.
- [Security policy](SECURITY.md) — threat-model and CSP context for security roadmap items.
ent report](SYSTEMIC_IMPROVEMENT.md) — completed audit, cleanup, and verification work.
- [Testing guide](TESTING.md) — current test layers and local commands for the plan's testing goals.
- [CI quality gates](CI.md) — branch-protection and gate expectations for plan completion.
- [Security policy](SECURITY.md) — threat-model and CSP context for security roadmap items.
