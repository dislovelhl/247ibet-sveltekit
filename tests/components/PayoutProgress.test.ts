/** @vitest-environment jsdom */
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import PayoutProgress from '../../src/lib/components/PayoutProgress.svelte';

function getStepCircles(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>('.relative.z-10 > div:first-child'));
}

function isCompleted(stepCircle: HTMLElement): boolean {
  // Completed steps get bg-prestige-gold (gold fill) per PayoutProgress.svelte:40.
  // Active steps use bg-navy-raised; future steps use bg-navy-black.
  return /\bbg-prestige-gold\b/.test(stepCircle.className);
}

describe('PayoutProgress', () => {
  it('default activeStep=1: step 1 is active (pulse), no completed checkmarks', () => {
    const { container } = render(PayoutProgress);

    const circles = getStepCircles(container);
    expect(circles).toHaveLength(3);

    expect(circles[0].className).toContain('animate-pulse');
    expect(isCompleted(circles[0])).toBe(false);

    expect(circles[1].className).not.toContain('animate-pulse');
    expect(circles[2].className).not.toContain('animate-pulse');
    expect(isCompleted(circles[1])).toBe(false);
    expect(isCompleted(circles[2])).toBe(false);
  });

  it('activeStep=2: step 1 completed (check), step 2 active (pulse), step 3 future', () => {
    const { container } = render(PayoutProgress, { props: { activeStep: 2 } });

    const circles = getStepCircles(container);
    expect(isCompleted(circles[0])).toBe(true);
    expect(circles[1].className).toContain('animate-pulse');
    expect(isCompleted(circles[2])).toBe(false);
    expect(circles[2].className).not.toContain('animate-pulse');
  });

  it('activeStep=3: steps 1+2 completed, step 3 active', () => {
    const { container } = render(PayoutProgress, { props: { activeStep: 3 } });

    const circles = getStepCircles(container);
    expect(isCompleted(circles[0])).toBe(true);
    expect(isCompleted(circles[1])).toBe(true);
    expect(circles[2].className).toContain('animate-pulse');
  });

  it('connecting-line progress width matches activeStep', () => {
    const { container } = render(PayoutProgress, { props: { activeStep: 2 } });

    const goldLine = container.querySelector<HTMLElement>('.absolute.bg-prestige-gold');
    expect(goldLine).toBeTruthy();
    expect(goldLine!.getAttribute('style')).toContain('width: 50%');
  });

  it('activeStep=0 (edge): no step is active and none are completed', () => {
    const { container } = render(PayoutProgress, { props: { activeStep: 0 } });

    const circles = getStepCircles(container);
    expect(circles[0].className).not.toContain('animate-pulse');
    expect(circles[1].className).not.toContain('animate-pulse');
    expect(circles[2].className).not.toContain('animate-pulse');
    expect(isCompleted(circles[0])).toBe(false);
    expect(isCompleted(circles[1])).toBe(false);
    expect(isCompleted(circles[2])).toBe(false);
  });

  it('activeStep=4 (edge): all steps render as completed (effective clamp)', () => {
    const { container } = render(PayoutProgress, { props: { activeStep: 4 } });

    const circles = getStepCircles(container);
    expect(isCompleted(circles[0])).toBe(true);
    expect(isCompleted(circles[1])).toBe(true);
    expect(isCompleted(circles[2])).toBe(true);
  });
});
