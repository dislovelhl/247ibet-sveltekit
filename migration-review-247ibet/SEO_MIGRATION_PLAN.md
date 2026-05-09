# SEO Migration Plan

## Canonical URL Strategy
Since the codebase strictly utilizes the `src/lib/site.ts` `canonicalUrl()` generator, all `247ibet.ca` pages automatically output correct self-referencing canonical tags. 

## Migration Strategy (Infrastructure Level)
As outlined in the architecture, traffic from `jdzd.com` must be redirected entirely outside of the application code:
1. Map `jdzd.com` and `www.jdzd.com` to the Vercel project.
2. Configure a `301 Permanent Redirect` pointing to `247ibet.ca`.

## Sitemap and Robots
- `src/routes/sitemap.xml/+server.ts` dynamically generates the sitemap using `SITE.url` (`247ibet.ca`). No updates are needed here.
- `robots.txt` is generally handled by the static output in SvelteKit or dynamically. Ensure it points to `https://247ibet.ca/sitemap.xml`.

## Pages to Consolidate
Because the `247ibet.ca` site provides identical content paths natively, 1-to-1 wildcard redirects will handle the SEO equity transfer correctly.

## SEO Risks
- **Redirect Chains**: Ensure `http://jdzd.com` goes directly to `https://247ibet.ca` (avoiding `http://www.jdzd.com` -> `https://www.jdzd.com` -> `https://247ibet.ca`).
- **Analytics Segregation**: Make sure Google Search Console properties are correctly set up for `247ibet.ca` and the Change of Address tool is used for `jdzd.com`.
