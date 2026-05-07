import { beforeAll, describe, expect, it, vi } from 'vitest';

vi.mock('$env/dynamic/private', () => ({
  env: {},
}));

let actions: (typeof import('../src/routes/age-gate/+page.server'))['actions'];

beforeAll(async () => {
  ({ actions } = await import('../src/routes/age-gate/+page.server'));
});

describe('age-gate +page.server actions', () => {
  it('accept action still redirects and sets a cookie on localhost when clientAddress is unavailable', async () => {
    const cookies = {
      set: vi.fn(),
    };

    await expect(
      actions.default({
        request: {
          formData: async () => {
            const data = new FormData();
            data.set('action', 'accept');
            return data;
          },
          headers: new Headers({
            'user-agent': 'Mozilla/5.0',
          }),
          url: 'http://localhost:5173/age-gate?next=%2F',
        } as unknown as Request,
        cookies,
        getClientAddress: () => {
          throw new Error('Could not determine clientAddress');
        },
        url: new URL('http://localhost:5173/age-gate?next=%2F'),
      } as never)
    ).rejects.toMatchObject({
      status: 302,
      location: '/',
    });

    expect(cookies.set).toHaveBeenCalledTimes(1);
  });

  it('accept action fails closed without setting a cookie when no fallback client address exists', async () => {
    const cookies = {
      set: vi.fn(),
    };

    await expect(
      actions.default({
        request: {
          formData: async () => {
            const data = new FormData();
            data.set('action', 'accept');
            return data;
          },
          headers: new Headers({
            'user-agent': 'Mozilla/5.0',
          }),
          url: 'https://example.com/age-gate?next=%2F',
        } as unknown as Request,
        cookies,
        getClientAddress: () => {
          throw new Error('Could not determine clientAddress');
        },
        url: new URL('https://example.com/age-gate?next=%2F'),
      } as never)
    ).rejects.toMatchObject({
      status: 302,
      location: '/age-gate?next=%2F',
    });

    expect(cookies.set).not.toHaveBeenCalled();
  });
});
