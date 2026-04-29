import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getBaseUrl } from '../src/workflows/steps/get-base-url';

describe('getBaseUrl', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('falls back to the canonical 247ibet.ca URL when no env is set', async () => {
    expect(await getBaseUrl()).toBe('https://247ibet.ca');
  });

  it('prefers PUBLIC_SITE_URL when set', async () => {
    vi.stubEnv('PUBLIC_SITE_URL', 'https://staging.247ibet.ca');
    expect(await getBaseUrl()).toBe('https://staging.247ibet.ca');
  });

  it('trims whitespace from PUBLIC_SITE_URL', async () => {
    vi.stubEnv('PUBLIC_SITE_URL', '  https://staging.247ibet.ca  ');
    expect(await getBaseUrl()).toBe('https://staging.247ibet.ca');
  });

  it('falls through to VERCEL_URL when PUBLIC_SITE_URL is empty', async () => {
    vi.stubEnv('PUBLIC_SITE_URL', '');
    vi.stubEnv('VERCEL_URL', 'preview-abc.vercel.app');
    expect(await getBaseUrl()).toBe('https://preview-abc.vercel.app');
  });

  it('uses VERCEL_URL when only it is set', async () => {
    vi.stubEnv('VERCEL_URL', 'preview-abc.vercel.app');
    expect(await getBaseUrl()).toBe('https://preview-abc.vercel.app');
  });
});
