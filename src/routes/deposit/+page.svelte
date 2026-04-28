<script lang="ts">
  // deposit/page.tsx delegates most content to DepositClient.tsx (interactive component).
  // The static/SEO content from this page is preserved below.
  // The interactive DepositClient functionality will be implemented in Phase 2.
</script>

<svelte:head>
  <title>Deposit with Interac e-Transfer | Fast Canadian Casino Deposits at 247iBET</title>
  <meta name="description" content="Deposit at 247iBET using Interac e-Transfer. Instant Canadian deposits, fast withdrawals, and no extra fees." />
  <meta property="og:title" content="Deposit with Interac at 247iBET Canada" />
  <meta property="og:description" content="Deposit at 247iBET using Interac e-Transfer. Instant Canadian deposits, fast withdrawals, no fees." />
  <link rel="canonical" href="https://247ibet.ca/deposit" />
  <script type="application/ld+json">{@html JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "headline": "Deposit with Interac | 247iBET",
    "description": "Fund your 247iBET account instantly with Interac e-Transfer. Fast, secure, and CAD-native.",
    "url": "https://247ibet.ca/deposit"
  })}</script>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 max-w-5xl">

  <!-- Interactive deposit tool placeholder (Phase 2) -->
  <div class="navy-card rounded-2xl p-8 text-center mb-8">
    <p class="text-text-tertiary text-sm">Interactive tool — functionality coming in Phase 2.</p>
  </div>

  <section class="mt-8">
    <h2 class="text-2xl font-bold text-white mb-4">Deposit Methods Compared</h2>
    <div class="navy-card overflow-x-auto rounded-2xl">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Method</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Speed</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Best for</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-white font-bold">Interac e-Transfer</td>
            <td class="p-4 text-gray-300">Usually instant</td>
            <td class="p-4 text-gray-300">Fast Canadian deposits and withdrawals — no extra steps, no fees.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sr-only" aria-label="Related payments and account safety resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/fast-payouts">Fastest Payout Methods</a></li>
      <li><a href="/guides/interac-e-transfer-casino">Interac Transfer Guide</a></li>
      <li><a href="/security">Security Protocols</a></li>
      <li><a href="/responsible-gambling">Responsible Gambling Tools</a></li>
    </ul>
  </section>
</div>
