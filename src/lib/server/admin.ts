import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export function requireAdminEnabled(): never {
  if (env.PUBLIC_ADMIN_ENABLED !== 'true') {
    error(404, 'Not Found');
  }
  error(401, 'Unauthorized — admin access requires authentication');
}
