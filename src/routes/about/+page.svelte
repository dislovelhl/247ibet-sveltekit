<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  const LAST_UPDATED = '2026-04-28';
  // page
</script>

<svelte:head>
  <title>About 247iBET — Canada's Online Casino &amp; Sportsbook</title>
  <meta
    name="description"
    content="Learn about 247iBET — a Canadian online casino and sportsbook with fast Interac payouts, casino games, and live sports betting built for Canadian players."
  />
  <meta property="og:title" content="About 247iBET — Canada's Online Casino &amp; Sportsbook" />
  <meta
    property="og:description"
    content="247iBET is a Canadian online casino and sportsbook with fast Interac payouts, casino games, and live betting."
  />
  <meta name="twitter:title" content="About 247iBET — Canada's Online Casino &amp; Sportsbook" />
  <meta
    name="twitter:description"
    content="Canadian online casino and sportsbook with fast Interac payouts."
  />
  <link rel="canonical" href={canonicalUrl('/about')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: "About 247iBET | Canada's Online Casino & Sportsbook",
      description:
        '247iBET is a Canadian online casino and sportsbook with fast Interac payouts, casino games, and live sports betting built for Canadian players.',
      url: 'https://247ibet.ca/about',
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <section class="mx-auto max-w-5xl mt-8">
    <p class="text-xs text-text-tertiary mb-4">Last updated: {LAST_UPDATED}</p>
    <h2 class="text-2xl font-bold text-white mb-4">What 247iBET Offers</h2>
    <div class="navy-card overflow-x-auto rounded-2xl">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Feature</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Details</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Player benefit</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-white font-bold">Fast Interac Payouts</td>
            <td class="p-4 text-gray-300"
              >Interac e-Transfer withdrawals processed within 1–3 business hours after KYC.</td
            >
            <td class="p-4 text-gray-300">Get your winnings the same day.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">500+ Casino Games</td>
            <td class="p-4 text-gray-300"
              >Slots, live dealer tables, jackpots, and classic table games built for desktop and
              mobile play.</td
            >
            <td class="p-4 text-gray-300">Always something new to play.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Live Sports Betting</td>
            <td class="p-4 text-gray-300"
              >NHL, NBA, CFL, UFC, Premier League, and more with in-play odds and same-game parlays.</td
            >
            <td class="p-4 text-gray-300">Bet on your favourite teams in real time.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sr-only" aria-label="Related credibility and compliance resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/security">Security Standards</a></li>
      <li><a href="/responsible-gambling">Responsible Gambling Support</a></li>
      <li><a href="/guides/regulated-vs-offshore">Regulated vs Offshore Betting</a></li>
      <li><a href="/guides/interac-e-transfer-casino">Interac Payments Guide</a></li>
    </ul>
  </section>
</div>
