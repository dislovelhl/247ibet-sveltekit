# Domain Unification Plan (247ibet.ca Only)

## 1. Goal
Per business direction, **247ibet.ca** is the sole surviving brand. The `jdzd.com` identity will be entirely sunset. Any traffic originating from `jdzd.com` will be mapped directly to `247ibet.ca` and will see the exact same 247ibet.ca logo, branding, and "Prestige Navy" UI. There will be no visual distinction or dynamic context switching.

## 2. Technical Mapping (Vercel)

Because the brand is unified exclusively under `247ibet.ca`, absolutely **zero codebase changes** are required to handle brand context.

The mapping will be handled 100% at the Vercel infrastructure level via a **301 Permanent Redirect**:

1. Go to the **Vercel Dashboard** > **247ibet-sveltekit** > **Settings** > **Domains**.
2. Add `jdzd.com` and `www.jdzd.com`.
3. Set both `jdzd.com` domains to **Redirect to** `247ibet.ca` with a **301 Permanent** status code.

## 3. Why this approach?
- **SEO Benefits**: A 301 redirect securely passes any existing search authority and link equity from `jdzd.com` directly to `247ibet.ca`.
- **Zero Tech Debt**: It keeps the SvelteKit codebase clean. The app doesn't need to know or care about `jdzd.com`; it only ever serves the premium `247ibet.ca` experience.
- **Brand Consistency**: Users from old jdzd.com links immediately land on the polished, modern 247ibet.ca environment.
