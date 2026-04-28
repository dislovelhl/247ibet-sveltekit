<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'Mobile Casino';

  const intro = {
    eyebrow: 'Mobile casino Canada',
    title: 'What matters more than having a downloadable app',
    body: 'For most Canadian players, the best mobile casino experience is the one that opens quickly in the browser, remembers your session cleanly, keeps the cashier usable on a touch screen, and performs well on both iPhone and Android devices.',
  };

  const cards = [
    {
      title: 'Browser-first Access',
      body: 'Modern mobile casino play often starts in Safari or Chrome, where there is no app store delay and the full lobby can open immediately.',
    },
    {
      title: 'PWA-style Convenience',
      body: 'A strong mobile setup can behave like an app by saving to the home screen, staying fast, and keeping login and navigation friction low.',
    },
    {
      title: 'Touch-optimised Games',
      body: 'Slots, card tables, cashier actions, and live dealer interfaces should all remain readable and easy to tap without accidental misclicks.',
    },
  ];

  const leftRail = {
    title: 'What to expect from a good mobile experience',
    items: [
      'Clear navigation matters more than flashy visuals because most mobile sessions are shorter and more interrupted than desktop play.',
      'A usable mobile cashier should keep deposit, withdrawal, and verification steps readable without forcing endless zooming or scrolling.',
      'Home-screen shortcuts and PWA-style behaviour can make a browser experience feel close to a dedicated casino app.',
    ],
  };

  const rightRail = {
    title: 'Devices and game types that fit best',
    items: [
      'Recent iPhone, iPad, and Android devices usually handle slots, account tools, and cashier flows comfortably when the site is properly responsive.',
      'Touch-first slots often translate best to mobile, while live dealer games depend more heavily on stream stability and screen size.',
      'If you plan to play live casino on mobile, connection quality matters as much as device quality because video stability shapes the entire session.',
    ],
  };

  const heroCtaText = 'Play Mobile Casino';
  const bannerContextLabel = 'iPhone and Android · PWA-style access · Touch-first casino play';

  const faqTitle = 'Mobile Casino FAQ';
  const faqItems = [
    {
      question: 'Do I need to download an app to play mobile casino in Canada?',
      answer: 'Not always. Many strong mobile casino experiences work directly in the browser and can still feel app-like when the navigation, speed, and home-screen behaviour are handled well.',
    },
    {
      question: 'What devices are best for mobile casino play?',
      answer: 'Recent iPhone and Android devices usually provide the smoothest experience, with tablets offering more space for live tables and multitasking. Device quality matters most when you want long sessions or live streaming.',
    },
    {
      question: 'Which casino games work best on mobile?',
      answer: 'Slots usually translate best because they are designed around quick taps and simple screen layouts. Live dealer tables can also work well, but they need a more stable connection and benefit from a larger display.',
    },
    {
      question: 'What does PWA mean for a mobile casino?',
      answer: 'PWA refers to a progressive web app style experience. In practice, it means a browser-based site that can feel closer to a native app through speed, home-screen access, and cleaner mobile behaviour.',
    },
  ];
</script>

<svelte:head>
  <title>Mobile Casino Canada | 247iBET Canada</title>
  <meta name="description" content="Play mobile casino in Canada at 247iBET. Learn how mobile web and PWA-style access work, which devices are best supported, and which games feel strongest on touch screens." />
  <meta property="og:title" content="Mobile Casino Canada | 247iBET Canada" />
  <meta property="og:description" content="Play mobile casino in Canada at 247iBET. Learn how mobile web and PWA-style access work, which devices are best supported, and which games feel strongest on touch screens." />
  <meta name="twitter:title" content="Mobile Casino Canada | 247iBET Canada" />
  <meta name="twitter:description" content="Play mobile casino in Canada at 247iBET. Learn how mobile web and PWA-style access work, which devices are best supported, and which games feel strongest on touch screens." />
  <link rel="canonical" href="https://247ibet.ca/casino/mobile" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://247ibet.ca"},{"@type":"ListItem","position":2,"name":"Casino","item":"https://247ibet.ca/casino"},{"@type":"ListItem","position":3,"name":"Mobile Casino","item":"https://247ibet.ca/casino/mobile"}]})}</script>
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">

  <div class="rounded-2xl overflow-hidden mb-8 bg-navy-card border border-white/10 px-6 py-5">
    <div class="text-[9px] font-mono font-bold text-prestige-gold tracking-[0.22em] uppercase mb-1.5">
      {intro.eyebrow}
    </div>
    <p class="text-xl md:text-2xl font-bold text-white">{pageName}</p>
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
    <h1 class="text-[1.875rem] font-bold text-text-primary mb-2">Play Mobile Casino in Canada</h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">Mobile casino in Canada is no longer just a scaled-down desktop lobby. The real benchmark is whether the site feels native on modern phones, keeps payments simple, and lets you move between slots, live tables, and account tools without friction.</p>
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
