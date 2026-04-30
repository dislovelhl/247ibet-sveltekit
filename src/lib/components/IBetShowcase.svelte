<script lang="ts">
  import {
    Star,
    CheckCircle,
    ExternalLink,
    Zap,
    Gamepad2,
    Trophy,
    MonitorPlay,
    ShieldCheck,
    CreditCard,
    LockKeyhole,
  } from 'lucide-svelte';
  import { IBET_PROFILE, IBET_URLS, IBET_CTA, IBET_DISCLAIMER } from '$lib/ibet-brand';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';

  const featureIconMap: Partial<Record<string, typeof Zap>> = {
    Zap,
    Gamepad2,
    Trophy,
    MonitorPlay,
  };

  interface Props {
    variant?: 'hero' | 'compact' | 'banner';
    ctaText?: string;
    contextLabel?: string;
    showFeatures?: boolean;
    showPros?: boolean;
    isPrimaryHero?: boolean;
  }

  let {
    variant = 'hero',
    ctaText,
    contextLabel,
    showFeatures = true,
    showPros = false,
    isPrimaryHero = false,
  }: Props = $props();

  let isExpanded = $state(false);
  const visibleFeatures = $derived(
    isExpanded ? IBET_PROFILE.features : IBET_PROFILE.features.slice(0, 4),
  );
</script>

{#snippet starRating(rating: number | null)}
  {#if rating !== null}
    {@const filled = Math.round(rating / 2)}
    <div class="flex items-center gap-0.5">
      {#each [1, 2, 3, 4, 5] as star}
        <Star
          class="w-4 h-4 {star <= filled
            ? 'text-prestige-gold fill-prestige-gold'
            : 'text-navy-border'}"
          aria-hidden="true"
        />
      {/each}
      <span class="ml-1.5 text-sm font-bold text-white">{rating.toFixed(1)}/10</span>
    </div>
  {/if}
{/snippet}

{#if variant === 'banner'}
  <div
    class="navy-card rounded-2xl border border-navy-border p-4 flex flex-col sm:flex-row items-center gap-4"
  >
    <div class="flex items-center gap-3 flex-1">
      <Zap class="w-5 h-5 text-prestige-gold shrink-0" aria-hidden="true" />
      <div>
        <div class="page-hub-title text-sm">{IBET_PROFILE.name}</div>
        <div class="page-hub-subtitle text-xs">{contextLabel ?? IBET_PROFILE.tagline}</div>
      </div>
    </div>
    <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary whitespace-nowrap shrink-0">
      {ctaText ?? IBET_CTA.primary} →
    </SafeExternalLink>
    <p class="text-[11px] text-text-body sm:hidden font-sans w-full">{IBET_DISCLAIMER}</p>
  </div>
{:else if variant === 'compact'}
  <div class="navy-card rounded-xl p-5 md:p-6">
    <div class="relative z-10">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <div
          class="w-14 h-14 rounded-xl border border-white/10 overflow-hidden bg-white/5 shrink-0 flex items-center justify-center"
        >
          <img
            src={IBET_PROFILE.logo}
            alt="247iBET logo"
            class="object-contain p-1 w-full h-full"
          />
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="page-hub-title text-lg">{IBET_PROFILE.name}</span>
            {#if IBET_PROFILE.agcoLicensed}
              <span
                class="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
              >
                <CheckCircle class="w-3 h-3" aria-hidden="true" /> Ontario Compliant
              </span>
            {/if}
          </div>
          {@render starRating(IBET_PROFILE.rating)}
          <div class="flex items-center gap-1.5 mt-1.5 text-xs text-success">
            <Zap class="w-3 h-3" aria-hidden="true" />
            {IBET_PROFILE.withdrawalSpeed}
          </div>
        </div>
        <div class="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
          <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary w-full sm:w-auto">
            {ctaText ?? IBET_CTA.primary}
            <ExternalLink class="w-3 h-3" aria-hidden="true" />
          </SafeExternalLink>
          <p class="text-[11px] text-text-body font-sans leading-snug">{IBET_DISCLAIMER}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 text-[11px]">
        <div class="rounded-xl border border-white/8 bg-black/20 p-3">
          <div class="mb-1 font-mono uppercase tracking-wider text-text-body">Licence</div>
          <div class="font-semibold text-white">Verify before playing</div>
        </div>
        <div class="rounded-xl border border-white/8 bg-black/20 p-3">
          <div class="mb-1 font-mono uppercase tracking-wider text-text-body">Payments</div>
          <div class="font-semibold text-white">Interac first</div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <section class="relative overflow-hidden" aria-label="247iBET platform showcase">
    <div class="bg-navy-black p-8 md:p-14 relative">
      <div class="relative z-10">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
          <div
            class="w-24 h-24 rounded-2xl border border-white/10 overflow-hidden bg-white/5 shrink-0 flex items-center justify-center"
          >
            <img
              src={IBET_PROFILE.logo}
              alt="247iBET logo"
              class="object-contain p-3 w-full h-full"
            />
          </div>

          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              {#if isPrimaryHero}
                <h1 class="page-hero-title text-3xl md:text-5xl uppercase">
                  {IBET_PROFILE.name}<span class="sr-only"> Canadian iGaming Guide</span>
                </h1>
              {:else}
                <h2 class="page-hub-title text-3xl md:text-5xl uppercase">{IBET_PROFILE.name}</h2>
              {/if}
              {#if IBET_PROFILE.agcoLicensed}
                <span
                  class="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full bg-success/10 text-success border border-success/20 uppercase tracking-widest"
                >
                  <ShieldCheck class="w-4 h-4" aria-hidden="true" /> Registry Status: Verified
                </span>
              {/if}
            </div>
            {#if IBET_PROFILE.rating !== null}
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-text-tertiary uppercase tracking-widest"
                  >Performance Rating:</span
                >
                {@render starRating(IBET_PROFILE.rating)}
              </div>
            {/if}
            <p class="page-hero-subtitle font-sans text-lg mt-5 max-w-2xl font-light">
              {IBET_PROFILE.tagline}
            </p>
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-3">
              <span
                class="flex items-center gap-1 text-xs text-success font-bold whitespace-nowrap"
              >
                <Zap class="w-3 h-3" aria-hidden="true" />
                {IBET_PROFILE.withdrawalSpeed}
              </span>
              <span class="hidden sm:inline text-text-tertiary" aria-hidden="true">·</span>
              {#each IBET_PROFILE.paymentMethods.slice(0, 4) as pm}
                <span
                  class="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-navy-border text-text-body whitespace-nowrap"
                  >{pm}</span
                >
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-2.5 shrink-0 w-full md:w-auto min-w-[180px]">
            <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary w-full">
              {ctaText ?? IBET_CTA.primary}
              <ExternalLink class="w-4 h-4" aria-hidden="true" />
            </SafeExternalLink>
            <p class="text-[11px] text-text-body font-sans leading-tight">{IBET_DISCLAIMER}</p>
          </div>
        </div>

        {#if showFeatures}
          <div class="mb-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              {#each visibleFeatures as feat}
                {@const FeatureIcon = featureIconMap[feat.icon]}
                <div class="rounded-xl border p-3.5 material-inset {feat.bg} transition-shadow">
                  {#if FeatureIcon}
                    <FeatureIcon class="w-5 h-5 mb-1.5 {feat.accent}" aria-hidden="true" />
                  {/if}
                  <div class="font-bold text-sm mb-0.5 {feat.accent}">{feat.label}</div>
                  <p class="text-xs text-text-body font-sans leading-snug">{feat.detail}</p>
                </div>
              {/each}
            </div>
            {#if !isExpanded && IBET_PROFILE.features.length > 4}
              <button
                type="button"
                onclick={() => (isExpanded = true)}
                class="text-xs font-bold text-text-body hover:text-prestige-gold transition-colors py-2 flex items-center gap-1"
              >
                + View {IBET_PROFILE.features.length - 4} more features
              </button>
            {/if}
          </div>
        {/if}

        <dl
          class="mb-6 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-white/8 py-5 sm:grid-cols-4 sm:divide-x sm:divide-white/8 sm:gap-y-0"
        >
          {#each IBET_PROFILE.trustPanel as item}
            <div class="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dt
                class="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-text-body"
              >
                {#if item.label === 'Licence'}
                  <ShieldCheck class="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                {:else if item.label === 'Payments'}
                  <CreditCard class="w-3.5 h-3.5 text-text-body" aria-hidden="true" />
                {:else if item.label === 'Security'}
                  <LockKeyhole class="w-3.5 h-3.5 text-text-body" aria-hidden="true" />
                {:else}
                  <Star
                    class="w-3.5 h-3.5 text-prestige-gold fill-prestige-gold"
                    aria-hidden="true"
                  />
                {/if}
                {item.label}
              </dt>
              <dd class="text-sm font-bold text-white">{item.value}</dd>
              <p class="mt-0.5 text-xs leading-snug text-text-body">{item.detail}</p>
            </div>
          {/each}
        </dl>

        {#if showPros}
          <div class="pt-4 border-t border-white/8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {#each IBET_PROFILE.pros as pro}
                <div class="flex items-start gap-2 text-sm text-text-body font-sans">
                  <CheckCircle class="w-4 h-4 text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                  {pro}
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <div class="flex flex-wrap gap-x-4 gap-y-1 mt-4 pt-4 border-t border-white/8">
          {#each IBET_PROFILE.trustSignals as signal}
            <span class="flex items-center gap-1.5 text-[11px] text-text-body font-sans">
              <CheckCircle class="w-3 h-3 text-green-500/60 shrink-0" aria-hidden="true" />
              {signal}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}
