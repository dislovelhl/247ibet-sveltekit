import { redirect } from '@sveltejs/kit';
import { generateHmac } from '$lib/server/hmac';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, cookies, getClientAddress, url }) => {
    const data = await request.formData();
    const action = data.get('action');

    if (action === 'accept') {
      const ip = getClientAddress();
      const ua = request.headers.get('user-agent') || '';
      const signature = generateHmac(ip, ua);
      const cookieValue = `v1.${signature}`;

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