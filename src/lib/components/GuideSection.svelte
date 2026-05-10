<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import GlintCard from '$lib/components/GlintCard.svelte';

  interface Guide {
    title: string;
    body: string;
    href: string;
    image: string;
    alt: string;
  }

  let { guides } = $props<{ guides: Guide[] }>();
</script>

<section class="rounded-xl border border-white/10 bg-navy-card/80 p-spacing-6">
  <div class="mb-spacing-4 flex flex-col gap-spacing-2 sm:flex-row sm:items-end sm:justify-between">
    <h2 class="text-3xl font-black">Expert Guides</h2>
    <a href="/guides" class="view-all-link" aria-label="View all expert guides">
      View All Guides <ArrowRight class="h-3 w-3" aria-hidden="true" />
    </a>
  </div>
  <div class="grid gap-spacing-4 sm:grid-cols-2 lg:grid-cols-4">
    {#each guides as card, i}
      <GlintCard
        useReveal={true}
        style="--reveal-delay: {i * 100}ms"
        class="reveal-fade-up luxury-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-3 transition-all hover:bg-navy-raised hover:shadow-2xl card-hover-lift"
      >
        <a href={card.href} class="contents">
          <div class="relative h-44 w-full shrink-0 overflow-hidden rounded-xl lg:h-32 shimmer-effect">
            <img
              src={card.image}
              alt={card.alt}
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-navy-black/60 to-transparent"></div>
          </div>
          <div class="flex flex-col justify-between px-2 pb-2">
            <div>
              <h3 class="font-display text-base font-black leading-snug text-white group-hover:text-prestige-gold transition-colors">{card.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-text-body line-clamp-2">{card.body}</p>
            </div>
            <div class="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-prestige-gold transition-colors">
              Read Guide
              <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </GlintCard>
    {/each}
  </div>
</section>
