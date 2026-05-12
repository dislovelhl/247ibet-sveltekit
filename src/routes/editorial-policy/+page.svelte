<script lang="ts">
  import { SITE } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_UPDATED = '2026-05-12';

  const sections = [
    { id: 'principles', title: 'Policy Principles' },
    { id: 'licensing-boundary', title: 'Licensing Boundary' },
    { id: 'affiliate-disclosure', title: 'Affiliate Disclosure' },
  ];
</script>

<svelte:head>
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Editorial Standards',
      description:
        "247iBET's editorial independence policy. How we evaluate operators, maintain impartial recommendations, and avoid unsupported regulatory claims.",
      url: 'https://247ibet.ca/editorial-policy',
      datePublished: '2026-05-09',
      dateModified: LAST_UPDATED,
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Editorial Standards',
          item: 'https://247ibet.ca/editorial-policy',
        },
      ],
    }}
  />
</svelte:head>

<PolicyLayout
  title="Editorial Standards"
  subtitle="Our commitment to independence, evidence-based reviews, affiliate transparency, and conservative licensing language in the Canadian iGaming market."
  lastUpdated={LAST_UPDATED}
  path="/editorial-policy"
  description="{SITE.name}'s editorial independence policy. How we evaluate operators, maintain impartial recommendations, and avoid unsupported regulatory claims."
  {sections}
>
  <h2 id="principles">Policy Principles</h2>
  <div class="not-prose navy-card overflow-x-auto rounded-2xl border border-white/10">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-white/10 bg-white/3">
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs tracking-widest"
            >Principle</th
          >
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs tracking-widest"
            >What it means</th
          >
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs tracking-widest"
            >Why it matters</th
          >
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr>
          <td class="p-4 text-white font-bold">Independence</td>
          <td class="p-4 text-gray-300">Commercial partners do not direct conclusions.</td>
          <td class="p-4 text-gray-300">Keeps rankings and reviews defensible.</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-bold">Evidence</td>
          <td class="p-4 text-gray-300">Claims are tied back to testing or primary sources.</td>
          <td class="p-4 text-gray-300">Reduces stale or unsupported advice.</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-bold">Clarity</td>
          <td class="p-4 text-gray-300">We explain tradeoffs, not just ratings.</td>
          <td class="p-4 text-gray-300">Readers can compare options faster.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="licensing-boundary" class="mt-10">Licensing Boundary</h2>
  <p class="mt-4">
    This website publishes public editorial, acquisition, and compliance-support content. It should
    not be read as proof of Ontario operator status, iGaming Ontario registration, AGCO
    registration, or authorization to operate regulated gaming in Ontario. Readers should verify any
    operator or site against official regulator sources before depositing or playing.
  </p>
  <ul class="mt-4 space-y-2 text-gray-300">
    <li>
      Ontario players can check iGaming Ontario&apos;s regulated market directory for currently
      listed operator sites.
    </li>
    <li>
      Ontario regulated private operators must have AGCO registration and, except for OLG.ca, an
      operating agreement with iGaming Ontario before offering games in Ontario.
    </li>
    <li>
      Any gaming account, cashier, KYC, wallet, wager, or real-money transaction flow belongs to a
      separate operational gaming platform, not this public content shell.
    </li>
  </ul>

  <h2 id="affiliate-disclosure" class="mt-10">Affiliate Disclosure</h2>
  <p class="mt-4">
    Our editorial team operates independently of our commercial partnerships. We may earn a
    commission when you click links to partner sites, but compensation does not determine licensing
    status, legality, user eligibility, rankings, or review conclusions. We prioritize player
    protection, source-backed claims, and clear caveats over promotional language.
  </p>

  <p class="mt-4 text-sm text-gray-400">
    Primary references for licensing checks include iGaming Ontario&apos;s regulated market
    directory and AGCO public guidance. If our copy conflicts with an official regulator source,
    treat the official source as authoritative and contact us for correction.
  </p>
</PolicyLayout>
