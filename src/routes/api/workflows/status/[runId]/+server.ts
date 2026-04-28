import { timingSafeEqual } from 'node:crypto';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const config = { runtime: 'nodejs20.x', maxDuration: 30 };

const RUN_ID_RE = /^[0-9a-zA-Z_-]{8,64}$/;

function safeEq(a: string, b: string): boolean {
	const ab = Buffer.from(a);
	const bb = Buffer.from(b);
	if (ab.length !== bb.length) return false;
	return timingSafeEqual(ab, bb);
}

export const GET: RequestHandler = async ({ request, params }) => {
	const secret = request.headers.get('x-workflow-secret') ?? '';
	const expected = env.WORKFLOW_SECRET ?? '';
	if (!expected || !safeEq(secret, expected)) {
		return json({ error: 'unauthorized' }, { status: 401 });
	}

	const { runId } = params;
	if (!RUN_ID_RE.test(runId)) {
		return json({ error: 'invalid runId' }, { status: 400 });
	}

	try {
		const { getRun } = await import('workflow/api');
		const run = getRun(runId);
		return json({ runId, run });
	} catch {
		return json({
			runId,
			status: 'unknown',
			note: 'workflow runtime not available; runs are synchronous in fallback mode'
		});
	}
};
