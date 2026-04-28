<script lang="ts">
  import type { FAQPageSchema } from '$lib/workflows/types.js';

  let { slug }: { slug: string } = $props();
  let schema = $state<FAQPageSchema | null>(null);

  // JSON.stringify already escapes U+2028/U+2029 per ES2019 spec.
  // We only need to escape < > & so the JSON blob is safe inside <script>.
  function safeJsonSerialize(obj: unknown): string {
    return JSON.stringify(obj).replace(/[<>&]/g, (c) =>
      c === '<' ? '\\u003c' : c === '>' ? '\\u003e' : '\\u0026'
    );
  }

  const safeJsonLd = $derived(schema ? safeJsonSerialize(schema) : null);

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
  {#if safeJsonLd}
    {@html `<script type="application/ld+json">${safeJsonLd}<\/script>`}
  {/if}
</svelte:head>
