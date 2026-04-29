import { afterEach, describe, expect, it, vi } from 'vitest';

async function loadSiteModule(env: Record<string, string | undefined> = {}) {
  vi.resetModules();
  vi.unstubAllEnvs();

  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) continue;
    vi.stubEnv(key, value);
  }

  return import('../src/lib/site');
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe('src/lib/site.ts', () => {
  it('uses localhost in dev mode by default', async () => {
    const { SITE } = await loadSiteModule();
    expect(SITE.url).toBe('http://localhost:5173');
  });

  it('trims trailing slash from PUBLIC_SITE_URL', async () => {
    const { SITE } = await loadSiteModule({ PUBLIC_SITE_URL: 'https://example.com/' });
    expect(SITE.url).toBe('https://example.com');
  });

  it('prefers VERCEL_URL when PUBLIC_SITE_URL is missing', async () => {
    const { SITE } = await loadSiteModule({ PUBLIC_SITE_URL: '', VERCEL_URL: 'my-app.vercel.app' });
    expect(SITE.url).toBe('https://my-app.vercel.app');
  });

  it('builds canonical URLs from SITE.url', async () => {
    const { canonicalUrl } = await loadSiteModule({ PUBLIC_SITE_URL: 'https://247ibet.ca' });
    expect(canonicalUrl('/guides/odds')).toBe('https://247ibet.ca/guides/odds');
    expect(canonicalUrl('about')).toBe('https://247ibet.ca/about');
    expect(canonicalUrl('/about?ref=nav')).toBe('https://247ibet.ca/about?ref=nav');
  });

  it('builds the OG image URL from SITE.ogImage', async () => {
    const { ogImageUrl } = await loadSiteModule({ PUBLIC_SITE_URL: 'https://247ibet.ca' });
    expect(ogImageUrl()).toBe('https://247ibet.ca/og-image.png');
  });

  it('exposes the expected brand metadata', async () => {
    const { SITE, SEO, TRACKING, PARTNER } = await loadSiteModule({ PUBLIC_SITE_URL: 'https://247ibet.ca' });

    expect(SITE.name).toBe('247iBET');
    expect(SITE.locale).toBe('en-CA');
    expect(SITE.handles.x).toBe('@247ibet');
    expect(SEO.titleTemplate).toContain('%s');
    expect(TRACKING.ageVerifiedKey).toContain('247ibet');
    expect(PARTNER.casinoUrl).toBe('https://247ibet.ca/casino');
  });
});