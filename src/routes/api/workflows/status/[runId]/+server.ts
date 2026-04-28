import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const config = { runtime: 'nodejs20.x', maxDuration: 60 };

export const GET: RequestHandler = async ({ params }) => {
	const { runId } = params;

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
