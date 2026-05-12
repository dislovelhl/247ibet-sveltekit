import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { runAgcoEvidenceInit } from '../scripts/agco-evidence-init.mjs';

const ROOT = process.cwd();
const tmpPaths: string[] = [];

function tmpJsonPath(): string {
  const dir = mkdtempSync(join(tmpdir(), 'agco-evidence-init-'));
  tmpPaths.push(dir);
  return join(dir, 'agco-license-evidence.local.json');
}

afterEach(() => {
  for (const path of tmpPaths.splice(0)) {
    rmSync(path, { recursive: true, force: true });
  }
});

describe('AGCO private evidence initializer', () => {
  it('creates a local evidence scaffold from the committed template without enabling claims', () => {
    const target = tmpJsonPath();
    const stdout: string[] = [];
    const stderr: string[] = [];

    const exitCode = runAgcoEvidenceInit({
      root: ROOT,
      args: ['--target', target],
      stdout: (message) => stdout.push(message),
      stderr: (message) => stderr.push(message),
    });

    expect(exitCode).toBe(0);
    expect(stderr).toEqual([]);
    expect(stdout.join('\n')).toContain('pnpm compliance:agco:licensed');

    const scaffold = JSON.parse(readFileSync(target, 'utf-8'));
    expect(scaffold.releaseGate).toMatchObject({
      maySetIbetProfileAgcoLicensedTrue: false,
      mayPublishAgcoOrIGOClaims: false,
    });
    expect(scaffold.legalOperatorIdentity.legalEntityName).toBe('');
    expect(scaffold.agcoRegistration.registrationNumber).toBe('');
  });

  it('refuses to overwrite an existing private evidence scaffold without --force', () => {
    const target = tmpJsonPath();
    const first = runAgcoEvidenceInit({ root: ROOT, args: ['--target', target] });
    const stderr: string[] = [];

    const second = runAgcoEvidenceInit({
      root: ROOT,
      args: ['--target', target],
      stdout: () => undefined,
      stderr: (message) => stderr.push(message),
    });

    expect(first).toBe(0);
    expect(second).toBe(1);
    expect(stderr.join('\n')).toContain('already exists');
    expect(stderr.join('\n')).toContain('--force');
  });
});
