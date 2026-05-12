import {
  requireCronSecret,
  requireWorkflowSecret,
  startWorkflowResponse,
} from '$lib/server/workflow-route.js';
import type { RequestHandler } from './$types';
import { seoAuditWorkflow } from '../../../../workflows/seo-audit.js';

export const config = { runtime: 'nodejs24.x', maxDuration: 60 };

export const POST: RequestHandler = async ({ request }) => {
  const unauthorized = requireWorkflowSecret(request);
  if (unauthorized) return unauthorized;

  return startWorkflowResponse(seoAuditWorkflow, []);
};

// Vercel Cron calls GET with Authorization: Bearer <CRON_SECRET>
export const GET: RequestHandler = async ({ request }) => {
  const unauthorized = requireCronSecret(request);
  if (unauthorized) return unauthorized;

  return startWorkflowResponse(seoAuditWorkflow, []);
};
