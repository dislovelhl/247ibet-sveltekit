/**
 * Shared Svelte 5 runes for 247iBET
 */

import { browser } from '$app/environment';

/**
 * useMouseParallax - tracks mouse position and returns normalized offset values
 * for 3D parallax effects.
 * 
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
