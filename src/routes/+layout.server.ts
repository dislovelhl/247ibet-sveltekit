import { redirect } from '@sveltejs/kit';
import { generateHmac } from '$lib/server/hmac';
import type { LayoutServerLoad } from './$types';

function isValidAgeCookie(cookieVal: string | undefined, ip: string, ua: string): boolean {
  if (!cookieVal) return false;
  const parts = cookieVal.split('.');
  if (parts.length !== 2) return false;
  const [version, signature] = parts;
  if (version !== 'v1') return false;

  const expected = generateHmac(ip, ua);
  return signature === expected;
}

async function isVerifiedBot(ua: string): Promise<boolean> {
  const lowerUa = ua.toLowerCase();
  return lowerUa.includes('googlebot') || lowerUa.includes('bingbot');
}

export const load: LayoutServerLoad = async ({ url, cookies, getClientAddress, request, setHeaders }) => {
  const isApi = url.pathname.startsWith('/api/');
  const isAuth = url.pathname === '/age-gate';
  const isStatic = url.pathname.startsWith('/images/') || url.pathname.startsWith('/videos/') || url.pathname === '/favicon.png';

  const ua = request.headers.get('user-agent') || '';
  const ip = getClientAddress();
  
  const isBot = await isVerifiedBot(ua);
  const ageCookie = cookies.get('agegate');
  const valid = isBot || isValidAgeCookie(ageCookie, ip, ua);

  if (!valid && !isApi && !isAuth && !isStatic) {
    throw redirect(302, `/age-gate?next=${encodeURIComponent(url.pathname + url.search)}`);
  }

  // EW1: Cache-bypass for gambling content
  if (url.pathname !== '/age-gate' && !isBot) {
    try {
      setHeaders({
        'Cache-Control': 'private, no-store'
      });
    } catch (e) {
      // Ignore if headers are already sent or set
    }
  }

  return {
    verified: valid,
    isBot
  };
};
