<script lang="ts">
  interface Props {
    variant?: 'footer' | 'inline';
  }
  let { variant = 'inline' }: Props = $props();
</script>

<div
  class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs leading-relaxed text-text-tertiary {variant === 'footer'
    ? 'mt-4'
    : ''}"
>
  <strong class="text-text-body">Affiliate Disclosure:</strong>
  This page contains affiliate links. 247iBET may earn a commission if you sign up through our links.
  This does not affect our editorial independence or how we rate and review products. We only promote
  operators that meet our editorial standards.
  <a href="/about/affiliate-disclosure" class="text-slate-blue hover:underline">Full disclosure</a>.
</div>
