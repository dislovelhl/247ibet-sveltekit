import { test, expect } from '@playwright/test';

test.describe('Content Security Policy', () => {
  const topRoutes = ['/', '/casino', '/sportsbook'];

  test('top-3 routes serve a content-security-policy-report-only header', async ({ request }) => {
    for (const route of topRoutes) {
      const response = await request.get(route);
      const headers = response.headers();
      
      // A0 configures report-only CSP globally via SvelteKit
      const csp = headers['content-security-policy-report-only'];
      expect(csp).toBeDefined();
      expect(csp).toContain("script-src 'self' 'strict-dynamic'");
      
      // Ensure Vercel's legacy CSP is removed (or we only have one)
      const enforcedCsp = headers['content-security-policy'];
      expect(enforcedCsp).toBeUndefined();
    }
  });
});
