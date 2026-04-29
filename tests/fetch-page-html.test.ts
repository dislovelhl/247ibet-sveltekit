import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { fetchPageHtml } from '../src/workflows/steps/fetch-page-html';

type FetchFn = typeof globalThis.fetch;

describe('fetchPageHtml', () => {
  let originalFetch: FetchFn;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('builds the URL by joining baseUrl and path', async () => {
    const spy = vi.fn<FetchFn>(async () => new Response('<html></html>', { status: 200 }));
    globalThis.fetch = spy;

    await fetchPageHtml('/casino', 'https://example.com');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0]?.[0]).toBe('https://example.com/casino');
  });

  it('strips trailing slash from baseUrl before joining', async () => {
    const spy = vi.fn<FetchFn>(async () => new Response('ok', { status: 200 }));
    globalThis.fetch = spy;

    await fetchPageHtml('/x', 'https://example.com/');

    expect(spy.mock.calls[0]?.[0]).toBe('https://example.com/x');
  });

  it('returns the response body for a 200 response', async () => {
    globalThis.fetch = (async () => new Response('<html>hello</html>', { status: 200 })) as FetchFn;

    expect(await fetchPageHtml('/x', 'https://example.com')).toBe('<html>hello</html>');
  });

  it('throws with status code for non-2xx responses', async () => {
    globalThis.fetch = (async () => new Response('boom', { status: 500 })) as FetchFn;

    await expect(fetchPageHtml('/x', 'https://example.com')).rejects.toThrow('HTTP 500');
  });

  it('sends the SEO User-Agent header', async () => {
    const spy = vi.fn<FetchFn>(async () => new Response('', { status: 200 }));
    globalThis.fetch = spy;

    await fetchPageHtml('/x', 'https://example.com');

    const init = spy.mock.calls[0]?.[1];
    expect(init?.headers).toMatchObject({ 'User-Agent': '247iBET-SEO-Audit/1.0' });
  });
});
