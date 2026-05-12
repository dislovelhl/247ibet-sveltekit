# AGENTS.md

Repository guidance for Codex and future maintainers working in this checkout.

## Source of truth

Before making project-specific claims, inspect the current checkout first:

- `README.md`
- `package.json`
- `src/routes/**`
- `src/lib/site.ts` and `src/lib/ibet-brand.ts`
- `src/lib/components/**`
- `src/styles/**` and `src/app.css`
- `static/**`
- `tests/**`
- `docs/**`

Do not rely on memory when the answer can be verified in the repo.

## Documentation rules

- Put repo documentation under `docs/website-project/` unless a task says otherwise.
- Keep the docs honest: if something is not verifiable from source, mark it `TBD`.
- Do not invent routes, CMS integrations, analytics, or compliance claims.
- If a route redirects, is a placeholder, or depends on missing data, say so clearly.
- When the site surface changes, update the docs package alongside it.

## Project-specific cautions

- This repo contains a mix of public marketing pages, editorial/help content, internal admin tools, and workflow endpoints.
- Some pages use first-party product language, while others use independent-guide / editorial language. Keep the voice consistent within each page type and call out any mismatch instead of smoothing it over.
- Regulated iGaming copy needs extra care: licensing, age, payout, bonus, and legal statements should be verified before they are treated as current.
- Treat `/home`, `/features/*`, CMS-fed routes, redirects, and canonical URLs as high-risk areas when reviewing navigation or SEO.

## Done means verified

For documentation work, “done” means:

1. The requested files exist.
2. Route coverage matches the actual checkout.
3. Unknowns are marked `TBD`.
4. Recommendations are tied to observed evidence.
5. The final summary lists what was created, what changed, and what could not be verified.

## Practical workflow

- Prefer small, source-backed changes over broad assumptions.
- Use clear headings, tables, and direct language.
- Keep markdown readable for non-technical stakeholders.
- If you add or rename routes, update sitemap, search, and docs together.
