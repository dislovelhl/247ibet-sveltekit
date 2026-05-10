# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-typography.spec.ts >> mobile typography visual QA >> home typography remains readable at 360x740
- Location: tests/e2e/mobile-typography.spec.ts:85:7

# Error details

```
Error: / should render successfully

expect(received).toBeLessThan(expected)

Expected: < 400
Received:   500
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test';
  2   | import { mkdir, writeFile } from 'node:fs/promises';
  3   | import path from 'node:path';
  4   | 
  5   | const reportRoot = path.join(process.cwd(), '.omx/reports');
  6   | const stateRoot = path.join(process.cwd(), '.omx/state/mobile-typography');
  7   | const screenshotRoot = path.join(reportRoot, 'mobile-typography-screenshots');
  8   | const jsonReportPath = path.join(reportRoot, 'mobile-typography-audit.json');
  9   | const playwrightReportPath = path.join(reportRoot, 'mobile-typography-playwright.json');
  10  | const markdownReportPath = path.join(reportRoot, 'mobile-typography-audit.md');
  11  | const progressPath = path.join(stateRoot, 'ralph-progress.json');
  12  | 
  13  | const pages = [
  14  |   { label: 'home', url: '/' },
  15  |   { label: 'casino', url: '/casino' },
  16  |   { label: 'sportsbook', url: '/sportsbook' },
  17  |   { label: 'province-ontario', url: '/ontario' },
  18  |   { label: 'guides-index', url: '/guides' },
  19  |   { label: 'guide-named', url: '/guides/single-game-betting-canada' },
  20  |   { label: 'guide-dynamic', url: '/guides/online-gambling-canada' },
  21  |   { label: 'review-detail', url: '/reviews/247ibet' },
  22  |   { label: 'search', url: '/search' },
  23  |   { label: 'tool-odds-calculator', url: '/tools/odds-calculator' },
  24  |   { label: 'legal-privacy', url: '/privacy-policy' },
  25  | ];
  26  | 
  27  | const viewports = [
  28  |   { label: '360x740', width: 360, height: 740 },
  29  |   { label: '390x844', width: 390, height: 844 },
  30  |   { label: '768x1024', width: 768, height: 1024 },
  31  |   { label: '1440x900', width: 1440, height: 900 },
  32  | ];
  33  | 
  34  | type TypographyIssue = {
  35  |   selector: string;
  36  |   text: string;
  37  |   fontSize: number;
  38  |   lineHeight: number | null;
  39  |   width: number;
  40  |   left: number;
  41  |   right: number;
  42  |   issue: string;
  43  | };
  44  | 
  45  | type TypographySnapshot = {
  46  |   page: string;
  47  |   viewport: string;
  48  |   url: string;
  49  |   title: string;
  50  |   viewportWidth: number;
  51  |   viewportHeight: number;
  52  |   scrollWidth: number;
  53  |   horizontalOverflow: number;
  54  |   clippedTextCandidateCount: number;
  55  |   stickyOverlap: boolean;
  56  |   ctaTextFits: boolean;
  57  |   navMenuScrollableAndFocusable: boolean;
  58  |   minTouchTargetFailures: number;
  59  |   headingCount: number;
  60  |   paragraphCount: number;
  61  |   ctaCount: number;
  62  |   issues: TypographyIssue[];
  63  |   screenshotPath: string;
  64  |   status: 'pass' | 'fail' | 'skipped';
  65  |   skipReason?: string;
  66  | };
  67  | 
  68  | const snapshots: TypographySnapshot[] = [];
  69  | 
  70  | test.describe('mobile typography visual QA', () => {
  71  |   test.describe.configure({ mode: 'serial' });
  72  | 
  73  |   test.use({
  74  |     userAgent:
  75  |       'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Mobile Safari/537.36',
  76  |   });
  77  | 
  78  |   test.beforeAll(async () => {
  79  |     await mkdir(screenshotRoot, { recursive: true });
  80  |     await mkdir(stateRoot, { recursive: true });
  81  |   });
  82  | 
  83  |   for (const pageTarget of pages) {
  84  |     for (const viewport of viewports) {
  85  |       test(`${pageTarget.label} typography remains readable at ${viewport.label}`, async ({
  86  |         page,
  87  |       }) => {
  88  |         await page.setViewportSize({ width: viewport.width, height: viewport.height });
  89  |         const response = await page.goto(pageTarget.url, { waitUntil: 'networkidle' });
  90  |         await page.emulateMedia({ reducedMotion: 'reduce' });
  91  | 
  92  |         const viewportScreenshotRoot = path.join(screenshotRoot, viewport.label);
  93  |         await mkdir(viewportScreenshotRoot, { recursive: true });
  94  |         const screenshotPath = path.join(viewportScreenshotRoot, `${pageTarget.label}.png`);
  95  |         await page.screenshot({
  96  |           path: screenshotPath,
  97  |           fullPage: true,
  98  |           animations: 'disabled',
  99  |         });
  100 | 
> 101 |         expect(response?.status(), `${pageTarget.url} should render successfully`).toBeLessThan(
      |                                                                                    ^ Error: / should render successfully
  102 |           400,
  103 |         );
  104 | 
  105 |         const audit = await page.evaluate(
  106 |           ({ pageLabel, viewportLabel, screenshotFile, viewportHeight }) => {
  107 |             const viewportWidth = document.documentElement.clientWidth;
  108 |             const scrollWidth = Math.max(
  109 |               document.documentElement.scrollWidth,
  110 |               document.body?.scrollWidth ?? 0,
  111 |             );
  112 | 
  113 |             const isVisible = (element: Element) => {
  114 |               const style = window.getComputedStyle(element);
  115 |               const rect = element.getBoundingClientRect();
  116 |               return (
  117 |                 style.visibility !== 'hidden' &&
  118 |                 style.display !== 'none' &&
  119 |                 rect.width > 0 &&
  120 |                 rect.height > 0
  121 |               );
  122 |             };
  123 | 
  124 |             const textFor = (element: Element) =>
  125 |               (element.textContent ?? '').replace(/\s+/g, ' ').trim();
  126 | 
  127 |             const hasScrollableInlineAncestor = (element: Element) => {
  128 |               let current = element.parentElement;
  129 |               while (current && current !== document.body) {
  130 |                 const style = window.getComputedStyle(current);
  131 |                 const canScrollInline =
  132 |                   ['auto', 'scroll'].includes(style.overflowX) &&
  133 |                   current.scrollWidth > current.clientWidth + 2;
  134 |                 if (canScrollInline) return true;
  135 |                 current = current.parentElement;
  136 |               }
  137 |               return false;
  138 |             };
  139 | 
  140 |             const typographyElements = Array.from(
  141 |               document.querySelectorAll(
  142 |                 'main h1, main h2, main h3, main p, main li, main a, main button',
  143 |               ),
  144 |             ).filter((element) => isVisible(element) && textFor(element).length > 0);
  145 | 
  146 |             const issues = typographyElements.flatMap((element) => {
  147 |               const style = window.getComputedStyle(element);
  148 |               const rect = element.getBoundingClientRect();
  149 |               const selector = element.tagName.toLowerCase();
  150 |               const fontSize = Number.parseFloat(style.fontSize);
  151 |               const lineHeight =
  152 |                 style.lineHeight === 'normal' ? null : Number.parseFloat(style.lineHeight);
  153 |               const text = textFor(element).slice(0, 96);
  154 |               const found: TypographyIssue[] = [];
  155 |               const isBodyCopy = ['p', 'li'].includes(selector);
  156 |               const isAction = ['a', 'button'].includes(selector);
  157 |               const minFontSize = isBodyCopy ? 12 : isAction ? 12 : 14;
  158 | 
  159 |               if (fontSize < minFontSize) {
  160 |                 found.push({
  161 |                   selector,
  162 |                   text,
  163 |                   fontSize,
  164 |                   lineHeight,
  165 |                   width: Math.round(rect.width),
  166 |                   left: Math.round(rect.left),
  167 |                   right: Math.round(rect.right),
  168 |                   issue: `font-size below critical ${minFontSize}px mobile threshold`,
  169 |                 });
  170 |               }
  171 | 
  172 |               if (lineHeight !== null && lineHeight / fontSize < 1.15 && isBodyCopy) {
  173 |                 found.push({
  174 |                   selector,
  175 |                   text,
  176 |                   fontSize,
  177 |                   lineHeight,
  178 |                   width: Math.round(rect.width),
  179 |                   left: Math.round(rect.left),
  180 |                   right: Math.round(rect.right),
  181 |                   issue: 'body line-height ratio below 1.15',
  182 |                 });
  183 |               }
  184 | 
  185 |               if (
  186 |                 (rect.right > viewportWidth + 1 || rect.left < -1) &&
  187 |                 !hasScrollableInlineAncestor(element)
  188 |               ) {
  189 |                 found.push({
  190 |                   selector,
  191 |                   text,
  192 |                   fontSize,
  193 |                   lineHeight,
  194 |                   width: Math.round(rect.width),
  195 |                   left: Math.round(rect.left),
  196 |                   right: Math.round(rect.right),
  197 |                   issue: 'visible text extends outside viewport',
  198 |                 });
  199 |               }
  200 | 
  201 |               return found;
```