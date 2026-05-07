<script lang="ts">
  import { ArrowRight, BadgeCheck, CircleDollarSign, ShieldCheck } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';

  const trustPoints = [
    'Fast Interac Payouts in Canada',
    'Casino and sportsbook in one account',
    'Mobile-ready access for Canadian players',
  ] as const;
</script>

<section class="my-12 sm:my-16" aria-labelledby="ready-to-play-heading">
  <div
    class="relative overflow-hidden rounded-[1.75rem] border border-white/20 glass-premium shimmer-effect p-6 sm:rounded-3xl sm:p-8 md:p-12 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)]"
  >
    <div class="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <div class="page-hero-kicker mb-3 sm:mb-4">
          <BadgeCheck class="h-3.5 w-3.5" aria-hidden="true" />
          Built for Canadian players
        </div>

        <h2
          id="ready-to-play-heading"
          class="page-hero-title max-w-3xl text-2xl leading-tight sm:text-3xl md:text-5xl"
        >
          Ready to open your <span class="text-prestige-gold">247iBET account?</span>
        </h2>

        <p
          class="page-hero-subtitle mt-4 max-w-2xl text-sm leading-relaxed sm:mt-6 sm:text-base md:text-lg"
        >
          Access casino games, live sports betting, and Interac deposits in one place. Join 247iBET
          for faster funding, simpler withdrawals, and a mobile-ready account built around Canadian
          play.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary w-full sm:w-auto">
            CREATE ACCOUNT
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </SafeExternalLink>
          <SafeExternalLink href={IBET_URLS.casino} class="page-cta-secondary w-full sm:w-auto">
            EXPLORE CASINO
          </SafeExternalLink>
        </div>

        <div
          class="mt-8 flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-text-body sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3"
        >
          {#each trustPoints as point}
            <span class="inline-flex items-start gap-2 sm:items-center">
              <ShieldCheck
                class="h-4 w-4 text-success drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                aria-hidden="true"
              />
              {point}
            </span>
          {/each}
        </div>
      </div>

      <div class="rounded-[1.5rem] border border-white/5 p-5 sm:rounded-3xl sm:p-8 md:p-10">
        <p class="page-hub-kicker mb-4 sm:mb-6">Accelerated Routes</p>
        <div class="space-y-3">
          <SafeExternalLink
            href={IBET_URLS.casino}
            class="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm font-bold text-white transition-all hover:border-prestige-gold/40 hover:bg-white/[0.05] group/item"
          >
            <span>Casino Games</span>
            <ArrowRight
              class="h-4 w-4 text-prestige-gold transition-transform duration-200 group-hover/item:translate-x-1"
              aria-hidden="true"
            />
          </SafeExternalLink>
          <SafeExternalLink
            href={IBET_URLS.register}
            class="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm font-bold text-white transition-all hover:border-prestige-gold/40 hover:bg-white/[0.05] group/item"
          >
            <span>Sports Betting</span>
            <ArrowRight
              class="h-4 w-4 text-prestige-gold transition-transform duration-200 group-hover/item:translate-x-1"
              aria-hidden="true"
            />
          </SafeExternalLink>
          <a
            href="/fast-payouts"
            class="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm font-bold text-white transition-all hover:border-success/40 hover:bg-white/[0.05] group/item"
          >
            <span class="inline-flex items-start gap-2 sm:items-center">
              <CircleDollarSign class="h-4 w-4 text-success" aria-hidden="true" />
              Fast Withdrawals
            </span>
            <ArrowRight
              class="h-4 w-4 text-success transition-transform duration-200 group-hover/item:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="/responsible-gambling"
            class="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm font-bold text-white transition-all hover:border-white/20 hover:bg-white/[0.05] group/item"
          >
            <span>Safety Protocols</span>
            <ArrowRight
              class="h-4 w-4 text-text-body transition-transform duration-200 group-hover/item:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <p
          class="mt-5 text-xs font-mono leading-relaxed uppercase tracking-tighter text-text-tertiary opacity-80 sm:mt-6"
        >
          STRICTLY 19+ · TERMS APPLY · PLAY RESPONSIBLY
        </p>
      </div>
    </div>
  </div>
</section>
