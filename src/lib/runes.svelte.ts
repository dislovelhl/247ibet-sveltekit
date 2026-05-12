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
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const supportsFinePointer = window.matchMedia('(pointer: fine)');
  const supportsHover = window.matchMedia('(hover: hover)');

  if (!prefersReducedMotion.matches && supportsFinePointer.matches && supportsHover.matches) {
    let frameId: number | null = null;
    let nextX = 0;
    let nextY = 0;

    const commit = () => {
      frameId = null;
      globalParallax.x = nextX;
      globalParallax.y = nextY;
    };

    window.addEventListener(
      'pointermove',
      (event) => {
        if (document.visibilityState !== 'visible') return;

        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        // Normalize to -10 to +10 range (default factor 20)
        nextX = (clientX / innerWidth - 0.5) * 20;
        nextY = (clientY / innerHeight - 0.5) * 20;

        if (frameId !== null) return;
        frameId = window.requestAnimationFrame(commit);
      },
      { passive: true },
    );

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') return;

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }

      nextX = 0;
      nextY = 0;
      globalParallax.x = 0;
      globalParallax.y = 0;
    });
  }
}
