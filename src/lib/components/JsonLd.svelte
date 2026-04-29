<script lang="ts">
  import { safeJsonLd } from '$lib/json-ld';

  const scriptTag = 'script';
  let { schema }: { schema: unknown } = $props();
  const serialized = $derived(safeJsonLd(schema));
</script>

<svelte:head>
  <svelte:element this={scriptTag} type="application/ld+json">{@html serialized}</svelte:element>
</svelte:head>
