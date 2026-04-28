<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { optimizeSrcSet } from '$lib/image';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'Baccarat Online';
  const path = '/casino/baccarat';
  const heroImage = '/images/generated/casino-baccarat-hero.png';

  const intro = {
    eyebrow: 'Baccarat online Canada',
    title: 'A table game with very few moving parts',
    body: 'In baccarat, you are not making hit-or-stand decisions. You are choosing whether the Banker hand, the Player hand, or neither outcome on a Tie bet will win the round, while the drawing rules are handled automatically by the game.',
  };

  const cards = [
    {
      title: 'Banker Bet',
      body: 'Usually the strongest long-run option, even after commission, because it carries the lowest house edge in standard baccarat.',
    },
    {
      title: 'Player Bet',
      body: 'Simple and popular, with a slightly higher house edge than Banker but no commission deduction on winning Player rounds.',
    },
    {
      title: 'Tie Bet',
      body: 'Offers a bigger payout but carries a much higher house edge. It is better treated as a novelty option than as a core strategy line.',
    },
  ];

  const leftRail = {
    title: 'How the game works',
    items: [
      'Two hands are dealt each round, called Banker and Player. You are betting on the outcome, not controlling either hand directly.',
      'The drawing rules are automatic, which keeps baccarat simple and fast compared with decision-heavy table games.',
      'Live baccarat uses the same core logic as RNG baccarat, but adds a real dealer and a steadier table rhythm.',
    ],
  };

  const rightRail = {
    title: 'Practical baccarat strategy',
    items: [
      'A straightforward approach is to keep most play on Banker or Player and to treat Tie bets as high-variance side action, not as the main plan.',
      'Banker typically sits around a 1.06% house edge, while Player is around 1.24% in standard rulesets.',
      'Because baccarat moves quickly, the real bankroll discipline challenge is pace, not rule complexity.',
    ],
  };

  const heroCtaText = 'Play Baccarat Now';
  const bannerContextLabel = 'Banker or Player · Live baccarat · Fast table pace · CAD bankroll';

  const faqTitle = 'Baccarat FAQ';
  const faqItems = [
    {
      question: 'What is the safest baccarat bet?',
      answer: 'Banker is usually the strongest long-run option because it carries the lowest house edge under standard rules, even after commission is taken on winning Banker bets.',
    },
    {
      question: 'Is Tie a good baccarat bet?',
      answer: 'Tie can be entertaining because of the larger payout, but it usually has a much higher house edge than Banker or Player. Most practical baccarat strategy keeps Tie exposure limited.',
    },
    {
      question: 'Is live baccarat different from online baccarat?',
      answer: 'The core rules are the same. The main difference is format: live baccarat uses a real dealer and studio stream, while RNG baccarat resolves digitally at a faster pace.',
    },
    {
      question: 'Do I need strategy charts for baccarat?',
      answer: 'Not in the same way you do for blackjack. Baccarat strategy is more about bet selection and bankroll control than about memorising decision trees.',
    },
  ];
</script>

<svelte:head>
  <title>Baccarat Online Canada | 247iBET Canada</title>
  <meta name="description" content="Play baccarat online in Canada at 247iBET. Understand Banker, Player, and Tie bets, learn how live baccarat works, and review the practical strategy basics." />
  <meta property="og:title" content="Baccarat Online Canada | 247iBET Canada" />
  <meta property="og:description" content="Play baccarat online in Canada at 247iBET. Understand Banker, Player, and Tie bets, learn how live baccarat works, and review the practical strategy basics." />
  <meta name="twitter:title" content="Baccarat Online Canada | 247iBET Canada" />
  <meta name="twitter:description" content="Play baccarat online in Canada at 247iBET. Understand Banker, Player, and Tie bets, learn how live baccarat works, and review the practical strategy basics." />
  <link rel="canonical" href="https://247ibet.ca/casino/baccarat" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://247ibet.ca"},{"@type":"ListItem","position":2,"name":"Casino","item":"https://247ibet.ca/casino"},{"@type":"ListItem","position":3,"name":"Baccarat Online","item":"https://247ibet.ca/casino/baccarat"}]})}</script>
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">

  <div class="relative h-48 md:h-60 rounded-2xl overflow-hidden mb-8">
    <img
      src={heroImage}
      srcset={optimizeSrcSet(heroImage, [640, 960, 1280, 1672], 82)}
      sizes="(min-width: 768px) 960px, 100vw"
      alt={pageName}
      class="object-cover w-full h-full"
    />
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
    <h1 class="text-[1.875rem] font-bold text-text-primary mb-2">Play Baccarat Online in Canada</h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">Baccarat is built for players who want a simple betting structure and quick rounds. Once you understand Banker, Player, and Tie, the main job is choosing the lower-edge option and avoiding the temptation to overcomplicate a game that is strongest when kept simple.</p>
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
