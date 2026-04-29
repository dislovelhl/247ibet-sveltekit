<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  const warningSignsBehavioural = [
    'Spending more money or time gambling than intended',
    'Chasing losses — betting more after a loss to "win it back"',
    'Lying to family or friends about gambling activity or losses',
    'Borrowing money, selling possessions, or using credit to fund gambling',
    'Missing work, school, or family commitments because of gambling',
    'Gambling to escape stress, anxiety, depression, or other problems',
    'Becoming irritable, restless, or anxious when trying to reduce or stop gambling',
    'Repeated unsuccessful attempts to cut down or stop gambling',
  ];

  const warningSignsFinancial = [
    'Unexplained bills or financial shortfalls',
    'Maxing out credit cards or taking out loans without explanation',
    'Withdrawing savings or retirement funds for gambling',
    'Selling personal items to fund gambling sessions',
    'Asking for money from friends or family repeatedly',
  ];

  const resources = [
    {
      name: 'Gambling Support Line (Canada)',
      contact: '1-800-522-4700',
      desc: '24/7 confidential support — call or text anytime. Free, professional, and anonymous.',
      href: 'https://www.connexontario.ca',
      type: 'Hotline',
    },
    {
      name: 'GameSense (Ontario)',
      contact: 'gamesense.iGO.ca',
      desc: "iGaming Ontario's responsible gambling programme — self-assessment tools, spending limits, time limits, and counsellor referrals.",
      href: 'https://gamesense.igo.ca',
      type: 'Self-Help',
    },
    {
      name: 'ConnexOntario',
      contact: '1-866-531-2600',
      desc: 'Mental health and addiction services referral service for Ontario. 24/7.',
      href: 'https://www.connexontario.ca',
      type: 'Referral',
    },
    {
      name: 'Gamblers Anonymous Canada',
      contact: 'gamblersanonymous.org',
      desc: '12-step peer support programme — local chapter meetings and online meetings available across Canada.',
      href: 'https://www.gamblersanonymous.org',
      type: 'Peer Support',
    },
    {
      name: 'CAMH (Ontario)',
      contact: 'camh.ca',
      desc: 'Centre for Addiction and Mental Health — clinical treatment programmes for gambling disorder in Ontario.',
      href: 'https://www.camh.ca',
      type: 'Clinical',
    },
    {
      name: 'British Columbia Problem Gambling Helpline',
      contact: '1-888-795-6111',
      desc: 'BC-specific support — free counselling referrals. Operated by BCLC.',
      href: 'https://www.bcresponsiblegambling.ca',
      type: 'Hotline',
    },
  ];

  const tools = [
    {
      name: 'Deposit Limits',
      desc: 'Set daily, weekly, or monthly maximum deposit amounts. Takes effect immediately; increases require a waiting period.',
    },
    {
      name: 'Time / Session Limits',
      desc: 'Receive automatic alerts or session cut-offs after a set play duration.',
    },
    {
      name: 'Reality Checks',
      desc: 'Periodic pop-up reminders showing session length and net wins/losses.',
    },
    {
      name: 'Cooling-Off Period',
      desc: 'Temporarily suspend your account for 24 hours, 7 days, or 30 days.',
    },
    {
      name: 'Self-Exclusion',
      desc: "Permanently or indefinitely close your account. All AGCO-licensed operators integrate with iGaming Ontario's province-wide exclusion register.",
    },
    {
      name: 'GameSense Advisor',
      desc: "Access to trained responsible gambling advisors through iGaming Ontario's GameSense programme.",
    },
  ];

  const faqItems = [
    {
      question: 'What should I do if I notice several warning signs?',
      answer:
        'Pause play immediately, remove access to your gambling funds, and contact a Canadian support line or counselling service. If the behaviour feels hard to control, use a cooling-off period or self-exclusion before you return to gambling.',
    },
    {
      question: 'Is chasing losses always a red flag?',
      answer:
        'Yes. Chasing losses is one of the clearest warning signs because it often leads to larger bets, faster losses, and more stress. If you catch yourself trying to win money back, stop the session and step away.',
    },
    {
      question: 'Does self-exclusion help if I need a hard stop?',
      answer:
        'Yes. Self-exclusion is the strongest limit because it blocks access for a set period or indefinitely, depending on the province and operator. It is useful when time-outs or deposit limits are not enough on their own.',
    },
    {
      question: 'Where should Ontario players start first?',
      answer:
        'Ontario players should start with GameSense and ConnexOntario because both provide immediate support, self-assessment, and referral options. Those resources are designed for quick triage before a situation gets worse.',
    },
  ];
</script>

<svelte:head>
  <title>Signs of Problem Gambling — Help &amp; Resources | 247iBET</title>
  <meta
    name="description"
    content="Recognise the signs of problem gambling, understand gambling disorder, and access Canadian help resources including the Problem Gambling Helpline, GameSense, and self-exclusion tools."
  />
  <meta property="og:title" content="Signs of Problem Gambling — Help &amp; Resources | 247iBET" />
  <meta
    property="og:description"
    content="Recognise the signs of problem gambling and access Canadian help resources including the Problem Gambling Helpline, GameSense, and self-exclusion tools."
  />
  <meta name="twitter:title" content="Signs of Problem Gambling — Help &amp; Resources | 247iBET" />
  <meta
    name="twitter:description"
    content="Recognise the signs of problem gambling and access Canadian help resources."
  />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href={canonicalUrl('/guides/problem-gambling-signs')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Signs of Problem Gambling',
      description:
        'Warning signs of problem gambling, how to self-assess, and where Canadian players can get help.',
      url: 'https://247ibet.ca/guides/problem-gambling-signs',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
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

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-3xl space-y-14">
  <header class="space-y-4">
    <div
      class="flex items-center gap-2 text-xs font-medium text-[#EF4444] uppercase tracking-widest"
    >
      Responsible Gambling · Help Resources
    </div>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">Signs of Problem Gambling</h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
      Gambling is entertainment. But for some people, it becomes a problem. Here are the warning
      signs, and the Canadian resources that can help — free and confidential.
    </p>

    <div class="navy-card rounded-lg p-5 border border-[#4A9EBF]/20 space-y-3">
      <h2 class="text-sm font-semibold uppercase tracking-widest text-[#4A9EBF]">Quick answer</h2>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        If the signs are recurring, or you are gambling to recover losses, stop the session, set a
        cooling-off period, and contact a support service now. The fastest first steps are usually a
        limit change, a self-exclusion request, and a call to a Canadian helpline.
      </p>
    </div>

    <div class="navy-card rounded-lg p-4 border border-[#EF4444]/30">
      <div class="flex items-start gap-3">
        <div>
          <p class="font-semibold text-[#F1F5F9] text-sm">Need help now?</p>
          <p class="text-xs text-[#94A3B8]">
            <a href="tel:18005224700" class="text-[#EF4444] font-bold">1-800-522-4700</a> — Canada's 24/7
            gambling helpline. Free, confidential, anonymous.
          </p>
        </div>
      </div>
    </div>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <section aria-labelledby="signs-b-heading">
    <h2 id="signs-b-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Behavioural Warning Signs
    </h2>
    <div class="navy-card rounded-lg p-5 space-y-2">
      {#each warningSignsBehavioural as sign}
        <div class="flex items-start gap-3 text-sm text-[#94A3B8]">
          <span class="text-[#F59E0B] shrink-0 mt-0.5">⚠</span>
          {sign}
        </div>
      {/each}
    </div>
    <p class="text-xs text-[#8492A6] mt-3">
      Source: Canadian Centre on Substance Use and Addiction (CCSA) / AGCO responsible gambling
      framework.
    </p>
  </section>

  <section aria-labelledby="signs-f-heading">
    <h2 id="signs-f-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Financial Warning Signs
    </h2>
    <div class="navy-card rounded-lg p-5 space-y-2">
      {#each warningSignsFinancial as sign}
        <div class="flex items-start gap-3 text-sm text-[#94A3B8]">
          <span class="text-[#EF4444] shrink-0 mt-0.5">⚠</span>
          {sign}
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="assess-heading">
    <h2 id="assess-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">How to Self-Assess</h2>
    <div class="navy-card rounded-lg p-5 space-y-3">
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        The <strong class="text-[#F1F5F9]">Problem Gambling Severity Index (PGSI)</strong> is a validated
        9-question tool used globally to assess gambling-related harm. A score of 1–2 indicates some risk;
        3–7 indicates moderate risk; 8+ indicates high risk.
      </p>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        GameSense (iGaming Ontario's responsible gambling programme) provides a free online
        self-assessment tool available to all Ontario registered players.
      </p>
      <a
        href="https://gamesense.igo.ca"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="inline-flex items-center gap-2 text-sm font-semibold text-[#4A9EBF] hover:text-[#8dd4ff] transition-colors"
      >
        Take the GameSense self-assessment →
      </a>
    </div>
  </section>

  <section aria-labelledby="resources-heading">
    <h2 id="resources-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Canadian Help Resources
    </h2>
    <div class="space-y-3">
      {#each resources as r}
        <a
          href={r.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="navy-card rounded-lg p-4 flex items-start gap-4 hover:border-white/16 transition-all block"
        >
          <div class="shrink-0">
            <span
              class="text-[10px] font-semibold text-[#8492A6] bg-[#142038] px-2 py-0.5 rounded uppercase tracking-wide"
              >{r.type}</span
            >
          </div>
          <div class="flex-1">
            <div class="font-semibold text-[#F1F5F9] text-sm mb-0.5">{r.name}</div>
            <div class="font-mono text-[#D4943A] text-xs mb-1">{r.contact}</div>
            <p class="text-xs text-[#94A3B8] leading-relaxed">{r.desc}</p>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <section aria-labelledby="tools-heading">
    <h2 id="tools-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Responsible Gambling Tools at 247iBET
    </h2>
    <p class="text-sm text-[#94A3B8] mb-4 leading-relaxed">
      AGCO regulations require all licensed Ontario operators to provide the following tools:
    </p>
    <div class="space-y-3">
      {#each tools as t}
        <div class="navy-card rounded-lg p-4 flex items-start gap-3">
          <span class="text-[#22C55E] shrink-0 mt-0.5">✓</span>
          <div>
            <span class="font-semibold text-[#F1F5F9] text-sm">{t.name}: </span>
            <span class="text-xs text-[#94A3B8]">{t.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="faq-heading" class="space-y-3">
    <h2 id="faq-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Problem Gambling Signs FAQ
    </h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4">
        <summary
          class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9] cursor-pointer"
        >
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            ><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" /></svg
          >
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <nav aria-label="Related pages" class="border-t border-white/8 pt-6">
    <p class="text-xs text-[#8492A6] mb-3 uppercase tracking-widest font-medium">Related</p>
    <div class="flex flex-wrap gap-3">
      <a
        href="/responsible-gambling"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Responsible Gambling Canada</a
      >
      <a
        href="/gambling-age-canada"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Gambling Age Canada Guide</a
      >
      <a
        href="/legal-online-gambling-canada"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Legal Online Gambling Canada</a
      >
    </div>
  </nav>
</div>
