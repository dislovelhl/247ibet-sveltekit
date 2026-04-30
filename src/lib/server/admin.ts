import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export function requireAdminEnabled(): never {
  if (env.ADMIN_ENABLED !== 'true') {
    error(404, 'Not Found');
  }
  error(401, 'Unauthorized — admin access requires authentication');
}
