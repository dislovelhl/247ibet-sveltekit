<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'Live Casino';
  const heroImage = '/images/editorial/live-dealer-premium.png';

  const intro = {
    eyebrow: 'Live dealer Canada',
    title: 'What a live table actually adds',
    body: 'A live casino table uses a real dealer and physical game equipment inside a broadcast studio. You place bets through the interface, the dealer manages the round on camera, and the results are processed in real time, which creates a slower and more social rhythm than RNG-only games.',
  };

  const cards = [
    {
      title: 'Live Blackjack',
      body: 'Fast to join, easy to understand, and usually available across a wide range of stakes. It is often the first live table Canadian players try.',
    },
    {
      title: 'Live Roulette',
      body: 'A strong fit if you want a simple bet slip and a visually clear game flow. European and variant tables often sit at the centre of live roulette lobbies.',
    },
    {
      title: 'Live Baccarat',
      body: 'A quick, low-decision table game built around Banker, Player, and Tie outcomes. It remains a core live option because the pace is simple and familiar.',
    },
  ];

  const leftRail = {
    title: 'How live dealer play works',
    items: [
      'You join an open table, choose a seat when needed, and place chips during the betting window before the dealer starts the round.',
      'Cards, wheel spins, and outcomes are streamed from a studio through HD video, while the interface tracks bets and balance changes.',
      'Chat tools, multi-camera views, and auto re-bet shortcuts make the experience feel closer to a digital table room than a static video feed.',
    ],
  };

  const rightRail = {
    title: 'What to look for in a quality live setup',
    items: [
      'Stable HD streaming matters because dropped frames or lag make fast table decisions harder to manage.',
      'Evolution, Pragmatic Play Live, and Ezugi are common studio names Canadian players recognise across major live categories.',
      'Check table limits, side-bet menus, and mobile stability before settling on a favourite dealer room.',
    ],
  };

  const heroCtaText = 'Play Live Casino';
  const bannerContextLabel = 'Live blackjack · Roulette · Baccarat · HD dealer tables';

  const faqTitle = 'Live Casino FAQ';
  const faqItems = [
    {
      question: 'What games are usually included in a live casino?',
      answer: 'The core live lineup is blackjack, roulette, and baccarat. Some lobbies also add game-show formats, poker variants, or specialty tables depending on the studio mix.',
    },
    {
      question: 'Is live casino slower than RNG casino games?',
      answer: 'Usually yes. The dealer has to complete each round on camera, so live play feels more deliberate than instant-spin slots or auto-resolved table games.',
    },
    {
      question: 'Can I play live casino on mobile in Canada?',
      answer: 'Yes, provided your device and connection are stable enough for video streaming. Mobile live tables work best on recent phones with reliable Wi-Fi or strong data coverage.',
    },
    {
      question: 'Do live dealer tables use HD streaming?',
      answer: 'Most modern live casino studios do. Stream quality still depends on the provider, your device, and your network conditions, so the best setup is the one that stays stable during longer sessions.',
    },
  ];
</script>

<svelte:head>
  <title>Live Casino Canada | 247iBET Canada</title>
  <meta name="description" content="Play live casino in Canada at 247iBET. Learn how live dealer tables work, compare blackjack, roulette, and baccarat, and see what matters in an HD streaming setup." />
  <meta property="og:title" content="Live Casino Canada | 247iBET Canada" />
  <meta property="og:description" content="Play live casino in Canada at 247iBET. Learn how live dealer tables work, compare blackjack, roulette, and baccarat, and see what matters in an HD streaming setup." />
  <meta name="twitter:title" content="Live Casino Canada | 247iBET Canada" />
  <meta name="twitter:description" content="Play live casino in Canada at 247iBET. Learn how live dealer tables work, compare blackjack, roulette, and baccarat, and see what matters in an HD streaming setup." />
  <link rel="canonical" href="https://247ibet.ca/casino/live-casino" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://247ibet.ca"},{"@type":"ListItem","position":2,"name":"Casino","item":"https://247ibet.ca/casino"},{"@type":"ListItem","position":3,"name":"Live Casino","item":"https://247ibet.ca/casino/live-casino"}]})}</script>
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">

  <div class="relative h-48 md:h-60 rounded-2xl overflow-hidden mb-8">
    <img src={heroImage} alt={pageName} class="object-cover w-full h-full" />
    <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
    <div class="absolute bottom-5 left-6 md:left-8">
      <div class="text-[9px] font-mono font-bold text-prestige-gold tracking-[0.22em] uppercase mb-1.5">
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
    <h1 class="text-[1.875rem] font-bold text-text-primary mb-2">Play Live Casino in Canada</h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">Live casino blends the convenience of online play with real dealers, real tables, and HD studio streams. For Canadian players, the experience comes down to table variety, streaming quality, betting limits, and stable banking in Canadian dollars.</p>
  </header>

  <div class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">Affiliate disclosure: This page may contain affiliate links.</div>

  <section class="navy-card mt-12 rounded-2xl border border-white/10 p-6 md:p-8">
    <div class="mb-4 inline-flex items-center rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-prestige-gold">
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
    <a href="/casino" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Back to Online Casino Canada</a>
    <a href="/interac" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Deposit with Interac</a>
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
          <svg class="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
    </div>
  </div>
</div>
