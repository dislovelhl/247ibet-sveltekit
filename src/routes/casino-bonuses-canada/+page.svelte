<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
import ReadyToPlay from '$lib/components/ReadyToPlay.svelte';
import { IBET_PROMO_SNAPSHOT } from '$lib/ibet-brand';
import { reveal } from '$lib/animations';
import { articleSchema } from '$lib/json-ld';


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
      headline:
        'Casino Bonuses Canada 2026: Compare Deposit Offers & Rewards | 247iBET',
      description:
        'Compare Canadian casino promotions by real value after wagering requirements. We compare deposit matches, play credits, and reload offers from top Canadian casinos.',
      url: canonicalUrl('/casino-bonuses-canada'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd
    schema={[
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
    ]}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <header class="mb-10 reveal-fade-up" use:reveal>
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">Casino Bonuses</li>
      </ol>
    </nav>
    <h1 class="page-hero-title mb-4">
      Casino Promotions Canada 2026
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Online casino promotions for Canadians compared by real value — not headline numbers. Our
      latest reviewed 247iBET promo creative showed a welcome bonus up to C$2000 plus 10 free
      spins, an every-deposit bonus up to C$1000, and a Mother’s Day Double Rewards campaign. We
      still recommend checking wagering, expiry, and cashier rules before opting in.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: {lastUpdated}</p>
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures showPros />

  <section use:reveal data-reveal-stagger="true" class="navy-card mt-8 rounded-2xl p-6 md:p-8">
    <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-mono uppercase tracking-[0.16em] text-[#4A9EBF]">Promo snapshot</p>
        <h2 class="mt-2 text-2xl font-bold">Latest image-observed 247iBET offers</h2>
      </div>
      <p class="max-w-xl text-xs text-text-tertiary">
        These amounts came from a reviewed bonus creative rather than a fully legible cashier terms
        page. Treat them as a current snapshot and confirm the operative rules before claiming.
      </p>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {#each IBET_PROMO_SNAPSHOT as promo}
        <article class="reveal-fade-up overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] card-hover-lift" use:reveal>
          <img src={promo.image} alt={promo.alt} class="h-auto w-full border-b border-white/10 object-cover" loading="lazy" decoding="async" />
          <div class="p-5">
            <p class="text-xs font-mono uppercase tracking-[0.14em] text-[#4A9EBF]">{promo.title}</p>
            <h3 class="mt-2 text-lg font-bold text-white">{promo.headline}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-400">{promo.summary}</p>
            <p class="mt-4 text-xs text-text-tertiary">{promo.period}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section use:reveal class="reveal-fade-up navy-card mt-16 rounded-2xl p-6 md:p-8">
    <h2 class="text-2xl font-bold mb-6">Types of Casino Offers in Canada</h2>
    <div use:reveal data-reveal-stagger="true" class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400 leading-relaxed">
      <div class="reveal-fade-up" use:reveal>
        <h3 class="text-white font-bold mb-2">Deposit Match Bonuses</h3>
        <p>
          The operator matches your deposit by a percentage — typically 50%–100% — up to a maximum
          amount. A 100% match up to $200 gives you $200 in bonus funds for a $200 deposit. Value
          depends on wagering requirement (25x–40x is typical), game contributions, and whether the
          bonus can be declined.
        </p>
      </div>
      <div class="reveal-fade-up" use:reveal>
        <h3 class="text-white font-bold mb-2">Free Spins</h3>
        <p>
          Free spins allow you to play eligible slot games without using your cash balance. Each
          spin has a fixed value (usually $0.10–$0.20). Winnings from free spins are typically
          capped ($20–$50) and subject to 20x–30x wagering before withdrawal. Net value is often
          modest and low up-front risk.
        </p>
      </div>
      <div class="reveal-fade-up" use:reveal>
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

  <section class="navy-card mt-8 rounded-2xl p-6 md:p-8">
    <h2 class="text-2xl font-bold mb-4">Offer Types at a Glance</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
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
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
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
    <nav class="flex flex-wrap gap-6" aria-label="Related pages">
      <a
        href="/new-online-casinos-canada"
        class="text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
        >New Online Casinos</a
      >
      <a
        href="/best-online-casinos-canada"
        class="text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
        >Best Online Casinos</a
      >
      <a
        href="/low-wagering-casinos-canada"
        class="text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
        >Low Wagering Casinos</a
      >
      <a
        href="/fast-payouts"
        class="text-slate-blue text-sm font-bold uppercase tracking-wider hover:underline"
        >Fast Payout Casinos</a
      >
    </nav>

    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
