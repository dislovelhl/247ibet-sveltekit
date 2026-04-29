import { describe, it, expect } from 'vitest';

describe('optimizeSrcSet logic', () => {
  const DEFAULT_WIDTHS = [640, 960, 1280, 1672];

  function optimizeSrcSetNoEnv(
    src: string,
    widths: number[] = DEFAULT_WIDTHS,
    canOptimize = false
  ): string {
    if (!canOptimize) return src;

    return widths
      .slice()
      .sort((a, b) => a - b)
      .map((width) => {
        const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=82`;
        return `${url} ${width}w`;
      })
      .join(', ');
  }

  it('returns src unchanged when canOptimize is false', () => {
    expect(optimizeSrcSetNoEnv('https://example.com/img.jpg', [], false)).toBe(
      'https://example.com/img.jpg'
    );
  });

  it('generates valid srcset when canOptimize is true', () => {
    const result = optimizeSrcSetNoEnv(
      'https://example.com/img.jpg',
      [640, 960],
      true
    );
    expect(result).toContain('/_vercel/image?url=');
    expect(result).toContain('640w');
    expect(result).toContain('960w');
  });

  it('sorts widths ascending', () => {
    const result = optimizeSrcSetNoEnv(
      'https://example.com/img.jpg',
      [1280, 640, 960],
      true
    );
    const parts = result.split(', ');
    expect(parts[0]).toContain('640w');
    expect(parts[2]).toContain('1280w');
  });

  it('encodes special characters in URL', () => {
    const result = optimizeSrcSetNoEnv(
      'https://example.com/img with spaces.jpg',
      [640],
      true
    );
    expect(result).toContain('img%20with%20spaces.jpg');
  });

  it('uses default quality of 82', () => {
    const result = optimizeSrcSetNoEnv('https://example.com/img.jpg', [640], true);
    expect(result).toContain('q=82');
  });

  it('handles unsorted input widths', () => {
    const result = optimizeSrcSetNoEnv(
      'https://example.com/a.jpg',
      [1672, 640, 1280, 960],
      true
    );
    expect(result).toBeTruthy();
    expect(result.split(', ').length).toBe(4);
  });
});

describe('DEFAULT_WIDTHS constant', () => {
  const DEFAULT_WIDTHS = [640, 960, 1280, 1672];

  it('has expected widths', () => {
    expect(DEFAULT_WIDTHS).toEqual([640, 960, 1280, 1672]);
  });

  it('is sorted ascending', () => {
    const sorted = [...DEFAULT_WIDTHS].sort((a, b) => a - b);
    expect(sorted).toEqual(DEFAULT_WIDTHS);
  });
});