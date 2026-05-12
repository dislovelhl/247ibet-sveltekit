import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

const privateEnv = vi.hoisted(() => ({
  env: {} as Record<string, string | undefined>,
}));

vi.mock('$env/dynamic/private', () => privateEnv);

let requireWorkflowSecret: typeof import('../src/lib/server/workflow-route.js').requireWorkflowSecret;
let requireCronSecret: typeof import('../src/lib/server/workflow-route.js').requireCronSecret;

beforeAll(async () => {
  ({ requireWorkflowSecret, requireCronSecret } =
    await import('../src/lib/server/workflow-route.js'));
});

beforeEach(() => {
  privateEnv.env.WORKFLOW_SECRET = 'workflow-secret';
  privateEnv.env.CRON_SECRET = 'cron-secret';
});

describe('workflow route auth helpers', () => {
  it('accepts the correct workflow secret', () => {
    const request = new Request('https://example.com', {
      headers: { 'x-workflow-secret': 'workflow-secret' },
    });

    expect(requireWorkflowSecret(request)).toBeNull();
  });

  it('rejects an incorrect workflow secret', () => {
    const request = new Request('https://example.com', {
      headers: { 'x-workflow-secret': 'wrong' },
    });

    expect(requireWorkflowSecret(request)).toMatchObject({ status: 401 });
  });

  it('accepts the correct cron secret', () => {
    const request = new Request('https://example.com', {
      headers: { authorization: 'Bearer cron-secret' },
    });

    expect(requireCronSecret(request)).toBeNull();
  });

  it('rejects an incorrect cron secret', () => {
    const request = new Request('https://example.com', {
      headers: { authorization: 'Bearer wrong' },
    });

    expect(requireCronSecret(request)).toMatchObject({ status: 401 });
  });
});
