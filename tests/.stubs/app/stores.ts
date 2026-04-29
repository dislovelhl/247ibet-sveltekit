// Stub for `$app/stores` used by routes during testing.
import { readable } from 'svelte/store';
export const page = readable({ url: new URL('http://localhost/'), params: {}, route: { id: '/' } });
export const navigating = readable(null);
export const updated = { subscribe: () => () => {}, check: async () => false };
