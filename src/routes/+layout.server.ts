import { redirect } from '@sveltejs/kit';
import { generateHmac } from '$lib/server/hmac';
import type { LayoutServerLoad } from './$types';

function isValidAgeCookie(cookieVal: string | undefined, ua: string): boolean {
  if (!cookieVal || !ua) return false;
  const parts = cookieVal.split('.');
  if (parts.length !== 2) return false;
  const [version, signature] = parts;
  if (version !== 'v2') return false;

  const expected = generateHmac(ua);
  return signature === expected;
}

// Soft bot-bypass for SEO crawlers. Trivially spoofable, but the SvelteKit
// age gate is compliance-UX, not auth — real KYC happens in the operator
// app at boapi.ibet247.ca. Reverse-DNS verification deferred unless we see
// abuse in logs.
async function isVerifiedBot(ua: string): Promise<boolean> {
  const lowerUa = ua.toLowerCase();
  return lowerUa.includes('googlebot') || lowerUa.includes('bingbot');
}

export const load: LayoutServerLoad = async ({ url, cookies, request }) => {
  const isApi = url.pathname.startsWith('/api/');
  const isAuth = url.pathname === '/age-gate';
  const isStatic = url.pathname.startsWith('/images/') || url.pathname.startsWith('/videos/') || url.pathname === '/favicon.png';

  const ua = request.headers.get('user-agent') || '';

  const isBot = await isVerifiedBot(ua);
  const ageCookie = cookies.get('agegate');
  const valid = isBot || isValidAgeCookie(ageCookie, ua);

  if (!valid && !isApi && !isAuth && !isStatic) {
    throw redirect(302, `/age-gate?next=${encodeURIComponent(url.pathname + url.search)}`);
  }

  // EW1: Cache-bypass for gambling content handled by SvelteKit automatically
  // when reading cookies (creates private cache implicitly). We no longer force no-store
  // here to allow Vercel Edge caching to work for unauthenticated/static pages.

  return {
    verified: valid,
    isBot
  };
};
