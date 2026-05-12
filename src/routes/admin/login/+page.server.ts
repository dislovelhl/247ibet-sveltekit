import { fail, redirect } from '@sveltejs/kit';
import {
  auditAdminAuthEvent,
  clearAdminLoginFailures,
  clearAdminSession,
  getAdminLoginRateLimit,
  recordAdminLoginFailure,
  requireAdminSession,
  setAdminSession
} from '$lib/server/admin.js';
import type { Actions, PageServerLoad } from './$types';

function getAdminClientMetadata(request: Request, url: URL) {
  return {
    clientKey:
      request.headers.get('cf-connecting-ip')?.trim() ||
      request.headers.get('x-real-ip')?.trim() ||
      request.headers
        .get('x-forwarded-for')
        ?.split(',')
        .map((value) => value.trim())
        .find(Boolean) ||
      'unknown',
    userAgent: request.headers.get('user-agent')?.trim() || 'unknown',
    path: url.pathname
  };
}

export const load: PageServerLoad = async ({ cookies, url }) => {
  // If already logged in, redirect away from login page
  try {
    requireAdminSession(cookies, url);
    const redirectTo = url.searchParams.get('redirectTo') || '/admin/affiliate-dashboard';
    throw redirect(303, redirectTo);
  } catch (e) {
    if (e instanceof Response && e.status === 303) throw e;
    // Otherwise continue to login page
  }
  return {};
};

export const actions: Actions = {
  default: async ({ request, cookies, url }) => {
    const client = getAdminClientMetadata(request, url);
    const rateLimit = getAdminLoginRateLimit(request.headers);

    if (rateLimit.limited) {
      auditAdminAuthEvent('login-rate-limited', {
        ...client,
        reason: 'too-many-failed-attempts',
        failures: rateLimit.failures,
        retryAfterSeconds: rateLimit.retryAfterSeconds
      });

      return fail(429, {
        error: 'Too many admin login attempts. Please try again later.'
      });
    }

    const data = await request.formData();
    const token = data.get('token');

    if (typeof token !== 'string' || !token) {
      const attempt = recordAdminLoginFailure(request.headers);
      auditAdminAuthEvent(attempt.limited ? 'login-rate-limited' : 'login-failure', {
        ...client,
        reason: 'missing-token',
        failures: attempt.failures,
        retryAfterSeconds: attempt.retryAfterSeconds
      });

      return fail(attempt.limited ? 429 : 400, {
        error: attempt.limited
          ? 'Too many admin login attempts. Please try again later.'
          : 'Token is required'
      });
    }

    if (setAdminSession(cookies, token)) {
      clearAdminLoginFailures(request.headers);
      auditAdminAuthEvent('login-success', {
        ...client,
        reason: 'token-accepted',
        redirectTo: url.searchParams.get('redirectTo') || '/admin/affiliate-dashboard'
      });
      const redirectTo = url.searchParams.get('redirectTo') || '/admin/affiliate-dashboard';
      throw redirect(303, redirectTo);
    }

    const attempt = recordAdminLoginFailure(request.headers);
    auditAdminAuthEvent(attempt.limited ? 'login-rate-limited' : 'login-failure', {
      ...client,
      reason: 'invalid-token',
      failures: attempt.failures,
      retryAfterSeconds: attempt.retryAfterSeconds
    });

    return fail(attempt.limited ? 429 : 401, {
      error: attempt.limited
        ? 'Too many admin login attempts. Please try again later.'
        : 'Invalid admin token'
    });
  },
  logout: async ({ cookies, request, url }) => {
    clearAdminSession(cookies);
    auditAdminAuthEvent('logout', {
      ...getAdminClientMetadata(request, url),
      reason: 'logout-action'
    });
    throw redirect(303, '/admin/login');
  }
};
