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
- To unblock **production launch** → need: real admin auth, age verification, CSP enforcement

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

### ✅ DONE (April 29, 2026)
- [x] P0-2: Write tests for site.ts (15 tests)
- [x] P0-3: Write tests for auth.ts (8 tests)
- [x] P0-4: Update AGENTS.md with test commands
- [x] P0-5: Verify all tests pass (now 83 tests)

### ⏸️ BLOCKED
- [ ] P0-1: Fix dependency vulnerabilities — undici comes via @workflow packages

### [P0] 1. Fix dependency vulnerabilities (10 issues, 3 HIGH)
- ~~**Why**: undici HIGH vulnerabilities expose WebSocket and HTTP smuggling vectors — unacceptable for a production iGaming site~~
- ~~**Expected impact**: Zero HIGH/Critical CVEs in dependency tree~~
- ~~**Next action**: Run `pnpm update workflow braintrust && pnpm audit` — verify 10 vulns resolve (30 min)~~
- ~~**Assumptions**: Newer versions of workflow/braintrust pull patched transitive deps~~
- ~~**Confidence**: High~~

**Status**: BLOCKED — undici comes via @workflow world packages which pin older versions. Requires upstream fix.

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
- **Why**: `IBET_URLS.login` uses fragile `.replace('/home', '')` — regression-prone
- **Expected impact**: Snapshot tests catch any accidental URL changes
- **Next action**: Expand existing `tests/ibet-brand.test.ts` with URL format validation (30 min)
- **Confidence**: High

### [P1] 7. Write tests for `src/lib/age-gate-client.ts`
- **Why**: Legal compliance for iGaming. Need to verify localStorage branching, browser detection, legacy key migration
- **Expected impact**: Documented contract for age verification behavior
- **Next action**: Create `tests/age-gate.test.ts` with mocked localStorage (45 min)
- **Confidence**: Medium (requires mocking browser environment)

### [P1] 8. Migrate 3 files from Svelte 4 to Svelte 5 patterns
- **Why**: `svelte:component` is legacy syntax; `$effect` is idiomatic for side effects
- **Expected impact**: Consistent codebase, leverage Svelte 5 performance improvements
- **Next action**: Migrate `GuideHighlights.svelte` — replace `<svelte:component>` with direct rendering (30 min)
- **Confidence**: High

### [P1] 9. Implement real admin auth (replace 401 stubs)
- **Why**: Admin routes currently return 401 unconditionally. Need real auth before any data appears.
- **Expected impact**: Secure admin access; can deploy affiliate dashboard with real data
- **Next action**: Research auth options for SvelteKit (Lucia, Auth.js, Stack Auth) — evaluate for iGaming compliance (60 min)
- **Confidence**: Medium (depends on auth provider choice)

### [P1] 10. Add `Content-Security-Policy` enforcement (remove Report-Only)
- **Why**: CSP-Report-Only detects but doesn't block XSS. For a production iGaming site, enforcement is required.
- **Expected impact**: Active XSS protection; compliance signal for regulators
- **Next action**: Review CSP violation reports, tighten policy, switch to enforcement (45 min)
- **Confidence**: Medium (need to verify no legitimate scripts are blocked)

### [P1] 11. Clean 57 unused variable warnings
- **Why**: Lint noise hides real issues; unused imports suggest dead code
- **Expected impact**: Clean lint output; smaller bundle if dead code is removed
- **Next action**: Run `pnpm lint --fix` then manually address remaining unused vars across 30+ files (90 min)
- **Confidence**: High

---

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
| HIGH security issues | 3 | 0 | Fix deps, enforce CSP, real admin auth |
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
