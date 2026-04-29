<script lang="ts">
  interface Props {
    variant?: 'footer' | 'inline';
  }
  let { variant = 'inline' }: Props = $props();
</script>

<div class="text-xs text-text-muted leading-relaxed {variant === 'footer' ? 'mt-4' : ''}">
  <strong class="text-text-body">Affiliate Disclosure:</strong> 247iBET may earn a commission when you
  click through to a partner site. This does not affect our editorial independence or how we rate and
  review products. We only promote operators that meet our editorial standards.
</div>
