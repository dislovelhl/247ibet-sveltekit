// Stub for `$app/state` used by Svelte 5 components during testing.
// Tests mutate `page.url` directly to simulate route changes.
export const page = {
  url: new URL('http://localhost/'),
  params: {} as Record<string, string>,
  route: { id: '/' as string | null },
  status: 200,
  error: null as Error | null,
  data: {} as Record<string, unknown>,
  state: {} as Record<string, unknown>,
  form: null as unknown,
};

export const navigating = {
  from: null,
  to: null,
  type: null,
  willUnload: false,
  delta: undefined,
  complete: undefined,
};

export const updated = {
  current: false,
  check: async () => false,
};
