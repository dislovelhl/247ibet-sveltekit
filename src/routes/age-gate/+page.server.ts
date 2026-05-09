import { redirect } from '@sveltejs/kit';
import { generateHmac } from '$lib/server/hmac';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, cookies, url }) => {
    const data = await request.formData();
    const action = data.get('action');

    if (action === 'accept') {
      const ua = request.headers.get('user-agent') || '';

      if (!ua) {
        throw redirect(302, `/age-gate?next=${encodeURIComponent(url.searchParams.get('next') || '/')}`);
      }

      const signature = generateHmac(ua);
      const cookieValue = `v2.${signature}`;

      cookies.set('agegate', cookieValue, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 2592000 // 30 days
      });

      const next = url.searchParams.get('next') || '/';
      throw redirect(302, next);
    }

    throw redirect(302, 'https://www.google.com');
  }
};