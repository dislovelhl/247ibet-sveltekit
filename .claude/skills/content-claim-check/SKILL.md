---
name: content-claim-check
description: Run the proximity-based regulatory-claim build gate for the 247iBET marketing front and walk through resolving any violations. Use when editing content that touches AGCO, iGaming Ontario, or 247iBET self-references, or when `pnpm test` flags `tests/regulatory-claims.test.ts`.
---

# Content Claim Check

The 247iBET marketing-front build gate at `tests/regulatory-claims.test.ts` fails when a 247iBET self-reference (`247ibet`, `247iBET`, `iBET 247`, `ibet247`) appears within ±5 lines of an AGCO or iGaming Ontario mention in any `src/` file. The gate exists because `IBET_PROFILE.agcoLicensed = false` (`src/lib/ibet-brand.ts:33`) — first-party regulatory claims are misrepresentation while no licence is on file.

## Run the gate

```bash
pnpm test tests/regulatory-claims.test.ts
```

A failing run prints up to 25 violations as `<file>:<line>  <excerpt>`. Capture them — that's the triage list.

## Resolution tree (per violation)

For each `<file>:<line>` flagged, pick exactly one:

1. **Reword to drop the AGCO/iGO claim entirely** (preferred when the claim is incidental). Example: "we follow AGCO standards" → "we follow industry-standard responsible-gambling practices". Preserve first-party voice — the site speaks AS 247iBET, not about it.
2. **Move the claim to a clearly-different DOM region** (>5 lines from the self-reference). Use this when the AGCO mention is legitimately about a *third-party* operator the page reviews/compares.
3. **Delete the line** if the claim has no editorial purpose (footer decoration, vestigial copy from a prior content pass).
4. **Last resort: add the allowlist marker** as the file's first non-whitespace line for review/guide pages where the AGCO/iGO mention is editorial context, not an operator claim:
   ```html
   <!-- regulatory-claim:context: AGCO and iGaming Ontario references describe regulators or third-party operators, not 247iBET's own licensing posture. -->
   ```
   Use this sparingly — every marker is a file the gate stops inspecting.

After fixing, re-run the gate. The test passes when the violation list is empty.

## Voice guardrails

`CLAUDE.md` (Voice & Tone section) declares 247iBET first-party voice. **Do not** introduce "independent guide" / "review surface" / "editorial team reviewed" framing when reconciling claims — that contradicts the brand voice. The allowlist marker explicitly says "regulators or third-party operators" for the same reason: it describes what the AGCO/iGO tokens mean, not what the page is.

`docs/CONTENT_MODEL.md` predates the first-party voice flip and still says "independent guide". When the two conflict, **CLAUDE.md wins**.

## Bypass condition

The gate skips all checks when `IBET_PROFILE.licences[]` (in `src/lib/ibet-brand.ts`) contains a verified Ontario entry:
```ts
{ jurisdiction: 'ON', verified: true, ... }
```
If a real licence is obtained, populate that entry and the gate auto-relaxes — no marker / reword needed across the codebase.

## Cross-references

- Build gate: `tests/regulatory-claims.test.ts`
- Brand profile + licence registry: `src/lib/ibet-brand.ts`
- Compliance posture: `docs/COMPLIANCE_AUDIT_v0.3.md`
- Voice contract (authoritative): repo root `CLAUDE.md` "Voice & Tone" section
- Voice contract (legacy, secondary): `docs/CONTENT_MODEL.md`
- Original landing: commits `5f9164a` (gate + reconciliation) and `ae2a8e2` (marker voice fix)
