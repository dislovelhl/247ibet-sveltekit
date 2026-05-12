<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    AlertTriangle,
    ArrowRight,
    Clock3,
    ExternalLink,
    HelpCircle,
    LockKeyhole,
    ShieldCheck,
    Users,
    WalletCards,
  } from 'lucide-svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';

  type Answer = 'yes' | 'no' | null;

  const assessmentQuestions = [
    'Have you ever gambled more than you planned to in a single session?',
    'Have you felt the need to gamble with increasing amounts to get the same excitement?',
    'Have you tried to cut back on gambling but found it difficult?',
    'Has gambling ever caused you to neglect work, family or other responsibilities?',
    'Have you borrowed money or sold possessions to fund gambling?',
    'After losing, have you returned another day to try and win back losses?',
  ];

  const trustItems = [
    { title: 'Player First', body: 'Your safety comes first', icon: ShieldCheck },
    { title: 'Confidential', body: '100% private and secure', icon: LockKeyhole },
    { title: '24/7 Support', body: 'Help is always available', icon: Clock3 },
  ];

  const riskItems = [
    'Betting beyond your means or financial comfort',
    'Chasing losses or trying to win back losses',
    'Neglecting work, studies or personal commitments',
    'Feeling anxious, irritable or restless when not playing',
    'Hiding your activity or lying about your play',
    'Using gambling to cope with stress or emotions',
  ];

  // Provincial regulators, self-exclusion registries, and clinical helplines.
  // Order: 24/7 helplines first, then provincial self-exclusion registries, then peer support.
  const supportLinks = [
    {
      name: 'ConnexOntario',
      meta: '24/7 · 1-866-531-2600 · connexontario.ca',
      href: 'https://www.connexontario.ca/',
    },
    {
      name: 'Alberta Health Services — Addiction & Mental Health',
      meta: '24/7 · 1-866-332-2322 · albertahealthservices.ca',
      href: 'https://www.albertahealthservices.ca/',
    },
    {
      name: 'iGaming Ontario — Self-Exclusion',
      meta: 'Ontario provincial self-exclusion registry · igamingontario.ca',
      href: 'https://igamingontario.ca/en/self-exclusion',
    },
    {
      name: 'AGLC — Voluntary Self-Exclusion Program',
      meta: 'Alberta self-exclusion registry · aglc.ca',
      href: 'https://aglc.ca/gambling/help-problem-gambling/voluntary-self-exclusion-vse-program',
    },
    {
      name: 'AGLC — Help with Problem Gambling',
      meta: 'Alberta provincial RG resources · aglc.ca',
      href: 'https://aglc.ca/gambling/help-problem-gambling',
    },
    {
      name: 'Gamblers Anonymous Canada',
      meta: 'Peer-support fellowship meetings · gamblersanonymous.org',
      href: 'https://www.gamblersanonymous.org/',
    },
  ];

  const controlTools = [
    {
      title: 'Deposit Limits',
      body: 'Set daily, weekly or monthly limits that suit your budget.',
      cta: 'Set Limit',
      icon: WalletCards,
    },
    {
      title: 'Cooling-Off Periods',
      body: 'Take a break from betting. Choose a custom time-out.',
      cta: 'Take a Break',
      icon: Clock3,
    },
    {
      title: 'Self-Exclusion',
      body: 'Lock your account for 6 months, 1 year or permanently.',
      cta: 'Get Started',
      icon: LockKeyhole,
    },
    {
      title: 'Session Limits',
      body: 'Set reminders or automatic session time-outs.',
      cta: 'Manage Time',
      icon: HelpCircle,
    },
  ];

  const tableRows = [
    {
      tool: 'Deposit Limits',
      best: 'Managing budgets and bankroll',
      step: 'Set a daily or weekly deposit limit',
    },
    {
      tool: 'Cooling-Off',
      best: 'Short breaks from play',
      step: 'Pause your account for 24 hrs, 7 days, or 30 days',
    },
    {
      tool: 'Self-Exclusion',
      best: 'Extended break or permanent exclusion',
      step: 'Choose 6 months, 1 year, or permanent',
    },
    {
      tool: 'Session Limits',
      best: 'Managing time spent playing',
      step: 'Set session reminders or auto-logout',
    },
    {
      tool: 'Reality Check',
      best: 'Staying aware while you play',
      step: 'Receive time and activity reminders',
    },
  ];

  let answers: Record<number, Answer> = $state({});
  let submitted = $state(false);

  const yesCount = $derived(Object.values(answers).filter((answer) => answer === 'yes').length);
  const answeredCount = $derived(Object.keys(answers).length);
  const allAnswered = $derived(answeredCount === assessmentQuestions.length);

  const result = $derived(
    yesCount === 0
      ? {
          label: 'Low Risk',
          className: 'border-success/35 bg-success/10 text-success',
          body: 'Your answers suggest you are staying within safer play patterns. Keep using limits and check in regularly.',
        }
      : yesCount <= 2
        ? {
            label: 'Watch Closely',
            className: 'border-prestige-gold/45 bg-prestige-gold/10 text-prestige-gold',
            body: 'Some answers suggest patterns worth monitoring. Consider deposit limits, session reminders, or a cooling-off period.',
          }
        : {
            label: 'Get Support',
            className: 'border-error/40 bg-error/10 text-error',
            body: 'Your answers suggest gambling may be affecting your wellbeing. Confidential support is available now.',
          },
  );

  const responsibleGamblingSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Responsible Gambling Canada',
      headline: 'Safe Play Protocols',
      description:
        'Use 247iBET safe play protocols, self-assessment, deposit limits, cooling-off tools, self-exclusion resources, and Canadian support contacts.',
      url: 'https://247ibet.ca/responsible-gambling',
      author: {
        '@type': 'Organization',
        name: '247iBET Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Responsible Gambling',
          item: 'https://247ibet.ca/responsible-gambling',
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Safe Play Protocols | Responsible Gambling Canada | 247iBET</title>
  <meta
    name="description"
    content="Use 247iBET safe play protocols, self-assessment, deposit limits, cooling-off tools, self-exclusion resources, and Canadian support contacts."
  />
  <meta property="og:title" content="Safe Play Protocols | Responsible Gambling Canada | 247iBET" />
  <meta
    property="og:description"
    content="Use 247iBET safe play protocols, self-assessment, deposit limits, cooling-off tools, self-exclusion resources, and Canadian support contacts."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://247ibet.ca/responsible-gambling" />
  <link rel="canonical" href={canonicalUrl('/responsible-gambling')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Safe Play Protocols | Responsible Gambling Canada | 247iBET',
      description:
        'Use 247iBET safe play protocols, self-assessment, deposit limits, cooling-off tools, self-exclusion resources, and Canadian support contacts.',
      url: canonicalUrl('/responsible-gambling'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd schema={responsibleGamblingSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black text-white" role="presentation">
  <main class="mx-auto max-w-[1720px] px-4 pb-20 sm:px-6 lg:px-10 xl:px-16 pt-24 lg:pt-40">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">Responsible Gambling</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-12 min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl">
      <BackgroundAtmosphere 
        src="/images/generated/safe-play-shield-hero.webp" 
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>
      
      <div 
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 md:max-w-2xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex items-center gap-2">
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-prestige-gold">
              Safe Play Framework
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Safe Play <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Protocols</span>
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          At 247iBET, your well-being is our priority. Our player protection framework is built on evidence-based standards and proactive monitoring.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a href="#assessment" class="hero-cta-primary min-w-[200px] shimmer-effect btn-magnetic">
            Self-Assessment
          </a>
          <a href="#tools" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">
            Player Tools
          </a>
        </div>
      </div>
    </header>

    <div class="material-group mt-9 mb-12 grid max-w-[1720px] gap-3 p-3 sm:grid-cols-3">
      {#each trustItems as item}
        {@const Icon = item.icon}
        <div class="material-cell flex gap-3 rounded-2xl p-4">
          <Icon class="h-6 w-6 shrink-0 text-prestige-gold" aria-hidden="true" />
          <div>
            <p class="text-sm font-black">{item.title}</p>
            <p class="mt-1 text-sm leading-6 text-text-body">{item.body}</p>
          </div>
        </div>
      {/each}
    </div>

    <section class="mt-7 grid gap-6 lg:grid-cols-2">
      <article class="material-panel p-7 md:p-8">
        <div class="mb-5 flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-lg bg-prestige-gold/15 text-prestige-gold"
          >
            <AlertTriangle class="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 class="text-3xl font-black uppercase">Recognizing Risk</h2>
        </div>
        <p class="max-w-2xl text-sm leading-6 text-text-body">
          Understanding the signs is the first step to maintaining a healthy relationship with
          gaming.
        </p>
        <ul class="mt-7 space-y-3">
          {#each riskItems as item}
            <li class="flex gap-3 text-sm text-text-body">
              <ShieldCheck class="mt-0.5 h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
              {item}
            </li>
          {/each}
        </ul>
      </article>

      <article class="material-panel p-7 md:p-8">
        <div class="mb-5 flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-lg bg-prestige-gold/15 text-prestige-gold"
          >
            <Users class="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 class="text-3xl font-black uppercase">Active Support Matrix</h2>
        </div>
        <p class="max-w-2xl text-sm leading-6 text-text-body">
          We work with trusted organizations to provide professional assistance for players in
          Canada.
        </p>
        <div class="mt-7 space-y-4">
          {#each supportLinks as link}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="material-cell flex items-center justify-between gap-4 rounded-2xl p-5 transition-colors hover:border-prestige-gold/35"
            >
              <div>
                <p class="font-black text-white">{link.name}</p>
                <p class="mt-1 text-sm text-text-body">{link.meta}</p>
              </div>
              <ExternalLink class="h-5 w-5 shrink-0 text-text-body" aria-hidden="true" />
            </a>
          {/each}
        </div>
        <p class="mt-5 text-sm text-text-body">
          In immediate crisis? Call 911 or your local emergency services.
        </p>
      </article>
    </section>

    <section id="assessment" class="material-panel mt-12 p-6 md:p-8">
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-black uppercase">Quick Self-Assessment</h2>
          <p class="mt-3 max-w-4xl text-sm leading-6 text-text-body">
            Answer honestly. Results are private and for your insight only. Based on the PGSI
            framework.
          </p>
        </div>
        <span
          class="inline-flex w-fit rounded-full border border-prestige-gold/35 bg-prestige-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold"
        >
          Confidential · takes 60 seconds
        </span>
      </div>

      {#if !submitted}
        <div class="material-group mt-7 divide-y divide-white/8">
          {#each assessmentQuestions as question, index}
             <div class="grid gap-4 p-4 soft-separator md:grid-cols-[1fr_auto] md:items-center">
              <div class="flex gap-3">
                <HelpCircle class="mt-0.5 h-5 w-5 shrink-0 text-prestige-gold" aria-hidden="true" />
                <p class="text-sm font-semibold text-text-body">{question}</p>
              </div>
              <div class="segmented-chrome grid grid-cols-2 gap-2 rounded-xl p-1">
                <button
                  type="button"
                  aria-pressed={answers[index] === 'yes'}
                  onclick={() => (answers = { ...answers, [index]: 'yes' })}
                  class="min-w-20 rounded-lg border px-5 py-2 text-sm font-black transition-colors {answers[
                    index
                  ] === 'yes'
                    ? 'border-prestige-gold bg-prestige-gold text-navy-black'
                    : 'border-white/12 bg-white/5 text-white hover:border-prestige-gold/40'}"
                >
                  Yes
                </button>
                <button
                  type="button"
                  aria-pressed={answers[index] === 'no'}
                  onclick={() => (answers = { ...answers, [index]: 'no' })}
                  class="min-w-20 rounded-lg border px-5 py-2 text-sm font-black transition-colors {answers[
                    index
                  ] === 'no'
                    ? 'border-white bg-white text-navy-black'
                    : 'border-white/12 bg-white/5 text-white hover:border-white/30'}"
                >
                  No
                </button>
              </div>
            </div>
          {/each}
        </div>

        <div class="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p class="text-sm text-text-body">
            {answeredCount} of {assessmentQuestions.length} answered. If you answer “Yes” to any question,
            consider using our tools or speaking with a support professional.
          </p>
          <button
            type="button"
            disabled={!allAnswered}
            onclick={() => (submitted = true)}
            class="hero-cta-primary disabled:cursor-not-allowed disabled:opacity-45"
          >
            View My Results
          </button>
        </div>
      {:else}
        <div class="mt-7 rounded-xl border p-6 {result.className}">
          <h3 class="text-2xl font-black uppercase">{result.label}</h3>
          <p class="mt-3 max-w-3xl text-sm leading-6 text-white/80">{result.body}</p>
          <button
            type="button"
            onclick={() => {
              answers = {};
              submitted = false;
            }}
            class="mt-5 rounded-lg border border-white/20 px-5 py-2 text-sm font-black text-white transition-colors hover:bg-white/10"
          >
            Retake Assessment
          </button>
        </div>
      {/if}
    </section>

    <section id="tools" class="material-panel mt-12 p-6 md:p-8">
      <h2 class="text-3xl font-black uppercase">Platform Control Infrastructure</h2>
      <p class="mt-2 text-sm text-text-body">
        Powerful tools to help you manage your play, your way.
      </p>
      <div class="mt-7 grid gap-4 md:grid-cols-4">
        {#each controlTools as tool}
          {@const Icon = tool.icon}
          <article class="material-cell rounded-2xl p-5">
            <Icon class="h-8 w-8 text-prestige-gold" aria-hidden="true" />
            <h3 class="mt-5 text-xl font-black">{tool.title}</h3>
            <p class="mt-3 min-h-[72px] text-sm leading-6 text-text-body">{tool.body}</p>
            <a
              href="/contact"
              class="mt-4 inline-flex items-center gap-2 text-sm font-black text-prestige-gold"
            >
              {tool.cta}
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        {/each}
      </div>
    </section>

    <section class="material-panel mt-12 overflow-hidden p-6 md:p-8">
      <h2 class="text-3xl font-black uppercase">Safety Tools at a Glance</h2>
      <p class="mt-2 text-sm text-text-body">
        Use these tools anytime from your Responsible Gaming dashboard.
      </p>
      <div class="material-group mt-6 overflow-x-auto">
        <table class="w-full min-w-[760px] text-left text-sm">
          <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
            <tr>
              <th class="px-5 py-4">Tool</th>
              <th class="px-5 py-4">Best For</th>
              <th class="px-5 py-4">Typical First Step</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/8">
            {#each tableRows as row}
              <tr class="soft-separator">
                <td class="px-5 py-4 font-black text-white">{row.tool}</td>
                <td class="px-5 py-4 text-text-body">{row.best}</td>
                <td class="px-5 py-4 text-text-body">{row.step}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12 grid gap-4 md:grid-cols-[1fr_auto]">
      <div class="material-panel p-6">
        <div class="flex gap-4">
          <HelpCircle class="h-9 w-9 shrink-0 text-prestige-gold" aria-hidden="true" />
          <div>
            <h2 class="text-xl font-black">Need help now?</h2>
            <p class="mt-2 text-sm text-text-body">
              You&apos;re not alone. Our support partners are here 24/7.
            </p>
          </div>
        </div>
      </div>
      <a href="/contact" class="hero-cta-primary justify-center self-stretch md:min-w-72"
        >Get Support Now</a
      >
    </section>

    <section
      class="material-panel mt-12 overflow-hidden p-8 shadow-2xl md:p-10"
    >
      <div class="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-4xl font-black">Play smart. Stay in control.</h2>
          <p class="mt-3 text-base text-text-body">
            Tools, support, and guidance right when you need it.
          </p>
        </div>
        <a href="/responsible-gambling#tools" class="hero-cta-primary justify-center">
          Explore Responsible Gaming Tools
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  </main>
</div>
