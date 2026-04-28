<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    src: string;
    alt: string;
    class?: string;
    width?: number | string;
    height?: number | string;
    fetchpriority?: 'high' | 'low' | 'auto';
    loading?: 'lazy' | 'eager';
    usePlaceholder?: boolean; // Force placeholder for known missing assets
  }

  let {
    src,
    alt,
    class: className = '',
    width,
    height,
    fetchpriority,
    loading,
    usePlaceholder = false,
  }: Props = $props();

  let error = $state(false);
  let loaded = $state(false);

  // Initialize error state from prop on mount or if prop changes
  $effect(() => {
    if (usePlaceholder) {
      error = true;
    }
  });

  // Check if src is one of the known missing assets
  const knownMissing = [
    '/images/editorial/',
    '/banners/banner-galaxy-bg.png'
  ];

  onMount(() => {
    if (knownMissing.some(path => src.includes(path))) {
      error = true;
    }
  });

  function handleError() {
    error = true;
  }

  function handleLoad() {
    loaded = true;
  }
</script>

<div class="relative overflow-hidden bg-navy-black {className}" style:aspect-ratio={width && height ? `${width}/${height}` : undefined}>
  {#if !error}
    <img
      {src}
      {alt}
      {width}
      {height}
      {fetchpriority}
      {loading}
      class="h-full w-full object-cover transition-opacity duration-500 {loaded ? 'opacity-100' : 'opacity-0'}"
      onerror={handleError}
      onload={handleLoad}
    />
  {/if}

  {#if error || !loaded}
    <!-- Prestige Placeholder: Grainy Navy Gradient with Geometric Accents -->
    <div
      class="absolute inset-0 flex items-center justify-center bg-navy-black"
      aria-hidden="true"
    >
      <!-- Base Gradient -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,158,191,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(212,148,58,0.1),transparent_50%)]"></div>

      <!-- Noise Texture (SVG Data URI) -->
      <div class="absolute inset-0 opacity-[0.03] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

      <!-- Abstract Shapes -->
      <div class="absolute top-1/4 left-1/4 w-32 h-32 border border-white/5 rounded-full blur-xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-40 h-40 border border-prestige-gold/5 rounded-full blur-2xl"></div>

      <!-- Optional: Text/Context Signal -->
      <div class="relative z-10 px-6 text-center">
        <div class="font-display text-sm font-light uppercase tracking-[0.2em] text-white/20">
          247iBET Intelligence
        </div>
      </div>
    </div>
  {/if}
</div>
