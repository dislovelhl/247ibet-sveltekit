<script lang="ts">
  import GlintCard from '$lib/components/GlintCard.svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import { reveal } from '$lib/animations';

  interface StandOutItem {
    title: string;
    body: string;
    icon: any;
  }

  let { items } = $props<{ items: StandOutItem[] }>();
</script>

<section
  use:reveal
  class="reveal-fade-up rounded-2xl border border-white/5 bg-navy-card/50 p-4 sm:p-8"
>
  <div
    use:reveal
    data-reveal-stagger="true"
    class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
  >
    <div class="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy-raised to-navy-card p-6 shadow-xl sm:col-span-2 sm:row-span-2 lg:p-10">
      <p class="font-luxury text-prestige-gold-400 mb-2 opacity-80">Unmatched Standards</p>
      <h2 class="font-display text-3xl font-black leading-tight tracking-tighter text-white md:text-5xl">
        Why 247iBET <span class="text-gold-foil">Stands Out</span>
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-text-body">
        The premium choice for Canadian players, prioritizing security,
        lightning-fast payments, and transparent gaming terms.
      </p>
      <div class="mt-8">
        <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary-sm btn-magnetic">
          Get Started
        </SafeExternalLink>
      </div>
    </div>

    {#each items as item, i}
      {@const Icon = item.icon}
      <GlintCard
        useReveal={true}
        style="--reveal-delay: {(i + 2) * 100}ms"
        class="reveal-fade-up group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/80 p-6 transition-all hover:bg-navy-raised hover:shadow-2xl card-hover-lift"
      >
        <div class="relative z-10">
          <Icon class="h-8 w-8 text-prestige-gold transition-transform group-hover:scale-110" aria-hidden="true" />
          <h3 class="mt-4 font-display text-xl font-black text-white">{item.title}</h3>
          <p class="mt-2 text-sm leading-relaxed text-text-body">{item.body}</p>
        </div>
        <div class="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-prestige-gold/5 blur-2xl transition-all group-hover:bg-prestige-gold/10"></div>
      </GlintCard>
    {/each}
  </div>
</section>
