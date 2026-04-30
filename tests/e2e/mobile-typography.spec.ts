import { expect, test } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const reportRoot = path.join(process.cwd(), '.omx/reports');
const screenshotRoot = path.join(reportRoot, 'mobile-typography-screenshots');
const jsonReportPath = path.join(reportRoot, 'mobile-typography-audit.json');
const markdownReportPath = path.join(reportRoot, 'mobile-typography-audit.md');

const pages = [
  { label: 'home', url: '/' },
  { label: 'casino', url: '/casino' },
  { label: 'sportsbook', url: '/sportsbook' },
  { label: 'search', url: '/search' },
];

const mobileViewports = [
  { label: 'iphone-se', width: 375, height: 667 },
  { label: 'pixel-5', width: 393, height: 851 },
];

type TypographyIssue = {
  selector: string;
  text: string;
  fontSize: number;
  lineHeight: number | null;
  width: number;
  left: number;
  right: number;
  issue: string;
};

type TypographySnapshot = {
  page: string;
  viewport: string;
  url: string;
  title: string;
  viewportWidth: number;
  scrollWidth: number;
  horizontalOverflow: number;
  headingCount: number;
  paragraphCount: number;
  ctaCount: number;
  issues: TypographyIssue[];
  screenshot: string;
};

const snapshots: TypographySnapshot[] = [];

test.describe('mobile typography visual QA', () => {
  test.use({
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Mobile Safari/537.36',
  });

  test.beforeAll(async () => {
    await mkdir(screenshotRoot, { recursive: true });
  });

  for (const pageTarget of pages) {
    for (const viewport of mobileViewports) {
      test(`${pageTarget.label} typography remains readable at ${viewport.label}`, async ({
        page,
      }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(pageTarget.url, { waitUntil: 'networkidle' });
        await page.emulateMedia({ reducedMotion: 'reduce' });

        const screenshotName = `mobile-typography-${pageTarget.label}-${viewport.label}.png`;
        await page.screenshot({
          path: path.join(screenshotRoot, screenshotName),
          fullPage: true,
          animations: 'disabled',
        });

        const audit = await page.evaluate(
          ({ pageLabel, viewportLabel, screenshotFile }) => {
            const viewportWidth = document.documentElement.clientWidth;
            const scrollWidth = Math.max(
              document.documentElement.scrollWidth,
              document.body?.scrollWidth ?? 0,
            );

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

            const textFor = (element: Element) =>
              (element.textContent ?? '').replace(/\s+/g, ' ').trim();

            const typographyElements = Array.from(
              document.querySelectorAll(
                'main h1, main h2, main h3, main p, main li, main a, main button',
              ),
            ).filter((element) => isVisible(element) && textFor(element).length > 0);

            const issues = typographyElements.flatMap((element) => {
              const style = window.getComputedStyle(element);
              const rect = element.getBoundingClientRect();
              const selector = element.tagName.toLowerCase();
              const fontSize = Number.parseFloat(style.fontSize);
              const lineHeight =
                style.lineHeight === 'normal' ? null : Number.parseFloat(style.lineHeight);
              const text = textFor(element).slice(0, 96);
              const found: TypographyIssue[] = [];
              const isBodyCopy = ['p', 'li'].includes(selector);
              const isAction = ['a', 'button'].includes(selector);
              const minFontSize = isBodyCopy ? 10 : isAction ? 10 : 14;

              if (fontSize < minFontSize) {
                found.push({
                  selector,
                  text,
                  fontSize,
                  lineHeight,
                  width: Math.round(rect.width),
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  issue: `font-size below critical ${minFontSize}px mobile threshold`,
                });
              }

              if (lineHeight !== null && lineHeight / fontSize < 1.15 && isBodyCopy) {
                found.push({
                  selector,
                  text,
                  fontSize,
                  lineHeight,
                  width: Math.round(rect.width),
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  issue: 'body line-height ratio below 1.15',
                });
              }
              return found;
            });

            return {
              page: pageLabel,
              viewport: viewportLabel,
              url: window.location.pathname,
              title: document.title,
              viewportWidth,
              scrollWidth,
              horizontalOverflow: Math.max(0, scrollWidth - viewportWidth),
              headingCount: document.querySelectorAll('main h1, main h2, main h3').length,
              paragraphCount: document.querySelectorAll('main p, main li').length,
              ctaCount: document.querySelectorAll('main a, main button').length,
              issues,
              screenshot: screenshotFile,
            } satisfies TypographySnapshot;
          },
          {
            pageLabel: pageTarget.label,
            viewportLabel: viewport.label,
            screenshotFile: screenshotName,
          },
        );

        snapshots.push(audit);

        expect(
          audit.headingCount,
          'page should expose headings for visual typography review',
        ).toBeGreaterThan(0);
        expect(
          audit.horizontalOverflow,
          'mobile page should not create horizontal scroll',
        ).toBeLessThanOrEqual(2);
        expect(audit.issues, JSON.stringify(audit.issues, null, 2)).toEqual([]);
      });
    }
  }

  test.afterAll(async () => {
    const sortedSnapshots = snapshots.sort((a, b) =>
      `${a.page}-${a.viewport}`.localeCompare(`${b.page}-${b.viewport}`),
    );
    const issueCount = sortedSnapshots.reduce(
      (count, snapshot) => count + snapshot.issues.length,
      0,
    );
    const generatedAt = new Date().toISOString();

    await mkdir(reportRoot, { recursive: true });
    await writeFile(
      jsonReportPath,
      `${JSON.stringify({ generatedAt, issueCount, snapshots: sortedSnapshots }, null, 2)}\n`,
      'utf8',
    );

    const tableRows = sortedSnapshots
      .map(
        (snapshot) =>
          `| ${snapshot.page} | ${snapshot.viewport} | ${snapshot.horizontalOverflow}px | ${snapshot.headingCount} | ${snapshot.paragraphCount} | ${snapshot.ctaCount} | ${snapshot.issues.length} | ${snapshot.screenshot} |`,
      )
      .join('\n');

    const issueDetails = sortedSnapshots
      .filter((snapshot) => snapshot.issues.length > 0)
      .map(
        (snapshot) =>
          `### ${snapshot.page} / ${snapshot.viewport}\n\n${snapshot.issues
            .map((issue) => `- ${issue.selector}: ${issue.issue} — "${issue.text}"`)
            .join('\n')}`,
      )
      .join('\n\n');

    await writeFile(
      markdownReportPath,
      `# Mobile Typography Visual QA\n\nGenerated: ${generatedAt}\n\nScope: Playwright mobile typography audit for key 247iBET routes at iPhone SE and Pixel 5 widths. Screenshots are saved in \`.omx/reports/mobile-typography-screenshots/\`.\n\n## Summary\n\n- Pages audited: ${pages.map((page) => page.url).join(', ')}\n- Viewports audited: ${mobileViewports.map((viewport) => `${viewport.label} (${viewport.width}x${viewport.height})`).join(', ')}\n- Total issue count: ${issueCount}\n\n| Page | Viewport | Horizontal overflow | Headings | Body items | CTAs/links | Issues | Screenshot |\n| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |\n${tableRows}\n\n## Issue Details\n\n${issueDetails || 'No typography issues detected by the automated mobile QA thresholds.'}\n`,
      'utf8',
    );
  });
});
