import { expect, test } from '@playwright/test';

const standardPages = [
  { label: 'province hub', url: '/ontario' },
  { label: 'province subpage', url: '/ontario/online-casino' },
  { label: 'casino child page', url: '/casino/live-casino' },
  { label: 'sportsbook child page', url: '/sportsbook/ufc' },
  { label: 'responsible gambling page', url: '/responsible-gambling' },
  { label: 'interac page', url: '/interac' },
  { label: 'deposit page', url: '/deposit' },
  { label: 'faq page', url: '/faq' },
  { label: 'guides hub', url: '/guides' },
  { label: 'guide detail', url: '/guides/online-gambling-canada' },
  { label: 'event detail', url: '/events/nba-betting-canada' },
  { label: 'tool detail', url: '/tools/odds-calculator' },
  { label: 'policy layout', url: '/privacy-policy' },
  { label: 'policy-like page', url: '/about/affiliate-disclosure' },
  { label: 'search page', url: '/search' },
];

const wideHubPages = [
  { label: 'casino hub', url: '/casino' },
  { label: 'sportsbook hub', url: '/sportsbook' },
];

type Box = {
  label: string;
  url: string;
  shellTop: number;
  shellLeft: number;
  contentTop: number;
  contentLeft: number;
};

const getRouteBox = async (
  page: import('@playwright/test').Page,
  target: { label: string; url: string },
): Promise<Box> => {
  await page.goto(target.url, { waitUntil: 'networkidle' });

  return page.evaluate(({ label, url }) => {
    const root = document.querySelector<HTMLElement>('main > div > :is(.min-h-screen, .min-h-dvh).bg-navy-black');
    const shell =
      document.querySelector<HTMLElement>('main > div > .container.mx-auto') ??
      root?.querySelector<HTMLElement>(':is(main, div).mx-auto:not([class*="max-w-[1720px]"])') ??
      root?.querySelector<HTMLElement>(':is(main, div).mx-auto[class*="max-w-[1720px]"]') ??
      root?.querySelector<HTMLElement>(':scope > section') ??
      root;

    if (!shell) {
      throw new Error(`No public route shell found for ${url}`);
    }

    const content =
      shell.querySelector<HTMLElement>('nav[aria-label="Breadcrumb"]') ??
      shell.querySelector<HTMLElement>('header') ??
      shell.querySelector<HTMLElement>('section') ??
      shell.querySelector<HTMLElement>('h1') ??
      shell;

    const shellRect = shell.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();

    return {
      label,
      url,
      shellTop: Math.round(shellRect.top),
      shellLeft: Math.round(shellRect.left),
      contentTop: Math.round(contentRect.top),
      contentLeft: Math.round(contentRect.left),
    };
  }, target);
};

test.describe('public route shell alignment', () => {
  test.use({
    userAgent:
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    viewport: { width: 1440, height: 900 },
  });

  test('standard public pages share the same route shell coordinates', async ({ page }) => {
    const boxes: Box[] = [];

    for (const target of standardPages) {
      boxes.push(await getRouteBox(page, target));
    }

    const baseline = boxes[0];

    for (const box of boxes) {
      expect(
        Math.abs(box.contentTop - baseline.contentTop),
        `${box.label} (${box.url}) contentTop ${box.contentTop} should match ${baseline.contentTop}; boxes=${JSON.stringify(boxes)}`,
      ).toBeLessThanOrEqual(1);
      expect(
        Math.abs(box.contentLeft - baseline.contentLeft),
        `${box.label} (${box.url}) contentLeft ${box.contentLeft} should match ${baseline.contentLeft}; boxes=${JSON.stringify(boxes)}`,
      ).toBeLessThanOrEqual(1);
    }
  });

  test('wide top-level hubs share the same top rhythm', async ({ page }) => {
    const boxes: Box[] = [];

    for (const target of wideHubPages) {
      boxes.push(await getRouteBox(page, target));
    }

    const baseline = boxes[0];

    for (const box of boxes) {
      expect(
        Math.abs(box.shellTop - baseline.shellTop),
        `${box.label} (${box.url}) shellTop ${box.shellTop} should match ${baseline.shellTop}; boxes=${JSON.stringify(boxes)}`,
      ).toBeLessThanOrEqual(1);
    }
  });
});
