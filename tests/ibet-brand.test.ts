import { describe, it, expect } from 'vitest';

describe('IBET_URLS derivation logic', () => {
  const SITE_URL = 'https://247ibet.ca';
  const PARTNER_URL = 'https://247ibet.ca/home';

  const IBET_URLS = {
    register: PARTNER_URL,
    casino: `${SITE_URL}/casino`,
    deposit: `${SITE_URL}/deposit`,
    login: `${PARTNER_URL.replace('/home', '')}/login`,
    rg: `${SITE_URL}/responsible-gambling`,
    withdrawals: `${SITE_URL}/withdraw`,
    app: `${SITE_URL}/apps`,
    reviews: `${SITE_URL}/reviews`,
    news: `${SITE_URL}/news`,
    events: `${SITE_URL}/events`,
    guides: `${SITE_URL}/guides`,
    sportsbook: `${SITE_URL}/sportsbook`,
  };

  it('register URL points to partner', () => {
    expect(IBET_URLS.register).toBe('https://247ibet.ca/home');
  });

  it('login URL strips /home from partner URL', () => {
    expect(IBET_URLS.login).toBe('https://247ibet.ca/login');
  });

  it('casino URL uses SITE_URL', () => {
    expect(IBET_URLS.casino).toBe('https://247ibet.ca/casino');
  });

  it('deposit URL uses SITE_URL', () => {
    expect(IBET_URLS.deposit).toBe('https://247ibet.ca/deposit');
  });

  it('responsible gambling URL uses SITE_URL', () => {
    expect(IBET_URLS.rg).toBe('https://247ibet.ca/responsible-gambling');
  });

  it('withdrawals uses SITE_URL', () => {
    expect(IBET_URLS.withdrawals).toBe('https://247ibet.ca/withdraw');
  });

  it('apps uses SITE_URL', () => {
    expect(IBET_URLS.app).toBe('https://247ibet.ca/apps');
  });

  it('all URLs are valid https', () => {
    for (const url of Object.values(IBET_URLS)) {
      expect(url.startsWith('https://')).toBe(true);
    }
  });
});

describe('IBET_PROFILE baseline', () => {
  const IBET_PROFILE = {
    name: '247iBET',
    established: 2020,
    minAge: 18,
    provinces: ['ON', 'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'PE', 'QC', 'SK'],
    trustSignals: ['Secure Interac e-Transfer', 'iGaming License', 'SSL Encrypted', '18+ Only'],
    pros: ['Canadian-first: CAD accounts and support', 'Fast payouts 24-48h', '24/7 support', 'No fees'],
    cons: ['Not available in Quebec'],
    features: [
      { label: 'Interac', value: 'Instant' },
      { label: 'Payouts', value: '24-48h' },
      { label: 'Support', value: '24/7' },
      { label: 'License', value: 'iGO' },
    ],
    trustPanel: [
      { label: 'Licence', value: 'iGO' },
      { label: 'Payments', value: 'Interac' },
      { label: 'Support', value: '24/7' },
      { label: 'Security', value: 'SSL' },
    ],
  };

  it('has correct brand name', () => {
    expect(IBET_PROFILE.name).toBe('247iBET');
  });

  it('has established year', () => {
    expect(IBET_PROFILE.established).toBe(2020);
  });

  it('has correct minimum age', () => {
    expect(IBET_PROFILE.minAge).toBe(18);
  });

  it('includes Ontario and Alberta provinces', () => {
    expect(IBET_PROFILE.provinces).toContain('ON');
    expect(IBET_PROFILE.provinces).toContain('AB');
  });

  it('has trust signals', () => {
    expect(IBET_PROFILE.trustSignals).toContain('Secure Interac e-Transfer');
    expect(IBET_PROFILE.trustSignals).toContain('iGaming License');
  });

  it('has Canadian-first as first pro', () => {
    expect(IBET_PROFILE.pros[0]).toContain('Canadian-first');
  });

  it('has one con for Quebec', () => {
    expect(IBET_PROFILE.cons).toHaveLength(1);
  });

  it('has four feature cards', () => {
    expect(IBET_PROFILE.features).toHaveLength(4);
  });

  it('has four trust panel items', () => {
    expect(IBET_PROFILE.trustPanel).toHaveLength(4);
  });

  it('first feature is Interac', () => {
    expect(IBET_PROFILE.features[0]?.label).toContain('Interac');
  });

  it('first trust panel is Licence', () => {
    expect(IBET_PROFILE.trustPanel[0]?.label).toBe('Licence');
  });
});

describe('IBET_CTA baseline', () => {
  const IBET_CTA = {
    primary: 'Play Now',
    deposit: 'Interac Gateway',
    fastPayout: 'Fast Payout',
    visit: 'Visit',
  };

  it('has short action-oriented labels', () => {
    expect(IBET_CTA.primary).toBe('Play Now');
    expect(IBET_CTA.deposit).toBe('Interac Gateway');
  });

  it('has payout reference', () => {
    expect(IBET_CTA.fastPayout).toContain('Payout');
  });
});

describe('IBET_DISCLAIMER baseline', () => {
  const IBET_DISCLAIMER =
    'Must be 18+/19+ to play. Play responsibly. Gambling involves financial risk and may lead to problem gambling if not managed.';

  it('contains responsible gambling language', () => {
    expect(IBET_DISCLAIMER).toContain('Play responsibly');
  });

  it('contains age requirement', () => {
    expect(IBET_DISCLAIMER).toContain('18+/19+');
  });

  it('contains risk warning', () => {
    expect(IBET_DISCLAIMER).toContain('financial risk');
  });
});