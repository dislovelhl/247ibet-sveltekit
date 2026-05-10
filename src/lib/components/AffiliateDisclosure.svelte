<script lang="ts">
  interface Props {
    variant?: 'footer' | 'inline' | 'cta';
  }
  let { variant = 'inline' }: Props = $props();
</script>

{#if variant === 'cta'}
  <p
    class="mt-3 text-xs leading-relaxed text-text-tertiary/80 border-t border-white/5 pt-3"
  >
    <strong class="text-text-tertiary">Responsible Play:</strong>
    19+ to play (18+ in select provinces). Gambling should be entertainment. Set limits and play
    responsibly. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Tools & Resources</a>.
    Verify local eligibility before signing up.
  </p>
{:else}
  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs leading-relaxed text-text-tertiary {variant ===
    'footer'
      ? 'mt-4'
      : ''}"
  >
    <strong class="text-text-body">247iBET Standards:</strong>
    We are committed to providing a secure and transparent iGaming environment for all Canadian
    players. Our platform features advanced 256-bit encryption and robust responsible gaming tools.
    Always play within your means.
    <a href="/responsible-gambling" class="text-slate-blue hover:underline">Learn more</a>.
  </div>
{/if}
