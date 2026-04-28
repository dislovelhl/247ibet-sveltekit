<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    class?: string;
    children: Snippet;
    [key: string]: unknown;
  }

  let { href, class: className = '', children, ...rest }: Props = $props();
</script>

<a {href} class={className} target="_blank" rel="noopener noreferrer" {...rest}>
  {@render children()}
</a>
