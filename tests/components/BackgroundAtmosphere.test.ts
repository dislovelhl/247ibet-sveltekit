/** @vitest-environment jsdom */
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import BackgroundAtmosphere from '../../src/lib/components/BackgroundAtmosphere.svelte';

describe('BackgroundAtmosphere', () => {
  it('renders the container and image layer with correct styles', () => {
    const { container } = render(BackgroundAtmosphere, { 
      src: 'https://example.com/image.jpg',
      intensity: 0.8
    });

    const atmosphere = container.querySelector('.background-atmosphere');
    expect(atmosphere).toBeTruthy();
    expect(atmosphere?.getAttribute('aria-hidden')).toBe('true');

    const imageLayer = container.querySelector('.image-layer') as HTMLElement;
    expect(imageLayer).toBeTruthy();
    // In JSDOM, style.backgroundImage might be formatted differently or just 'url(https://example.com/image.jpg)'
    expect(imageLayer.style.backgroundImage).toContain('https://example.com/image.jpg');
    expect(imageLayer.style.getPropertyValue('--intensity')).toBe('0.8');
  });

  it('renders with default intensity', () => {
    const { container } = render(BackgroundAtmosphere, { 
      src: 'https://example.com/image.jpg'
    });

    const imageLayer = container.querySelector('.image-layer') as HTMLElement;
    expect(imageLayer.style.getPropertyValue('--intensity')).toBe('0.6');
  });

  it('contains mask and grain overlays', () => {
    const { container } = render(BackgroundAtmosphere, { 
      src: 'https://example.com/image.jpg'
    });

    expect(container.querySelector('.mask-overlay')).toBeTruthy();
    expect(container.querySelector('.grain-overlay')).toBeTruthy();
  });
});
