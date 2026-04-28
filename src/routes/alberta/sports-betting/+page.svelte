<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const faqItems = [
    { question: 'Is sports betting already available throughout Alberta?', answer: 'Treat Alberta as a current-availability check. The July 13, 2026 go-live marker is the launch reference point, but you should still confirm whether the operator, markets, and cashier are actually open before you register.' },
    { question: 'What sports are likely to matter most in Alberta?', answer: 'NHL and CFL are the most obvious local anchors, especially Edmonton Oilers, Calgary Flames, and Calgary Stampeders interest. Exact market depth will still depend on the operator and launch phase.' },
    { question: 'What should Alberta bettors prepare before launch?', answer: 'Get your Interac setup ready, make sure your identity documents are current, and decide which sports or bet types you care about before you start checking sportsbook availability.' },
    { question: 'Who regulates Alberta sports betting updates?', answer: 'AGLC, Alberta Gaming, Liquor and Cannabis, is the provincial body to monitor for Alberta launch and operator-access context.' },
  ];

  const marketCards = [
    { title: 'Launch timeline', body: 'Use July 13, 2026 as the Alberta launch milestone, then keep checking which sportsbook products are actually live instead of assuming every market is open immediately.' },
    { title: 'Expected betting focus', body: 'When Alberta sports betting launches, NHL markets around the Oilers and Flames should attract early demand, with CFL coverage for the Stampeders also likely to matter.' },
    { title: 'Account readiness', body: 'Prepare your payment and verification details before you chase launch-day access, because cashier setup and KYC can shape how quickly a new sportsbook account becomes usable.' },
  ];

  const prepChecklist = [
    'Check availability first, then compare sportsbook depth instead of assuming every operator covers Alberta equally.',
    'Review the broader /sportsbook pillar so you know which leagues, live markets, and bet types matter to you.',
    'Get Interac and banking details lined up before launch so deposit and withdrawal checks are easier.',
    'Set limits early and keep betting prep grounded in responsible gambling tools, not launch-day urgency.',
  ];
</script>

<svelte:head>
  <title>Alberta Sports Betting | 247iBET Availability</title>
  <meta name="description" content="Check Alberta sports betting availability ahead of the July 13, 2026 launch. Review AGLC context, expected NHL and CFL markets, Interac readiness, and preparation steps." />
  <meta property="og:title" content="Alberta Sports Betting | 247iBET Availability" />
  <meta property="og:description" content="Prepare for Alberta sports betting launch with AGLC context, local market expectations, and Interac readiness." />
  <meta name="twitter:title" content="Alberta Sports Betting | 247iBET Availability" />
  <meta name="twitter:description" content="Prepare for Alberta sports betting launch with AGLC context, local market expectations, and Interac readiness." />
  <link rel="canonical" href="https://247ibet.ca/alberta/sports-betting" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://247ibet.ca"},{"@type":"ListItem","position":2,"name":"Alberta","item":"https://247ibet.ca/alberta"},{"@type":"ListItem","position":3,"name":"Sports Betting","item":"https://247ibet.ca/alberta/sports-betting"}]})}</script>
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/alberta" class="hover:text-white">Alberta</a></li>
        <li>/</li>
        <li class="text-white">Sports Betting</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">Sports Betting in Alberta</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">Prepare for Alberta sports betting launch before July 13, 2026. Use this page to follow AGLC launch context, expected NHL and CFL coverage, and Interac readiness before sportsbook access opens.</p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-04-02</p>
  </header>

  <div class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">Affiliate disclosure: This page may contain affiliate links.</div>

  <section class="mb-10 navy-card rounded-3xl border border-white/10 p-6 md:p-8">
    <h2 class="mb-4 text-2xl font-bold text-white">Alberta sportsbook launch watch</h2>
    <p class="mb-6 text-sm leading-relaxed text-gray-300">
      Alberta sportsbook pages need conditional language all the way through launch. The right question is whether an operator is currently available for Alberta players, not whether generic sportsbook marketing says it is. AGLC is the key provincial reference point as Alberta moves from launch preparation to live market checks.
    </p>
    <div class="grid gap-4 md:grid-cols-3">
      {#each marketCards as card}
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-prestige-gold">{card.title}</h3>
          <p class="text-sm leading-relaxed text-gray-400">{card.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-10 navy-card rounded-3xl border border-slate-blue/20 bg-slate-blue/5 p-6 md:p-8">
    <h2 class="mb-4 text-2xl font-bold text-white">How to prepare for Alberta sports betting</h2>
    <div class="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-blue">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
      AGLC context + account readiness
    </div>
    <ul class="grid gap-3 text-sm leading-relaxed text-gray-300 md:grid-cols-2">
      {#each prepChecklist as item}
        <li class="rounded-2xl border border-white/10 bg-black/20 p-4">{item}</li>
      {/each}
    </ul>
  </section>

  <section class="mb-10">
    <IBetShowcase variant="banner" ctaText="Check availability" contextLabel="Alberta sportsbook watch · Interac-ready setup · 18+" />
  </section>

  <section class="mt-16">
    <h2 class="mb-6 text-2xl font-bold text-white">Keep Alberta connected to the main guides</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <a href="/alberta" class="navy-card rounded-2xl border border-white/10 p-6 transition-colors hover:border-prestige-gold/30">
        <h3 class="mb-3 text-lg font-bold text-white">Back to the Alberta hub</h3>
        <p class="text-sm text-gray-400">Return to the Alberta pillar for broader launch coverage, legal age guidance, and supporting operator-readiness pages.</p>
      </a>
      <a href="/sportsbook" class="navy-card rounded-2xl border border-white/10 p-6 transition-colors hover:border-prestige-gold/30">
        <h3 class="mb-3 text-lg font-bold text-white">Explore the sportsbook pillar</h3>
        <p class="text-sm text-gray-400">Use the main sportsbook guide to compare markets and bet types, then come back to Alberta to verify which books are currently available.</p>
      </a>
      <a href="/interac" class="navy-card rounded-2xl border border-white/10 p-6 transition-colors hover:border-slate-blue/30">
        <h3 class="mb-3 text-lg font-bold text-white">Review Interac readiness</h3>
        <p class="text-sm text-gray-400">Check your Interac setup before launch so deposits and withdrawals are easier to verify once Alberta sportsbook access opens.</p>
      </a>
    </div>
  </section>

  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold text-white">Alberta Sports Betting FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9]">
          {faq.question}
          <svg class="h-4 w-4 shrink-0 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
    </div>
  </div>
</div>
