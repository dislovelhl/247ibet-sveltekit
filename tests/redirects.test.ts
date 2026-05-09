import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface VercelRedirect {
  source: string;
  destination: string;
  permanent: boolean;
  has?: Array<{ type: string; value: string }>;
}

interface VercelConfig {
  redirects?: VercelRedirect[];
}

const vercelJsonPath = resolve(__dirname, '..', 'vercel.json');
const config: VercelConfig = JSON.parse(readFileSync(vercelJsonPath, 'utf-8'));

describe('vercel.json redirects', () => {
  it('declares a redirects array with the jdzd hosts', () => {
    expect(Array.isArray(config.redirects)).toBe(true);
    expect(config.redirects).toHaveLength(2);
  });

  it('every redirect path-preserves with a permanent (308) status', () => {
    for (const redirect of config.redirects ?? []) {
      expect(redirect.source).toBe('/:path*');
      expect(redirect.destination).toBe('https://247ibet.ca/:path*');
      expect(redirect.permanent).toBe(true);
    }
  });

  it('one redirect targets jdzd.com and one targets www.jdzd.com', () => {
    const hosts = (config.redirects ?? []).flatMap((r) =>
      (r.has ?? []).filter((h) => h.type === 'host').map((h) => h.value)
    );
    expect(hosts.sort()).toEqual(['jdzd.com', 'www.jdzd.com']);
  });

  it('every host matcher is structured correctly', () => {
    for (const redirect of config.redirects ?? []) {
      expect(redirect.has).toBeDefined();
      expect(redirect.has).toHaveLength(1);
      expect(redirect.has![0].type).toBe('host');
      expect(['jdzd.com', 'www.jdzd.com']).toContain(redirect.has![0].value);
    }
  });
});
