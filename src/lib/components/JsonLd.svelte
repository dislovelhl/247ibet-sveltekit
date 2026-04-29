<script lang="ts">
  import { jsonLdScriptHtml } from '$lib/json-ld';

  let { schema }: { schema: unknown } = $props();
  const html = $derived(jsonLdScriptHtml(schema));
</script>

{@html html}
