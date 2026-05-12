<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import ReadyToPlay from '$lib/components/ReadyToPlay.svelte';
  import { IBET_PROMO_SNAPSHOT } from '$lib/ibet-brand';
  import { reveal } from '$lib/animations';
  import { articleSchema } from '$lib/json-ld';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';

  const lastUpdated = '2026-03-30';

  const faqItems = [
    {
      q: 'Are casino bonuses legal in Ontario?',
      a: "Yes. AGCO-licensed Ontario casinos can offer welcome bonuses and ongoing promotions. However, Ontario's advertising standards restrict how bonuses are marketed — operators cannot advertise specific bonus amounts in certain channels. All bonus terms must be transparently disclosed including wagering requirements, expiry periods, and game restrictions.",
    },
    {
      q: 'What is a deposit match bonus at a Canadian casino?',
      a: 'A deposit match bonus credits your account with bonus funds equal to a percentage of your deposit, up to a cap. A 100% match up to $200 means depositing $200 earns $200 in bonus funds. The bonus typically has a 25x–40x wagering requirement before withdrawal. Read the terms — maximum cashout limits may also apply.',
    },
    {
      q: 'Do casino bonuses differ by province in Canada?',
      a: 'Ontario is the only province with mandatory AGCO-licensed operators. Players outside Ontario may access offshore-licensed casinos (Malta Gaming Authority, Kahnawake) that have different advertising rules and bonus structures. AGCO-licensed operators are generally restricted from offering bonuses to non-Ontario residents.',
    },
    {
      q: 'Can I claim a casino bonus and withdraw immediately?',
      a: 'No. Casino bonuses have wagering requirements that must be met before winnings from bonus funds can be withdrawn. Your deposited cash balance is usually withdrawable at any time without restriction. Only bonus winnings are locked until wagering is complete. Wagering requirements of 25x on a $100 bonus require $2,500 in eligible bets.',
    },
  ];

  const bonusesSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Casino Promotions Canada 2026 — Deposit Offers & Rewards',
      description:
        'Online casino promotions for Canadians compared by real value. Deposit match offers, play credits, and reload offers from top Canadian casinos compared by effective worth.',
      url: 'https://247ibet.ca/casino-bonuses-canada',
      dateModified: '2026-03-30',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Casino Bonuses',
            item: 'https://247ibet.ca/casino-bonuses-canada',
          },
        ],
      },
    },
  ];
</script>

<svelte:head>
  <title>Casino Bonuses Canada 2026: Compare Deposit Offers & Rewards | 247iBET</title>
  <meta
    name="description"
    content="Compare Canadian casino promotions by real value after wagering requirements. We compare deposit matches, play credits, and reload offers from top Canadian casinos."
  />
  <meta
    property="og:title"
    content="Casino Bonuses Canada 2026: Compare Deposit Offers & Rewards | 247iBET"
  />
  <meta
    property="og:description"
    content="Online casino promotions for Canadians compared by effective value after wagering requirements."
  />
  <meta
    name="twitter:title"
    content="Casino Bonuses Canada 2026: Compare Deposit Offers & Rewards | 247iBET"
  />
  <meta
    name="twitter:description"
    content="Online casino promotions for Canadians compared by real value after wagering requirements and expiry terms."
  />
  <link rel="canonical" href={canonicalUrl('/casino-bonuses-canada')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Casino Bonuses Canada 2026: Compare Deposit Offers & Rewards | 247iBET',
      description:
        'Compare Canadian casino promotions by real value after wagering requirements. We compare deposit matches, play credits, and reload offers from top Canadian casinos.',
      url: canonicalUrl('/casino-bonuses-canada'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd schema={bonusesSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16 pt-24 lg:pt-40">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/40">
        <li><a href="/" class="transition-colors hover:text-prestige-gold">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">Casino Bonuses</li>
      </ol>
    </nav>

    <header
      class="material-panel relative mb-12 min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl"
    >
      <BackgroundAtmosphere
        src="/images/brand/casino-bonuses-hero.png"
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent">
      </div>

      <div
        class="material-panel relative z-10 mx-4 my-6 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-8 md:p-14 lg:max-w-3xl"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <div
            class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]"
          >
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-prestige-gold">
              2026 Verified Rewards
            </p>
          </div>
          <span class="text-luxury tracking-boutique text-[11px] text-prestige-gold/60"
            >Last updated: {lastUpdated}</span
          >
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Casino <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]"
            >Promotions</span
          >
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
          Compare Canadian casino promotions by real value — not headline numbers. We analyze
          wagering requirements, expiry terms, and cashier rules to find the best player rewards.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a href="#offers" class="hero-cta-primary min-w-[200px] shimmer-effect btn-magnetic">
            View Snapshots
          </a>
          <a href="/casino" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">
            Explore Games
          </a>
        </div>
      </div>
    </header>

    <AffiliateDisclosure />

    <IBetShowcase variant="hero" showFeatures showPros />

    <section use:reveal data-reveal-stagger="true" class="material-panel mt-8 p-6 md:p-8">
      <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-xs font-mono uppercase tracking-[0.16em] text-[#4A9EBF]">Promo snapshot</p>
          <h2 class="mt-2 text-2xl font-bold">Latest image-observed 247iBET offers</h2>
        </div>
        <p class="max-w-xl text-xs text-text-tertiary">
          These amounts came from a reviewed bonus creative rather than a fully legible cashier
          terms page. Treat them as a current snapshot and confirm the operative rules before
          claiming.
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {#each IBET_PROMO_SNAPSHOT as promo}
          <article
            class="material-cell reveal-fade-up overflow-hidden rounded-2xl card-hover-lift"
            use:reveal
          >
            <img
              src={promo.image}
              alt={promo.alt}
              class="h-auto w-full border-b border-white/10 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div class="p-5">
              <p class="text-xs font-mono uppercase tracking-[0.14em] text-[#4A9EBF]">
                {promo.title}
              </p>
              <h3 class="mt-2 text-lg font-bold text-white">{promo.headline}</h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-400">{promo.summary}</p>
              <p class="mt-4 text-xs text-text-tertiary">{promo.period}</p>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section use:reveal class="material-panel reveal-fade-up mt-16 p-6 md:p-8">
      <h2 class="text-2xl font-bold mb-6">Types of Casino Offers in Canada</h2>
      <div
        use:reveal
        data-reveal-stagger="true"
        class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400 leading-relaxed"
      >
        <div class="material-cell reveal-fade-up rounded-2xl p-5" use:reveal>
          <h3 class="text-white font-bold mb-2">Deposit Match Bonuses</h3>
          <p>
            The operator matches your deposit by a percentage — typically 50%–100% — up to a maximum
            amount. A 100% match up to $200 gives you $200 in bonus funds for a $200 deposit. Value
            depends on wagering requirement (25x–40x is typical), game contributions, and whether
            the bonus can be declined.
          </p>
        </div>
        <div class="material-cell reveal-fade-up rounded-2xl p-5" use:reveal>
          <h3 class="text-white font-bold mb-2">Free Spins</h3>
          <p>
            Free spins allow you to play eligible slot games without using your cash balance. Each
            spin has a fixed value (usually $0.10–$0.20). Winnings from free spins are typically
            capped ($20–$50) and subject to 20x–30x wagering before withdrawal. Net value is often
            modest and low up-front risk.
          </p>
        </div>
        <div class="material-cell reveal-fade-up rounded-2xl p-5" use:reveal>
          <h3 class="text-white font-bold mb-2">Reload & Loyalty Bonuses</h3>
          <p>
            Ongoing promotions reward continued play — weekly reload matches, cashback on losses, or
            free spins on featured games. AGCO operators must not make unsolicited direct marketing
            offers. Loyalty programs (tiered VIP clubs) offer the best long-term value for regular
            players.
          </p>
        </div>
      </div>
      <p class="mt-4 text-xs text-gray-600">
        Bonus values and terms change frequently. Always read the full terms and conditions on the
        operator's site before claiming. We may earn affiliate commissions — <a
          href="/about/affiliate-disclosure"
          class="text-slate-blue hover:underline">read our disclosure</a
        >.
      </p>
    </section>

    <section class="material-panel mt-8 p-6 md:p-8">
      <h2 class="text-2xl font-bold mb-4">Offer Types at a Glance</h2>
      <div class="material-group overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="soft-separator border-b bg-white/3">
              <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Bonus type</th>
              <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Typical value</th>
              <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Common tradeoff</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr>
              <td class="p-4 text-white font-bold">Deposit match</td>
              <td class="p-4 text-gray-300">50% to 100% matched funds</td>
              <td class="p-4 text-gray-300">Wagering requirements can be high.</td>
            </tr>
            <tr>
              <td class="p-4 text-white font-bold">Free spins</td>
              <td class="p-4 text-gray-300">$0.10 to $0.20 per spin</td>
              <td class="p-4 text-gray-300">Winnings are usually capped.</td>
            </tr>
            <tr>
              <td class="p-4 text-white font-bold">Reload / cashback</td>
              <td class="p-4 text-gray-300">Weekly or monthly ongoing offers</td>
              <td class="p-4 text-gray-300">Lower headline value, but useful for regular play.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-10 space-y-4">
      <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
      {#each faqItems as { q, a }}
        <details class="material-cell rounded-2xl p-4 group cursor-pointer">
          <summary class="font-bold text-white list-none flex items-center justify-between gap-2">
            {q}
            <svg
              class="w-4 h-4 shrink-0 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-sm text-gray-400 leading-relaxed">{a}</p>
        </details>
      {/each}
    </section>

    <ReadyToPlay />

    <div class="mt-8">
      <nav class="flex flex-wrap gap-3" aria-label="Related pages">
        <a
          href="/new-online-casinos-canada"
          class="floating-chrome px-4 py-2 text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
          >New Online Casinos</a
        >
        <a
          href="/best-online-casinos-canada"
          class="floating-chrome px-4 py-2 text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
          >Best Online Casinos</a
        >
        <a
          href="/low-wagering-casinos-canada"
          class="floating-chrome px-4 py-2 text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
          >Low Wagering Casinos</a
        >
        <a
          href="/fast-payouts"
          class="floating-chrome px-4 py-2 text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
          >Fast Payout Casinos</a
        >
      </nav>

      <div class="material-panel mt-8 p-4 text-xs text-text-tertiary">
        Play responsibly. 19+ only. <a
          href="/responsible-gambling"
          class="text-slate-blue hover:underline">Responsible gambling resources</a
        >.
      </div>
    </div>
  </div>
</div>
