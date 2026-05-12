---
title: 247iBET Documentation
description: Navigation index for the repo-local 247iBET SvelteKit documentation set.
---

# 247iBET Documentation

This directory is the repo-local documentation home for the 247iBET SvelteKit project. It uses Geistdocs-style authoring conventions — frontmatter, predictable navigation, task-first pages, source references, and concise callouts — while remaining plain Markdown and dependency-free.

## Start here

| Page | Use it for |
| --- | --- |
| [Architecture](./ARCHITECTURE.md) | Understand the SvelteKit app boundary, route structure, workflows, security posture, and runtime contracts. |
| [Gaming platform contract](./integration/gaming-platform-contract.md) | Understand the boundary between this public web shell and the separate operational gaming platform. |
| [Content model](./CONTENT_MODEL.md) | Plan or review casino, sportsbook, market, tool, policy, news, guide, and search pages. |
| [Design system](./DESIGN_SYSTEM.md) | Apply prestige navy tokens, typography, shared CSS utilities, component rules, and accessibility baselines. |
| [Operations & deployment](./OPERATIONS_DEPLOYMENT.md) | Run local gates, deploy on Vercel, operate cron/workflow endpoints, and recover from common failures. |

## Specialist references

| Page | Status | Notes |
| --- | --- | --- |
| [CI](./CI.md) | Active | Quality gates and branch-protection guidance. Re-check test counts against the current branch before quoting them externally. |
| [Testing](./TESTING.md) | Active | Test layers, command usage, and known gaps. |
| [Security](./SECURITY.md) | Active | CSP, headers, admin gating, and vulnerability reporting notes. |
| [Performance](./PERFORMANCE.md) | Active | Performance budget, generated-image policy, font policy, bundle checks, and Lighthouse workflow. |
| [Accessibility](./A11Y.md) | Active | WCAG target, implemented patterns, and pending audits. |
| [Compliance audit](./COMPLIANCE_AUDIT_v0.3.md) | Snapshot | Historical compliance state; verify before treating as current. |
| [Development plan](./DEVELOPMENT_PLAN.md) | Snapshot | Historical planning artifact; useful for context, not a live roadmap. |
| [Systemic improvement](./SYSTEMIC_IMPROVEMENT.md) | Snapshot | Historical audit/remediation summary. |
| [Agent labels](./agents/triage-labels.md) | Support | Issue and agent-triage labeling. |
| [Agent domain](./agents/domain.md) | Support | Domain-specific agent context. |
| [Agent issue tracker](./agents/issue-tracker.md) | Support | Agent-facing tracking conventions. |

## Documentation principles

1. **Current-checkout truth first.** Prefer source files, tests, and generated artifacts in this checkout over stale historical docs.
2. **Task-oriented pages.** Each doc should answer “what do I do next?” and link to source paths.
3. **No dependency creep.** Keep docs as Markdown unless a future explicit task authorizes a docs-site package.
4. **Cautious regulated-copy posture.** Legal, licensing, payout, bonus, game-count, wallet, KYC, odds, payment, and affiliate claims need caveats, source checks, or explicit gaming-platform API backing.
5. **AI-readable summaries.** Update `static/llms.txt` or `static/llms-full.txt` only when the public site map or positioning changes; do not use them as the only repo documentation.

## Source-of-truth matrix

| Topic | Primary source | Documentation surface |
| --- | --- | --- |
| Brand, canonical URL, SEO defaults | `src/lib/site.ts` | [Content model](./CONTENT_MODEL.md) |
| Partner/platform URLs, CTA labels, disclosure | `src/lib/ibet-brand.ts` | [Content model](./CONTENT_MODEL.md), [Gaming platform contract](./integration/gaming-platform-contract.md) |
| Routes and sitemap | `src/routes/**`, `src/routes/sitemap.xml/+server.ts` | [Architecture](./ARCHITECTURE.md), [Content model](./CONTENT_MODEL.md) |
| SEO/GEO/AEO page registry | `src/lib/workflows/pages.ts` | [Content model](./CONTENT_MODEL.md), [Operations & deployment](./OPERATIONS_DEPLOYMENT.md) |
| Design tokens and utilities | `DESIGN.md`, `src/styles/**`, `src/app.css` | [Design system](./DESIGN_SYSTEM.md) |
| Generated hero images | `static/images/generated/**` | [Design system](./DESIGN_SYSTEM.md), [Performance](./PERFORMANCE.md) |
| Server-only helpers | `src/lib/server/**` | [Architecture](./ARCHITECTURE.md), [Operations & deployment](./OPERATIONS_DEPLOYMENT.md) |
| Runtime, CSP, Vercel headers | `svelte.config.js`, `vercel.json` | [Architecture](./ARCHITECTURE.md), [Operations & deployment](./OPERATIONS_DEPLOYMENT.md) |
| Tests and gates | `package.json`, `vitest.config.ts`, `playwright.config.ts`, `tests/**` | [Operations & deployment](./OPERATIONS_DEPLOYMENT.md), [Testing](./TESTING.md) |

## Current checkout notes

- Vitest currently covers **190 tests across 29 files**; re-run `pnpm test` before quoting the number outside the repository.
- Generated hero image references under `/images/generated/...` should resolve to files in `static/images/generated/`; use `.webp` from route markup and keep the source `.png` for future re-optimization.
- Workflow API routes share server-only helpers in `src/lib/server/workflow-route.ts`; avoid reintroducing per-route secret-check or start-response duplication.
