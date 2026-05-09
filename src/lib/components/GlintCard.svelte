<script lang="ts">
  import { reveal, type RevealOptions } from '$lib/animations/reveal';

  let { children, class: className = "", style = "", useReveal = false, revealOptions = {} } = $props<{ 
    children: any; 
    class?: string; 
    style?: string;
    useReveal?: boolean;
    revealOptions?: RevealOptions;
  }>();

  let mouseX = $state(0);
  let mouseY = $state(0);
  let isHovering = $state(false);

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  function applyReveal(node: HTMLElement) {
    if (useReveal) {
      return reveal(node, revealOptions);
    }
  }
</script>

<div
  class="relative overflow-hidden {className}"
  {style}
  onmousemove={handleMouseMove}
  onmouseenter={() => (isHovering = true)}
  onmouseleave={() => (isHovering = false)}
  use:applyReveal
  role="presentation"
>
  {@render children()}

  <!-- Glint Layer -->
  <div
    class="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 {isHovering ? 'opacity-100' : ''}"
    style="background: radial-gradient(400px circle at {mouseX}px {mouseY}px, rgba(255, 255, 255, 0.08), transparent 80%);"
  ></div>

  <!-- Edge Glint (Subtle highlight on the very edge) -->
  <div
    class="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 {isHovering ? 'opacity-100' : ''}"
    style="background: radial-gradient(100px circle at {mouseX}px {mouseY}px, rgba(212, 148, 58, 0.15), transparent 80%);"
  ></div>
</div>
