<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  // page
import AuthorByline from '$lib/components/AuthorByline.svelte';

const LAST_UPDATED = '2026-04-29';
</script>

<svelte:head>
  <title>247iBET Editorial Standards: Our Independence Policy</title>
  <meta
    name="description"
    content="247iBET's editorial independence policy. How we evaluate operators, maintain impartial recommendations, and ensure Canadian iGaming compliance."
  />
  <meta name="robots" content="noindex, nofollow" />
  <meta property="og:title" content="247iBET Editorial Standards: Our Independence Policy" />
  <meta
    property="og:description"
    content="247iBET's editorial independence policy. How we evaluate operators, maintain impartial recommendations, and ensure Canadian iGaming compliance."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://247ibet.ca/editorial-policy" />
  <link rel="canonical" href={canonicalUrl('/editorial-policy')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: 'Editorial Standards — 247iBET',
      url: 'https://247ibet.ca/editorial-policy',
      description: "247iBET's editorial independence policy and operator evaluation methodology.",
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li class="text-text-tertiary">/</li>
      <li class="text-white font-medium">Editorial Standards</li>
    </ol>
  </nav>

  <section class="mx-auto max-w-5xl mt-8">
    <h2 class="text-2xl font-bold text-white mb-4">Policy Principles</h2>
    <div class="navy-card overflow-x-auto rounded-2xl">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Principle</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">What it means</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Why it matters</th>
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
  </section>

<AuthorByline authorId="editorial" date={LAST_UPDATED} />
</div>
