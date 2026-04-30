# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-typography.spec.ts >> mobile typography visual QA >> home typography remains readable at iphone-se
- Location: tests/e2e/mobile-typography.spec.ts:57:7

# Error details

```
Error: [
  {
    "selector": "p",
    "text": "This website contains content related to online gambling and is intended strictly for individual",
    "fontSize": 14,
    "lineHeight": 22.75,
    "width": 293,
    "left": 41,
    "right": 334,
    "issue": "font-size below 15px"
  }
]

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 12

- Array []
+ Array [
+   Object {
+     "fontSize": 14,
+     "issue": "font-size below 15px",
+     "left": 41,
+     "lineHeight": 22.75,
+     "right": 334,
+     "selector": "p",
+     "text": "This website contains content related to online gambling and is intended strictly for individual",
+     "width": 293,
+   },
+ ]
```

# Test source

```ts
  86  |                 rect.height > 0
  87  |               );
  88  |             };
  89  | 
  90  |             const textFor = (element: Element) =>
  91  |               (element.textContent ?? '').replace(/\s+/g, ' ').trim();
  92  | 
  93  |             const typographyElements = Array.from(
  94  |               document.querySelectorAll(
  95  |                 'main h1, main h2, main h3, main p, main li, main a, main button',
  96  |               ),
  97  |             ).filter((element) => isVisible(element) && textFor(element).length > 0);
  98  | 
  99  |             const issues = typographyElements.flatMap((element) => {
  100 |               const style = window.getComputedStyle(element);
  101 |               const rect = element.getBoundingClientRect();
  102 |               const selector = element.tagName.toLowerCase();
  103 |               const fontSize = Number.parseFloat(style.fontSize);
  104 |               const lineHeight =
  105 |                 style.lineHeight === 'normal' ? null : Number.parseFloat(style.lineHeight);
  106 |               const text = textFor(element).slice(0, 96);
  107 |               const found: TypographyIssue[] = [];
  108 |               const isBodyCopy = ['p', 'li'].includes(selector);
  109 |               const isAction = ['a', 'button'].includes(selector);
  110 |               const minFontSize = isBodyCopy ? 15 : isAction ? 10 : 18;
  111 | 
  112 |               if (fontSize < minFontSize) {
  113 |                 found.push({
  114 |                   selector,
  115 |                   text,
  116 |                   fontSize,
  117 |                   lineHeight,
  118 |                   width: Math.round(rect.width),
  119 |                   left: Math.round(rect.left),
  120 |                   right: Math.round(rect.right),
  121 |                   issue: `font-size below ${minFontSize}px`,
  122 |                 });
  123 |               }
  124 | 
  125 |               if (lineHeight !== null && lineHeight / fontSize < 1.15 && isBodyCopy) {
  126 |                 found.push({
  127 |                   selector,
  128 |                   text,
  129 |                   fontSize,
  130 |                   lineHeight,
  131 |                   width: Math.round(rect.width),
  132 |                   left: Math.round(rect.left),
  133 |                   right: Math.round(rect.right),
  134 |                   issue: 'body line-height ratio below 1.15',
  135 |                 });
  136 |               }
  137 | 
  138 |               if (rect.left < -1 || rect.right > viewportWidth + 1) {
  139 |                 found.push({
  140 |                   selector,
  141 |                   text,
  142 |                   fontSize,
  143 |                   lineHeight,
  144 |                   width: Math.round(rect.width),
  145 |                   left: Math.round(rect.left),
  146 |                   right: Math.round(rect.right),
  147 |                   issue: 'text element extends outside mobile viewport',
  148 |                 });
  149 |               }
  150 | 
  151 |               return found;
  152 |             });
  153 | 
  154 |             return {
  155 |               page: pageLabel,
  156 |               viewport: viewportLabel,
  157 |               url: window.location.pathname,
  158 |               title: document.title,
  159 |               viewportWidth,
  160 |               scrollWidth,
  161 |               horizontalOverflow: Math.max(0, scrollWidth - viewportWidth),
  162 |               headingCount: document.querySelectorAll('main h1, main h2, main h3').length,
  163 |               paragraphCount: document.querySelectorAll('main p, main li').length,
  164 |               ctaCount: document.querySelectorAll('main a, main button').length,
  165 |               issues,
  166 |               screenshot: screenshotFile,
  167 |             } satisfies TypographySnapshot;
  168 |           },
  169 |           {
  170 |             pageLabel: pageTarget.label,
  171 |             viewportLabel: viewport.label,
  172 |             screenshotFile: screenshotName,
  173 |           },
  174 |         );
  175 | 
  176 |         snapshots.push(audit);
  177 | 
  178 |         expect(
  179 |           audit.headingCount,
  180 |           'page should expose headings for visual typography review',
  181 |         ).toBeGreaterThan(0);
  182 |         expect(
  183 |           audit.horizontalOverflow,
  184 |           'mobile page should not create horizontal scroll',
  185 |         ).toBeLessThanOrEqual(2);
> 186 |         expect(audit.issues, JSON.stringify(audit.issues, null, 2)).toEqual([]);
      |                                                                     ^ Error: [
  187 |       });
  188 |     }
  189 |   }
  190 | 
  191 |   test.afterAll(async () => {
  192 |     const sortedSnapshots = snapshots.sort((a, b) =>
  193 |       `${a.page}-${a.viewport}`.localeCompare(`${b.page}-${b.viewport}`),
  194 |     );
  195 |     const issueCount = sortedSnapshots.reduce(
  196 |       (count, snapshot) => count + snapshot.issues.length,
  197 |       0,
  198 |     );
  199 |     const generatedAt = new Date().toISOString();
  200 | 
  201 |     await mkdir(reportRoot, { recursive: true });
  202 |     await writeFile(
  203 |       jsonReportPath,
  204 |       `${JSON.stringify({ generatedAt, issueCount, snapshots: sortedSnapshots }, null, 2)}\n`,
  205 |       'utf8',
  206 |     );
  207 | 
  208 |     const tableRows = sortedSnapshots
  209 |       .map(
  210 |         (snapshot) =>
  211 |           `| ${snapshot.page} | ${snapshot.viewport} | ${snapshot.horizontalOverflow}px | ${snapshot.headingCount} | ${snapshot.paragraphCount} | ${snapshot.ctaCount} | ${snapshot.issues.length} | ${snapshot.screenshot} |`,
  212 |       )
  213 |       .join('\n');
  214 | 
  215 |     const issueDetails = sortedSnapshots
  216 |       .filter((snapshot) => snapshot.issues.length > 0)
  217 |       .map(
  218 |         (snapshot) =>
  219 |           `### ${snapshot.page} / ${snapshot.viewport}\n\n${snapshot.issues
  220 |             .map((issue) => `- ${issue.selector}: ${issue.issue} — "${issue.text}"`)
  221 |             .join('\n')}`,
  222 |       )
  223 |       .join('\n\n');
  224 | 
  225 |     await writeFile(
  226 |       markdownReportPath,
  227 |       `# Mobile Typography Visual QA\n\nGenerated: ${generatedAt}\n\nScope: Playwright mobile typography audit for key 247iBET routes at iPhone SE and Pixel 5 widths. Screenshots are saved in \`.omx/reports/mobile-typography-screenshots/\`.\n\n## Summary\n\n- Pages audited: ${pages.map((page) => page.url).join(', ')}\n- Viewports audited: ${mobileViewports.map((viewport) => `${viewport.label} (${viewport.width}x${viewport.height})`).join(', ')}\n- Total issue count: ${issueCount}\n\n| Page | Viewport | Horizontal overflow | Headings | Body items | CTAs/links | Issues | Screenshot |\n| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |\n${tableRows}\n\n## Issue Details\n\n${issueDetails || 'No typography issues detected by the automated mobile QA thresholds.'}\n`,
  228 |       'utf8',
  229 |     );
  230 |   });
  231 | });
  232 | 
```