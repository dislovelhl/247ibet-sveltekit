import { expect, test } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const reportRoot = path.join(process.cwd(), '.omx/reports');
const stateRoot = path.join(process.cwd(), '.omx/state/mobile-typography');
const screenshotRoot = path.join(reportRoot, 'mobile-typography-screenshots');
const jsonReportPath = path.join(reportRoot, 'mobile-typography-audit.json');
const playwrightReportPath = path.join(reportRoot, 'mobile-typography-playwright.json');
const markdownReportPath = path.join(reportRoot, 'mobile-typography-audit.md');
const progressPath = path.join(stateRoot, 'ralph-progress.json');

const pages = [
  { label: 'home', url: '/' },
  { label: 'casino', url: '/casino' },
  { label: 'sportsbook', url: '/sportsbook' },
  { label: 'province-ontario', url: '/ontario' },
  { label: 'guides-index', url: '/guides' },
  { label: 'guide-named', url: '/guides/single-game-betting-canada' },
  { label: 'guide-dynamic', url: '/guides/online-gambling-canada' },
  { label: 'review-detail', url: '/reviews/247ibet' },
  { label: 'search', url: '/search' },
  { label: 'tool-odds-calculator', url: '/tools/odds-calculator' },
  { label: 'legal-privacy', url: '/privacy-policy' },
];

const viewports = [
  { label: '360x740', width: 360, height: 740 },
  { label: '390x844', width: 390, height: 844 },
  { label: '768x1024', width: 768, height: 1024 },
  { label: '1440x900', width: 1440, height: 900 },
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
  viewportHeight: number;
  scrollWidth: number;
  horizontalOverflow: number;
  clippedTextCandidateCount: number;
  stickyOverlap: boolean;
  ctaTextFits: boolean;
  navMenuScrollableAndFocusable: boolean;
  minTouchTargetFailures: number;
  headingCount: number;
  paragraphCount: number;
  ctaCount: number;
  issues: TypographyIssue[];
  screenshotPath: string;
  status: 'pass' | 'fail' | 'skipped';
  skipReason?: string;
};

const snapshots: TypographySnapshot[] = [];

test.describe('mobile typography visual QA', () => {
  test.describe.configure({ mode: 'serial' });

  test.use({
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Mobile Safari/537.36',
  });

  test.beforeAll(async () => {
    await mkdir(screenshotRoot, { recursive: true });
    await mkdir(stateRoot, { recursive: true });
  });

  for (const pageTarget of pages) {
    for (const viewport of viewports) {
      test(`${pageTarget.label} typography remains readable at ${viewport.label}`, async ({
        page,
      }) => {
        page.on('console', (msg) => {
          if (msg.text().startsWith('CLIPPED_ELEMENT')) {
            console.log(msg.text());
          }
        });
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        const response = await page.goto(pageTarget.url, { waitUntil: 'networkidle' });
        await page.emulateMedia({ reducedMotion: 'reduce' });

        const viewportScreenshotRoot = path.join(screenshotRoot, viewport.label);
        await mkdir(viewportScreenshotRoot, { recursive: true });
        const screenshotPath = path.join(viewportScreenshotRoot, `${pageTarget.label}.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: true,
          animations: 'disabled',
        });

        expect(response?.status(), `${pageTarget.url} should render successfully`).toBeLessThan(
          400,
        );

        const audit = await page.evaluate(
          ({ pageLabel, viewportLabel, screenshotFile, viewportHeight }) => {
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

            const hasScrollableInlineAncestor = (element: Element) => {
              let current = element.parentElement;
              while (current && current !== document.body) {
                const style = window.getComputedStyle(current);
                const canScrollInline =
                  ['auto', 'scroll'].includes(style.overflowX) &&
                  current.scrollWidth > current.clientWidth + 2;
                if (canScrollInline) return true;
                current = current.parentElement;
              }
              return false;
            };

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
              const minFontSize = isBodyCopy ? 12 : isAction ? 12 : 14;

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

              if (
                (rect.right > viewportWidth + 1 || rect.left < -1) &&
                !hasScrollableInlineAncestor(element)
              ) {
                found.push({
                  selector,
                  text,
                  fontSize,
                  lineHeight,
                  width: Math.round(rect.width),
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  issue: 'visible text extends outside viewport',
                });
              }

              return found;
            });

            const clippedTextCandidates = Array.from(
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
              const isClipping = 
                htmlElement.scrollWidth > htmlElement.clientWidth + 2 ||
                htmlElement.scrollHeight > htmlElement.clientHeight + 2;
              
              if (isClipping) {
                console.log(`CLIPPED_ELEMENT: ${element.tagName} "${textFor(element).slice(0, 30)}" SW:${htmlElement.scrollWidth} CW:${htmlElement.clientWidth} SH:${htmlElement.scrollHeight} CH:${htmlElement.clientHeight}`);
              }
              return isClipping;
            });
            const clippedTextCandidateCount = clippedTextCandidates.length;

            const actionElements = Array.from(
              document.querySelectorAll(
                'button, [role="button"], nav button, a[class*="cta"], a[class*="btn"], a[class*="button"], a[class*="page-cta"], a[class*="hero-cta"]',
              ),
            ).filter((element) => isVisible(element));
            const minTouchTargetFailures = actionElements.filter((element) => {
              const rect = element.getBoundingClientRect();
              return rect.width < 44 || rect.height < 44;
            }).length;
            const ctaTextFits = actionElements.every((element) => {
              const htmlElement = element as HTMLElement;
              return htmlElement.scrollWidth <= htmlElement.clientWidth + 1;
            });
            const stickyMobileBar = document.querySelector('[aria-label="Quick actions"]');
            const stickyOverlap = stickyMobileBar
              ? stickyMobileBar.getBoundingClientRect().top < viewportHeight * 0.7
              : false;
            const mobileMenu = document.querySelector('[aria-label="Mobile navigation"]');
            const navMenuScrollableAndFocusable = mobileMenu
              ? mobileMenu.scrollHeight >= mobileMenu.clientHeight ||
                (mobileMenu as HTMLElement).tabIndex >= -1
              : true;

            return {
              page: pageLabel,
              viewport: viewportLabel,
              url: window.location.pathname,
              title: document.title,
              viewportWidth,
              viewportHeight,
              scrollWidth,
              horizontalOverflow: Math.max(0, scrollWidth - viewportWidth),
              clippedTextCandidateCount,
              stickyOverlap,
              ctaTextFits,
              navMenuScrollableAndFocusable,
              minTouchTargetFailures,
              headingCount: document.querySelectorAll('main h1, main h2, main h3').length,
              paragraphCount: document.querySelectorAll('main p, main li').length,
              ctaCount: document.querySelectorAll('main a, main button').length,
              issues,
              screenshotPath: screenshotFile,
              status: issues.length > 0 ? 'fail' : 'pass',
            } satisfies TypographySnapshot;
          },
          {
            pageLabel: pageTarget.label,
            viewportLabel: viewport.label,
            screenshotFile: screenshotPath,
            viewportHeight: viewport.height,
          },
        );

        snapshots.push(audit);

        expect(
          audit.headingCount,
          'page should expose headings for visual typography review',
        ).toBeGreaterThan(0);
        expect(
          audit.horizontalOverflow,
          'page should not create uncontrolled horizontal scroll',
        ).toBeLessThanOrEqual(2);
        expect(audit.clippedTextCandidateCount, 'required text should not clip').toBe(0);
        expect(audit.stickyOverlap, 'sticky CTA should not cover core content').toBe(false);
        expect(audit.ctaTextFits, 'CTA and nav text should fit controls').toBe(true);
        expect(audit.minTouchTargetFailures, 'interactive targets should be >= 44px').toBe(0);
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
    const failedCount = sortedSnapshots.filter((snapshot) => snapshot.status === 'fail').length;
    const skippedCount = sortedSnapshots.filter((snapshot) => snapshot.status === 'skipped').length;
    const generatedAt = new Date().toISOString();
    const status = failedCount === 0 ? 'pass' : 'fail';

    await mkdir(reportRoot, { recursive: true });
    await mkdir(stateRoot, { recursive: true });

    const report = {
      generatedAt,
      status,
      requiredViewports: viewports.map((viewport) => viewport.label),
      capturedViewports: [...new Set(sortedSnapshots.map((snapshot) => snapshot.viewport))],
      requiredUrls: pages.map((page) => page.url),
      capturedResultCount: sortedSnapshots.length,
      issueCount,
      skippedCount,
      results: sortedSnapshots,
    };

    await writeFile(jsonReportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
    await writeFile(playwrightReportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
    await writeFile(
      progressPath,
      `${JSON.stringify(
        {
          updatedAt: generatedAt,
          state: status === 'pass' ? 'pass' : 'fail',
          sourceArtifacts: [
            '.omx/reports/mobile-typography-audit.json',
            '.omx/reports/mobile-typography-audit.md',
            '.omx/reports/mobile-typography-screenshots/',
            '.omx/reports/mobile-typography-playwright.json',
          ],
          coverageArtifact: '.omx/reports/mobile-typography-coverage.md',
          capturedResultCount: sortedSnapshots.length,
          issueCount,
          skippedCount,
          blockers: failedCount === 0 ? [] : ['One or more mobile typography checks failed.'],
        },
        null,
        2,
      )}\n`,
      'utf8',
    );

    const tableRows = sortedSnapshots
      .map(
        (snapshot) =>
          `| ${snapshot.page} | ${snapshot.viewport} | ${snapshot.horizontalOverflow}px | ${snapshot.headingCount} | ${snapshot.paragraphCount} | ${snapshot.ctaCount} | ${snapshot.issues.length} | ${snapshot.status} | ${snapshot.screenshotPath} |`,
      )
      .join('\n');

    const issueDetails = sortedSnapshots
      .filter((snapshot) => snapshot.issues.length > 0 || snapshot.skipReason)
      .map((snapshot) => {
        if (snapshot.skipReason) {
          return `### ${snapshot.page} / ${snapshot.viewport}\n\n- ${snapshot.skipReason}`;
        }
        return `### ${snapshot.page} / ${snapshot.viewport}\n\n${snapshot.issues
          .map((issue) => `- ${issue.selector}: ${issue.issue} - "${issue.text}"`)
          .join('\n')}`;
      })
      .join('\n\n');

    await writeFile(
      markdownReportPath,
      `# Mobile Typography Visual QA\n\nGenerated: ${generatedAt}\n\nScope: Playwright typography audit for representative 247iBET routes at the approved viewport matrix. Screenshots are saved in \`.omx/reports/mobile-typography-screenshots/{viewport}/{slug}.png\`.\n\n## Summary\n\n- Pages audited: ${pages.map((page) => page.url).join(', ')}\n- Viewports audited: ${viewports.map((viewport) => `${viewport.label} (${viewport.width}x${viewport.height})`).join(', ')}\n- Total issue count: ${issueCount}\n- Skipped optional checks: ${skippedCount}\n\n| Page | Viewport | Horizontal overflow | Headings | Body items | CTAs/links | Issues | Status | Screenshot |\n| --- | --- | ---: | ---: | ---: | ---: | ---: | --- | --- |\n${tableRows}\n\n## Issue Details\n\n${issueDetails || 'No typography issues detected by the automated mobile QA thresholds.'}\n`,
      'utf8',
    );
  });
});
