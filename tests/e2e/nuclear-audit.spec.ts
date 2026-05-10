import { test } from '@playwright/test';

test.use({
  userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Mobile Safari/537.36',
});

test('nuclear clipping audit on home page at 360x740', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const allClipped = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter(el => {
      const htmlEl = el as HTMLElement;
      if (!htmlEl.scrollWidth) return false;
      
      // Filter out root elements that are expected to be full width
      if (['HTML', 'BODY'].includes(el.tagName)) return false;
      
      return htmlEl.scrollWidth > htmlEl.clientWidth + 1;
    }).map(el => ({
      tagName: el.tagName,
      id: el.id,
      className: el.className,
      text: el.textContent?.trim().slice(0, 30),
      scrollWidth: (el as HTMLElement).scrollWidth,
      clientWidth: (el as HTMLElement).clientWidth,
      parent: el.parentElement?.tagName
    }));
  });

  console.log('ALL_CLIPPED:', JSON.stringify(allClipped, null, 2));
});
