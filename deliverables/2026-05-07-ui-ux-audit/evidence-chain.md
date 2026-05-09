# Evidence Chain — 247iBET UI/UX Audit Package

## 1. Root of trust

- Workspace commit: `627ea43`
- Package generation time: `2026-05-07T06:32:26Z`
- Package directory: `deliverables/2026-05-07-ui-ux-audit/`

## 2. Visual evidence

- `assets/final-audit-home.png`
  - SHA-256: `da4a7128dc8df385cb1e7d4f676db08f83e129f90aae9ab661e6f3461f24dd2d`
- `assets/age-gate-audit.png`
  - SHA-256: `8b2e911b3b9992749bc87b9f2b5ecd901a7447ed8a47d6e7f0dd6efc8fbe671e`

## 3. Validation evidence

- `report.pdf`
  - SHA-256: `f8a35100e0ca1d5635bf6c8eeac00bbfa1cf27400c4cf3c36025fd77a9704d3b`

- `logs/verification.log`
  - Contains the current re-run of:
    - `pnpm check`
    - `pnpm lint`
    - `pnpm test`
    - `pnpm build`
  - Result: passed

- `logs/accessibility-robust.log`
  - Contains the current re-run of:
    - `pnpm test:e2e -- tests/e2e/accessibility-robust.spec.ts`
  - Result: passed

## 4. Recorded browser audit results

The following metrics were previously recorded during the browser-based audit pass and are included in the formal report for completeness:

- Lighthouse desktop: performance 99, accessibility 100, best-practices 96, seo 92
- WCAG robust scan: 7/7 pages passed, no Axe violations

## 5. Narrative sources

- `report.md` — source narrative for the PDF
- `report.html` — HTML rendering source used to produce `report.pdf`
- `evidence-manifest.json` — machine-readable artifact index

## 6. Traceability notes

This package is intentionally read-only in scope. It documents the visual polish pass and validation outcomes without asserting any unverified production-side changes.
