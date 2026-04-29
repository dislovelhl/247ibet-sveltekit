<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { optimizeSrcSet } from '$lib/image';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'Blackjack Online';
  const heroImage = '/images/generated/casino-blackjack-hero.png';

  const intro = {
    eyebrow: 'Blackjack online Canada',
    title: 'Why blackjack is usually the low-edge table-game choice',
    body: 'When rules are reasonable and the player follows sound basic strategy, blackjack is often one of the lowest-house-edge casino games available. That does not remove risk, but it does make rule quality, pace, and decision discipline matter more than in pure chance games.',
  };

  const cards = [
    {
      title: 'Classic Blackjack',
      body: 'One hand at a time, slower pacing, and easier decision tracking. This is often the cleanest version to use when you are still learning strategy.',
    },
    {
      title: 'Multi-hand Blackjack',
      body: 'Lets you play several hands in a single round. It increases action volume, which can be useful for experienced players but also speeds up bankroll swings.',
    },
    {
      title: 'Live Blackjack',
      body: 'Adds a real dealer and studio stream while keeping the same core logic. It feels more social and slightly slower than RNG tables.',
    },
  ];

  const leftRail = {
    title: 'Basic strategy overview',
    items: [
      'Always treat strategy as a way to reduce errors, not as a way to create guaranteed wins. Blackjack still has variance.',
      'Common fundamentals include splitting Aces and 8s, standing on stronger totals, and doubling when the dealer is vulnerable and the rule set supports it.',
      'Learning a simple strategy chart before moving to faster tables usually does more for results than chasing side bets or high-speed formats.',
    ],
  };

  const rightRail = {
    title: 'Typical RTP ranges',
    items: [
      'Classic blackjack can sit around 99.4% to 99.6% when the rules are player-friendly and the strategy is disciplined.',
      'Multi-hand blackjack often stays in a similar range, but the faster pace means practical session swings can feel larger.',
      'Live blackjack can also stay strong on RTP, while side bets usually carry a meaningfully higher house edge than the base game.',
    ],
  };

  const heroCtaText = 'Play Blackjack Now';
  const bannerContextLabel = 'Classic hands · Multi-hand tables · Live blackjack · CAD banking';

  const faqTitle = 'Blackjack FAQ';
  const faqItems = [
    {
      question: 'What blackjack variant is best for beginners?',
      answer:
        'Classic blackjack is usually the easiest place to start because there is only one hand to manage and the round pace is slower. That makes strategy decisions easier to follow and review.',
    },
    {
      question: 'Does basic strategy guarantee profit in blackjack?',
      answer:
        "No. Basic strategy lowers avoidable mistakes and helps you play closer to the game's theoretical RTP, but blackjack still carries house edge and session variance.",
    },
    {
      question: 'Is live blackjack better than RNG blackjack?',
      answer:
        'It depends on what you value. RNG blackjack is faster and more volume-driven, while live blackjack feels more social and closer to a physical table experience.',
    },
    {
      question: 'Why do side bets change blackjack value?',
      answer:
        'Side bets usually carry a higher house edge than the base hand. They can add entertainment value, but they are rarely the most efficient part of a blackjack session.',
    },
  ];
</script>

<svelte:head>
  <title>Blackjack Online Canada | 247iBET Canada</title>
  <meta
    name="description"
    content="Play blackjack online in Canada at 247iBET. Compare classic, multi-hand, and live blackjack, review basic strategy principles, and understand typical RTP ranges."
  />
  <meta property="og:title" content="Blackjack Online Canada | 247iBET Canada" />
  <meta
    property="og:description"
    content="Play blackjack online in Canada at 247iBET. Compare classic, multi-hand, and live blackjack, review basic strategy principles, and understand typical RTP ranges."
  />
  <meta name="twitter:title" content="Blackjack Online Canada | 247iBET Canada" />
  <meta
    name="twitter:description"
    content="Play blackjack online in Canada at 247iBET. Compare classic, multi-hand, and live blackjack, review basic strategy principles, and understand typical RTP ranges."
  />
  <link rel="canonical" href={canonicalUrl('/casino/blackjack')} />
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
          name: 'Blackjack Online',
          item: 'https://247ibet.ca/casino/blackjack',
        },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
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

  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/casino" class="hover:text-white">Casino</a></li>
      <li>/</li>
      <li class="text-white font-medium">{pageName}</li>
    </ol>
  </nav>

  <header class="mb-10">
    <h1 class="text-[1.875rem] font-bold text-text-primary mb-2">
      Play Blackjack Online in Canada
    </h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">
      Blackjack stays popular because it combines straightforward rules with some of the strongest
      RTP ranges in the casino lobby. The right version for you depends on whether you want slower
      classic rounds, faster multi-hand volume, or a more social live dealer table.
    </p>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <section class="navy-card mt-12 rounded-2xl border border-white/10 p-6 md:p-8">
    <div
      class="mb-4 inline-flex items-center rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-prestige-gold"
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
