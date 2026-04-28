<script lang="ts">
  type Answer = 'yes' | 'no' | null;

  const ASSESSMENT_QUESTIONS = [
    { id: 'q1', text: 'Have you ever gambled more than you planned to in a single session?' },
    { id: 'q2', text: 'Have you felt the need to gamble with increasing amounts to get the same excitement?' },
    { id: 'q3', text: 'Have you tried to cut back on gambling but found it difficult?' },
    { id: 'q4', text: 'Has gambling ever caused you to neglect work, family, or other responsibilities?' },
    { id: 'q5', text: 'Have you borrowed money or sold possessions to fund gambling?' },
    { id: 'q6', text: 'After losing, have you returned another day to try and win back losses?' },
  ];

  const warningSignItems = [
    "Exceeding pre-set time or financial boundaries.",
    "Viewing gaming as a primary source of income.",
    "Neglecting social or professional commitments.",
    "Chasing losses with higher stakes.",
  ];

  const platformTools = [
    { title: "Time limits", desc: "Automated session reminders to track time spent playing." },
    { title: "Financial Caps", desc: "Hard deposit and loss limits monitored by the platform." },
    { title: "Cool-off Periods", desc: "Short-term temporary suspension of account access." },
    { title: "Self-Exclusion", desc: "Formal provincial enrollment to block all regulated sites." },
  ];

  let answers: Record<string, Answer> = $state({});
  let submitted = $state(false);

  const answered = $derived(Object.keys(answers).length);
  const yesCount = $derived(Object.values(answers).filter(a => a === 'yes').length);
  const allAnswered = $derived(answered === ASSESSMENT_QUESTIONS.length);

  const result = $derived(
    yesCount === 0
      ? { label: 'Low Risk', colorClass: 'text-success', borderClass: 'border-success/30', bgClass: 'bg-success/10', message: 'Your answers suggest you are playing responsibly. Keep setting limits and sticking to them.' }
      : yesCount <= 2
      ? { label: 'Moderate Risk', colorClass: 'text-warning', borderClass: 'border-warning/30', bgClass: 'bg-warning/10', message: 'Some patterns worth watching. Consider setting deposit or session time limits in your account settings.' }
      : { label: 'Seek Support', colorClass: 'text-error', borderClass: 'border-error/30', bgClass: 'bg-error/10', message: 'Your answers indicate gambling may be impacting your wellbeing. Confidential help is available — call ConnexOntario at 1-866-531-2600 or Alberta Wellness at 1-866-332-2322.' }
  );

  function handleAnswer(id: string, value: Answer) {
    answers = { ...answers, [id]: value };
  }

  function handleReset() {
    answers = {};
    submitted = false;
  }
</script>

<svelte:head>
  <title>Responsible Gambling Canada: Support &amp; Resources | 247iBET</title>
  <meta name="description" content="Gamble safely with mandatory provincial tools, self-exclusion programs, deposit limits, and support directories for confidential help across Canada." />
  <meta property="og:title" content="Responsible Gambling Canada: Support &amp; Resources | 247iBET" />
  <meta property="og:description" content="Gamble safely with mandatory provincial tools, self-exclusion programs, deposit limits, and support directories for confidential help across Canada." />
  <meta name="twitter:title" content="Responsible Gambling Canada: Support &amp; Resources | 247iBET" />
  <meta name="twitter:description" content="Gamble safely with mandatory provincial tools, self-exclusion programs, deposit limits, and support directories for confidential help across Canada." />
  <link rel="canonical" href="https://247ibet.ca/responsible-gambling" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Responsible Gambling Canada","description":"Educational resource for warning signs, safety controls, and support directories for Canadian players.","mainEntityOfPage":"https://247ibet.ca/responsible-gambling"})}</script>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 max-w-6xl">

  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Responsible Gaming</li>
    </ol>
  </nav>

  <div class="mb-12">
    <div class="inline-flex items-center gap-2 text-prestige-gold text-xs font-bold tracking-widest uppercase mb-4">
      <span class="w-8 h-[1px] bg-prestige-gold/40"></span> INSTITUTIONAL SAFEGUARDS
    </div>
    <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tighter uppercase italic">
      Safe Play <br />
      <span class="text-prestige-gold">Protocols</span>
    </h1>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <p class="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
        At <strong>247iBET</strong>, player protection is the core of our <strong>Scoring Model v6</strong>. We prioritize evidence-based safety standards and verified support networks in Alberta and Ontario.
      </p>
      <div class="flex items-center gap-3 px-4 py-3 rounded-lg bg-navy-black/40 border border-white/10 relative overflow-hidden">
        <svg class="w-5 h-5 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <div>
          <div class="text-xs font-bold text-white uppercase tracking-wider">RG AUDITED 2024</div>
          <div class="text-[10px] text-prestige-gold font-mono uppercase font-bold tracking-widest italic">Protocol: iGAMING ONTARIO // AGLC</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div class="navy-card p-8 relative overflow-hidden group hover:border-prestige-gold/20 transition-all">
      <div class="absolute top-0 right-0 p-4">
        <div class="px-3 py-1 rounded-full bg-prestige-gold/10 border border-prestige-gold/20 text-[10px] font-mono text-prestige-gold font-bold uppercase tracking-widest">Clinical Benchmarks</div>
      </div>
      <div class="w-12 h-12 rounded-xl bg-prestige-gold/10 flex items-center justify-center mb-6">
        <svg class="w-6 h-6 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      </div>
      <h2 class="text-2xl font-bold mb-3 text-white uppercase tracking-tight">Recognizing Risk</h2>
      <p class="text-sm text-gray-400 font-sans mb-6 leading-relaxed italic">Monitoring behavioral metrics is the first step in maintaining a healthy relationship with gaming. Identify these common warning signs based on Responsible Gambling Council (RGC) guidelines.</p>
      <ul class="space-y-3">
        {#each warningSignItems as item}
          <li class="flex items-start gap-2 text-sm text-gray-400">
            <svg class="w-4 h-4 text-prestige-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navy-card p-8 relative overflow-hidden group hover:border-prestige-gold/20 transition-all">
      <div class="absolute top-0 right-0 p-4 flex items-center gap-2">
        <span class="text-[10px] font-mono text-prestige-gold uppercase tracking-wider font-bold">24/7 SUPPORT NETWORK</span>
        <div class="w-2 h-2 rounded-full bg-prestige-gold animate-pulse"></div>
      </div>
      <div class="w-12 h-12 rounded-xl bg-prestige-gold/10 flex items-center justify-center mb-6">
        <svg class="w-6 h-6 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      </div>
      <h2 class="text-2xl font-bold mb-3 text-white uppercase tracking-tight">Active Support Matrix</h2>
      <p class="text-sm text-gray-400 font-sans mb-6 leading-relaxed italic">Verified institutional resources providing confidential assistance for players in Alberta and Ontario.</p>
      <div class="space-y-3">
        <a href="tel:1-866-531-2600" class="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 hover:border-prestige-gold/40 hover:bg-prestige-gold/5 transition-all">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <div>
              <div class="text-sm font-bold text-gray-200">ConnexOntario</div>
              <div class="text-[10px] text-gray-500 font-mono uppercase">HELPLINE: 1-866-531-2600</div>
            </div>
          </div>
          <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="tel:1-866-332-2322" class="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 hover:border-prestige-gold/40 hover:bg-prestige-gold/5 transition-all">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            <div>
              <div class="text-sm font-bold text-gray-200">Alberta Wellness Services</div>
              <div class="text-[10px] text-gray-500 font-mono uppercase">24/7 HELPLINE: 1-866-332-2322</div>
            </div>
          </div>
          <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Self-Assessment -->
  <div class="navy-card p-8 relative overflow-hidden mb-8" id="self-assessment">
    <div class="flex items-start justify-between mb-6">
      <div>
        <div class="inline-flex items-center gap-2 text-prestige-gold text-[10px] font-bold tracking-widest uppercase mb-3">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Confidential · Takes 60 seconds
        </div>
        <h2 class="text-2xl font-bold text-white uppercase tracking-tight">Quick Self-Assessment</h2>
        <p class="text-sm text-gray-400 mt-2 font-sans max-w-xl">Answer honestly. Results are not stored and never leave your device. Based on the PGSI (Problem Gambling Severity Index) framework.</p>
      </div>
      {#if submitted}
        <button onclick={handleReset} class="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors flex-shrink-0 mt-1">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          Retake
        </button>
      {/if}
    </div>

    {#if !submitted}
      <div class="mb-6" aria-label="{answered} of {ASSESSMENT_QUESTIONS.length} questions answered">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{answered} / {ASSESSMENT_QUESTIONS.length} answered</span>
          {#if answered > 0 && answered < ASSESSMENT_QUESTIONS.length}
            <span class="text-[10px] font-mono text-prestige-gold">{Math.round((answered / ASSESSMENT_QUESTIONS.length) * 100)}%</span>
          {/if}
        </div>
        <div class="h-1 rounded-full bg-white/8 overflow-hidden">
          <div class="h-full bg-prestige-gold rounded-full transition-all duration-300" style="width: {(answered / ASSESSMENT_QUESTIONS.length) * 100}%"></div>
        </div>
      </div>

      <div class="space-y-4 mb-6">
        {#each ASSESSMENT_QUESTIONS as { id, text }, idx}
          <div class="p-4 rounded-xl border transition-colors {answers[id] ? 'border-white/15 bg-white/[0.03]' : 'border-white/8 bg-black/20'}">
            <p class="text-sm text-gray-300 mb-3">
              <span class="text-[10px] font-mono text-gray-600 mr-2 uppercase">{idx + 1}.</span>
              {text}
            </p>
            <div class="flex gap-2">
              <button
                onclick={() => handleAnswer(id, 'yes')}
                aria-pressed={answers[id] === 'yes'}
                class="flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all {answers[id] === 'yes' ? 'bg-prestige-gold/20 border border-prestige-gold/50 text-prestige-gold' : 'bg-white/5 border border-white/10 text-gray-400 hover:border-white/20 hover:text-white'}"
              >Yes</button>
              <button
                onclick={() => handleAnswer(id, 'no')}
                aria-pressed={answers[id] === 'no'}
                class="flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all {answers[id] === 'no' ? 'bg-success/15 border border-success/40 text-success' : 'bg-white/5 border border-white/10 text-gray-400 hover:border-white/20 hover:text-white'}"
              >No</button>
            </div>
          </div>
        {/each}
      </div>

      <div class="flex items-center justify-end">
        <button
          disabled={!allAnswered}
          onclick={() => submitted = true}
          class="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all {allAnswered ? 'bg-prestige-gold hover:bg-prestige-gold/90 text-navy-black cursor-pointer' : 'bg-white/5 text-gray-600 border border-white/10 cursor-not-allowed'}"
        >
          See My Results
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    {:else}
      <div class="rounded-2xl border {result.borderClass} {result.bgClass} p-6">
        <div class="text-xl font-bold mb-2 {result.colorClass} uppercase tracking-tight">{result.label}</div>
        <p class="text-sm text-gray-300 font-sans leading-relaxed mb-4">{result.message}</p>
        {#if yesCount >= 3}
          <div class="flex flex-wrap gap-3 mt-4">
            <a href="tel:1-866-531-2600" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white hover:border-white/20 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              ConnexOntario: 1-866-531-2600
            </a>
            <a href="tel:1-866-332-2322" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white hover:border-white/20 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Alberta: 1-866-332-2322
            </a>
          </div>
        {/if}
        <div class="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
          <button onclick={handleReset} class="text-xs text-slate-blue hover:text-white transition-colors flex items-center gap-1.5">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Retake assessment
          </button>
          <span class="text-white/20" aria-hidden="true">|</span>
          <a href="/responsible-gambling#tools" class="text-xs text-slate-blue hover:text-white transition-colors">View account controls</a>
        </div>
      </div>
    {/if}
  </div>

  <!-- Platform Tools -->
  <div class="navy-card p-8 mb-24 relative group overflow-hidden" id="tools">
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prestige-gold/40 to-transparent"></div>
    <div class="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
      <div>
        <h2 class="text-3xl font-bold text-white mb-1 uppercase tracking-tight italic">Platform Control Infrastructure</h2>
        <p class="text-[10px] text-gray-500 font-mono uppercase tracking-[0.3em] font-bold italic">Standard Regulatory Toolset // Verified Across Licenses</p>
      </div>
      <div class="px-4 py-2 rounded-lg bg-prestige-gold/5 border border-prestige-gold/20 flex items-center gap-3">
        <svg class="w-4 h-4 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
        <span class="text-prestige-gold text-[10px] font-bold uppercase tracking-widest font-mono">Benchmark: ACGO Standards</span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each platformTools as tool}
        <div class="navy-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-prestige-gold/20 transition-all">
          <h4 class="text-white font-bold mb-2 italic tracking-tight">{tool.title}</h4>
          <p class="text-gray-500 text-xs leading-relaxed italic font-sans">{tool.desc}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Safety Tools Table -->
  <section class="mx-auto max-w-5xl mt-8">
    <h2 class="text-2xl font-bold text-white mb-4">Safety Tools at a Glance</h2>
    <div class="navy-card overflow-x-auto rounded-2xl">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Tool</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Best for</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Typical first step</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-white font-bold">Deposit limits</td>
            <td class="p-4 text-gray-300">Preventing overspend before it starts</td>
            <td class="p-4 text-gray-300">Set a daily or weekly ceiling in account settings.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Cooling-off</td>
            <td class="p-4 text-gray-300">Short breaks from play</td>
            <td class="p-4 text-gray-300">Suspend access for 24 hours, 7 days, or 30 days.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Self-exclusion</td>
            <td class="p-4 text-gray-300">A hard stop when limits are not enough</td>
            <td class="p-4 text-gray-300">Use the provincial self-exclusion flow or support directory.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sr-only" aria-label="Related safety and educational resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/guides/sports-betting-odds-explained">Beginner Sports Betting Guide</a></li>
      <li><a href="/guides/regulated-vs-offshore">Understanding Your Betting Options</a></li>
      <li><a href="/security">Security Hub</a></li>
    </ul>
  </section>

  <footer class="text-center pb-12 border-t border-white/10 pt-12 mt-8">
    <p class="text-gray-500 text-xs italic uppercase tracking-[0.25em] font-bold">247iBET // Committed to Professional Standards of Player Protection</p>
  </footer>
</div>
