<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    class?: string;
    rel?: string;
    children: Snippet;
    [key: string]: unknown;
  }

  // Default rel for affiliate iGaming outbound — AGCO/AGLC + Google compliant.
  // sponsored: declares paid/affiliate link; nofollow: no PageRank flow; noopener noreferrer: tab-jacking + referrer leak guard.
  let {
    href,
    class: className = '',
    rel = 'nofollow sponsored noopener noreferrer',
    children,
    ...rest
  }: Props = $props();
</script>

<a {href} class={className} target="_blank" {rel} {...rest}>
  {@render children()}
  <span class="sr-only">(opens in new tab)</span>
</a>
