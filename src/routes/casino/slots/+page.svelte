<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { optimizeSrcSet } from '$lib/image';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'Online Slots';
  const heroImage = '/images/generated/casino-slots-hero.png';

  const intro = {
    eyebrow: 'Online slots Canada',
    title: 'How slot RTP works in practice',
    body: 'RTP, or return to player, is the long-run percentage a slot is designed to pay back over a very large number of spins. A 96% RTP slot does not mean every session returns 96%, but it does give you a useful benchmark when comparing games, volatility, and bonus suitability.',
  };

  const cards = [
    {
      title: 'Classic Slots',
      body: 'Three-reel layouts, straightforward paylines, and lower visual complexity. These are useful when you want simple mechanics and a cleaner bankroll pace.',
    },
    {
      title: 'Video Slots',
      body: 'Five-reel games with bonus rounds, expanding symbols, cascading wins, and themed features. Most modern slot libraries in Canada lean heavily toward this format.',
    },
    {
      title: 'Progressive Slots',
      body: 'Jackpot-linked games that trade steadier base returns for a chance at a larger pooled prize. They are exciting, but usually more volatile than regular slots.',
    },
  ];

  const leftRail = {
    title: 'What to check before you choose a slot',
    items: [
      'Use RTP as a comparison tool, not as a short-session promise. It is a theoretical long-run measure across a very large sample of spins.',
      'Pair volatility with your bankroll. Higher-volatility slots can stay cold for longer stretches before a bigger hit lands.',
      'Check whether a slot counts fully toward any active bonus or wagering requirement, because contribution rates can differ by game family.',
    ],
  };

  const rightRail = {
    title: 'Providers Canadian players usually look for',
    items: [
      "NetEnt and Play'n GO are often associated with polished video slots and strong mobile usability.",
      'Pragmatic Play and Red Tiger are common names in feature-rich bonus slots and daily drop style releases.',
      'Progressive jackpots are best treated as higher-risk entertainment, not as a reliable payout path.',
    ],
  };

  const heroCtaText = 'Play Slots Now';
  const bannerContextLabel = 'Classic reels · Video slots · Progressive jackpots · CAD play';

  const faqTitle = 'Online Slots FAQ';
  const faqItems = [
    {
      question: 'What is a good RTP for online slots in Canada?',
      answer:
        'A useful benchmark is 96% or higher, although RTP should always be weighed alongside volatility, feature set, and bonus contribution. A lower-RTP progressive can still be fun, but it usually brings a swingier session profile.',
    },
    {
      question: 'What is the difference between classic and video slots?',
      answer:
        'Classic slots usually focus on simpler reels, fewer features, and a cleaner pace. Video slots add more reels, bonus mechanics, free spins, and visual effects, which is why they dominate most modern casino lobbies.',
    },
    {
      question: 'Are progressive slots worth playing?',
      answer:
        'They can be entertaining if you specifically want jackpot exposure, but they are usually more volatile than regular slots. Treat them as a high-variance option rather than the default choice for steady play.',
    },
    {
      question: 'Do slot providers matter?',
      answer:
        'Yes. Providers often signal a certain style of gameplay, interface quality, and feature design. Many Canadian players learn which studios fit their pace and then use provider familiarity to narrow the lobby faster.',
    },
  ];
</script>

<svelte:head>
  <title>Online Slots Canada | 247iBET Canada</title>
  <meta
    name="description"
    content="Play online slots in Canada at 247iBET. Learn how RTP works, compare classic, video, and progressive slots, and understand the providers Canadian players usually look for."
  />
  <meta property="og:title" content="Online Slots Canada | 247iBET Canada" />
  <meta
    property="og:description"
    content="Play online slots in Canada at 247iBET. Learn how RTP works, compare classic, video, and progressive slots, and understand the providers Canadian players usually look for."
  />
  <meta name="twitter:title" content="Online Slots Canada | 247iBET Canada" />
  <meta
    name="twitter:description"
    content="Play online slots in Canada at 247iBET. Learn how RTP works, compare classic, video, and progressive slots, and understand the providers Canadian players usually look for."
  />
  <link rel="canonical" href="https://247ibet.ca/casino/slots" />
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
          name: 'Online Slots',
          item: 'https://247ibet.ca/casino/slots',
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
    <h1 class="text-[1.875rem] font-bold text-text-primary mb-2">Play Online Slots in Canada</h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">
      Online slots give Canadian players the widest game variety, from simple three-reel formats to
      feature-heavy video slots and progressive jackpots. At 247iBET, the key is matching RTP,
      volatility, and bankroll pace to the type of play you actually want.
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
