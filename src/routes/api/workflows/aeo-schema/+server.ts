import { json } from '@sveltejs/kit';
import {
  requireCronSecret,
  requireWorkflowSecret,
  startWorkflowResponse,
} from '$lib/server/workflow-route.js';
import type { RequestHandler } from './$types';
import { aeoSchemaWorkflow } from '../../../../workflows/aeo-schema.js';
import type { AeoSchemaInput } from '$lib/workflows/types.js';

export const config = { runtime: 'nodejs24.x', maxDuration: 60 };

const MAX_BODY_BYTES = 10_000;
const MAX_PAGES = 50;
const SLUG_RE = /^[a-z0-9][a-z0-9/_-]{0,99}$/i;
const ALLOWED_KEYS = new Set(['pages', 'force']);

function validateInput(
  input: unknown,
): { ok: true; value: AeoSchemaInput } | { ok: false; reason: string } {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, reason: 'body must be a JSON object' };
  }
  const obj = input as Record<string, unknown>;
  for (const key of Object.keys(obj)) {
    if (!ALLOWED_KEYS.has(key)) return { ok: false, reason: `unknown key: ${key}` };
  }
  const value: AeoSchemaInput = {};
  if (obj.pages !== undefined) {
    if (!Array.isArray(obj.pages)) return { ok: false, reason: 'pages must be an array' };
    if (obj.pages.length > MAX_PAGES) {
      return { ok: false, reason: `pages array exceeds ${MAX_PAGES} entries` };
    }
    if (!obj.pages.every((p) => typeof p === 'string' && SLUG_RE.test(p))) {
      return { ok: false, reason: 'pages must be slug-safe strings ([a-z0-9/_-], 1-100 chars)' };
    }
    value.pages = obj.pages as string[];
  }
  if (obj.force !== undefined) {
    if (typeof obj.force !== 'boolean') return { ok: false, reason: 'force must be boolean' };
    value.force = obj.force;
  }
  return { ok: true, value };
}

export const POST: RequestHandler = async ({ request }) => {
  const unauthorized = requireWorkflowSecret(request);
  if (unauthorized) return unauthorized;

  const cl = request.headers.get('content-length');
  if (cl && Number(cl) > MAX_BODY_BYTES) {
    return json({ error: 'payload too large' }, { status: 413 });
  }
  const text = await request.text().catch(() => '');
  if (text.length > MAX_BODY_BYTES) {
    return json({ error: 'payload too large' }, { status: 413 });
  }
  let parsed: unknown;
  try {
    parsed = text ? JSON.parse(text) : {};
  } catch {
    return json({ error: 'invalid JSON' }, { status: 400 });
  }
  const v = validateInput(parsed);
  if (!v.ok) {
    return json({ error: 'invalid input', detail: v.reason }, { status: 400 });
  }

  return startWorkflowResponse(aeoSchemaWorkflow, [v.value]);
};

// Vercel Cron calls GET with Authorization: Bearer <CRON_SECRET>
export const GET: RequestHandler = async ({ request }) => {
  const unauthorized = requireCronSecret(request);
  if (unauthorized) return unauthorized;

  return startWorkflowResponse(aeoSchemaWorkflow, [{}]);
};
