// Stub for `$app/environment` so libs that depend on svelte-kit virtual modules
// can be exercised by vitest in a plain Node environment.
export const browser = false;
export const dev = false;
export const building = false;
export const version = 'test';
