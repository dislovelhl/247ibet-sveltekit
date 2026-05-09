# 247iBET SEO/AEO/Backlinks — 3-Phase Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Execute a comprehensive SEO/AEO optimization across all three phases: quick schema fixes, AEO answer-ready content, and backlink/distribution infrastructure.

**Architecture:** Phase 1 patches gaps in existing schema, sitemap, and metadata. Phase 2 builds AEO-specific infrastructure (LLM identity page, HowTo schemas, layered schemas). Phase 3 creates operational tooling for ongoing backlink monitoring and content distribution.

**Tech Stack:** SvelteKit 2, TypeScript, JSON-LD via `$lib/json-ld.ts` + `JsonLd.svelte`, site config in `$lib/site.ts`, brand config in `$lib/ibet-brand.ts`.

**Validation:** For SEO-only changes: `pnpm check && pnpm lint && pnpm build` (skip `pnpm test` unless route/component behavior changes).

---

## Phase 1 — Quick Wins: Schema Patches & Coverage

### Task 1.1: Add Telegram + TikTok social handles to SITE config

**Objective:** Centralize social profile URLs in `$lib/site.ts` so homepage schema and future schemas use a single source of truth.

**Files:**
- Modify: `src/lib/site.ts`

**Step 1: Add handles and helper**

In `src/lib/site.ts`, add `telegram` and `tiktok` to `SITE.handles`, and add a `sameAs` computed array:

```typescript
// Add to SITE.handles:
  handles: {
    x: '@247ibet',
    instagram: '@247ibet',
    facebook: '247ibet',
    telegram: '247iBET',
    tiktok: '@247ibet',
  },

// Add a SITE.sameAs computed array (below SITE.handles):
  sameAs: [
    'https://x.com/247ibet',
    'https://www.instagram.com/247ibet/',
    'https://www.facebook.com/247ibet',
    'https://t.me/247iBET',
    'https://www.tiktok.com/@247ibet',
  ],
```

**Step 2: Update homepage to use SITE.sameAs**

In `src/routes/+page.svelte`, replace the manual `sameAs` array in the Organization schema with `SITE.sameAs`:

Replace:
```typescript
sameAs: [
  `https://x.com/${SITE.handles.x.slice(1)}`,
  `https://www.instagram.com/${SITE.handles.instagram.slice(1)}/`,
  `https://www.facebook.com/${SITE.handles.facebook}`,
  'https://t.me/247iBET',
  'https://www.tiktok.com/@247ibet',
],
```
With:
```typescript
sameAs: SITE.sameAs,
```

**Step 3: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 4: Commit**

```bash
git add src/lib/site.ts src/routes/+page.svelte
git commit -m "seo: centralize social sameAs in SITE config"
```

---

### Task 1.2: Add `knowsAbout` to homepage Organization schema

**Objective:** Declare 247iBET's topical expertise domains for AI engines to extract.

**Files:**
- Modify: `src/routes/+page.svelte` (the `homeSchema` Organization entry)

**Step 1: Add knowsAbout**

In the Organization schema block (around line 324), add after `sameAs`:

```typescript
knowsAbout: [
  'Online Casino Canada',
  'Sports Betting Canada',
  'Interac Casino Payouts',
  'Live Dealer Casino',
  'Casino Bonuses Canada',
  'Sports Betting Odds',
  'Responsible Gambling',
],
```

**Step 2: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 3: Commit**

```bash
git add src/routes/+page.svelte
git commit -m "seo: add knowsAbout to Organization schema"
```

---

### Task 1.3: Add `dateModified` and `publisher` to Article schemas missing them

**Objective:** Many guide pages have `Article` schema with `datePublished` but missing `dateModified` and `publisher`. AI engines prioritize freshness signals.

**Files:**
- Modify: Multiple guide pages (find them programmatically via grep)

**Step 1: Find pages with Article schema but no dateModified**

```bash
cd /root/247ibet-sveltekit
# Find Article schemas
rg -l "'@type': 'Article'" src/routes/ --glob "*.svelte" > /tmp/articles.txt
# Check which are missing dateModified
while read f; do
  if ! rg -q "dateModified" "$f"; then
    echo "MISSING: $f"
  fi
done < /tmp/articles.txt
```

**Step 2: For each missing page, add dateModified after datePublished**

For pages where `datePublished` exists but `dateModified` is absent, use `git log --format=%aI -1 -- "$file"` to get the last commit date, then patch the file:

```typescript
// After datePublished line, insert:
      dateModified: '<LAST_COMMIT_DATE>',
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.url,
      },
```

For pages missing both datePublished and dateModified, add both:
```typescript
      datePublished: '2026-05-06',
      dateModified: '2026-05-06',
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.url,
      },
```

**Step 3: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 4: Commit**

```bash
git add src/routes/guides/
git commit -m "seo: add dateModified and publisher to Article schemas"
```

---

### Task 1.4: Add missing `interac` route to sitemap

**Objective:** The `/interac` route has a `+page.svelte` but is NOT in the sitemap. Add it.

**Files:**
- Modify: `src/routes/sitemap.xml/+server.ts`

**Step 1: Add interac entry**

In the STATIC_PAGES array, add after the existing interac entries:

```typescript
  { path: '/interac', priority: 0.8, changefreq: 'weekly' },
```

(It's already in the sitemap at line with `/interac` — check if it actually exists. The sitemap has `/interac`, `/interac/deposit`, `/interac/withdraw`, `/interac-casino-canada`.)

Wait — let me verify. Based on the earlier sitemap output, we have:
```
{ path: '/interac', priority: 0.8, changefreq: 'weekly' },
{ path: '/interac/deposit', priority: 0.7, changefreq: 'weekly' },
{ path: '/interac/withdraw', priority: 0.7, changefreq: 'weekly' },
```

But the page WITHOUT json-ld list showed `src/routes/interac/+page.svelte`. Let me check if it has a JSON-LD.

Actually, looking back at the task — this is already in the sitemap. There's no missing interac route. Let me instead add missing-content pages to the sitemap.

Check: which of the non-admin, non-excluded pages are missing from sitemap AND don't have JSON-LD?

Pages worth adding to sitemap:
- `/editorial-policy` — editorial content, should be indexable
- `/about` — brand page
- `/gambling-age-canada` — informational
- `/gambling-laws-canada` — informational
- `/legal-online-gambling-canada` — informational
- `/cookie-policy` — legal page (low priority, could stay out)
- `/privacy-policy` — legal page (low priority)
- `/terms-of-service` — legal page (low priority)

Let me focus on the editorial/informational ones: editorial-policy, about, gambling-age-canada, gambling-laws-canada, legal-online-gambling-canada.

**Step 1: Add missing routes to sitemap**

In `src/routes/sitemap.xml/+server.ts`, add to STATIC_PAGES:

```typescript
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/editorial-policy', priority: 0.6, changefreq: 'monthly' },
  { path: '/gambling-age-canada', priority: 0.6, changefreq: 'monthly' },
  { path: '/gambling-laws-canada', priority: 0.6, changefreq: 'monthly' },
  { path: '/legal-online-gambling-canada', priority: 0.6, changefreq: 'monthly' },
```

**Step 2: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 3: Commit**

```bash
git add src/routes/sitemap.xml/+server.ts
git commit -m "seo: add missing informational pages to sitemap"
```

---

### Task 1.5: Add JSON-LD (Article + BreadcrumbList) to content pages missing it

**Objective:** The following content pages have no JSON-LD but should for SEO: editorial-policy, about, gambling-age-canada, gambling-laws-canada, legal-online-gambling-canada, cookie-policy, privacy-policy, terms-of-service, interac (standalone).

**Files:**
- Modify: `src/routes/editorial-policy/+page.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/gambling-age-canada/+page.svelte`
- Modify: `src/routes/gambling-laws-canada/+page.svelte`
- Modify: `src/routes/legal-online-gambling-canada/+page.svelte`
- Modify: `src/routes/cookie-policy/+page.svelte`
- Modify: `src/routes/privacy-policy/+page.svelte`
- Modify: `src/routes/terms-of-service/+page.svelte`
- Modify: `src/routes/interac/+page.svelte`

**Step 1: Read each file, identify page title/description, add schema**

For each page, add after the `<svelte:head>` section (or inside it):

```typescript
import JsonLd from '$lib/components/JsonLd.svelte';
import { canonicalUrl } from '$lib/site';

// Inside <svelte:head>, add:
<JsonLd schema={{
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '<PAGE_TITLE>',
  description: '<META_DESCRIPTION>',
  url: canonicalUrl('<ROUTE_PATH>'),
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  publisher: {
    '@type': 'Organization',
    name: '247iBET',
    url: 'https://247ibet.ca',
  },
}} />
<JsonLd schema={{
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
    { '@type': 'ListItem', position: 2, name: '<PAGE_NAME>', item: canonicalUrl('<ROUTE_PATH>') },
  ],
}} />
```

**Step 2: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 3: Commit**

```bash
git add src/routes/
git commit -m "seo: add JSON-LD to missing content pages"
```

---

### Task 1.6: Add FAQPage schema to guide pages with FAQ content

**Objective:** Guide pages that contain FAQ sections (many do) should have FAQPage schema. This is the #1 schema type for AI citations (67% rate).

**Files:**
- Modify: guide pages that have FAQ/Q&A content

**Step 1: Locate pages with FAQ content**

```bash
cd /root/247ibet-sveltekit
rg -l "(FAQ|Frequently Asked|Q:)" src/routes/guides/ --glob "*.svelte" > /tmp/faq_pages.txt
```

**Step 2: For each page, add FAQPage schema**

After the existing JSON-LD blocks, add:

```typescript
<JsonLd schema={{
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // Extract from content - each Q&A pair becomes:
    {
      '@type': 'Question',
      name: '<QUESTION_TEXT>',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<ANSWER_SUMMARY>',
      },
    },
  ],
}} />
```

**Step 3: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 4: Commit**

```bash
git add src/routes/guides/
git commit -m "seo: add FAQPage schema to guides with FAQ content"
```

---

## Phase 2 — AEO Foundation: Answer-Ready Content

### Task 2.1: Create LLM brand identity page (`/about/brand-identity/`)

**Objective:** Create a canonical proof page that AI engines can cite for brand facts. Includes structured entity data, positioning statement, and verifiable details.

**Files:**
- Create: `src/routes/about/brand-identity/+page.svelte`

**Step 1: Create route with comprehensive JSON-LD**

The page should include:

1. `<svelte:head>` with title, description, canonical
2. Organization JSON-LD with:
   - `@id`: `https://247ibet.ca/#org`
   - `name`, `url`, `legalName`, `logo`, `foundingDate`
   - `sameAs`: social profiles
   - `knowsAbout`: topical expertise
   - `description`: positioning one-liner
   - `contactPoint`: customer support
   - `areaServed`: Canadian provinces
3. WebSite JSON-LD
4. Minimal page content: "About 247iBET" with brand positioning statement

```svelte
<script lang="ts">
  import { SITE, canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';

  const brandSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE.url}/#org`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/images/brand/logo.png`,
      foundingDate: '2020',
      description: SITE.tagline,
      sameAs: SITE.sameAs,
      knowsAbout: [
        'Online Casino Canada',
        'Sports Betting Canada',
        'Interac Casino Payouts',
        'Live Dealer Casino',
        'Casino Bonuses Canada',
        'Sports Betting Odds',
        'Responsible Gambling',
      ],
      areaServed: [
        { '@type': 'State', name: 'Ontario' },
        { '@type': 'State', name: 'Alberta' },
        { '@type': 'State', name: 'British Columbia' },
        { '@type': 'State', name: 'Manitoba' },
        { '@type': 'State', name: 'Saskatchewan' },
        { '@type': 'State', name: 'Quebec' },
        { '@type': 'State', name: 'Nova Scotia' },
        { '@type': 'State', name: 'New Brunswick' },
        { '@type': 'State', name: 'Prince Edward Island' },
        { '@type': 'State', name: 'Newfoundland and Labrador' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
  ];
</script>

<svelte:head>
  <title>About 247iBET — Canada's Premier Online Casino & Sportsbook</title>
  <meta name="description" content="247iBET is Canada's premier online casino and sportsbook. Fast Interac payouts, 500+ casino games, full sportsbook. Learn about our platform." />
  <link rel="canonical" href={canonicalUrl('/about/brand-identity')} />
  <JsonLd schema={brandSchema} />
</svelte:head>

<section class="...">
  <h1>About 247iBET</h1>
  <p class="lead">{SITE.tagline}</p>
  <!-- ... brand details ... -->
</section>
```

**Step 2: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 3: Commit**

```bash
git add src/routes/about/brand-identity/
git commit -m "seo: add LLM brand identity page with entity schema"
```

---

### Task 2.2: Add HowTo schema to instructional guide pages

**Objective:** Guide pages that teach users how to do something (deposits, withdrawals, account setup, etc.) need HowTo schema. "How do I…" queries trigger AI Overviews 73% of the time.

**Files:**
- Modify: `src/routes/guides/how-to-withdraw-casino-winnings/+page.svelte` (already has HowTo — verify)
- Modify: other instructional guides

**Step 1: Identify how-to guides**

```bash
cd /root/247ibet-sveltekit
rg -l "^# How |^## How |^# Step" src/routes/guides/ --glob "*.svelte"
```

**Step 2: Add HowTo schema to each**

Pattern:

```typescript
<JsonLd schema={{
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '<GUIDE_TITLE>',
  description: '<GUIDE_DESCRIPTION>',
  step: [
    { '@type': 'HowToStep', position: 1, name: '<STEP_1>', text: '<STEP_1_DETAIL>' },
    { '@type': 'HowToStep', position: 2, name: '<STEP_2>', text: '<STEP_2_DETAIL>' },
    // ...
  ],
}} />
```

**Step 3: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 4: Commit**

```bash
git add src/routes/guides/
git commit -m "seo: add HowTo schema to instructional guides"
```

---

### Task 2.3: Layer schema types on hub pages

**Objective:** Hub pages (casino, sportsbook, bonuses, etc.) should have Article + BreadcrumbList + FAQPage layered. Pages with 3-4 schema types are cited 2x more in AI.

**Files:**
- Modify: `src/routes/casino/+page.svelte`
- Modify: `src/routes/sportsbook/+page.svelte`
- Modify: `src/routes/best-online-casinos-canada/+page.svelte`
- Modify: `src/routes/casino-bonuses-canada/+page.svelte`
- Modify: `src/routes/new-player-bonuses-canada/+page.svelte`
- Modify: `src/routes/interac-casino-canada/+page.svelte`
- Modify: others with existing partial schema

**Step 1: For each hub page, ensure all three schemas are present**

If a page already has BreadcrumbList and Article, add FAQPage. If it has only one, add the missing two.

**Step 2: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 3: Commit**

```bash
git add src/routes/
git commit -m "seo: layer Article + BreadcrumbList + FAQPage on hub pages"
```

---

### Task 2.4: Add `articleSection` to all Article schemas

**Objective:** `articleSection` declares the topical section of an article, helping AI understand content categorization.

**Files:**
- Modify: all pages with `'@type': 'Article'` schema

**Step 1: Find all Article schemas and add articleSection**

For guides under `/guides/`:
```typescript
articleSection: 'Guides',
```

For casino pages:
```typescript
articleSection: 'Online Casino',
```

For sportsbook pages:
```typescript
articleSection: 'Sports Betting',
```

For bonus pages:
```typescript
articleSection: 'Casino Bonuses',
```

**Step 2: Verify**

```bash
pnpm check && pnpm lint && pnpm build
```

**Step 3: Commit**

```bash
git add src/routes/
git commit -m "seo: add articleSection to all Article schemas"
```

---

## Phase 3 — Backlink & Distribution Infrastructure

### Task 3.1: Create brand mention monitoring script

**Objective:** A script that searches for unlinked brand mentions across the web, so we can find link-building opportunities.

**Files:**
- Create: `scripts/seo/monitor-brand-mentions.sh`

**Content:**

```bash
#!/usr/bin/env bash
# Monitor unlinked brand mentions for 247iBET
# Usage: ./scripts/seo/monitor-brand-mentions.sh

BRAND="247iBET"
DOMAIN="247ibet.ca"
echo "=== Searching for unlinked brand mentions ==="
echo ""

# Google search for mentions excluding own site and social platforms
echo "Search: \"$BRAND\" -site:$DOMAIN -site:facebook.com -site:x.com -site:instagram.com -site:tiktok.com -site:reddit.com -site:linkedin.com"
echo ""

# Check common backlink databases (manual step)
echo "Recommended tools:"
echo "  - Semrush Brand Monitoring"
echo "  - Google Alerts for \"$BRAND\""
echo "  - Ahrefs Content Explorer"
echo ""
echo "Run at: https://www.google.com/search?q=%22$BRAND%22+-site%3A$DOMAIN"
```

**Step 1: Create the script**

```bash
mkdir -p scripts/seo
```

**Step 2: Verify it's executable**

```bash
chmod +x scripts/seo/monitor-brand-mentions.sh
```

**Step 3: Commit**

```bash
git add scripts/seo/
git commit -m "tools: add brand mention monitoring script"
```

---

### Task 3.2: Create digital PR data report template

**Objective:** A template for creating data-driven reports (e.g., Canadian gambling trends, player surveys) that can be pitched to journalists for backlinks.

**Files:**
- Create: `docs/seo/pr-data-report-template.md`

**Content:** Markdown template with sections for: headline, key stats, methodology, findings, press contact, and suggested pitches.

```markdown
# [Report Title]: 247iBET Canadian iGaming Data Report

**Published:** YYYY-MM-DD
**Press Contact:** press@247ibet.ca
**Embargo:** None

## Key Statistics
- 
- 
- 

## Methodology
Data sourced from [describe source, sample size, methodology].

## Findings

### Finding 1: [Headline]
[Data and analysis]

### Finding 2: [Headline]
[Data and analysis]

## About 247iBET
247iBET is Canada's premier online casino and sportsbook, offering 500+ casino games, full sportsbook coverage, and fast Interac payouts.

## Media Assets
- [Link to charts/graphs]
- [Link to logo]
```

**Step 1: Create the template**

```bash
mkdir -p docs/seo
```

**Step 2: Commit**

```bash
git add docs/seo/
git commit -m "docs: add digital PR data report template"
```

---

### Task 3.3: Create content distribution checklist

**Objective:** A checklist for repurposing each piece of content across platforms (guides → social, Reddit, YouTube, etc.) to build brand mentions at scale.

**Files:**
- Create: `docs/seo/content-distribution-checklist.md`

**Content:** Checklist of distribution channels with formats and guidelines.

```markdown
# 247iBET Content Distribution Checklist

For each new guide or content piece:

## Same-Day Distribution
- [ ] X/Twitter: Tweet key takeaway + link
- [ ] Instagram: Story with stat/image + link in bio
- [ ] Facebook: Post with 2-3 key points
- [ ] Telegram: Share link with summary

## Week-1 Distribution
- [ ] Reddit: Answer related questions in relevant subreddits (link if natural)
- [ ] TikTok: Short explainer video
- [ ] LinkedIn: Professional summary

## Ongoing
- [ ] Monitor for unlinked mentions → outreach for link
- [ ] Update internal links from other pages to this content
- [ ] Submit to relevant resource pages / directories
```

**Step 1: Create the checklist**

**Step 2: Commit**

```bash
git add docs/seo/
git commit -m "docs: add content distribution checklist"
```

---

## Final Integration Verification

After ALL phases complete:

```bash
pnpm check && pnpm lint && pnpm build
pnpm test  # if any component files changed
git diff --stat
```

---

## Phase Summary

| Phase | Tasks | Est. Time |
|-------|-------|-----------|
| Phase 1: Quick Wins | 6 tasks | 30-60 min |
| Phase 2: AEO Foundation | 4 tasks | 60-90 min |
| Phase 3: Infrastructure | 3 tasks | 15-30 min |
| **Total** | **13 tasks** | **~2-3 hours** |
