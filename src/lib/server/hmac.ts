import { createHmac } from 'node:crypto';
import { env } from '$env/dynamic/private';

export function generateHmac(ua: string): string {
  const secret = env.WORKFLOW_SECRET || 'fallback-dev-secret-only-12345';
  return createHmac('sha256', secret).update(ua).digest('hex');
}
