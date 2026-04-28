<script lang="ts">
  import type { FAQPageSchema } from '$lib/workflows/types.js';

  let { slug }: { slug: string } = $props();
  let schema = $state<FAQPageSchema | null>(null);

  $effect(() => {
    fetch(`/schema/${slug}-faq.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((s: FAQPageSchema | null) => {
        schema = s;
      })
      .catch(() => {
        schema = null;
      });
  });
</script>

<svelte:head>
  {#if schema}
    {@html `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}<\/script>`}
  {/if}
</svelte:head>
