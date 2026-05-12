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
  y: 0,
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
