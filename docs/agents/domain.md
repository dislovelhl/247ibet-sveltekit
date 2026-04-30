# Domain Docs

## Layout: single-context

This repo uses a **single-context** layout:

| Path | Purpose |
|---|---|
| `CONTEXT.md` | Project domain language, glossary, and key invariants |
| `docs/adr/` | Architectural Decision Records (one file per decision) |

Neither file exists yet — create `CONTEXT.md` at the repo root and `docs/adr/0001-*.md` for your first ADR when you're ready.

## How skills consume these files

- **`improve-codebase-architecture`** — reads `CONTEXT.md` for domain language before proposing refactors
- **`diagnose`** — reads `CONTEXT.md` to distinguish intentional design from bugs
- **`tdd`** — reads `CONTEXT.md` to name tests using project vocabulary; reads `docs/adr/` to respect past decisions

## ADR format

```markdown
# ADR-NNNN: <title>

**Status**: proposed | accepted | deprecated | superseded by ADR-XXXX
**Date**: YYYY-MM-DD

## Context
## Decision
## Consequences
```
