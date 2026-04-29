import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { safeEq } from '$lib/server/auth.js';
import type { RequestHandler } from './$types';
import { seoAuditWorkflow } from '../../../../workflows/seo-audit.js';

export const config = { runtime: 'nodejs24.x', maxDuration: 60 };

async function runWorkflow(): Promise<{ runId: string; async: boolean }> {
  let runId: string = crypto.randomUUID();
  try {
    const { start } = await import('workflow/api');
    const run = await start(seoAuditWorkflow);
    runId = run.runId ?? runId;
    return { runId, async: true };
  } catch {
    await seoAuditWorkflow();
    return { runId, async: false };
  }
}

export const POST: RequestHandler = async ({ request }) => {
  const secret = request.headers.get('x-workflow-secret') ?? '';
  const expected = env.WORKFLOW_SECRET ?? '';
  if (!expected || !safeEq(secret, expected)) {
    return json({ error: 'unauthorized' }, { status: 401 });
  }

  const { runId, async: isAsync } = await runWorkflow();
  if (isAsync) {
    return json({ runId, status: 'started' }, { status: 202 });
  }
  return json({ runId, status: 'completed-sync' }, { status: 200 });
};

// Vercel Cron calls GET with Authorization: Bearer <CRON_SECRET>
export const GET: RequestHandler = async ({ request }) => {
  const auth = request.headers.get('authorization') ?? '';
  const expected = env.CRON_SECRET ? `Bearer ${env.CRON_SECRET}` : '';
  if (!expected || !safeEq(auth, expected)) {
    return json({ error: 'unauthorized' }, { status: 401 });
  }

  const { runId, async: isAsync } = await runWorkflow();
  if (isAsync) {
    return json({ runId, status: 'started' }, { status: 202 });
  }
  return json({ runId, status: 'completed-sync' }, { status: 200 });
};
