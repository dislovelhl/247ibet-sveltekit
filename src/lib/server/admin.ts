import { error, redirect, type Cookies } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { safeEq } from './auth.js';

const SESSION_COOKIE = 'ibet_admin_session';
const ADMIN_LOGIN_MAX_FAILURES = 5;
const ADMIN_LOGIN_WINDOW_MS = 10 * 60 * 1000;

type AdminLoginAttemptState = {
  failures: number;
  resetAt: number;
};

const adminLoginAttempts = new Map<string, AdminLoginAttemptState>();

function getAdminClientKey(headers: Headers): string {
  return (
    headers.get('cf-connecting-ip')?.trim() ||
    headers.get('x-real-ip')?.trim() ||
    headers
      .get('x-forwarded-for')
      ?.split(',')
      .map((value) => value.trim())
      .find(Boolean) ||
    'unknown'
  );
}

function getAdminAttemptState(headers: Headers): AdminLoginAttemptState | undefined {
  const key = getAdminClientKey(headers);
  const state = adminLoginAttempts.get(key);

  if (!state) {
    return undefined;
  }

  if (state.resetAt <= Date.now()) {
    adminLoginAttempts.delete(key);
    return undefined;
  }

  return state;
}

export function auditAdminAuthEvent(
  event: 'login-success' | 'login-failure' | 'login-rate-limited' | 'logout',
  details: {
    clientKey: string;
    userAgent: string;
    path: string;
    reason?: string;
    redirectTo?: string;
    failures?: number;
    retryAfterSeconds?: number;
  }
): void {
  console.info(
    '[admin-auth]',
    JSON.stringify({
      event,
      timestamp: new Date().toISOString(),
      ...details
    })
  );
}

export function getAdminLoginRateLimit(headers: Headers): {
  limited: boolean;
  failures: number;
  retryAfterSeconds: number;
} {
  const state = getAdminAttemptState(headers);

  if (!state) {
    return { limited: false, failures: 0, retryAfterSeconds: 0 };
  }

  if (state.failures >= ADMIN_LOGIN_MAX_FAILURES) {
    return {
      limited: true,
      failures: state.failures,
      retryAfterSeconds: Math.max(1, Math.ceil((state.resetAt - Date.now()) / 1000))
    };
  }

  return { limited: false, failures: state.failures, retryAfterSeconds: 0 };
}

export function recordAdminLoginFailure(headers: Headers): {
  limited: boolean;
  failures: number;
  retryAfterSeconds: number;
} {
  const key = getAdminClientKey(headers);
  const now = Date.now();
  const existing = adminLoginAttempts.get(key);
  const state =
    existing && existing.resetAt > now
      ? existing
      : { failures: 0, resetAt: now + ADMIN_LOGIN_WINDOW_MS };

  state.failures += 1;
  adminLoginAttempts.set(key, state);

  const limited = state.failures > ADMIN_LOGIN_MAX_FAILURES;

  return {
    limited,
    failures: state.failures,
    retryAfterSeconds: limited ? Math.max(1, Math.ceil((state.resetAt - now) / 1000)) : 0
  };
}

export function clearAdminLoginFailures(headers: Headers): void {
  adminLoginAttempts.delete(getAdminClientKey(headers));
}

export function resetAdminLoginFailuresForTests(): void {
  adminLoginAttempts.clear();
}

/**
 * Checks if admin access is enabled and verifies the session cookie.
 * Throws 404 if admin is disabled, redirects to login if unauthorized.
 */
export function requireAdminSession(cookies: Cookies, url: URL): void {
  if (env.ADMIN_ENABLED !== 'true') {
    error(404, 'Not Found');
  }

  const sessionToken = cookies.get(SESSION_COOKIE);
  const expectedToken = env.ADMIN_TOKEN;

  if (!expectedToken || !sessionToken || !safeEq(sessionToken, expectedToken)) {
    // Redirect to login if not authenticated, except if already on login page
    if (url.pathname !== '/admin/login') {
      throw redirect(303, `/admin/login?redirectTo=${encodeURIComponent(url.pathname)}`);
    }
  }
}

/**
 * Legacy helper maintained for compatibility during migration.
 * Always throws 401 until session-aware load functions are implemented.
 */
export function requireAdminEnabled(): never {
  if (env.ADMIN_ENABLED !== 'true') {
    error(404, 'Not Found');
  }
  error(401, 'Unauthorized — admin access requires session authentication via /admin/login');
}

/**
 * Sets the admin session cookie.
 */
export function setAdminSession(cookies: Cookies, token: string): boolean {
  const expected = env.ADMIN_TOKEN;
  if (expected && safeEq(token, expected)) {
    cookies.set(SESSION_COOKIE, token, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true, // Vercel is always HTTPS
      maxAge: 60 * 60 * 24 // 24 hours
    });
    return true;
  }
  return false;
}

/**
 * Clears the admin session cookie.
 */
export function clearAdminSession(cookies: Cookies): void {
  cookies.delete(SESSION_COOKIE, { path: '/' });
}
