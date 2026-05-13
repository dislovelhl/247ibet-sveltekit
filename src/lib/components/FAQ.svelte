<script module lang="ts">
  let faqInstanceCounter = 0;

  function nextFaqInstanceId() {
    const id = faqInstanceCounter;
    faqInstanceCounter += 1;
    return `faq-${id}`;
  }
</script>

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
  const instanceId = nextFaqInstanceId();

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i;
  }
</script>

<section class="mt-10 rounded-3xl border border-white/15 bg-navy-card/80 p-6 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.03] sm:p-7">
  {#if title}
    <h2 class="mb-5 text-2xl font-black text-white sm:text-[1.75rem]">{title}</h2>
  {/if}
  <div class="divide-y divide-white/8">
    {#each items as item, i}
      <div class="group">
        <button
          id="{instanceId}-btn-{i}"
          type="button"
          class="flex min-h-[52px] w-full items-center justify-between gap-6 rounded-2xl py-5 pr-1 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-card"
          aria-expanded={openIndex === i}
          aria-controls="{instanceId}-panel-{i}"
          onclick={() => toggle(i)}
        >
          <span class="text-base font-black text-white transition-colors group-hover:text-prestige-gold">
            {item.q}
          </span>
          <ChevronDown
            class="h-5 w-5 shrink-0 text-prestige-gold transition-transform duration-300 {openIndex === i ? 'rotate-180' : ''}"
            aria-hidden="true"
          />
        </button>
        {#if openIndex === i}
          <div
            id="{instanceId}-panel-{i}"
            role="region"
            aria-labelledby="{instanceId}-btn-{i}"
            transition:slide={{ duration: 300 }}
          >
            <p class="pb-5 pr-8 text-sm leading-6 text-text-body sm:text-[0.95rem]">{item.a}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
