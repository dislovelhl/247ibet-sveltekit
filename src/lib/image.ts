import { browser, dev } from '$app/environment';

const DEFAULT_WIDTHS = [640, 960, 1280, 1672];
const DEFAULT_QUALITY = 82;
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

function isVercelBuild(): boolean {
  return import.meta.env.VERCEL === '1' || Boolean(import.meta.env.VERCEL_URL);
}

function canUseVercelOptimizer(): boolean {
  if (dev) return false;
  if (!browser) return isVercelBuild();

  return !LOCAL_HOSTS.has(window.location.hostname);
}

export function optimizeSrcSet(
  src: string,
  widths: number[] = DEFAULT_WIDTHS,
  quality = DEFAULT_QUALITY
): string {
  if (!canUseVercelOptimizer()) return src;

  return widths
    .slice()
    .sort((a, b) => a - b)
    .map((width) => {
      const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
      return `${url} ${width}w`;
    })
    .join(', ');
}
