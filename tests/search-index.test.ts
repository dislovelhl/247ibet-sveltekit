import { describe, it, expect } from 'vitest';
import { getFeaturedSearchItems, searchItems, SEARCH_ITEMS } from '../src/lib/search-index.js';

describe('searchItems', () => {
  it('returns title matches before weaker description matches', () => {
    const results = searchItems('interac casino');

    expect(results.length).toBeGreaterThanOrEqual(2);
    expect(results[0]?.href).toBe('/interac-casino-canada');
    expect(results.every((result) => result.score > 0)).toBe(true);
  });

  it('matches by normalized slug words', () => {
    const results = searchItems('sports betting sites');

    expect(results[0]?.href).toBe('/best-sports-betting-sites-canada');
  });

  it('normalizes punctuation and case in queries', () => {
    const results = searchItems('INTERAC, Casino!!');

    expect(results[0]?.href).toBe('/interac-casino-canada');
    expect(results[0]?.matchedTerms).toContain('interac');
  });

  it('returns no results for empty or whitespace-only queries', () => {
    expect(searchItems('')).toEqual([]);
    expect(searchItems('   ')).toEqual([]);
  });

  it('respects the requested result limit', () => {
    const results = searchItems('canada', 3);

    expect(results).toHaveLength(3);
  });

  it('only includes featured items in the featured set', () => {
    const results = getFeaturedSearchItems(10);

    expect(results.every((item) => item.featured === true)).toBe(true);
    expect(results.every((item) => SEARCH_ITEMS.includes(item))).toBe(true);
  });
});

describe('getFeaturedSearchItems', () => {
  it('returns a bounded non-empty starting set', () => {
    const results = getFeaturedSearchItems();

    expect(results.length).toBe(6);
    expect(results.every((result) => result.title.length > 0)).toBe(true);
  });
});
