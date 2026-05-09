import { test, expect } from '@playwright/test';

test.use({
  userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Mobile Safari/537.36',
});

test('pinpoint clipping on home page at 360x740', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const pinpoint = await page.evaluate(() => {
    const isVisible = (element: Element) => {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return (
        style.visibility !== 'hidden' &&
        style.display !== 'none' &&
        rect.width > 0 &&
        rect.height > 0
      );
    };

    const elements = Array.from(document.querySelectorAll('main h1, main h2, main h3, main p, main a, main button'));
    
    return elements.map(el => {
      if (!isVisible(el)) return null;
      const htmlEl = el as HTMLElement;
      const style = window.getComputedStyle(el);
      const hasClippingStyle =
        style.overflow === 'hidden' ||
        style.overflowX === 'hidden' ||
        style.overflowY === 'hidden' ||
        style.textOverflow === 'ellipsis' ||
        style.display === '-webkit-box';
      
      const clips = htmlEl.scrollWidth > htmlEl.clientWidth + 2 ||
                    htmlEl.scrollHeight > htmlEl.clientHeight + 2;
      
      if (hasClippingStyle && clips) {
          return {
            tagName: el.tagName,
            text: el.textContent?.trim().slice(0, 30),
            scrollWidth: htmlEl.scrollWidth,
            clientWidth: htmlEl.clientWidth,
            scrollHeight: htmlEl.scrollHeight,
            clientHeight: htmlEl.clientHeight,
            style: {
                overflow: style.overflow,
                textOverflow: style.textOverflow,
                display: style.display
            }
          };
      }
      return null;
    }).filter(x => x !== null);
  });

  console.log('PINPOINT_RESULTS:', JSON.stringify(pinpoint, null, 2));
});
