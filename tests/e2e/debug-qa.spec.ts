import { test } from '@playwright/test';

test('log clipped elements on home page at 360x740', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const clippedElements = await page.evaluate(() => {
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

    return Array.from(
      document.querySelectorAll('main h1, main h2, main h3, main p, main a, main button'),
    ).filter((element) => {
      if (!isVisible(element)) return false;
      const style = window.getComputedStyle(element);
      const hasClippingStyle =
        style.overflow === 'hidden' ||
        style.overflowX === 'hidden' ||
        style.overflowY === 'hidden' ||
        style.textOverflow === 'ellipsis' ||
        style.display === '-webkit-box';
      if (!hasClippingStyle) return false;
      const htmlElement = element as HTMLElement;
      return (
        htmlElement.scrollWidth > htmlElement.clientWidth + 2 ||
        htmlElement.scrollHeight > htmlElement.clientHeight + 2
      );
    }).map(el => ({
      tagName: el.tagName,
      className: el.className,
      text: el.textContent?.slice(0, 50),
      scrollWidth: (el as HTMLElement).scrollWidth,
      clientWidth: (el as HTMLElement).clientWidth
    }));
  });

  console.log('Clipped Elements:', JSON.stringify(clippedElements, null, 2));

  const ctaIssues = await page.evaluate(() => {
    const actionElements = Array.from(
      document.querySelectorAll(
        'button, [role="button"], nav button, a[class*="cta"], a[class*="btn"], a[class*="button"], a[class*="page-cta"], a[class*="hero-cta"]',
      ),
    ).filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && rect.width > 0;
    });
    
    return actionElements.filter((element) => {
      const htmlElement = element as HTMLElement;
      return htmlElement.scrollWidth > htmlElement.clientWidth + 1;
    }).map(el => ({
      tagName: el.tagName,
      className: el.className,
      text: el.textContent?.slice(0, 50),
      scrollWidth: (el as HTMLElement).scrollWidth,
      clientWidth: (el as HTMLElement).clientWidth
    }));
  });

  console.log('CTA Text Issues:', JSON.stringify(ctaIssues, null, 2));
});
