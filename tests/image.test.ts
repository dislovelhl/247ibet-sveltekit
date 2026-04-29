import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Pull `$app/environment` from the stub at tests/.stubs/app/environment.ts.
// Default stub: browser=false, dev=false.
import { optimizeSrcSet } from '../src/lib/image';

describe('optimizeSrcSet (real module)', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns the original src when not in a Vercel build', () => {
    // No VERCEL env set → canUseVercelOptimizer() = false → original src returned.
    const out = optimizeSrcSet('/images/hero.png');
    expect(out).toBe('/images/hero.png');
  });

  it('emits a sorted, comma-joined srcset when VERCEL=1 is set', () => {
    vi.stubEnv('VERCEL', '1');
    const out = optimizeSrcSet('/images/hero.png');
    expect(out).toContain('/_vercel/image?url=');
    expect(out).toContain('640w');
    expect(out).toContain('1672w');
    // Smallest width comes first.
    expect(out.indexOf('640w')).toBeLessThan(out.indexOf('960w'));
  });

  it('emits a srcset when VERCEL_URL is set even without VERCEL=1', () => {
    vi.stubEnv('VERCEL_URL', 'preview-abc.vercel.app');
    const out = optimizeSrcSet('/images/hero.png');
    expect(out).toContain('/_vercel/image?url=');
  });

  it('respects custom widths', () => {
    vi.stubEnv('VERCEL', '1');
    const out = optimizeSrcSet('/x.png', [320, 640]);
    expect(out).toContain('320w');
    expect(out).toContain('640w');
    expect(out).not.toContain('1280w');
  });

  it('passes the quality parameter through', () => {
    vi.stubEnv('VERCEL', '1');
    const out = optimizeSrcSet('/x.png', [640], 50);
    expect(out).toContain('q=50');
  });

  it('URL-encodes the source path', () => {
    vi.stubEnv('VERCEL', '1');
    const out = optimizeSrcSet('/images/hero with space.png', [640]);
    expect(out).toContain(encodeURIComponent('/images/hero with space.png'));
  });
});
