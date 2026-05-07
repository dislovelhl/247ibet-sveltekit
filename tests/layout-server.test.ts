import { beforeAll, describe, expect, it, vi } from 'vitest';

vi.mock('$env/dynamic/private', () => ({
  env: {},
}));

let load: (typeof import('../src/routes/+layout.server'))['load'];

beforeAll(async () => {
  ({ load } = await import('../src/routes/+layout.server'));
});

describe('+layout.server load', () => {
  it('redirects to the age gate when clientAddress is unavailable on non-bot requests', async () => {
    await expect(
      load({
        url: new URL('https://example.com/'),
        cookies: {
          get: vi.fn().mockReturnValue(undefined),
        },
        getClientAddress: () => {
          throw new Error('Could not determine clientAddress');
        },
        request: new Request('https://example.com/', {
          headers: {
            'user-agent': 'Mozilla/5.0',
          },
        }),
        setHeaders: vi.fn(),
      } as never)
    ).rejects.toMatchObject({
      status: 302,
      location: '/age-gate?next=%2F',
    });
  });
});
