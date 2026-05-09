/** @vitest-environment jsdom */
import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';
import GlintCard from '../../src/lib/components/GlintCard.svelte';

const childSnippet = createRawSnippet(() => ({
  render: () => '<span data-testid="glint-child">child content</span>',
}));

describe('GlintCard', () => {
  it('renders children inside a wrapper div with default classes', () => {
    const { container, getByTestId } = render(GlintCard, {
      props: { children: childSnippet },
    });

    expect(getByTestId('glint-child').textContent).toBe('child content');

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain('relative');
    expect(wrapper.className).toContain('overflow-hidden');
  });

  it('applies custom class and style props', () => {
    const { container } = render(GlintCard, {
      props: {
        children: childSnippet,
        class: 'custom-glint',
        style: 'border: 1px solid red;',
      },
    });

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain('custom-glint');
    expect(wrapper.getAttribute('style')).toContain('border: 1px solid red');
  });

  it('mouse-move updates the radial-gradient position on glint layers', async () => {
    const { container } = render(GlintCard, {
      props: { children: childSnippet },
    });

    const wrapper = container.firstElementChild as HTMLElement;
    const glintLayers = wrapper.querySelectorAll<HTMLElement>('div.pointer-events-none');
    expect(glintLayers.length).toBe(2);

    await fireEvent.mouseMove(wrapper, { clientX: 120, clientY: 80 });

    const layerStyles = Array.from(glintLayers).map((el) => el.getAttribute('style') ?? '');
    expect(layerStyles[0]).toMatch(/circle at 120px 80px/);
    expect(layerStyles[1]).toMatch(/circle at 120px 80px/);
  });

  it('hover toggles opacity class on glint layers', async () => {
    const { container } = render(GlintCard, {
      props: { children: childSnippet },
    });

    const wrapper = container.firstElementChild as HTMLElement;
    const glintLayers = wrapper.querySelectorAll<HTMLElement>('div.pointer-events-none');

    expect(glintLayers[0].className).not.toContain('opacity-100');

    await fireEvent.mouseEnter(wrapper);
    expect(glintLayers[0].className).toContain('opacity-100');

    await fireEvent.mouseLeave(wrapper);
    expect(glintLayers[0].className).not.toContain('opacity-100');
  });

  it('mounts without error when useReveal is true (reveal directive is applied)', () => {
    const { container } = render(GlintCard, {
      props: {
        children: childSnippet,
        useReveal: true,
        revealOptions: { threshold: 0.25, once: true },
      },
    });

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toBeTruthy();
    expect(wrapper.querySelector('[data-testid="glint-child"]')).toBeTruthy();
  });
});
