import { describe, it, expect } from 'vitest';
import {
  IBET_URLS,
  IBET_PROFILE,
  IBET_CTA,
  IBET_DISCLAIMER,
  deriveLoginUrl,
} from '../src/lib/ibet-brand';
import { SITE, PARTNER } from '../src/lib/site';

describe('deriveLoginUrl', () => {
  it('correctly handles trailing /home', () => {
    expect(deriveLoginUrl('https://partner.ca/home')).toBe('https://partner.ca/login');
  });

  it('correctly handles trailing slash', () => {
    expect(deriveLoginUrl('https://partner.ca/')).toBe('https://partner.ca/login');
  });

  it('correctly handles URL without special suffix', () => {
    expect(deriveLoginUrl('https://partner.ca')).toBe('https://partner.ca/login');
  });

  it('trims whitespace', () => {
    expect(deriveLoginUrl('  https://partner.ca/home  ')).toBe('https://partner.ca/login');
  });

  it('does not replace /home if it is part of the domain', () => {
    expect(deriveLoginUrl('https://home-partner.ca/home')).toBe('https://home-partner.ca/login');
  });

  it('does not replace /home if it is in the middle of the path', () => {
    expect(deriveLoginUrl('https://partner.ca/home/index')).toBe(
      'https://partner.ca/home/index/login',
    );
  });
});

describe('IBET_URLS (real module)', () => {
  it('matches snapshot', () => {
    expect(IBET_URLS).toMatchSnapshot();
  });

  it('register equals partner.url', () => {
    expect(IBET_URLS.register).toBe(PARTNER.url);
  });

  it('casino equals partner.casinoUrl', () => {
    expect(IBET_URLS.casino).toBe(PARTNER.casinoUrl);
  });

  it('deposit is derived from SITE.url', () => {
    expect(IBET_URLS.deposit).toBe(`${SITE.url}/deposit`);
  });

  it('login is derived using deriveLoginUrl helper', () => {
    expect(IBET_URLS.login).toBe(deriveLoginUrl(PARTNER.url));
  });

  it('rg points to /responsible-gambling on SITE.url', () => {
    expect(IBET_URLS.rg).toBe(`${SITE.url}/responsible-gambling`);
  });
});

describe('IBET_PROFILE (real module)', () => {
  it('lists all 10 expected provinces', () => {
    expect(IBET_PROFILE.provinces).toHaveLength(10);
    expect(IBET_PROFILE.provinces).toContain('ON');
    expect(IBET_PROFILE.provinces).toContain('AB');
  });

  it('has at least one feature, trust signal, pro, and con', () => {
    expect(IBET_PROFILE.features.length).toBeGreaterThan(0);
    expect(IBET_PROFILE.trustSignals.length).toBeGreaterThan(0);
    expect(IBET_PROFILE.pros.length).toBeGreaterThan(0);
    expect(IBET_PROFILE.cons.length).toBeGreaterThan(0);
  });

  it('every feature has icon, label, detail, accent, bg', () => {
    for (const f of IBET_PROFILE.features) {
      expect(f.icon).toBeTruthy();
      expect(f.label).toBeTruthy();
      expect(f.detail).toBeTruthy();
      expect(f.accent).toBeTruthy();
      expect(f.bg).toBeTruthy();
    }
  });

  it('agcoLicensed flag is explicit (not undefined)', () => {
    expect(typeof IBET_PROFILE.agcoLicensed).toBe('boolean');
  });

  it('minAge is an integer >= 18', () => {
    expect(Number.isInteger(IBET_PROFILE.minAge)).toBe(true);
    expect(IBET_PROFILE.minAge).toBeGreaterThanOrEqual(18);
  });
});

describe('IBET_CTA / IBET_DISCLAIMER (real module)', () => {
  it('every CTA value is a non-empty string', () => {
    for (const v of Object.values(IBET_CTA)) {
      expect(typeof v).toBe('string');
      expect((v as string).length).toBeGreaterThan(0);
    }
  });

  it('disclaimer mentions age + responsible play language', () => {
    expect(IBET_DISCLAIMER).toMatch(/18\+|19\+/);
    expect(IBET_DISCLAIMER.toLowerCase()).toContain('responsibly');
    expect(IBET_DISCLAIMER).toContain('T&Cs');
  });

  it('uses affiliate-guide CTAs instead of operator-style CTAs', () => {
    expect(IBET_CTA.primary).toBe('Visit Partner Site');
    expect(IBET_CTA.register).toBe('Visit Partner Site');
    expect(IBET_CTA.deposit).toBe('Compare Payouts');
    expect(Object.values(IBET_CTA)).not.toContain('Play Now');
  });

  it('keeps the trust copy cautious about licensing and commissions', () => {
    const profileText = [
      IBET_PROFILE.tagline,
      IBET_PROFILE.withdrawalSpeed,
      ...IBET_PROFILE.features.flatMap((feature) => [feature.label, feature.detail]),
      ...IBET_PROFILE.trustSignals,
      ...IBET_PROFILE.pros,
      ...IBET_PROFILE.cons,
      IBET_DISCLAIMER,
    ].join(' ');

    expect(profileText).toContain('15-30 minutes after approval');
    expect(profileText).toContain('independent guide');
    expect(profileText).toContain('may earn commission');
    expect(profileText).toContain('Confirm eligibility and licensing');
    expect(profileText).not.toMatch(
      /5,000\+|Play Now|Fully regulated|Kahnawake Licensed|AGCO compliance/,
    );
  });
});
