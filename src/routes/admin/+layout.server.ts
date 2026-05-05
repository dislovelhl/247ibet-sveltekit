import { requireAdminSession } from '$lib/server/admin.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  requireAdminSession(cookies, url);
  return {};
};
