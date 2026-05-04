<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';
  import { slide } from 'svelte/transition';

  interface FAQItem {
    q: string;
    a: string;
  }

  interface Props {
    items: FAQItem[];
    title?: string;
  }

  let { items, title = 'Frequently Asked Questions' }: Props = $props();
  let openIndex = $state<number | null>(null);

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i;
  }
</script>

<section class="mt-10 rounded-xl border border-white/10 bg-navy-card/80 p-6">
  {#if title}
    <h2 class="text-2xl font-black mb-5">{title}</h2>
  {/if}
  <div class="divide-y divide-white/8">
    {#each items as item, i}
      <div class="group">
        <button
          id="faq-btn-{i}"
          type="button"
          class="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
          aria-expanded={openIndex === i}
          aria-controls="faq-panel-{i}"
          onclick={() => toggle(i)}
        >
          <span class="text-base font-black text-white group-hover:text-prestige-gold transition-colors">{item.q}</span>
          <ChevronDown
            class="h-5 w-5 shrink-0 text-prestige-gold transition-transform duration-300 {openIndex === i ? 'rotate-180' : ''}"
            aria-hidden="true"
          />
        </button>
        {#if openIndex === i}
          <div
            id="faq-panel-{i}"
            role="region"
            aria-labelledby="faq-btn-{i}"
            transition:slide={{ duration: 300 }}
          >
            <p class="pb-5 text-sm leading-6 text-text-body">{item.a}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
