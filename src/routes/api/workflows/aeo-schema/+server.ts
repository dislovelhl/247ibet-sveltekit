import { timingSafeEqual } from 'node:crypto';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { aeoSchemaWorkflow } from '../../../../workflows/aeo-schema.js';
import type { AeoSchemaInput } from '$lib/workflows/types.js';

export const config = { runtime: 'nodejs20.x', maxDuration: 60 };

function safeEq(a: string, b: string): boolean {
	const ab = Buffer.from(a);
	const bb = Buffer.from(b);
	if (ab.length !== bb.length) return false;
	return timingSafeEqual(ab, bb);
}

async function runWorkflow(input: AeoSchemaInput) {
	let runId: string = crypto.randomUUID();
	try {
		const { start } = await import('workflow/api');
		const run = await start(aeoSchemaWorkflow, [input]);
		runId = run.runId ?? runId;
	} catch {
		await aeoSchemaWorkflow(input);
	}
	return runId;
}

export const POST: RequestHandler = async ({ request }) => {
	const secret = request.headers.get('x-workflow-secret') ?? '';
	const expected = env.WORKFLOW_SECRET ?? '';
	if (!expected || !safeEq(secret, expected)) {
		return json({ error: 'unauthorized' }, { status: 401 });
	}

	const input: AeoSchemaInput = await request.json().catch(() => ({}));
	const runId = await runWorkflow(input);
	return json({ runId, status: 'started' }, { status: 202 });
};

// Vercel Cron calls GET with Authorization: Bearer <CRON_SECRET>
export const GET: RequestHandler = async ({ request }) => {
	const auth = request.headers.get('authorization') ?? '';
	const expected = env.CRON_SECRET ? `Bearer ${env.CRON_SECRET}` : '';
	if (!expected || !safeEq(auth, expected)) {
		return json({ error: 'unauthorized' }, { status: 401 });
	}

	const runId = await runWorkflow({});
	return json({ runId, status: 'started' }, { status: 202 });
};
