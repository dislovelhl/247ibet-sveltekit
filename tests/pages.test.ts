import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { PAGE_REGISTRY } from '../src/lib/workflows/pages.js';
import type { PageEntry } from '../src/lib/workflows/types.js';

describe('PAGE_REGISTRY', () => {
  it('has non-empty registry', () => {
    expect(PAGE_REGISTRY.length).toBeGreaterThan(0);
  });

  it('has home page', () => {
    const home = PAGE_REGISTRY.find((p) => p.slug === 'home');
    expect(home?.path).toBe('/');
    expect(home?.tier).toBe('hub');
  });

  it('has hub pages', () => {
    const hubs = PAGE_REGISTRY.filter((p) => p.tier === 'hub');
    expect(hubs.length).toBeGreaterThanOrEqual(3);
  });

  it('has utility pages', () => {
    const utils = PAGE_REGISTRY.filter((p) => p.tier === 'utility');
    const paths = utils.map((p) => p.path);
    expect(paths).toContain('/responsible-gambling');
    expect(paths).toContain('/about');
  });

  it('has guide pages with valid paths', () => {
    const guides = PAGE_REGISTRY.filter((p) => p.tier === 'guide');
    for (const page of guides) {
      expect(page.path.startsWith('/')).toBe(true);
      expect(page.slug.length).toBeGreaterThan(0);
    }
  });

  it('has unique slugs', () => {
    const slugs = PAGE_REGISTRY.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it('has all slugs matching their paths', () => {
    for (const page of PAGE_REGISTRY) {
      const expectedPath = `/${page.slug}`;
      if (page.slug === 'home') continue;
      expect(page.path).toBe(expectedPath);
    }
  });

  it('faq page has hasFaq true', () => {
    const faq = PAGE_REGISTRY.find((p) => p.slug === 'faq');
    expect(faq?.hasFaq).toBe(true);
  });
});

describe('PageEntry type structure', () => {
  it('has required fields', () => {
    const entry: PageEntry = {
      slug: 'test',
      path: '/test',
      hasFaq: false,
      tier: 'guide',
    };
    expect(entry.slug).toBe('test');
    expect(entry.path).toBe('/test');
    expect(entry.hasFaq).toBe(false);
    expect(entry.tier).toBe('guide');
  });
});

describe('dynamic route metadata', () => {
  it('does not leave literal slug templates in canonical hrefs', () => {
    const dynamicRouteFiles = [
      'src/routes/authors/[slug]/+page.svelte',
      'src/routes/events/[slug]/+page.svelte',
      'src/routes/news/[slug]/+page.svelte',
      'src/routes/payments/[slug]/+page.svelte',
      'src/routes/reviews/[slug]/+page.svelte',
    ];

    for (const file of dynamicRouteFiles) {
      const source = readFileSync(file, 'utf-8');
      expect(source).not.toMatch(/href="https:\/\/247ibet\.ca\/[^"]*\{\$page\.params\.slug\}"/);
    }
  });
});
