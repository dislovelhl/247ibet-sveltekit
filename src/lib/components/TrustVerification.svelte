<script lang="ts">
  import GlintCard from '$lib/components/GlintCard.svelte';

  interface TrustItem {
    label: string;
    body: string;
    icon: any;
  }

  let { items } = $props<{ items: TrustItem[] }>();
</script>

<section
  id="trust-verification"
  class="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-2xl sm:grid-cols-2 lg:grid-cols-4"
>
  {#each items as item, i}
    {@const Icon = item.icon}
    <GlintCard
      useReveal={true}
      style="--reveal-delay: {i * 100}ms"
      class="reveal-fade-up group relative flex items-start gap-4 bg-navy-card/95 p-5 transition-all hover:bg-navy-raised hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] sm:p-6 card-hover-lift"
    >
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold transition-all group-hover:scale-110 group-hover:bg-prestige-gold group-hover:text-navy-black group-hover:shadow-[0_0_20px_rgba(212,148,58,0.4)]"
      >
        <Icon class="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <p class="text-xs font-black uppercase tracking-widest text-prestige-gold/80 group-hover:text-prestige-gold">{item.label}</p>
        <p class="mt-1.5 text-sm font-medium leading-relaxed text-text-primary">{item.body}</p>
      </div>
    </GlintCard>
  {/each}
</section>
