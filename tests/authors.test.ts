import { describe, expect, it } from 'vitest';
import { AUTHORS, getAuthor } from '../src/lib/authors.js';

describe('authors registry', () => {
  it('includes a complete editorial fallback profile', () => {
    expect(AUTHORS.editorial).toMatchObject({
      id: 'editorial',
      name: '247iBET Team',
      title: 'Platform Team',
    });
    expect(AUTHORS.editorial.bio.length).toBeGreaterThan(40);
    expect(AUTHORS.editorial.credentials.length).toBeGreaterThan(0);
  });

  it('returns requested authors when present', () => {
    expect(getAuthor('editorial')).toBe(AUTHORS.editorial);
  });

  it('falls back to editorial for unknown author ids', () => {
    expect(getAuthor('missing-author')).toBe(AUTHORS.editorial);
  });
});
