<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { optimizeSrcSet } from '$lib/image';
import { articleSchema } from '$lib/json-ld';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'Roulette Online';
  const heroImage = '/images/generated/casino-roulette-hero.webp';

  const intro = {
    eyebrow: 'Roulette online Canada',
    title: 'The variant matters more than the betting pattern',
    body: 'Roulette is built around the same core betting map across versions, but the number of zero pockets changes the house edge. That is why European and French roulette are usually stronger starting points than American roulette for players who want better odds.',
  };

  const cards = [
    {
      title: 'European Roulette',
      body: 'Single-zero layout with a standard 2.70% house edge. This is the benchmark version many Canadian players treat as the default option.',
    },
    {
      title: 'French Roulette',
      body: 'Also single-zero, but even-money bets can become more favourable when La Partage or En Prison rules are active.',
    },
    {
      title: 'American Roulette',
      body: 'Double-zero format with a 5.26% house edge. It is familiar, but materially less efficient than the single-zero alternatives.',
    },
  ];

  const leftRail = {
    title: 'Odds comparison that actually matters',
    items: [
      'European roulette carries a 2.70% house edge because there is one zero pocket on the wheel.',
      'French roulette can reduce the effective edge on certain even-money bets to 1.35% when La Partage-style rules are active.',
      'American roulette nearly doubles the disadvantage at 5.26%, which is why serious roulette players usually avoid it when single-zero options are available.',
    ],
  };

  const rightRail = {
    title: 'Where live roulette fits',
    items: [
      'Live roulette adds a studio wheel, a dealer, and a broadcast feed, which makes the game feel more immersive without changing the core odds.',
      'European live tables are usually the first option to check because they combine the better wheel structure with a familiar live format.',
      'Specialty live tables with multipliers can be entertaining, but they should be treated as higher-variance variants rather than standard roulette.',
    ],
  };

  const heroCtaText = 'Play Roulette Now';
  const bannerContextLabel = 'European wheels · French rules · Live roulette · CAD play';

  const faqTitle = 'Roulette FAQ';
  const faqItems = [
    {
      question: 'Which roulette version has the best odds?',
      answer:
        'French roulette can be the strongest on certain even-money bets when La Partage or En Prison rules apply. European roulette is usually the clean default because it still uses a single-zero wheel and avoids the higher edge of American roulette.',
    },
    {
      question: 'Why is American roulette less favourable?',
      answer:
        'The extra double-zero pocket raises the house edge from 2.70% on European roulette to 5.26% on American roulette. That difference is large enough to matter over time.',
    },
    {
      question: 'Is live roulette different from RNG roulette?',
      answer:
        'The core payouts are the same for the same wheel type, but the format changes. Live roulette uses a real wheel and dealer, while RNG roulette resolves digitally and usually at a faster pace.',
    },
    {
      question: 'Are outside bets safer in roulette?',
      answer:
        'Outside bets like red or black tend to hit more often, but they still carry the same house edge as other standard bets on the same wheel. They reduce volatility, not the casino advantage.',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Roulette Online Canada | 247iBET Canada</title>
  <meta
    name="description"
    content="Play roulette online in Canada at 247iBET. Compare European, French, and American roulette, review the odds differences, and see how live roulette fits in."
  />
  <meta property="og:title" content="Roulette Online Canada | 247iBET Canada" />
  <meta
    property="og:description"
    content="Play roulette online in Canada at 247iBET. Compare European, French, and American roulette, review the odds differences, and see how live roulette fits in."
  />
  <meta name="twitter:title" content="Roulette Online Canada | 247iBET Canada" />
  <meta
    name="twitter:description"
    content="Play roulette online in Canada at 247iBET. Compare European, French, and American roulette, review the odds differences, and see how live roulette fits in."
  />
  <link rel="canonical" href={canonicalUrl('/casino/roulette')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Roulette Online Canada | 247iBET Canada',
      description:
        'Play roulette online in Canada at 247iBET. Compare European, French, and American roulette, review the odds differences, and see how live roulette fits in.',
      url: canonicalUrl('/casino/roulette'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Casino', item: 'https://247ibet.ca/casino' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Roulette Online',
          item: 'https://247ibet.ca/casino/roulette',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }}
  />
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/casino" class="hover:text-white">Casino</a></li>
      <li>/</li>
      <li class="text-white font-medium">{pageName}</li>
    </ol>
  </nav>

  <div class="relative h-48 md:h-60 rounded-2xl overflow-hidden mb-8">
    <img
      src={heroImage}
      srcset={optimizeSrcSet(heroImage, [640, 960, 1280, 1672], 82)}
      sizes="(min-width: 768px) 960px, 100vw"
      alt={pageName}
      class="object-cover w-full h-full"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
    <div class="absolute bottom-5 left-6 md:left-8">
      <div
        class="text-[9px] font-mono font-bold text-prestige-gold tracking-[0.22em] uppercase mb-1.5"
      >
        {intro.eyebrow}
      </div>
      <p class="text-xl md:text-2xl font-bold text-white">{pageName}</p>
    </div>
  </div>

  <header class="mb-10">
    <h1 class="page-hero-title mb-4">Play Roulette Online in Canada</h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">
      Roulette is easy to enter because the betting map is simple, the pace is readable, and the
      rule differences are clear once you know how many zero pockets are on the wheel. For Canadian
      players, that makes variant selection more important than chasing gimmicks.
    </p>
  </header>

  <AffiliateDisclosure />

  <section class="navy-card mt-12 rounded-2xl border border-white/10 p-6 md:p-8">
    <div
      class="mb-4 inline-flex items-center rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-prestige-gold"
    >
      {intro.eyebrow}
    </div>
    <h2 class="text-2xl font-bold text-white">{intro.title}</h2>
    <p class="mt-4 text-base leading-relaxed text-gray-400">{intro.body}</p>
  </section>

  <section class="mt-12 grid gap-6 md:grid-cols-3">
    {#each cards as card}
      <div class="navy-card rounded-2xl border border-white/10 p-6">
        <h2 class="text-xl font-bold text-white">{card.title}</h2>
        <p class="mt-3 text-sm leading-relaxed text-gray-400">{card.body}</p>
      </div>
    {/each}
  </section>

  <section class="mt-12 grid gap-6 md:grid-cols-2">
    <div class="navy-card rounded-2xl border border-white/10 p-6 md:p-8">
      <h2 class="text-2xl font-bold text-white">{leftRail.title}</h2>
      <ul class="mt-6 space-y-4">
        {#each leftRail.items as item}
          <li class="flex gap-3 text-sm leading-relaxed text-gray-400">
            <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navy-card rounded-2xl border border-white/10 p-6 md:p-8">
      <h2 class="text-2xl font-bold text-white">{rightRail.title}</h2>
      <ul class="mt-6 space-y-4">
        {#each rightRail.items as item}
          <li class="flex gap-3 text-sm leading-relaxed text-gray-400">
            <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-slate-blue" aria-hidden="true" />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <nav class="mt-12 flex flex-wrap gap-6" aria-label="Related pages">
    <a
      href="/casino"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Back to Online Casino Canada</a
    >
    <a
      href="/interac"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Deposit with Interac</a
    >
    <a
      href="/best-online-casinos-canada"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Best Online Casinos</a
    >
    <a
      href="/guides/how-to-choose-online-casino"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >How to Choose a Casino</a
    >
    <a
      href="/fast-payouts"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Fast Payouts</a
    >
  </nav>

  <section class="mt-12">
    <IBetShowcase variant="banner" ctaText={heroCtaText} contextLabel={bannerContextLabel} />
  </section>

  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold text-white">{faqTitle}</h2>
    {#each faqItems as faq}
      <details class="navy-card group cursor-pointer rounded-xl border border-white/10 p-4">
        <summary class="list-none flex items-center justify-between gap-2 font-bold text-white">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
