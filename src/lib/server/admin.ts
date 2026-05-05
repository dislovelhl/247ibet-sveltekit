import { error, redirect, type Cookies } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { safeEq } from './auth.js';

const SESSION_COOKIE = 'ibet_admin_session';

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
