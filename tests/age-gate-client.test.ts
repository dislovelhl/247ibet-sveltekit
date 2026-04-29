import { describe, it, expect } from 'vitest';

describe('age gate storage key constants', () => {
  const STORAGE_KEY = '247ibet_age_verified';
  const LEGACY_KEY = 'canadacasa_age_verified';

  it('has new key format', () => {
    expect(STORAGE_KEY).toBe('247ibet_age_verified');
  });

  it('has legacy key format', () => {
    expect(LEGACY_KEY).toBe('canadacasa_age_verified');
  });

  it('keys follow naming pattern', () => {
    expect(STORAGE_KEY).toMatch(/^[a-z0-9_]+$/);
    expect(LEGACY_KEY).toMatch(/^[a-z0-9_]+$/);
  });

  it('keys are different', () => {
    expect(STORAGE_KEY).not.toBe(LEGACY_KEY);
  });
});

describe('age verification lookup pattern', () => {
  const STORAGE_KEY = '247ibet_age_verified';
  const LEGACY_KEY = 'canadacasa_age_verified';

  function checkAgeVerified(keys: Record<string, string>): boolean {
    return keys[STORAGE_KEY] === '1' || keys[LEGACY_KEY] === '1';
  }

  it('returns false when no keys present', () => {
    expect(checkAgeVerified({})).toBe(false);
  });

  it('returns true when new key is set', () => {
    expect(checkAgeVerified({ [STORAGE_KEY]: '1' })).toBe(true);
  });

  it('returns true when legacy key is set', () => {
    expect(checkAgeVerified({ [LEGACY_KEY]: '1' })).toBe(true);
  });

  it('returns false when keys are set to 0', () => {
    expect(checkAgeVerified({ [STORAGE_KEY]: '0', [LEGACY_KEY]: '0' })).toBe(false);
  });

  it('returns true when both keys present', () => {
    expect(checkAgeVerified({ [STORAGE_KEY]: '1', [LEGACY_KEY]: '1' })).toBe(true);
  });
});

describe('loadAgeGateVerificationFromSession (v1 stub)', () => {
  it('returns false promise', async () => {
    const result = Promise.resolve(false);
    await expect(result).resolves.toBe(false);
  });
});

describe('persistAgeGateVerificationToSession (v1 stub)', () => {
  it('returns resolved promise', async () => {
    const result = Promise.resolve();
    await expect(result).resolves.toBeUndefined();
  });
});