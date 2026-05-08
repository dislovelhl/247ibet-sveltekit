<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { IBET_PROMO_SNAPSHOT, IBET_SPORTSBOOK_CREATIVE_SNAPSHOT } from '$lib/ibet-brand';
  import { reveal } from '$lib/animations';
  import { Shield, CheckCircle } from 'lucide-svelte';
  import ReadyToPlay from '$lib/components/ReadyToPlay.svelte';

  const bonusTypes = [
    {
      name: 'Welcome Bonus Snapshot',
      desc: 'The latest promo creative reviewed by our team showed a welcome offer up to C$2000 plus 10 free spins. Treat that as an observed bonus snapshot and confirm deposit minimums, wagering, and eligible games inside the cashier before opting in.',
      riskLevel: 'Terms heavy',
    },
    {
      name: 'Free Bet Welcome Offer',
      desc: 'Receive free bet credits on your first qualifying bet. Typically lower wagering (often 1x) than casino bonuses.',
      riskLevel: 'Lower',
    },
    {
      name: 'No Deposit Bonus',
      desc: 'Credits awarded just for registering — no deposit required. Higher wagering requirements, strict withdrawal limits. Rare in regulated Canadian market.',
      riskLevel: 'Higher terms',
    },
    {
      name: 'Matched Free Bets',
      desc: 'Deposit a qualifying amount and receive free bets equal to that deposit (up to a cap). Common at AGCO-licensed sportsbooks.',
      riskLevel: 'Lower',
    },
    {
      name: 'Casino Free Spins',
      desc: 'Free plays on selected slot games. Wins from free spins are subject to bonus wagering requirements.',
      riskLevel: 'Medium',
    },
  ];

  const termsList = [
    'Minimum deposit amount to qualify',
    'Wagering requirement (playthrough multiplier)',
    'Time limit to use the offer',
    'Minimum odds for free bet eligibility',
    'Game restrictions (slots only, sports only, etc.)',
    'Maximum withdrawal from bonus winnings',
    'Country / province restrictions',
  ];

  const relatedLinks = [
    { href: '/casino-bonuses-canada', label: 'Casino Bonuses' },
    { href: '/sportsbook-bonuses-canada', label: 'Sportsbook Bonuses' },
    { href: '/no-deposit-bonus-canada', label: 'No Deposit Bonuses' },
    { href: '/free-bets-canada', label: 'Free Bets' },
    { href: '/guides/wagering-requirements-explained', label: 'Wagering Requirements' },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>New Player Welcome Offers Canada 2026 | Welcome Offers | 247iBET</title>
  <meta
    name="description"
    content="New player welcome offers at Canadian sportsbooks and online casinos, including the latest image-observed 247iBET welcome bonus snapshot of up to C$2000 plus 10 free spins and the terms to verify before claiming."
  />
  <meta property="og:title" content="New Player Welcome Offers Canada 2026 | Welcome Offers" />
  <meta
    property="og:description"
    content="Welcome offers explained with terms, AGCO compliance, and what to check."
  />
  <link rel="canonical" href={canonicalUrl('/new-player-bonuses-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'New Player Welcome Offers',
          item: 'https://247ibet.ca/new-player-bonuses-canada',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'New Player Welcome Offers Canada 2026',
      description:
        'New player welcome offers at Canadian sportsbooks and online casinos, plus Ontario advertising restrictions and terms to check before claiming.',
      url: 'https://247ibet.ca/new-player-bonuses-canada',
      datePublished: '2026-03-01',
      dateModified: '2026-03-30',
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-3xl space-y-14">
  <header class="space-y-4 reveal-fade-up" use:reveal>
    <div class="text-xs font-medium text-[#4A9EBF] uppercase tracking-widest">
      Bonuses · Canada · 2026
    </div>
    <h1 class="page-hero-title">
      New Player Welcome Offers Canada
    </h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
      Welcome offers explained for Canadian players — including the latest 247iBET promo image we
      reviewed, which showed a welcome bonus up to C$2000 plus 10 free spins. Use the screenshot as
      a starting point, then verify the cashier terms before claiming.
    </p>
    <div class="relative my-6 h-44 overflow-hidden rounded-2xl border border-white/10 bg-navy-card">
      <img
        src="/images/generated/bonus-wagering-hero.png"
        alt=""
        class="h-full w-full object-cover opacity-80"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
    </div>
    <p class="text-[10px] text-[#8492A6]">Updated March 2026 · 18+/19+ · AGCO compliant</p>
  </header>

  <AffiliateDisclosure />

  <aside class="navy-card rounded-lg p-5">
    <div class="flex items-start gap-3">
      <Shield class="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
      <div>
        <p class="font-semibold text-[#F1F5F9] text-sm mb-1">
          Ontario AGCO — Bonus Advertising Rules
        </p>
        <p class="text-xs text-[#94A3B8] leading-relaxed">
          Under AGCO iGaming Ontario regulations, licensed operators cannot publicly advertise
          specific bonus amounts to the general public. You will see "See Offer" rather than "$X
          Welcome Bonus" on most promotional material from Ontario-available platforms. Offer
          details are available after registration on the platform itself.
        </p>
      </div>
    </div>
  </aside>

  <section use:reveal data-reveal-stagger="true" class="navy-card rounded-lg p-5"
 aria-labelledby="snapshot-heading">
    <div class="flex items-start justify-between gap-4 flex-col sm:flex-row sm:items-center">
      <div>
        <p class="text-[10px] font-medium text-[#4A9EBF] uppercase tracking-widest mb-2">
          Promo snapshot
        </p>
        <h2 id="snapshot-heading" class="text-xl font-bold text-[#F1F5F9]">
          Image-observed welcome offer details
        </h2>
      </div>
      <span class="text-xs text-[#94A3B8]">Observed creative, terms must be verified on-site</span>
    </div>
    <div class="mt-4 grid gap-4 sm:grid-cols-3">
      {#each IBET_PROMO_SNAPSHOT as promo}
        <article use:reveal class="reveal-fade-up overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] card-hover-lift">
          <img src={promo.image} alt={promo.alt} class="h-auto w-full border-b border-white/10 object-cover" />
          <div class="p-4">
            <p class="text-[10px] uppercase tracking-[0.16em] text-[#4A9EBF]">{promo.title}</p>
            <h3 class="mt-2 text-sm font-bold text-white">{promo.headline}</h3>
            <p class="mt-2 text-xs text-[#94A3B8] leading-relaxed">{promo.summary}</p>
            <p class="mt-3 text-[11px] text-[#CBD5E1]">{promo.period}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section use:reveal data-reveal-stagger="true" class="navy-card rounded-lg p-5"
 aria-labelledby="sports-tieins-heading">
    <div class="flex items-start justify-between gap-4 flex-col sm:flex-row sm:items-center">
      <div>
        <p class="text-[10px] font-medium text-[#4A9EBF] uppercase tracking-widest mb-2">
          Brand and event context
        </p>
        <h2 id="sports-tieins-heading" class="text-xl font-bold text-[#F1F5F9]">
          Sportsbook-adjacent creatives tied to the same campaign set
        </h2>
      </div>
      <span class="text-xs text-[#94A3B8]">Useful context, but not claimable welcome-offer rules</span>
    </div>
    <div class="mt-4 grid gap-4 md:grid-cols-3">
      {#each IBET_SPORTSBOOK_CREATIVE_SNAPSHOT as creative}
        <article use:reveal class="reveal-fade-up overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] card-hover-lift">
          <img src={creative.image} alt={creative.alt} class="h-auto w-full border-b border-white/10 object-cover" />
          <div class="p-4">
            <p class="text-[10px] uppercase tracking-[0.16em] text-[#4A9EBF]">{creative.title}</p>
            <h3 class="mt-2 text-sm font-bold text-white">{creative.headline}</h3>
            <p class="mt-2 text-xs text-[#94A3B8] leading-relaxed">{creative.summary}</p>
            <p class="mt-3 text-[11px] text-[#CBD5E1]">{creative.period}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section aria-labelledby="types-heading">
    <h2 id="types-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Types of Welcome Bonuses in Canada
    </h2>
    <div class="space-y-3">
      {#each bonusTypes as b}
        <div use:reveal class="reveal-fade-up navy-card rounded-lg p-4 flex flex-col gap-1.5 card-hover-lift">
          <div class="flex items-center justify-between gap-4">
            <span class="font-semibold text-[#F1F5F9] text-sm">{b.name}</span>
            <span
              class="text-[10px] font-medium text-[#94A3B8] bg-[#142038] px-2 py-0.5 rounded shrink-0"
            >
              Risk: {b.riskLevel}
            </span>
          </div>
          <p class="text-xs text-[#94A3B8] leading-relaxed">{b.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="terms-heading">
    <h2 id="terms-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Terms to Check Before Claiming
    </h2>
    <div class="navy-card rounded-lg p-5">
      <ul class="space-y-2">
        {#each termsList as t}
          <li class="flex items-start gap-3 text-sm text-[#94A3B8]">
            <CheckCircle class="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
            {t}
          </li>
        {/each}
      </ul>
    </div>
    <p class="text-xs text-[#8492A6] mt-3">
      <a
        href="/guides/wagering-requirements-explained"
        class="text-[#4A9EBF] underline decoration-dotted"
      >
        Full wagering requirements guide →
      </a>
    </p>
  </section>

  <IBetShowcase
    variant="hero"
    ctaText="See Welcome Offer at 247iBET"
    contextLabel="Latest reviewed creative showed up to C$2000 + 10 free spins; verify terms after registration"
  />

  <ReadyToPlay />

  <nav aria-label="Related pages" class="border-t border-white/[0.08] pt-6">
    <p class="text-xs text-[#8492A6] mb-3 uppercase tracking-widest font-medium">Related</p>
    <div class="flex flex-wrap gap-3">
      {#each relatedLinks as l}
        <a
          href={l.href}
          class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >
          {l.label}
        </a>
      {/each}
    </div>
  </nav>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
