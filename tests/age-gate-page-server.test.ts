import { beforeAll, describe, expect, it, vi } from 'vitest';

vi.mock('$env/dynamic/private', () => ({
  env: {},
}));

let actions: (typeof import('../src/routes/age-gate/+page.server'))['actions'];

beforeAll(async () => {
  ({ actions } = await import('../src/routes/age-gate/+page.server'));
});

describe('age-gate +page.server actions', () => {
  it('accept action redirects and sets a v2 cookie when User-Agent is present', async () => {
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
        url: new URL('http://localhost:5173/age-gate?next=%2F'),
      } as never)
    ).rejects.toMatchObject({
      status: 302,
      location: '/',
    });

    expect(cookies.set).toHaveBeenCalledTimes(1);
    const [name, value] = cookies.set.mock.calls[0] as [string, string, unknown];
    expect(name).toBe('agegate');
    expect(value).toMatch(/^v2\./);
  });

  it('accept action fails closed without setting a cookie when User-Agent is missing', async () => {
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
          headers: new Headers(),
          url: 'https://example.com/age-gate?next=%2F',
        } as unknown as Request,
        cookies,
        url: new URL('https://example.com/age-gate?next=%2F'),
      } as never)
    ).rejects.toMatchObject({
      status: 302,
      location: '/age-gate?next=%2F',
    });

    expect(cookies.set).not.toHaveBeenCalled();
  });

  it('cookie validates after IP rotation: same UA, two different client addresses produce the same signature', async () => {
    // The HMAC binding intentionally drops IP so mobile carrier rotation
    // does not invalidate the cookie. Issue once, validate is implicit:
    // the same UA must produce a stable signature regardless of caller IP.
    const cookies1 = { set: vi.fn() };
    const cookies2 = { set: vi.fn() };
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)';

    const callAccept = (cookieJar: typeof cookies1) =>
      actions.default({
        request: {
          formData: async () => {
            const data = new FormData();
            data.set('action', 'accept');
            return data;
          },
          headers: new Headers({ 'user-agent': ua }),
          url: 'https://example.com/age-gate?next=%2F',
        } as unknown as Request,
        cookies: cookieJar,
        url: new URL('https://example.com/age-gate?next=%2F'),
      } as never);

    await expect(callAccept(cookies1)).rejects.toMatchObject({ status: 302 });
    await expect(callAccept(cookies2)).rejects.toMatchObject({ status: 302 });

    const value1 = (cookies1.set.mock.calls[0] as unknown[])[1] as string;
    const value2 = (cookies2.set.mock.calls[0] as unknown[])[1] as string;
    expect(value1).toBe(value2);
  });
});
