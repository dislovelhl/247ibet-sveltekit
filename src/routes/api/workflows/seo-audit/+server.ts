import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { seoAuditWorkflow } from '../../../../workflows/seo-audit.js';

export const config = { runtime: 'nodejs20.x', maxDuration: 60 };

async function runWorkflow() {
	let runId: string = crypto.randomUUID();
	try {
		const { start } = await import('workflow/api');
		const run = await start(seoAuditWorkflow);
		runId = run.runId ?? runId;
	} catch {
		await seoAuditWorkflow();
	}
	return runId;
}

export const POST: RequestHandler = async ({ request }) => {
	const secret = request.headers.get('x-workflow-secret');
	if (!secret || secret !== env.WORKFLOW_SECRET) {
		return json({ error: 'unauthorized' }, { status: 401 });
	}

	const runId = await runWorkflow();
	return json({ runId, status: 'started' }, { status: 202 });
};

export const GET: RequestHandler = async () => {
	const runId = await runWorkflow();
	return json({ runId, status: 'started' }, { status: 202 });
};
