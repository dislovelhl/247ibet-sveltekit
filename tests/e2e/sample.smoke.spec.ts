import { test, expect } from '@playwright/test';

test('homepage loads with a non-empty title and no console errors on initial paint', async ({
  page,
}) => {
  const consoleErrors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('/');

  const title = await page.title();
  expect(title.trim().length).toBeGreaterThan(0);

  expect(consoleErrors).toHaveLength(0);
});
