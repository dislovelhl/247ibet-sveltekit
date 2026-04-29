import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { writeReport } from '../src/workflows/steps/write-report';

const ORIGINAL_CWD = process.cwd();
const ORIGINAL_REPORT_DIR = process.env.WORKFLOW_REPORT_DIR;

describe('writeReport', () => {
  let workdir: string;

  beforeEach(async () => {
    workdir = await mkdtemp(join(tmpdir(), 'write-report-'));
    process.chdir(workdir);
  });

  afterEach(async () => {
    process.chdir(ORIGINAL_CWD);
    if (ORIGINAL_REPORT_DIR === undefined) delete process.env.WORKFLOW_REPORT_DIR;
    else process.env.WORKFLOW_REPORT_DIR = ORIGINAL_REPORT_DIR;
    await rm(workdir, { recursive: true, force: true });
  });

  it('writes a JSON file under private workflow data by default', async () => {
    const out = await writeReport('seo', 'r1.json', { hello: 'world' });
    expect(out).toBe(resolve('.workflow-data/reports/seo/r1.json'));
    const body = JSON.parse(await readFile(out, 'utf-8'));
    expect(body).toEqual({ hello: 'world' });
  });

  it('creates the report directory if missing', async () => {
    const out = await writeReport('geo', 'a.json', { ok: true });
    expect(out.endsWith('.workflow-data/reports/geo/a.json')).toBe(true);
  });

  it('rotates older reports beyond the 10-file cap', async () => {
    const dir = resolve('.workflow-data/reports/seo');
    const { mkdir } = await import('node:fs/promises');
    await mkdir(dir, { recursive: true });
    // Pre-populate 11 stale files with old mtimes (oldest first).
    for (let i = 0; i < 11; i++) {
      const p = join(dir, `old-${i}.json`);
      await writeFile(p, '{}', 'utf-8');
      const old = new Date(Date.now() - (11 - i) * 60_000);
      const { utimes } = await import('node:fs/promises');
      await utimes(p, old, old);
    }

    await writeReport('seo', 'new.json', { ok: true });

    const remaining = (await readdir(dir)).filter((f) => f.endsWith('.json'));
    expect(remaining.length).toBeLessThanOrEqual(10);
    expect(remaining).toContain('new.json');
    // The oldest file (old-0) must have been removed.
    expect(remaining).not.toContain('old-0.json');
  });

  it('does not rotate when at-or-below the cap', async () => {
    for (let i = 0; i < 5; i++) {
      await writeReport('geo', `r-${i}.json`, { i });
    }
    const remaining = (await readdir(resolve('.workflow-data/reports/geo'))).filter((f) =>
      f.endsWith('.json'),
    );
    expect(remaining.length).toBe(5);
  });

  it('allows an explicit private report root override', async () => {
    process.env.WORKFLOW_REPORT_DIR = '.custom-workflow-reports';

    const out = await writeReport('seo', 'custom.json', { ok: true });

    expect(out).toBe(resolve('.custom-workflow-reports/seo/custom.json'));
  });
});
