<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { ArrowRightLeft } from 'lucide-svelte';

  const faqItems = [
    {
      question: 'How long does an Interac withdrawal take?',
      answer:
        "While Interac transfers themselves are almost instant (up to 30 minutes), the total withdrawal time depends on the casino's internal approval process and KYC status. Many top operators process Interac payouts within 1-4 hours.",
    },
    {
      question: 'Are there fees for using Interac?',
      answer:
        "Most reputable casinos do not charge for Interac deposits. However, your bank may have transaction fees depending on your account plan. Always check both casino and bank terms.",
    },
    {
      question: 'What is the minimum Interac deposit?',
      answer:
        "The typical minimum deposit for Interac in Canada ranges from CAD $10 to $20. Minimums are set by the operator and your bank's transfer limits.",
    },
    {
      question: 'Is Interac safer than cards?',
      answer:
        "Interac e-Transfer is highly secure as it uses your bank's established encryption and doesn't require sharing card details directly with the casino.",
    },
  ];

  const depositSteps = [
    {
      title: 'Log in to your 247iBET account',
      description: 'Access your account from any device and ensure you have no active bonus blocks.',
    },
    {
      title: 'Navigate to the Cashier',
      description: 'Select "Deposit" and choose Interac e-Transfer from the listed payment methods.',
    },
    {
      title: 'Enter your deposit amount',
      description: 'Input the amount you wish to fund (typically CAD $10–$20 minimum).',
    },
    {
      title: 'Confirm the transaction',
      description: 'Follow the secure Interac prompts to authorize the transfer from your bank.',
    },
  ];

  const withdrawalSteps = [
    {
      title: 'Choose Interac e-Transfer',
      description: 'Select Interac in the withdrawal section of the cashier.',
    },
    {
      title: 'Confirm your account is verified',
      description: 'Ensure your account is KYC-verified to prevent avoidable payout delays.',
    },
    {
      title: 'Wait for operator approval',
      description: 'The operator approval cycle typically takes 1-24 hours before release.',
    },
    {
      title: 'Accept the transfer',
      description: 'Accept the Interac notification from your email or SMS into your bank.',
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://247ibet.ca" },
      { "@type": "ListItem", "position": 2, "name": "Interac", "item": "https://247ibet.ca/interac" }
    ]
  };
</script>

<svelte:head>
  <title>Interac Casino Canada: Fast Deposits &amp; Withdrawals at 247iBET</title>
  <meta name="description" content="Compare the best Canadian casinos accepting Interac e-Transfer. 247iBET data on deposit limits, withdrawal security, and instant payout verification." />
  <meta property="og:title" content="Interac Casino Canada: Fast Deposits &amp; Withdrawals at 247iBET" />
  <meta property="og:description" content="Compare the best Canadian casinos accepting Interac e-Transfer. 247iBET data on deposit limits, withdrawal security, and instant payout verification." />
  <link rel="canonical" href="https://247ibet.ca/interac" />
  <script type="application/ld+json">{@html JSON.stringify(faqSchema)}</script>
  <script type="application/ld+json">{@html JSON.stringify(breadcrumbSchema)}</script>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">Interac</li>
      </ol>
    </nav>

    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">
      Deposit &amp; Withdraw with Interac in Canada
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Interac keeps casino deposits CAD-native, bank-backed, and fast for Canadian players.
    </p>
  </header>

  <!-- Editorial image callout -->
  <div class="relative h-44 md:h-56 rounded-2xl overflow-hidden mb-10">
    <img
      src="/images/editorial/interac-safety.png"
      alt="Interac secure banking for Canadian players"
      class="object-cover w-full h-full"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/55 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-navy-black/70 to-transparent"></div>
    <div class="absolute bottom-5 left-6 md:left-8">
      <div class="text-[9px] font-mono font-bold text-prestige-gold tracking-[0.22em] uppercase mb-1.5">
        CAD Native · Bank Backed · Instant
      </div>
      <p class="text-lg md:text-xl font-bold text-white">Interac e-Transfer Payments</p>
    </div>
  </div>

  <div class="my-6 rounded-xl border border-prestige-gold/20 bg-prestige-gold/5 p-5">
    <p class="font-bold text-white text-sm">Interac e-Transfer payouts at 247iBET are typically processed within 15–30 minutes of approval.</p>
    <p class="mt-2 text-xs text-text-tertiary leading-relaxed">This provides the fastest legal withdrawal route for Canadian players, with direct bank integration and no hidden processing fees.</p>
  </div>

  <div class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">Affiliate disclosure: This page may contain affiliate links.</div>

  <section class="mt-16 space-y-12">
    <!-- Steps -->
    <div class="grid gap-6 md:grid-cols-2">
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-white flex items-center gap-2">
          <ArrowRightLeft class="w-5 h-5 text-prestige-gold" aria-hidden="true" /> How to Deposit
        </h3>
        <ol class="space-y-4 mt-4">
          {#each depositSteps as step, i}
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-prestige-gold/15 border border-prestige-gold/30 text-prestige-gold text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p class="font-bold text-white text-sm">{step.title}</p>
                <p class="mt-1 text-sm text-text-tertiary leading-relaxed">{step.description}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-white flex items-center gap-2">
          <ArrowRightLeft class="w-5 h-5 text-prestige-gold" aria-hidden="true" /> How to Withdraw
        </h3>
        <ol class="space-y-4 mt-4">
          {#each withdrawalSteps as step, i}
            <li class="flex gap-4">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-prestige-gold/15 border border-prestige-gold/30 text-prestige-gold text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p class="font-bold text-white text-sm">{step.title}</p>
                <p class="mt-1 text-sm text-text-tertiary leading-relaxed">{step.description}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </div>

    <!-- Timing & Limits table -->
    <div class="navy-card rounded-2xl p-8 overflow-x-auto">
      <h2 class="text-2xl font-bold text-white mb-6">Timing &amp; Expectation Limits</h2>
      <table class="w-full text-sm text-left">
        <thead class="text-gray-500 uppercase text-xs tracking-wider border-b border-white/10">
          <tr>
            <th class="px-4 py-3">Service</th>
            <th class="px-4 py-3">Timing</th>
            <th class="px-4 py-3">Limit (Typical)</th>
          </tr>
        </thead>
        <tbody class="text-gray-400 divide-y divide-white/5">
          <tr>
            <td class="px-4 py-4 text-white font-semibold">Interac Deposit</td>
            <td class="px-4 py-4">Immediate - 30 mins</td>
            <td class="px-4 py-4">CAD $10 - $3,000</td>
          </tr>
          <tr>
            <td class="px-4 py-4 text-white font-semibold">Interac Withdrawal</td>
            <td class="px-4 py-4">1 - 24 hours (post-approval)</td>
            <td class="px-4 py-4">CAD $20 - $5,000</td>
          </tr>
          <tr>
            <td class="px-4 py-4 text-white font-semibold">KYC Verification</td>
            <td class="px-4 py-4">24 - 48 hours (once per user)</td>
            <td class="px-4 py-4">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Supporting Pages -->
    <div class="grid gap-6 md:grid-cols-2">
      <a href="/interac/deposit" class="navy-card rounded-2xl p-6 hover:border-prestige-gold/30 transition-colors">
        <h3 class="text-lg font-bold text-white mb-2">How to Deposit with Interac</h3>
        <p class="text-sm text-gray-400">Step-by-step guide to making your first Interac e-Transfer deposit.</p>
      </a>
      <a href="/interac/withdraw" class="navy-card rounded-2xl p-6 hover:border-prestige-gold/30 transition-colors">
        <h3 class="text-lg font-bold text-white mb-2">How to Withdraw with Interac</h3>
        <p class="text-sm text-gray-400">Withdrawal steps, timing expectations, and how to speed up cashouts.</p>
      </a>
    </div>

    <!-- Cross-Pillar Routing -->
    <section>
      <div class="flex flex-wrap gap-6">
        <a href="/casino" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Play casino with Interac</a>
        <a href="/sportsbook" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Bet on sports with Interac</a>
        <a href="/fast-payouts" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Compare fast payout methods</a>
      </div>
    </section>
  </section>

  <!-- FAQ Section -->
  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold text-white">Interac FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="font-bold text-white list-none flex items-center justify-between gap-2">
          {faq.question}
          <svg class="w-4 h-4 shrink-0 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm text-gray-400 font-sans leading-relaxed">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-16">
    <IBetShowcase variant="banner" ctaText="Deposit Now" />
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
  </div>
</div>
