import { describe, expect, it } from 'vitest';

import { getClientAddressOrFallback } from '../src/lib/server/client-address';

describe('getClientAddressOrFallback', () => {
  it('returns loopback for localhost when getClientAddress throws', () => {
    const request = new Request('http://localhost:5173/');

    expect(
      getClientAddressOrFallback(request, () => {
        throw new Error('Could not determine clientAddress');
      })
    ).toBe('127.0.0.1');
  });

  it('returns loopback for IPv6 localhost when getClientAddress throws', () => {
    const request = new Request('http://[::1]:5173/');

    expect(
      getClientAddressOrFallback(request, () => {
        throw new Error('Could not determine clientAddress');
      })
    ).toBe('127.0.0.1');
  });

  it('fails closed for non-local requests when getClientAddress throws', () => {
    const request = new Request('https://example.com/');

    expect(
      getClientAddressOrFallback(request, () => {
        throw new Error('Could not determine clientAddress');
      })
    ).toBeNull();
  });
});
