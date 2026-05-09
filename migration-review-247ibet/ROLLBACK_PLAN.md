# Rollback Plan

If critical SEO drops, redirect loops, or compliance violations occur post-migration, the rollback is rapid and isolated to the infrastructure level.

## Rollback Triggers
- Severe drop in tracking/analytics conversion on `247ibet.ca` immediately following the redirect.
- Legal/compliance order to halt traffic mixing.
- Infinite redirect loops detected on `jdzd.com` URLs.

## Execution Steps
1. **Remove Redirect**: Go to Vercel Dashboard -> `247ibet-sveltekit` project -> Settings -> Domains.
2. **Delete Domains**: Remove `jdzd.com` and `www.jdzd.com` from the project.
3. **Restore Old Hosting**: Point the `jdzd.com` DNS records back to their original hosting provider (prior to Vercel).
4. **Revert Search Console**: Cancel the Change of Address request in Google Search Console.

## Time to Mitigation
- Vercel domain unlinking is instantaneous.
- DNS propagation for step 3 may take 1-24 hours depending on TTLs.
