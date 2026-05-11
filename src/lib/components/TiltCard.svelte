<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string;
  }
  let { children, class: className = '' }: Props = $props();

  let mouseX = $state(0);
  let mouseY = $state(0);
  let rotationX = $state(0);
  let rotationY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX = (x / rect.width - 0.5) * 2;
    mouseY = (y / rect.height - 0.5) * 2;
    
    rotationX = -mouseY * 10; // degrees
    rotationY = mouseX * 10; // degrees
  }

  function handleMouseLeave() {
    rotationX = 0;
    rotationY = 0;
  }
</script>

<div
  class="tilt-card-container {className}"
  onmousemove={handleMouseMove}
  onmouseleave={handleMouseLeave}
  role="presentation"
  style="perspective: 1000px;"
>
  <div
    class="tilt-card-inner h-full w-full transition-transform duration-200 ease-out"
    style="transform: rotateX({rotationX}deg) rotateY({rotationY}deg);"
  >
    {@render children()}
  </div>
</div>

<style>
  @media (prefers-reduced-motion: reduce) {
    .tilt-card-inner {
      transform: none !important;
    }
  }
</style>
