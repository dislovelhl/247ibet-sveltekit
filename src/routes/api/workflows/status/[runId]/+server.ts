import { json } from '@sveltejs/kit';
import { requireWorkflowSecret } from '$lib/server/workflow-route.js';
import { getRun } from 'workflow/api';
import type { RequestHandler } from './$types';

export const config = { runtime: 'nodejs24.x', maxDuration: 30 };

const RUN_ID_RE = /^[0-9a-zA-Z_-]{8,64}$/;

// Narrow DTO exposed over the wire — never return the raw workflow runtime object.
// Hides input payloads, error stacks, env-adjacent metadata, and internal fields.
type RunStatusDTO = {
  runId: string;
  status: string;
  startedAt: string | null;
  completedAt: string | null;
  durationMs: number | null;
};

function projectRun(runId: string, run: unknown): RunStatusDTO {
  const r = (run ?? {}) as Record<string, unknown>;
  const startedAt = typeof r.startedAt === 'string' ? r.startedAt : null;
  const completedAt = typeof r.completedAt === 'string' ? r.completedAt : null;
  const durationMs =
    typeof r.durationMs === 'number'
      ? r.durationMs
      : startedAt && completedAt
        ? Math.max(0, Date.parse(completedAt) - Date.parse(startedAt))
        : null;
  const status = typeof r.status === 'string' ? r.status : 'active';
  return { runId, status, startedAt, completedAt, durationMs };
}

export const GET: RequestHandler = async ({ request, params }) => {
  const unauthorized = requireWorkflowSecret(request);
  if (unauthorized) return unauthorized;

  const { runId } = params;
  if (!RUN_ID_RE.test(runId)) {
    return json({ error: 'invalid runId' }, { status: 400 });
  }

  const run = getRun(runId);
  if (!run) {
    return json({
      runId,
      status: 'unknown',
      startedAt: null,
      completedAt: null,
      durationMs: null,
    } satisfies RunStatusDTO);
  }

  return json(projectRun(runId, run));
};
