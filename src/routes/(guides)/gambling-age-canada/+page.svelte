<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  const AGES = [
    {
      province: 'Alberta',
      code: 'AB',
      age: 18,
      notes: 'Also applies to AGLC lottery and incoming iGaming market',
    },
    {
      province: 'Quebec',
      code: 'QC',
      age: 18,
      notes: 'Applies to Loto-Québec / Espacejeux and all gambling',
    },
    {
      province: 'Ontario',
      code: 'ON',
      age: 19,
      notes: 'AGCO-licensed operators must verify age before play',
    },
    {
      province: 'British Columbia',
      code: 'BC',
      age: 19,
      notes: 'BCLC and all operators accessible from BC',
    },
    {
      province: 'Manitoba',
      code: 'MB',
      age: 18,
      notes: 'PlayNow Manitoba and grey-market operators',
    },
    {
      province: 'Saskatchewan',
      code: 'SK',
      age: 19,
      notes: 'SLGA oversight; all accessible operators',
    },
    {
      province: 'Nova Scotia',
      code: 'NS',
      age: 19,
      notes: 'Nova Scotia Gaming Corporation (NSGC)',
    },
    { province: 'New Brunswick', code: 'NB', age: 19, notes: 'New Brunswick Lotteries' },
    {
      province: 'Prince Edward Island',
      code: 'PE',
      age: 19,
      notes: 'Atlantic Lottery Corporation',
    },
    {
      province: 'Newfoundland & Labrador',
      code: 'NL',
      age: 19,
      notes: 'Atlantic Lottery Corporation',
    },
    { province: 'Yukon', code: 'YT', age: 19, notes: 'Yukon Lottery Commission' },
    {
      province: 'Northwest Territories',
      code: 'NT',
      age: 19,
      notes: 'Western Canada Lottery Corporation',
    },
    { province: 'Nunavut', code: 'NU', age: 19, notes: 'Western Canada Lottery Corporation' },
  ];

  const faqItems = [
    {
      q: 'Is the gambling age 18 or 19 in Canada?',
      a: 'It depends on your province. The minimum gambling age is 18 in Alberta, Manitoba, and Quebec. In all other provinces and territories, the minimum age is 19. This applies to casinos, sportsbooks, online gambling, lottery tickets, and bingo.',
    },
    {
      q: 'What happens if you gamble underage at an online casino?',
      a: 'Online casinos that identify underage players are required to close the account and forfeit any winnings. AGCO-licensed Ontario operators face penalties for allowing underage play. Most reputable operators run automated age verification checks at registration.',
    },
    {
      q: 'Do I need ID to play at an online casino in Canada?',
      a: 'Yes — all licensed Canadian online casinos are required to verify player identity and age before allowing withdrawals (and often before play begins). This is a KYC (Know Your Customer) requirement under both provincial regulations and international anti-money-laundering standards.',
    },
  ];

  const kycItems = [
    "Government-issued photo ID (passport, driver's licence, provincial ID)",
    'Sometimes: proof of address (utility bill, bank statement)',
    'Sometimes: selfie photo with ID for enhanced verification',
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
import JsonLd from '$lib/components/JsonLd.svelte';

</script>

<svelte:head>
  <title>Legal Gambling Age Canada 2026 —</title>
  <meta
    name="description"
    content="Legal gambling age in all Canadian provinces and territories. 18+ in Alberta, Manitoba, and Quebec. 19+ in all other provinces. Applies to casinos, sportsbooks, poker, and online gambling."
  />
  <meta property="og:title" content="Legal Gambling Age Canada 2026 —" />
  <meta
    property="og:description"
    content="Minimum gambling age in Canada by province and territory, with KYC and age-verification context."
  />
  <meta name="twitter:title" content="Legal Gambling Age Canada 2026 —" />
  <meta
    name="twitter:description"
    content="Minimum gambling age in Canada by province and territory, with age-verification context."
  />
  <link rel="canonical" href={canonicalUrl('/gambling-age-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Legal Gambling Age Canada 2026 —',
      description: 'Legal gambling age in all Canadian provinces and territories. 18+ in Alberta, Manitoba, and Quebec. 19+ in all other provinces. Applies to casinos, sportsbooks, poker, and online gambling.',
      url: canonicalUrl('/gambling-age-canada'),
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Gambling Age Canada', item: canonicalUrl('/gambling-age-canada') },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-3xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Gambling Age Canada</li>
    </ol>
  </nav>

  <header class="navy-card rounded-3xl p-6 md:p-10 mb-8 relative overflow-hidden">
    <div
      aria-hidden="true"
      class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-slate-blue/5 blur-3xl pointer-events-none"
    ></div>
    <div class="relative z-10">
      <div class="text-[10px] font-mono text-slate-blue uppercase tracking-[0.3em] mb-3">
        Legal Reference
      </div>
      <h1 class="page-hero-title mb-4">Legal Gambling Age in Canada</h1>
      <p class="text-gray-300 font-sans text-lg max-w-xl leading-relaxed">
        The minimum gambling age in Canada is <strong class="text-white"
          >18 in Alberta, Manitoba, and Quebec</strong
        >, and <strong class="text-white">19 in all other provinces</strong>. All licensed operators
        must verify age before allowing play.
      </p>
    </div>
  </header>

  <AffiliateDisclosure />

  <section class="navy-card rounded-2xl overflow-hidden mb-8">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-white/10 bg-white/3">
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Province/Territory</th
          >
          <th class="text-center p-4 text-gray-400 font-mono uppercase text-xs">Min Age</th>
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs hidden sm:table-cell"
            >Notes</th
          >
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        {#each AGES as { province, code, age, notes }}
          <tr class="hover:bg-white/2">
            <td class="p-4 text-white font-medium"
              >{province} <span class="text-gray-600 text-xs font-mono">({code})</span></td
            >
            <td class="p-4 text-center">
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-black {age === 18
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-white/5 text-gray-300 border border-white/10'}"
              >
                {age}+
              </span>
            </td>
            <td class="p-4 text-gray-500 text-xs hidden sm:table-cell font-sans">{notes}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <section class="navy-card rounded-2xl p-6 mb-8">
    <h2 class="text-xl font-bold mb-3">Age Verification at Online Casinos</h2>
    <div class="space-y-3 text-sm text-gray-400 font-sans leading-relaxed">
      <p>
        All AGCO-licensed Ontario operators and reputable international operators are required to
        verify player age before allowing real-money play. The verification process (KYC — Know Your
        Customer) typically requires:
      </p>
      <ul class="space-y-2 pl-4">
        {#each kycItems as item}
          <li class="flex items-start gap-2">
            <span class="text-slate-blue shrink-0">·</span>{item}
          </li>
        {/each}
      </ul>
      <p>
        Completing KYC before your first withdrawal avoids delays. Most sites auto-approve KYC
        within 24 hours during business days.
      </p>
    </div>
  </section>

  <section class="space-y-3 mb-10">
    <h2 class="text-xl font-bold">FAQ</h2>
    {#each faqItems as { q, a }}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none justify-between gap-2 font-bold text-[#F1F5F9]">
          {q}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm text-gray-400 font-sans leading-relaxed">{a}</p>
      </details>
    {/each}
  </section>

  <div class="text-sm text-gray-500 font-sans mb-8">
    See also:
    <a href="/legal-online-gambling-canada" class="text-slate-blue hover:underline"
      >Full gambling laws guide</a
    >
    ·
    <a href="/guides/kyc-verification-online-casino" class="text-slate-blue hover:underline"
      >KYC verification guide</a
    >
  </div>


  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
