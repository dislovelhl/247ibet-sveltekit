/**
 * Shared Svelte 5 runes for 247iBET
 */

import { browser } from '$app/environment';

/**
 * globalParallax - a single source of truth for mouse position
 * used for consistent 3D effects across page transitions.
 */
export const globalParallax = $state({
  x: 0,
  y: 0
});

if (browser) {
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -10 to +10 range (default factor 20)
    globalParallax.x = (clientX / innerWidth - 0.5) * 20;
    globalParallax.y = (clientY / innerHeight - 0.5) * 20;
  });
}

/**
 * useMouseParallax - tracks mouse position and returns normalized offset values
 * for 3D parallax effects.
 * 
 * @deprecated Use globalParallax instead for consistent cross-page motion.
 * @param factor - how much the parallax should move (default: 20)
 */
export function useMouseParallax(factor = 20) {
  let mouseX = $state(0);
  let mouseY = $state(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!browser) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX = (clientX / innerWidth - 0.5) * factor;
    mouseY = (clientY / innerHeight - 0.5) * factor;
  };

  return {
    get x() { return mouseX; },
    get y() { return mouseY; },
    handleMouseMove
  };
}
