import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { aeoSchemaWorkflow } from '../../../../workflows/aeo-schema.js';
import type { AeoSchemaInput } from '$lib/workflows/types.js';

export const config = { runtime: 'nodejs20.x', maxDuration: 60 };

async function runWorkflow(input: AeoSchemaInput) {
	let runId: string = crypto.randomUUID();
	try {
		const { start } = await import('workflow/api');
		const run = await start(aeoSchemaWorkflow, [input]);
		runId = run.runId ?? runId;
	} catch {
		// workflow/api unavailable — run synchronously (fallback)
		await aeoSchemaWorkflow(input);
	}
	return runId;
}

export const POST: RequestHandler = async ({ request }) => {
	const secret = request.headers.get('x-workflow-secret');
	if (!secret || secret !== env.WORKFLOW_SECRET) {
		return json({ error: 'unauthorized' }, { status: 401 });
	}

	const input: AeoSchemaInput = await request.json().catch(() => ({}));
	const runId = await runWorkflow(input);
	return json({ runId, status: 'started' }, { status: 202 });
};

// Vercel Cron calls GET — no auth required
export const GET: RequestHandler = async () => {
	const runId = await runWorkflow({});
	return json({ runId, status: 'started' }, { status: 202 });
};
