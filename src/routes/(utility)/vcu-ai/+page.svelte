<!-- regulatory-claim:context: AGCO and iGaming Ontario references describe regulators or third-party operators, not 247iBET's own licensing posture. -->
<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import VcuAiDashboard from '$lib/components/VcuAiDashboard.svelte';
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '247iBET',
    url: 'https://247ibet.ca',
    logo: 'https://247ibet.ca/images/brand/logo.png',
    description:
      'Canadian iGaming intelligence hub tracking Ontario and Alberta operator markets for casino and sportsbook players.',
  };
</script>

<svelte:head>
  <title>iGaming Intelligence for Canada | 247iBET</title>
  <meta
    name="description"
    content="247iBET tracks the Canadian regulated market — real-time operator data, AGCO and AGLC compliance signals, and clear paths to the best casino and sportsbook options for Ontario and Alberta players."
  />
  <meta property="og:title" content="iGaming Intelligence for Canada | 247iBET" />
  <meta
    property="og:description"
    content="247iBET tracks the Canadian regulated market — real-time operator data, AGCO and AGLC compliance signals, and clear paths to the best casino and sportsbook options for Ontario and Alberta players."
  />
  <link rel="canonical" href={canonicalUrl('/vcu-ai')} />
  <JsonLd schema={orgSchema} />
</svelte:head>

<main class="min-h-dvh bg-navy-black relative overflow-hidden">
  <div aria-hidden="true" class="absolute inset-0 opacity-[0.08]"></div>
  <div
    aria-hidden="true"
    class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-slate-blue/20 blur-[100px] opacity-50"
  ></div>
  <div
    aria-hidden="true"
    class="absolute bottom-0 left-1/2 w-64 h-64 rounded-full bg-prestige-gold/10 blur-[100px] opacity-25"
  ></div>
  <div
    aria-hidden="true"
    class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,24,0.78)_0%,rgba(7,12,24,0.9)_45%,rgba(7,12,24,1)_100%)]"
  ></div>

  <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
    <header class="max-w-4xl mx-auto text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-blue/10 border border-slate-blue/30 text-slate-blue text-xs font-bold tracking-widest uppercase mb-6"
      >
        iGaming Intelligence Hub
      </div>
      <h1 class="page-hero-title mb-6">
        247iBET iGaming Intelligence
      </h1>
      <p class="text-gray-300 text-lg md:text-xl font-sans leading-relaxed max-w-3xl mx-auto">
        247iBET tracks the Canadian regulated market — real-time operator data, AGCO and AGLC
        compliance signals, and clear paths to the best casino and sportsbook options for Ontario
        and Alberta players.
      </p>
    </header>

    <VcuAiDashboard />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div class="navy-card rounded-2xl p-6">
        <div class="text-slate-blue text-2xl mb-3">🏛️</div>
        <h2 class="text-white font-bold mb-2">Ontario Market</h2>
        <p class="text-gray-400 text-sm font-sans leading-relaxed">
          AGCO-licensed operators tracked in real time. Open private market since April 2022.
        </p>
      </div>
      <div class="navy-card rounded-2xl p-6">
        <div class="text-prestige-gold text-2xl mb-3">📍</div>
        <h2 class="text-white font-bold mb-2">Alberta Watch</h2>
        <p class="text-gray-400 text-sm font-sans leading-relaxed">
          Alberta iGaming Corporation (AiGC) market launch tracker. Commercial operations expected
          2026.
        </p>
      </div>
      <div class="navy-card rounded-2xl p-6">
        <div class="text-green-400 text-2xl mb-3">⚡</div>
        <h2 class="text-white font-bold mb-2">Payout Intelligence</h2>
        <p class="text-gray-400 text-sm font-sans leading-relaxed">
          Withdrawal speed benchmarks, Interac e-Transfer processing data, and KYC friction signals.
        </p>
      </div>
    </div>
  </div>
</main>
