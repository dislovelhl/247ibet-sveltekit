<script lang="ts">
  interface Props {
    class?: string;
  }
  let { class: className = '' }: Props = $props();
</script>

<div class="skeleton-shimmer {className}"></div>
