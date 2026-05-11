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
  it('does not force jdzd preview hosts back to the production domain', () => {
    expect(config.redirects ?? []).toEqual([]);
  });

  it('does not include legacy jdzd host matchers', () => {
    const hosts = (config.redirects ?? []).flatMap((r) =>
      (r.has ?? []).filter((h) => h.type === 'host').map((h) => h.value)
    );
    expect(hosts).not.toContain('jdzd.com');
    expect(hosts).not.toContain('www.jdzd.com');
  });
});
