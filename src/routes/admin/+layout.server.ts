import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  if (env.ADMIN_ENABLED !== 'true') {
    error(404, 'Not found');
  }
  return {};
};
