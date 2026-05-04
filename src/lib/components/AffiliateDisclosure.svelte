<script lang="ts">
  interface Props {
    variant?: 'footer' | 'inline' | 'cta';
  }
  let { variant = 'inline' }: Props = $props();
</script>

{#if variant === 'cta'}
  <p
    class="mt-3 text-[11px] leading-relaxed text-text-tertiary/80 border-t border-white/5 pt-3"
  >
    <strong class="text-text-tertiary">Affiliate link:</strong>
    We may receive compensation if you register via this link. Compensation does not affect our editorial ratings, determine licensing status, or confirm eligibility in your province.
    <a href="/about/affiliate-disclosure" class="text-slate-blue hover:underline">Full disclosure</a>.
    Availability varies by province — verify before depositing.
  </p>
{:else}
  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs leading-relaxed text-text-tertiary {variant ===
    'footer'
      ? 'mt-4'
      : ''}"
  >
    <strong class="text-text-body">Affiliate Disclosure:</strong>
    This site contains affiliate links. We may earn a commission when users visit or register with partner sites through our links.
    Compensation does not determine licensing status, legality, or user eligibility in any province.
    Our editorial ratings are independent of commercial relationships. Always verify operator licensing and local eligibility before depositing.
    <a href="/about/affiliate-disclosure" class="text-slate-blue hover:underline">Full disclosure</a>.
  </div>
{/if}
