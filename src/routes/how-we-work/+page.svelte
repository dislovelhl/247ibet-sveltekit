<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  // page
</script>

<svelte:head>
  <title>How 247iBET Works: Affiliate &amp; Editorial Standards Explained</title>
  <meta
    name="description"
    content="Learn how 247iBET is funded, our affiliate partnerships, editorial independence standards, and review methodology for Canadian iGaming guides."
  />
  <link rel="canonical" href={canonicalUrl('/how-we-work')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: 'How 247iBET Works',
      url: 'https://247ibet.ca/how-we-work',
      description:
        "Transparency page explaining 247iBET's affiliate partnerships and editorial standards.",
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <section class="mx-auto max-w-5xl mt-8">
    <h2 class="text-2xl font-bold text-white mb-4">Our Standards</h2>
    <div class="navy-card overflow-x-auto rounded-2xl">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Standard</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">What it means</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Reader benefit</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-white font-bold">Funding transparency</td>
            <td class="p-4 text-gray-300">We disclose how affiliate revenue supports the site.</td>
            <td class="p-4 text-gray-300">You can judge rankings with context.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Editorial independence</td>
            <td class="p-4 text-gray-300">Partners don't control our conclusions.</td>
            <td class="p-4 text-gray-300">Reviews stay focused on player value.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Review method</td>
            <td class="p-4 text-gray-300">We test, verify, and update on a schedule.</td>
            <td class="p-4 text-gray-300">Information is more likely to stay current.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
