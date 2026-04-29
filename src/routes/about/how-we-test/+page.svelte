<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ShieldCheck,
    Zap,
    CreditCard,
    Gamepad2,
    Headphones,
    Scale,
    BookOpen,
  } from 'lucide-svelte';

  const CRITERIA = [
    {
      icon: ShieldCheck,
      title: 'Licensing & Trust (25%)',
      color: 'text-green-400',
      bg: 'bg-green-500/10 border border-green-500/20',
      steps: [
        'Verify active AGCO registration via iGaming Ontario public register',
        'Check MGA, UKGC, or other tier-1 licences for offshore operators',
        'Review operator ownership structure (publicly traded vs private)',
        'Audit responsible gambling tools: deposit limits, self-exclusion, reality checks',
        'Check AGCO enforcement history and any consumer protection violations',
      ],
    },
    {
      icon: Zap,
      title: 'Withdrawal Speed (25%)',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10 border border-orange-500/20',
      steps: [
        'Open a real-money account with standard verification',
        'Complete full KYC (photo ID, proof of address) before testing',
        'Make a deposit and wager minimum playthrough requirements',
        'Submit an Interac e-Transfer withdrawal request',
        'Record exact elapsed time from request to bank receipt',
        'Test multiple times across different days and times',
        'Compare published claims vs actual measured times',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment Methods (20%)',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border border-yellow-500/20',
      steps: [
        'Confirm Interac e-Transfer availability (critical for Canadians)',
        'Test deposit processing time for each listed method',
        'Verify withdrawal method availability matches deposit methods',
        'Check for hidden fees on deposits or withdrawals',
        'Confirm CAD account availability (no currency conversion required)',
        'Test minimum/maximum deposit and withdrawal limits',
      ],
    },
    {
      icon: Gamepad2,
      title: 'Games / Sports Markets (15%)',
      color: 'text-slate-blue',
      bg: 'bg-slate-blue/10 border border-slate-blue/20',
      steps: [
        'For casinos: count unique slot titles, live dealer tables, and table game variants',
        'Verify RNG certification by eCOGRA, iTech Labs, or equivalent',
        'For sportsbooks: check depth of NHL, CFL, NBA, NFL, and UFC markets',
        'Test in-play betting availability and lag/latency',
        'Assess same-game parlay (SGP) builder quality',
        'Identify any Canadian-specific game or market restrictions',
      ],
    },
    {
      icon: Headphones,
      title: 'Customer Support (10%)',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border border-purple-500/20',
      steps: [
        'Test live chat response time (target: < 3 minutes)',
        'Submit a withdrawal support ticket and measure response time',
        'Verify Canadian toll-free phone line availability',
        'Check for bilingual (EN/FR) support options',
        'Attempt to escalate a dispute and record the process',
      ],
    },
    {
      icon: Scale,
      title: 'Terms & Bonus Fairness (5%)',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10 border border-pink-500/20',
      steps: [
        'Read full bonus terms and conditions (not just the headline offer)',
        'Calculate wagering requirements relative to bonus value',
        'Check maximum bet restriction during active bonus',
        'Identify game restrictions (slots-only, etc.) on bonus play',
        'Note withdrawal cap on bonus winnings if any',
        'Ontario note: bonus details not shown publicly per AGCO guidelines',
      ],
    },
  ];
</script>

<svelte:head>
  <title>How We Verify Online Casinos and Sportsbooks | 247iBET</title>
  <meta
    name="description"
    content="Our Canadian casino and sportsbook testing covers licensing checks, real withdrawal tests, payment methods, KYC documentation, support response, and game fairness audits."
  />
  <meta property="og:title" content="How We Verify Online Casinos and Sportsbooks | 247iBET" />
  <meta
    property="og:description"
    content="Canadian casino and sportsbook verification methodology covering licensing, withdrawals, payments, KYC, and game fairness."
  />
  <meta name="twitter:title" content="How We Verify Online Casinos and Sportsbooks | 247iBET" />
  <meta
    name="twitter:description"
    content="Our Canadian iGaming testing process: licensing, withdrawals, payments, KYC, support, and promotional fairness."
  />
  <link rel="canonical" href="https://247ibet.ca/about/how-we-test" />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: 'How We Verify Online Casinos and Sportsbooks',
      description:
        'Documented Canadian iGaming testing methodology covering licensing, withdrawals, payments, KYC, support, and promotional fairness.',
      url: 'https://247ibet.ca/about/how-we-test',
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li class="text-text-tertiary">/</li>
      <li><a href="/about" class="hover:text-white">About</a></li>
      <li class="text-text-tertiary">/</li>
      <li class="text-white font-medium">How We Test</li>
    </ol>
  </nav>

  <header class="navy-card rounded-3xl p-6 md:p-10 mb-10 relative overflow-hidden">
    <div
      aria-hidden="true"
      class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-slate-blue/5 blur-3xl pointer-events-none"
    ></div>
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-12 h-12 rounded-xl bg-slate-blue/10 border border-slate-blue/20 flex items-center justify-center"
        >
          <BookOpen class="w-6 h-6 text-slate-blue" aria-hidden="true" />
        </div>
        <div class="text-[10px] font-mono text-slate-blue uppercase tracking-[0.3em]">
          Verification Methodology
        </div>
      </div>
      <h1 class="text-3xl md:text-4xl font-black text-white mb-4">How We Verify Operators</h1>
      <p class="text-lg text-gray-300 font-sans max-w-2xl leading-relaxed">
        Every featured page on 247iBET follows a documented, repeatable verification process. We
        open real accounts, make real deposits, and test real withdrawals. No pay-to-place. No
        undisclosed conflicts.
      </p>
    </div>
  </header>

  <!-- Principles -->
  <section class="navy-card rounded-2xl p-6 mb-8">
    <h2 class="text-xl font-bold mb-4">Verification Principles</h2>
    <ul class="space-y-3 text-sm text-gray-400 font-sans">
      {#each ['We open and fund real accounts — our team tests withdrawals with real money.', 'Operators cannot pay for placement or to alter their position.', "We disclose all commercial relationships — commissions don't influence our placement decisions.", 'Featured pages are updated at least quarterly; major changes are updated within 72 hours.', 'We comply with AGCO advertising guidelines — bonus amounts are not displayed on public pages.', 'We cite primary sources — regulators, operator T&Cs, and test results — not secondary claims.'] as principle}
        <li class="flex items-start gap-2">
          <ShieldCheck class="w-4 h-4 text-slate-blue shrink-0 mt-0.5" aria-hidden="true" />
          {principle}
        </li>
      {/each}
    </ul>
  </section>

  <!-- Scoring criteria -->
  <section class="space-y-6 mb-10">
    <h2 class="text-2xl font-bold">Scoring Criteria (100 Points Total)</h2>
    {#each CRITERIA as criterion}
      <div class="navy-card rounded-2xl p-5 {criterion.bg}">
        <h3 class="text-lg font-bold mb-3 flex items-center gap-2 {criterion.color}">
          <svelte:component this={criterion.icon} class="w-5 h-5" aria-hidden="true" />
          {criterion.title}
        </h3>
        <ul class="space-y-1.5">
          {#each criterion.steps as step}
            <li class="flex items-start gap-2 text-sm text-gray-400 font-sans">
              <span class="text-gray-600 shrink-0 mt-0.5">→</span>
              {step}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <!-- Update policy -->
  <section class="navy-card rounded-2xl p-6 mb-8">
    <h2 class="text-xl font-bold mb-3">Update Policy</h2>
    <p class="text-sm text-gray-400 font-sans mb-3">
      All operator reviews display a "last reviewed" date. Full re-reviews happen quarterly.
      Triggered re-reviews happen within 72 hours when:
    </p>
    <ul class="space-y-2 text-sm text-gray-400 font-sans">
      {#each ["An operator's AGCO/MGA licence status changes", 'A major withdrawal delay or payment issue is reported', 'Ownership or parent company changes', 'New payment methods are added or removed', 'An AGCO enforcement action is taken'] as item}
        <li class="flex items-start gap-2">
          <span class="text-slate-blue shrink-0">·</span>
          {item}
        </li>
      {/each}
    </ul>
  </section>

  <div class="mt-4 text-sm text-gray-500 font-sans">
    Questions about our process?
    <a href="/contact" class="text-slate-blue hover:underline">Contact us</a>. See also:
    <a href="/about/affiliate-disclosure" class="text-slate-blue hover:underline"
      >Affiliate Disclosure</a
    >.
  </div>
</div>
