import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { start } from 'workflow/api';
import { safeEq } from './auth.js';

type WorkflowFunction<TArgs extends unknown[], TResult> = (...args: TArgs) => Promise<TResult>;

function unauthorizedResponse(): Response {
  return json({ error: 'unauthorized' }, { status: 401 });
}

export function requireWorkflowSecret(request: Request): Response | null {
  const expected = env.WORKFLOW_SECRET ?? '';
  const secret = request.headers.get('x-workflow-secret') ?? '';

  if (!expected || !safeEq(secret, expected)) {
    return unauthorizedResponse();
  }

  return null;
}

export async function startWorkflowResponse<TArgs extends unknown[], TResult>(
  workflow: WorkflowFunction<TArgs, TResult>,
  args: TArgs,
): Promise<Response> {
  const { runId } = await start(workflow, args);

  return json({ runId, status: 'started' }, { status: 202 });
}

export function requireCronSecret(request: Request): Response | null {
  const expected = env.CRON_SECRET ? `Bearer ${env.CRON_SECRET}` : '';
  const auth = request.headers.get('authorization') ?? '';

  if (!expected || !safeEq(auth, expected)) {
    return unauthorizedResponse();
  }

  return null;
}
