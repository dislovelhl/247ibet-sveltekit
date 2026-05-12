import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { actions } from '../src/routes/admin/login/+page.server.js';

const privateEnv = vi.hoisted(() => ({
  env: {} as Record<string, string | undefined>,
}));

vi.mock('$env/dynamic/private', () => privateEnv);

type AdminModule = typeof import('../src/lib/server/admin.js');

let requireAdminSession: AdminModule['requireAdminSession'];
let setAdminSession: AdminModule['setAdminSession'];
let clearAdminSession: AdminModule['clearAdminSession'];
let auditAdminAuthEvent: AdminModule['auditAdminAuthEvent'];
let getAdminLoginRateLimit: AdminModule['getAdminLoginRateLimit'];
let recordAdminLoginFailure: AdminModule['recordAdminLoginFailure'];
let clearAdminLoginFailures: AdminModule['clearAdminLoginFailures'];
let resetAdminLoginFailuresForTests: AdminModule['resetAdminLoginFailuresForTests'];

const SESSION_COOKIE = 'ibet_admin_session';
const ADMIN_TOKEN = 'test-admin-token';

beforeAll(async () => {
  ({ requireAdminSession, setAdminSession, clearAdminSession } = await import(
    '../src/lib/server/admin.js'
  ));
  ({
    auditAdminAuthEvent,
    getAdminLoginRateLimit,
    recordAdminLoginFailure,
    clearAdminLoginFailures,
    resetAdminLoginFailuresForTests
  } = await import('../src/lib/server/admin.js'));
});

beforeEach(() => {
  privateEnv.env.ADMIN_ENABLED = 'true';
  privateEnv.env.ADMIN_TOKEN = ADMIN_TOKEN;
  vi.restoreAllMocks();
  vi.clearAllMocks();
  resetAdminLoginFailuresForTests();
});

function makeLoginEvent({
  token,
  ip = '203.0.113.10',
  redirectTo = '/admin/affiliate-dashboard'
}: {
  token?: string;
  ip?: string;
  redirectTo?: string;
}) {
  const formData = new FormData();
  if (token !== undefined) {
    formData.set('token', token);
  }

  return {
    request: {
      formData: vi.fn().mockResolvedValue(formData),
      headers: new Headers({
        'user-agent': 'Vitest',
        'x-forwarded-for': ip
      })
    },
    cookies: {
      get: vi.fn(),
      set: vi.fn(),
      delete: vi.fn()
    },
    url: new URL(`https://example.com/admin/login?redirectTo=${encodeURIComponent(redirectTo)}`)
  };
}

describe('admin auth helpers', () => {
  it('requireAdminSession throws 404 when admin access is disabled', () => {
    privateEnv.env.ADMIN_ENABLED = 'false';

    const cookies = {
      get: vi.fn(),
    };

    let thrown: unknown;
    try {
      requireAdminSession(cookies as never, new URL('https://example.com/admin/affiliate-dashboard'));
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toMatchObject({ status: 404 });
    expect(cookies.get).not.toHaveBeenCalled();
  });

  it('requireAdminSession redirects to login when the session cookie is missing', () => {
    const cookies = {
      get: vi.fn().mockReturnValue(undefined),
    };

    let thrown: unknown;
    try {
      requireAdminSession(cookies as never, new URL('https://example.com/admin/affiliate-dashboard'));
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toMatchObject({
      status: 303,
      location: '/admin/login?redirectTo=%2Fadmin%2Faffiliate-dashboard',
    });
    expect(cookies.get).toHaveBeenCalledWith(SESSION_COOKIE);
  });

  it('requireAdminSession allows access when the cookie token matches', () => {
    const cookies = {
      get: vi.fn().mockReturnValue(ADMIN_TOKEN),
    };

    expect(() =>
      requireAdminSession(cookies as never, new URL('https://example.com/admin/affiliate-dashboard'))
    ).not.toThrow();

    expect(cookies.get).toHaveBeenCalledWith(SESSION_COOKIE);
  });

  it('setAdminSession stores the admin session cookie with the expected options', () => {
    const cookies = {
      set: vi.fn(),
    };

    expect(setAdminSession(cookies as never, ADMIN_TOKEN)).toBe(true);
    expect(cookies.set).toHaveBeenCalledTimes(1);
    expect(cookies.set).toHaveBeenCalledWith(SESSION_COOKIE, ADMIN_TOKEN, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 60 * 60 * 24,
    });
  });

  it('clearAdminSession deletes the admin session cookie at the root path', () => {
    const cookies = {
      delete: vi.fn(),
    };

    clearAdminSession(cookies as never);

    expect(cookies.delete).toHaveBeenCalledWith(SESSION_COOKIE, { path: '/' });
  });

  it('tracks failed admin login attempts and rate limits the sixth failure', () => {
    const headers = new Headers({ 'x-forwarded-for': '198.51.100.42' });

    for (let i = 0; i < 5; i += 1) {
      const attempt = recordAdminLoginFailure(headers);
      expect(attempt.limited).toBe(false);
      expect(attempt.failures).toBe(i + 1);
    }

    expect(getAdminLoginRateLimit(headers)).toMatchObject({
      limited: true,
      failures: 5
    });

    const blocked = recordAdminLoginFailure(headers);
    expect(blocked).toMatchObject({
      limited: true,
      failures: 6
    });
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });

  it('emits structured audit logs for admin auth events', () => {
    const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});

    auditAdminAuthEvent('login-failure', {
      clientKey: '198.51.100.42',
      userAgent: 'Vitest',
      path: '/admin/login',
      reason: 'invalid-token'
    });

    expect(infoSpy).toHaveBeenCalledTimes(1);
    expect(infoSpy).toHaveBeenCalledWith(
      '[admin-auth]',
      expect.stringContaining('"event":"login-failure"')
    );
  });

  it('clears admin login failures for a client', () => {
    const headers = new Headers({ 'x-forwarded-for': '198.51.100.25' });

    recordAdminLoginFailure(headers);
    clearAdminLoginFailures(headers);

    expect(getAdminLoginRateLimit(headers)).toMatchObject({
      limited: false,
      failures: 0
    });
  });

  it('records a login success, clears failures, and redirects to the requested page', async () => {
    const event = makeLoginEvent({ token: ADMIN_TOKEN, ip: '198.51.100.25' });
    recordAdminLoginFailure(event.request.headers);

    const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});

    await expect(actions.default(event as never)).rejects.toMatchObject({
      status: 303,
      location: '/admin/affiliate-dashboard'
    });
    expect(event.cookies.set).toHaveBeenCalledWith(
      SESSION_COOKIE,
      ADMIN_TOKEN,
      expect.objectContaining({
        httpOnly: true,
        sameSite: 'strict',
        secure: true
      })
    );
    expect(getAdminLoginRateLimit(event.request.headers)).toMatchObject({
      limited: false,
      failures: 0
    });
    expect(infoSpy).toHaveBeenCalledWith(
      '[admin-auth]',
      expect.stringContaining('"event":"login-success"')
    );
  });

  it('returns 429 after repeated invalid login attempts from the same client', async () => {
    const event = makeLoginEvent({ token: 'wrong-token', ip: '203.0.113.77' });
    const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});

    for (let i = 0; i < 5; i += 1) {
      const result = await actions.default(event as never);
      expect(result).toMatchObject({ status: 401 });
    }

    const blocked = await actions.default(event as never);
    expect(blocked).toMatchObject({ status: 429 });
    expect(infoSpy).toHaveBeenCalledWith(
      '[admin-auth]',
      expect.stringContaining('"event":"login-rate-limited"')
    );
  });
});
