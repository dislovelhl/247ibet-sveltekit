import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToTest = [
  '/',
  '/casino',
  '/sportsbook',
  '/ontario',
  '/alberta',
  '/interac',
  '/responsible-gambling',
];

test.describe('WCAG Robustness (Principle 4) Audit', () => {
  for (const path of pagesToTest) {
    test(`Audit ${path} for Robustness`, async ({ page }) => {
      await page.goto(path);
      
      // Wait for any animations/lazy loading
      await page.waitForTimeout(500);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();

      // Check for duplicate IDs manually as a backup for Robustness 4.1.1
      const ids = await page.evaluate(() => {
        const allElements = Array.from(document.querySelectorAll('[id]'));
        const idCounts: Record<string, number> = {};
        allElements.forEach(el => {
          idCounts[el.id] = (idCounts[el.id] || 0) + 1;
        });
        return Object.entries(idCounts).filter(([_, count]) => count > 1).map(([id]) => id);
      });

      expect(ids, `Duplicate IDs found: ${ids.join(', ')}`).toHaveLength(0);

      // Verify that all interactive elements have an accessible name (4.1.2)
      const interactiveWithoutNames = await page.evaluate(() => {
        const interactive = Array.from(document.querySelectorAll('button, a, input, select, textarea, [role="button"]'));
        return interactive.filter(el => {
          // Simplified check: no text content, no aria-label, no aria-labelledby, no title
          const hasText = el.textContent?.trim().length > 0;
          const hasLabel = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby');
          const hasTitle = el.getAttribute('title');
          const isImgWithAlt = el.tagName === 'A' && el.querySelector('img[alt]:not([alt=""])');
          
          return !hasText && !hasLabel && !hasTitle && !isImgWithAlt;
        }).map(el => ({
          tag: el.tagName,
          id: el.id,
          class: el.className,
          outerHTML: el.outerHTML.substring(0, 100)
        }));
      });

      expect(interactiveWithoutNames, `Interactive elements without names: ${JSON.stringify(interactiveWithoutNames)}`).toHaveLength(0);

      // Check Axe results
      if (accessibilityScanResults.violations.length > 0) {
        console.log(`Violations for ${path}:`, JSON.stringify(accessibilityScanResults.violations, null, 2));
      }
      expect(accessibilityScanResults.violations, `Axe violations: ${accessibilityScanResults.violations.map(v => v.id).join(', ')}`).toHaveLength(0);
    });
  }
});
