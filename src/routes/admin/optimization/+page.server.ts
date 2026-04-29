import { requireAdminEnabled } from '$lib/server/admin.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  requireAdminEnabled();
};
