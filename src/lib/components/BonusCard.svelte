<script lang="ts">
  import {
    Sparkles,
    Clock3,
    Coins,
    Target,
    Gamepad2,
    ChevronDown,
    ExternalLink,
    Info,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_CTA, IBET_URLS, IBET_DISCLAIMER } from '$lib/ibet-brand';

  type Tier = 'flagship' | 'standard' | 'limited';

  interface BonusTerms {
    wagering?: string;
    minDeposit?: string;
    expiry?: string;
    eligibleGames?: string;
  }

  interface Props {
    slug: string;
    eyebrow?: string;
    headline: string;
    summary: string;
    period?: string;
    image?: string;
    imageAlt?: string;
    terms?: BonusTerms;
    tier?: Tier;
    ctaText?: string;
    ctaHref?: string;
    fullTermsHref?: string;
  }

  let {
    slug,
    eyebrow = 'Bonus offer',
    headline,
    summary,
    period,
    image,
    imageAlt,
    terms = {},
    tier = 'standard',
    ctaText,
    ctaHref = IBET_URLS.register,
    fullTermsHref = '/responsible-gambling',
  }: Props = $props();

  let termsOpen = $state(false);
  const headingId = $derived(`bonus-${slug}-heading`);
  const summaryId = $derived(`bonus-${slug}-summary`);

  const tierLabel = $derived(
    tier === 'flagship' ? 'Flagship offer' : tier === 'limited' ? 'Limited time' : 'Ongoing offer'
  );

  const termRows = $derived(
    [
      terms.wagering && { icon: Target, label: 'Wagering', value: terms.wagering },
      terms.minDeposit && { icon: Coins, label: 'Min deposit', value: terms.minDeposit },
      terms.expiry && { icon: Clock3, label: 'Expires', value: terms.expiry },
      terms.eligibleGames && { icon: Gamepad2, label: 'Eligible', value: terms.eligibleGames },
    ].filter(Boolean) as Array<{ icon: typeof Target; label: string; value: string }>
  );
</script>

<article
  class="bonus-card group relative overflow-hidden rounded-2xl border border-navy-border bg-navy-card focus-within:border-prestige-gold/40"
  class:bonus-card--flagship={tier === 'flagship'}
  class:bonus-card--limited={tier === 'limited'}
  aria-labelledby={headingId}
  aria-describedby={summaryId}
>
  <span class="bonus-card__foil" aria-hidden="true"></span>

  <div class="grid grid-cols-1 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] gap-0">
    {#if image}
      <div class="bonus-card__media relative overflow-hidden bg-navy-raised md:rounded-l-2xl">
        <img
          src={image}
          alt={imageAlt ?? ''}
          loading="lazy"
          decoding="async"
          class="h-44 w-full object-cover md:h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-card via-navy-card/40 to-transparent md:bg-gradient-to-r"></div>
        <span
          class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-prestige-gold-50 backdrop-blur"
        >
          <Sparkles class="h-3 w-3 text-prestige-gold" aria-hidden="true" />
          {tierLabel}
        </span>
      </div>
    {/if}

    <div class="relative flex flex-col gap-spacing-5 p-spacing-5 md:p-spacing-8">
      {#if !image}
        <span
          class="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-prestige-gold-50"
        >
          <Sparkles class="h-3 w-3 text-prestige-gold" aria-hidden="true" />
          {tierLabel}
        </span>
      {/if}

      <header class="space-y-2">
        <p class="font-mono text-xs uppercase tracking-[0.22em] text-text-tertiary">
          {eyebrow}
        </p>
        <h3
          id={headingId}
          class="font-display text-2xl leading-[1.1] text-white md:text-3xl md:leading-[1.08]"
        >
          {headline}
        </h3>
        {#if period}
          <p class="text-xs text-text-body">{period}</p>
        {/if}
      </header>

      <p id={summaryId} class="text-sm leading-relaxed text-text-body">
        {summary}
      </p>

      {#if termRows.length}
        <dl
          class="grid grid-cols-1 gap-x-spacing-6 gap-y-spacing-3 border-y border-white/[0.06] py-spacing-4 sm:grid-cols-2"
        >
          {#each termRows as row}
            {@const RowIcon = row.icon}
            <div class="flex items-start gap-2.5">
              <RowIcon class="mt-0.5 h-3.5 w-3.5 shrink-0 text-prestige-gold-text" aria-hidden="true" />
              <div class="min-w-0">
                <dt class="font-mono text-xs uppercase tracking-[0.18em] text-text-tertiary">
                  {row.label}
                </dt>
                <dd class="text-sm font-semibold text-white tabular-nums">{row.value}</dd>
              </div>
            </div>
          {/each}
        </dl>
      {/if}

      <div class="flex flex-col gap-spacing-4 sm:flex-row sm:items-center sm:justify-between">
        <SafeExternalLink
          href={ctaHref}
          class="page-cta-primary btn-magnetic w-full sm:w-auto"
          aria-label="{ctaText ?? IBET_CTA.bonus} — {headline}"
        >
          {ctaText ?? IBET_CTA.bonus}
          <ExternalLink class="h-3.5 w-3.5" aria-hidden="true" />
        </SafeExternalLink>

        <button
          type="button"
          class="bonus-card__terms-toggle inline-flex items-center gap-1.5 self-start text-xs font-semibold text-text-body transition-colors hover:text-prestige-gold focus-visible:text-prestige-gold focus-visible:outline-none"
          aria-expanded={termsOpen}
          aria-controls="{slug}-terms"
          onclick={() => (termsOpen = !termsOpen)}
        >
          <Info class="h-3.5 w-3.5" aria-hidden="true" />
          {termsOpen ? 'Hide full terms' : 'View full terms'}
          <ChevronDown
            class="h-3.5 w-3.5 transition-transform {termsOpen ? 'rotate-180' : ''}"
            aria-hidden="true"
          />
        </button>
      </div>

      {#if termsOpen}
        <div
          id="{slug}-terms"
          class="rounded-xl border border-white/[0.06] bg-black/20 p-spacing-4 text-xs leading-relaxed text-text-body"
        >
          <p class="mb-2 font-semibold text-white">Bonus terms in plain English</p>
          <ul class="space-y-1.5">
            <li>
              Eligible to new and returning Canadian players who meet our age and provincial
              requirements.
            </li>
            <li>
              Bonus credit and any free spins are subject to wagering before withdrawal. Confirm
              the current multiplier in our cashier.
            </li>
            <li>
              Offers may be revised, paused, or replaced at our discretion. The cashier is the
              authoritative source of truth for active terms.
            </li>
          </ul>
          <p class="mt-3">
            <a
              href={fullTermsHref}
              class="font-semibold text-prestige-gold underline-offset-2 hover:underline focus-visible:underline"
            >
              Read our responsible gaming guidance →
            </a>
          </p>
        </div>
      {/if}

      <p class="mt-auto text-xs leading-snug text-text-tertiary">
        {IBET_DISCLAIMER}
      </p>
    </div>
  </div>
</article>

<style>
  .bonus-card {
    box-shadow:
      0 1px 0 0 rgba(255, 255, 255, 0.04) inset,
      var(--shadow-navy);
    transition:
      transform var(--dur-medium) ease,
      border-color var(--dur-medium) ease,
      box-shadow var(--dur-medium) ease;
  }

  .bonus-card:hover {
    transform: translateY(-2px);
    border-color: rgba(212, 148, 58, 0.28);
    box-shadow:
      0 1px 0 0 rgba(255, 255, 255, 0.06) inset,
      var(--shadow-navy-deep),
      var(--shadow-gold-glow);
  }

  .bonus-card:focus-within {
    box-shadow:
      0 0 0 1px rgba(212, 148, 58, 0.4),
      var(--shadow-navy-deep);
  }

  .bonus-card__foil {
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    pointer-events: none;
    background: var(--gradient-prestige-gold-foil);
    opacity: 0;
    mix-blend-mode: overlay;
    transition: opacity var(--dur-medium) ease;
  }

  .bonus-card:hover .bonus-card__foil,
  .bonus-card:focus-within .bonus-card__foil {
    opacity: 0.07;
  }

  .bonus-card--flagship {
    border-color: rgba(212, 148, 58, 0.32);
  }

  .bonus-card--flagship .bonus-card__foil {
    opacity: 0.06;
  }

  .bonus-card--limited {
    border-color: rgba(74, 158, 191, 0.32);
  }

  .bonus-card--limited:hover {
    border-color: rgba(74, 158, 191, 0.5);
    box-shadow:
      0 1px 0 0 rgba(255, 255, 255, 0.06) inset,
      var(--shadow-navy-deep),
      0 0 28px -6px rgba(74, 158, 191, 0.32);
  }

  .bonus-card__terms-toggle:focus-visible {
    box-shadow: 0 0 0 2px rgba(212, 148, 58, 0.4);
    border-radius: 6px;
  }

  @media (prefers-reduced-motion: reduce) {
    .bonus-card,
    .bonus-card__foil,
    .bonus-card :global(img) {
      transition: none !important;
      animation: none !important;
    }
    .bonus-card:hover {
      transform: none;
    }
    .bonus-card :global(img) {
      transform: none !important;
    }
  }
</style>
