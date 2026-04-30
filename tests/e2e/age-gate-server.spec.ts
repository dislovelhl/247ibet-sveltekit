import { test, expect } from '@playwright/test';

test.describe('Server-Side Age Gate', () => {
  test('unverified request is intercepted by the age gate', async ({ page }) => {
    await page.goto('/casino');
    
    // SvelteKit hook should redirect to /age-gate
    await expect(page).toHaveURL(/.*\/age-gate.*/);
    
    // The page should clearly be the age gate
    await expect(page.locator('h1')).toContainText('Adults Only');
  });

  test.describe('Bot Request', () => {
    test.use({ userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' });
    test('verified bot request bypasses the age gate', async ({ page }) => {
      await page.goto('/casino');
      
      // Should NOT be redirected to /age-gate
      await expect(page).not.toHaveURL(/.*\/age-gate.*/);
      await expect(page.locator('h1')).not.toContainText('Adults Only');
    });
  });
});
