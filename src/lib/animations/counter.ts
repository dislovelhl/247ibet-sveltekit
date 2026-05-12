/**
 * Animated number counter using requestAnimationFrame + easeOutExpo.
 * Svelte 5 compatible.
 *
 * Exports: animateCounter, counter (Svelte action), useAnimatedCounter (Svelte 5 rune)
 */

export interface CounterOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  ease?: (t: number) => number;
}

/** easeOutExpo: decelerating exponential ease */
export const easeOutExpo = (t: number): number =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

/**
 * Format a number with commas and fixed decimal places.
 * Example: 1234567.89 → "1,234,567.89"
 */
function formatNumber(value: number, decimals: number): string {
  const [intPart, fracPart] = value.toFixed(decimals).split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return fracPart !== undefined ? `${withCommas}.${fracPart}` : withCommas;
}

/**
 * Low-level: animate a counter from start to end, calling callback with formatted strings.
 * Default prefix: empty
 */
export function animateCounter(
  callback: (value: string) => void,
  options: CounterOptions
): void {
  const {
    start = 0,
    end,
    duration = 2000,
    decimals = 0,
    prefix = '',
    suffix = '',
    ease = easeOutExpo
  } = options;

  let startTimestamp: number | null = null;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easedProgress = ease(progress);

    const current = easedProgress * (end - start) + start;
    const formatted = formatNumber(current, decimals);

    callback(`${prefix}${formatted}${suffix}`);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

/**
 * Svelte action: <span use:counter={{ end: 5000 }}>0</span>
 * Default prefix is empty.
 */
export function counter(node: HTMLElement, options: CounterOptions): void {
  animateCounter((val) => {
    node.textContent = val;
  }, options);
}

/**
 * Svelte 5 rune for use in .svelte.ts files.
 * Returns a reactive $state string that animates to the target value.
 *
 * Usage:
 *   const jackpot = useAnimatedCounter({ end: 1_000_000, decimals: 2, prefix: 'C$' });
 *   // {{ jackpot.value }} → "C$1,000,000.00"
 */
export function useAnimatedCounter(options: CounterOptions) {
  const { start = 0, decimals = 0, prefix = '' } = options;
  const initial = formatNumber(start, decimals);

  // We need to return an object with a .value that is reactive.
  // Use a plain object with a value property that gets mutated.
  const state = {
    value: `${prefix}${initial}`,
    /** Re-trigger the animation (e.g. when target changes) */
    trigger: (newOptions?: Partial<CounterOptions>) => {
      const merged = { ...options, ...newOptions };
      animateCounter((val) => {
        state.value = val;
      }, merged);
    }
  };

  // Auto-trigger on creation
  state.trigger();

  return state;
}
