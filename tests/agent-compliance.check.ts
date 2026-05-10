import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Agent Compliance Guardrail
 * 
 * Scans the current working directory (or specific files) for brand voice 
 * and regulatory compliance violations. 
 * 
 * Usage: npx ts-node tests/agent-compliance.check.ts
 */

const PROHIBITED_PHRASES = [
  { pattern: /Ontario\s+&\s+Alberta\s+Licensed/i, reason: 'Unverified license claim' },
  { pattern: /\bClaim\s+now\b/i, reason: 'Ontario inducement prohibited' },
  { pattern: /\bClaim\s+bonus\b/i, reason: 'Ontario inducement prohibited' },
  { pattern: /Guaranteed\s+payout/i, reason: 'Unsupported performance claim' },
  { pattern: /lightning-fast\s+CAD\s+payouts/i, reason: 'Unsupported superlative' },
  { pattern: /Best\s+odds\s+guarantee/i, reason: 'Unsupported comparative claim' },
];

const BRAND_VOICE_RULES = [
  { pattern: /\b(they|the brand|their casino)\b/i, reason: 'Use first-party voice (we/our/ours) instead of third-party' },
];

function checkFile(filePath: string) {
  if (!filePath.endsWith('.svelte') && !filePath.endsWith('.ts')) return;
  
  const content = readFileSync(filePath, 'utf-8');
  const violations: string[] = [];

  for (const rule of PROHIBITED_PHRASES) {
    if (rule.pattern.test(content)) {
      violations.push(`[COMPLIANCE] ${rule.reason}: "${rule.pattern.source}"`);
    }
  }

  for (const rule of BRAND_VOICE_RULES) {
    if (rule.pattern.test(content)) {
      violations.push(`[VOICE] ${rule.reason}: "${rule.pattern.source}"`);
    }
  }

  return violations;
}

// In a real scenario, we'd only check git-staged files.
// For this harness, we scan the whole src/routes directory.

function walk(dir: string, callback: (path: string) => void) {
  readdirSync(dir).forEach( f => {
    const dirPath = join(dir, f);
    const isDirectory = statSync(dirPath).isDirectory();
    if (isDirectory) {
      walk(dirPath, callback);
    } else {
      callback(join(dir, f));
    }
  });
}

console.log('--- 247iBET Agent Compliance Audit ---');
let totalViolations = 0;

walk('src/routes', (path) => {
  const violations = checkFile(path);
  if (violations && violations.length > 0) {
    console.log(`\nFile: ${path}`);
    violations.forEach(v => console.log(`  ${v}`));
    totalViolations += violations.length;
  }
});

if (totalViolations > 0) {
  console.log(`\nTotal violations found: ${totalViolations}`);
  process.exit(1);
} else {
  console.log('\n✅ All checks passed. Agent behavior is compliant.');
  process.exit(0);
}
