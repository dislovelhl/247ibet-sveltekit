import { createHmac } from 'node:crypto';
import { env } from '$env/dynamic/private';

export function generateHmac(ip: string, ua: string): string {
  const secret = env.WORKFLOW_SECRET || 'fallback-dev-secret-only-12345';
  const firstOctet = ip.split('.')[0] || ip.split(':')[0] || 'unknown';
  const data = `${firstOctet}|${ua}`;
  return createHmac('sha256', secret).update(data).digest('hex');
}