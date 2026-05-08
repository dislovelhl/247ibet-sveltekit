/**
 * Scroll-triggered reveal system for 247iBET SvelteKit.
 * Uses IntersectionObserver to add 'reveal-visible' class when elements enter viewport.
 *
 * Exports: observeReveal, observeAllReveal, resetRevealObserver, RevealClass
 * Classes:  reveal-fade-up, reveal-scale-in, reveal-slide-left, reveal-slide-right
 * Stagger:  data-reveal-stagger="true" staggers children 50ms each
 */

export type RevealClass =
  | 'reveal-fade-up'
  | 'reveal-scale-in'
  | 'reveal-slide-left'
  | 'reveal-slide-right';

export interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

let _observer: IntersectionObserver | null = null;
let _prefersReducedMotion = false;

function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function ensureObserver(options: RevealOptions = {}): IntersectionObserver | null {
  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    return null;
  }

  if (_observer) return _observer;

  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options;
  _prefersReducedMotion = getPrefersReducedMotion();

  _observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          if (_prefersReducedMotion) {
            target.classList.add('reveal-visible');
            if (once) _observer!.unobserve(target);
            return;
          }

          // Handle stagger if parent has data-reveal-stagger
          const parent = target.parentElement;
          if (parent && parent.dataset.revealStagger === 'true') {
            const index = Array.from(parent.children).indexOf(target);
            target.style.setProperty('--reveal-delay', `${index * 50}ms`);
          }

          target.classList.add('reveal-visible');
          if (once) _observer!.unobserve(target);
        }
      });
    },
    { threshold, rootMargin }
  );

  return _observer;
}

/**
 * Observe a single element for scroll reveal.
 */
export function observeReveal(node: HTMLElement, options?: RevealOptions): void {
  const observer = ensureObserver(options);
  if (observer) {
    observer.observe(node);
  }
}

/**
 * Observe all elements matching a selector within a container.
 */
export function observeAllReveal(
  container: HTMLElement | Document,
  selector: string,
  options?: RevealOptions
): void {
  const observer = ensureObserver(options);
  if (!observer) return;

  const elements = container.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el) => observer.observe(el));
}

/**
 * Reset (destroy and recreate) the shared IntersectionObserver.
 * Useful after client-side navigation / route changes.
 */
export function resetRevealObserver(): void {
  if (_observer) {
    _observer.disconnect();
    _observer = null;
  }
  _prefersReducedMotion = getPrefersReducedMotion();
}

/**
 * Svelte action for easy use: <div use:reveal={{ once: true }}>
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  observeReveal(node, options);

  return {
    destroy() {
      if (_observer) {
        _observer.unobserve(node);
      }
    }
  };
}
