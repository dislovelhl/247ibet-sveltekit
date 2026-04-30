import { test, expect } from '@playwright/test';

test.describe('Admin Surface', () => {
  test.use({ userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' });
  
  test('returns 404 for admin dashboard when ADMIN_ENABLED is not set', async ({ page }) => {
    // Navigate without setting any cookies or environment variables
    const response = await page.goto('/admin/affiliate-dashboard');
    
    // We expect a 404 Not Found since the feature flag gates access
    expect(response?.status()).toBe(404);
  });
});
