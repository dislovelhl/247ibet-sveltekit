<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';
  import { LockKeyhole, ShieldCheck, ShieldAlert, Eye, ArrowRight } from 'lucide-svelte';

  const securityFeatures = [
    {
      title: 'Data Encryption',
      body: 'All communications are protected via high-grade SSL/TLS encryption protocols.',
      icon: ShieldCheck
    },
    {
      title: '2FA Support',
      body: 'Multi-factor authentication adds an extra layer of protection to your account access.',
      icon: LockKeyhole
    },
    {
      title: 'Fraud Monitoring',
      body: 'Our systems proactively monitor for suspicious activity and unauthorized access attempts.',
      icon: Eye
    },
    {
      title: 'Secure Payments',
      body: 'Interac e-Transfer transactions are secured by your own financial institution.',
      icon: ShieldAlert
    }
  ];
</script>

<svelte:head>
  <title>Security Standards for Online Betting in Canada | 247iBET</title>
  <meta
    name="description"
    content="Review account protection controls, 2FA requirements, and data-security standards at 247iBET — Canada's online casino and sportsbook."
  />
  <link rel="canonical" href={canonicalUrl('/security')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: 'Security Standards at 247iBET | Account & Data Protection',
      description:
        "Review account protection controls, 2FA requirements, and data-security standards at 247iBET — Canada's online casino and sportsbook.",
      url: 'https://247ibet.ca/security',
    }}
  />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16 ">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold font-medium">Security</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[400px]">
      <BackgroundAtmosphere 
        src="/images/generated/security-protection-hero.webp" 
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>
      
      <div 
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 md:max-w-2xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex items-center gap-2">
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              Account Protection
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Security <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Infrastructure</span>
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          Your security is integrated into every layer of the 247iBET experience. We use industry-leading standards to protect your data and funds.
        </p>
      </div>
    </header>

    <section class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
      {#each securityFeatures as feature}
        {@const Icon = feature.icon}
        <div class="material-cell p-8 rounded-3xl transition-all hover:bg-white/[0.02]">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold mb-6">
            <Icon class="h-6 w-6" />
          </div>
          <h3 class="text-lg font-bold text-white mb-3">{feature.title}</h3>
          <p class="text-sm text-text-body leading-relaxed">{feature.body}</p>
        </div>
      {/each}
    </section>

    <div class="grid gap-8 lg:grid-cols-2">
      <section class="material-panel p-8 md:p-12 rounded-3xl">
        <h2 class="text-2xl font-black uppercase tracking-tight text-white mb-6">Related Compliance</h2>
        <div class="space-y-4">
          <a href="/responsible-gambling" class="material-cell flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-all">
            <span class="text-sm font-bold text-white">Responsible Gambling Programs</span>
            <ArrowRight class="h-4 w-4 text-text-tertiary" />
          </a>
          <a href="/guides/alberta-operator-readiness-index" class="material-cell flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-all">
            <span class="text-sm font-bold text-white">Alberta Operator Readiness Framework</span>
            <ArrowRight class="h-4 w-4 text-text-tertiary" />
          </a>
          <a href="/guides/interac-e-transfer-casino" class="material-cell flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-all">
            <span class="text-sm font-bold text-white">Interac and Payment Security Guide</span>
            <ArrowRight class="h-4 w-4 text-text-tertiary" />
          </a>
          <a href="/about" class="material-cell flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-all">
            <span class="text-sm font-bold text-white">Editorial Standards and Methodology</span>
            <ArrowRight class="h-4 w-4 text-text-tertiary" />
          </a>
        </div>
      </section>

      <section class="material-panel p-8 md:p-12 rounded-3xl bg-slate-blue/5 border border-slate-blue/10 flex flex-col justify-center">
        <h2 class="text-2xl font-black uppercase tracking-tight text-white mb-4">Secure your account</h2>
        <p class="text-text-body mb-8 leading-relaxed">
          We recommend enabling Two-Factor Authentication (2FA) and using a unique, strong password for your 247iBET account to ensure the highest level of protection.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/faq#verification" class="hero-cta-primary min-w-[200px] btn-magnetic">Verification FAQ</a>
          <a href="/contact" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">Support Desk</a>
        </div>
      </section>
    </div>
  </div>
</div>
