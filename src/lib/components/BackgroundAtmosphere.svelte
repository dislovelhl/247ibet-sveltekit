<script lang="ts">
  let { src, alt = "", intensity = 0.6 } = $props();
</script>

<div class="background-atmosphere" aria-hidden="true">
  <div class="image-layer" style="background-image: url({src}); --intensity: {intensity};" role="img" aria-label={alt}></div>
  <div class="mask-overlay"></div>
  <div class="grain-overlay"></div>
</div>

<style>
  .background-atmosphere {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: -1;
    background: var(--color-forest-obsidian, #050a0f);
  }

  .image-layer {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: right center;
    opacity: var(--intensity);
    mask-image: linear-gradient(to right, transparent, black 40%);
    -webkit-mask-image: linear-gradient(to right, transparent, black 40%);
  }

  .mask-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent, var(--color-forest-obsidian, #050a0f) 90%);
  }

  .grain-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
</style>
