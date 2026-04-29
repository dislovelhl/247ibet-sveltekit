<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
</script>

<svelte:head>
  <title>Canadian Betting Guides &amp; Resources | 247iBET</title>
  <meta
    name="description"
    content="Browse 247iBET guides on legal betting in Canada: Alberta and Ontario market explainers, strategy basics, payments, and responsible gambling."
  />
  <meta property="og:title" content="Canadian Betting Guides &amp; Resources | 247iBET" />
  <meta
    property="og:description"
    content="Browse 247iBET educational guides on legal betting in Canada."
  />
  <meta name="twitter:title" content="Canadian Betting Guides &amp; Resources | 247iBET" />
  <meta
    name="twitter:description"
    content="Browse 247iBET educational guides on legal betting in Canada."
  />
  <link rel="canonical" href="https://247ibet.ca/guides" />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://247ibet.ca/guides' },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <section class="mx-auto max-w-5xl mt-8">
    <h2 class="text-2xl font-bold text-white mb-4">Guide Categories</h2>
    <div class="navy-card overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Category</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Example guides</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">What you get</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-white font-bold">Payments</td>
            <td class="p-4 text-gray-300">Interac, withdrawals, payout timing</td>
            <td class="p-4 text-gray-300">Banking and cashout clarity.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Legal</td>
            <td class="p-4 text-gray-300">Ontario, Alberta, responsible gambling</td>
            <td class="p-4 text-gray-300">Province-by-province compliance context.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Strategy</td>
            <td class="p-4 text-gray-300">Odds, wagering requirements, how to choose</td>
            <td class="p-4 text-gray-300">Practical decision-making tips.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Hidden links for crawlers -->
  <section class="sr-only" aria-label="Featured guides">
    <ul>
      <li><a href="/alberta">Alberta Sports Betting Guide 2026</a></li>
      <li><a href="/guides/how-to-choose-online-casino">How to Choose an Online Casino</a></li>
      <li><a href="/guides/sports-betting-odds-explained">Canadian Betting Odds Explained</a></li>
      <li><a href="/about/how-we-test">How We Test &amp; Verify Operators</a></li>
      <li><a href="/guides/jackpot-casino-games">Best Jackpot Casino Games</a></li>
      <li><a href="/guides/no-deposit-free-spins">No Deposit Free Spins Guide</a></li>
      <li><a href="/guides/win-big-online-casino">How to Win Big Online Casino</a></li>
      <li><a href="/guides/legit-safe-online-casinos">Legit and Safe Online Casinos</a></li>
      <li><a href="/guides/deposit-free-spins">Deposit Free Spins</a></li>
      <li><a href="/guides/uk-real-money-casinos">UK Real Money Casinos</a></li>
      <li><a href="/guides/free-casino-games">Free Casino Games</a></li>
      <li><a href="/guides/casino-payment-methods">Casino Payment Methods</a></li>
      <li><a href="/guides/slots-no-deposit-bonuses">Slots No Deposit Bonuses</a></li>
      <li><a href="/guides/sign-up-bonus-no-deposit">Sign Up Bonus No Deposit</a></li>
      <li><a href="/guides/online-gambling-canada">Online Gambling Canada</a></li>
      <li><a href="/guides/casino-login">Casino Login</a></li>
      <li><a href="/guides/new-casino-canada">New Casino Canada</a></li>
    </ul>
  </section>

  <nav aria-label="Related guides" class="mt-8">
    <ul class="flex flex-wrap gap-3">
      <li>
        <a
          href="/alberta"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Alberta iGaming Hub</a
        >
      </li>
      <li>
        <a
          href="/interac"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Interac Casino Guide</a
        >
      </li>
    </ul>
  </nav>
</div>
