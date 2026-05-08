<script lang="ts">
  import { SITE } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_UPDATED = '2026-04-29';
  
  const sections = [
    { id: 'principles', title: 'Policy Principles' },
  ];
</script>

<svelte:head>
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Editorial Standards',
      description: "247iBET's editorial independence policy. How we evaluate operators, maintain impartial recommendations, and ensure compliance.",
      url: 'https://247ibet.ca/editorial-policy',
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
        { '@type': 'ListItem', position: 2, name: 'Editorial Standards', item: 'https://247ibet.ca/editorial-policy' },
      ],
    }}
  />
</svelte:head>

<PolicyLayout
  title="Editorial Standards"
  subtitle="Our commitment to independence, evidence-based reviews, and transparency in the Canadian iGaming market."
  lastUpdated={LAST_UPDATED}
  path="/editorial-policy"
  description="{SITE.name}'s editorial independence policy. How we evaluate operators, maintain impartial recommendations, and ensure compliance."
  {sections}
>
  <h2 id="principles">Policy Principles</h2>
  <div class="not-prose navy-card overflow-x-auto rounded-2xl border border-white/10">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-white/10 bg-white/3">
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-[10px] tracking-widest">Principle</th>
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-[10px] tracking-widest">What it means</th>
          <th class="text-left p-4 text-gray-400 font-mono uppercase text-[10px] tracking-widest">Why it matters</th>
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

  <p class="mt-8">
    Our editorial team operates independently of our commercial partnerships. While we may earn a commission when you click on links to partner sites, this does not influence our evaluation of the product or service. We prioritize player value, security, and compliance above all else.
  </p>
</PolicyLayout>

