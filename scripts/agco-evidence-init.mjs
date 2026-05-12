#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_TEMPLATE = 'docs/compliance/agco-license-evidence.template.json';
const DEFAULT_TARGET = 'docs/compliance/agco-license-evidence.local.json';

/**
 * @param {{ root?: string, args?: string[], stdout?: (message: string) => void, stderr?: (message: string) => void }} [options]
 * @returns {0 | 1}
 */
export function runAgcoEvidenceInit(options = {}) {
  const root = options.root || process.cwd();
  const args = options.args || process.argv.slice(2);
  const stdout = options.stdout || console.log;
  const stderr = options.stderr || console.error;
  const force = args.includes('--force');
  const targetArgIndex = args.indexOf('--target');
  const targetPath =
    targetArgIndex >= 0 && args[targetArgIndex + 1] ? args[targetArgIndex + 1] : DEFAULT_TARGET;

  const template = resolve(root, DEFAULT_TEMPLATE);
  const target = resolve(root, targetPath);

  if (!existsSync(template)) {
    stderr(`AGCO evidence init failed: template not found at ${DEFAULT_TEMPLATE}.`);
    return 1;
  }

  if (existsSync(target) && !force) {
    stderr(
      `AGCO evidence init failed: ${targetPath} already exists; initializer refuses to overwrite local private evidence. Re-run with --force only if you intentionally want to replace the local private-evidence scaffold.`,
    );
    return 1;
  }

  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(template, target);
  stdout(`Created ${targetPath} from ${DEFAULT_TEMPLATE}.`);
  stdout('Next: fill it with approved legal/compliance references, then run:');
  stdout(`AGCO_EVIDENCE_FILE=${targetPath} pnpm compliance:agco:evidence`);
  stdout(`AGCO_EVIDENCE_FILE=${targetPath} pnpm compliance:agco:licensed`);
  stdout('Do not commit local/private evidence files; docs/compliance/*.local.json is gitignored.');
  return 0;
}

function main() {
  process.exitCode = runAgcoEvidenceInit();
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
