import { fail, redirect } from '@sveltejs/kit';
import { setAdminSession, requireAdminSession, clearAdminSession } from '$lib/server/admin.js';
import type { Actions, PageServerLoad } from './$types';

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
    const data = await request.formData();
    const token = data.get('token');

    if (typeof token !== 'string' || !token) {
      return fail(400, { error: 'Token is required' });
    }

    if (setAdminSession(cookies, token)) {
      const redirectTo = url.searchParams.get('redirectTo') || '/admin/affiliate-dashboard';
      throw redirect(303, redirectTo);
    }

    return fail(401, { error: 'Invalid admin token' });
  },
  logout: async ({ cookies }) => {
    clearAdminSession(cookies);
    throw redirect(303, '/admin/login');
  }
};
