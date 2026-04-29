// TODO(D6): unskip after A4 sink lands
import { test, expect } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * Synthetic CSP crawl — visits the top N routes and fails on any first-party
 * Content-Security-Policy violation.
 *
 * Status: scaffold only — marked test.skip until the A4 reporting sink is wired.
 */

const top20Routes: string[] = [
  '/',
  '/casino',
  '/sportsbook',
  '/ontario',
  '/alberta',
  // --- fill out from sitemap after A4 lands ---
  // '/guides',
  // '/reviews',
  // '/news',
  // '/events',
  // '/payments',
  // '/tools/odds-calculator',
  // '/tools/parlay-calculator',
  // '/tools/payout-calculator',
  // '/responsible-gambling',
  // '/bonus-terms',
  // '/editorial-policy',
  // '/sportsbook/cfl',
  // '/design-system',
  // '/authors',
];

type CspViolation = {
  route: string;
  blockedURI: string;
  violatedDirective: string;
  originalPolicy: string;
};

test.skip('CSP synthetic crawl — no first-party violations across top routes', async ({ page }) => {
  const violations: CspViolation[] = [];

  for (const route of top20Routes) {
    const routeViolations: CspViolation[] = [];

    await page.addInitScript(() => {
      document.addEventListener('securitypolicyviolation', (e) => {
        // Emit a custom DOM event we can intercept from the test runner side.
        // We can't call Playwright APIs directly from page context.
        const detail = JSON.stringify({
          blockedURI: e.blockedURI,
          violatedDirective: e.violatedDirective,
          originalPolicy: e.originalPolicy,
        });
        document.dispatchEvent(new CustomEvent('__csp_violation__', { detail }));
      });
    });

    page.on('console', (msg) => {
      if (msg.text().startsWith('[CSP]')) {
        routeViolations.push({
          route,
          blockedURI: msg.text(),
          violatedDirective: 'unknown',
          originalPolicy: '',
        });
      }
    });

    await page.goto(route);

    // Give the page a brief moment to fire any synchronous violations.
    await page.waitForLoadState('networkidle');

    violations.push(...routeViolations);

    if (routeViolations.length > 0) {
      // Fail fast on first-party violation.
      break;
    }
  }

  // Persist manifest regardless of pass/fail.
  const date = new Date().toISOString().slice(0, 10);
  const reportDir = path.join(process.cwd(), 'static', 'reports');
  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportDir, `csp-synthetic-crawl-${date}.json`),
    JSON.stringify(violations, null, 2),
    'utf-8',
  );

  expect(
    violations,
    `CSP violations detected:\n${JSON.stringify(violations, null, 2)}`,
  ).toHaveLength(0);
});
