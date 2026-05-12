import { json, type RequestHandler } from '@sveltejs/kit';
import { validateSignupRequest } from '$lib/server/signup.js';
import { start } from 'workflow/api';
import { handleUserSignup } from '../../../workflows/user-signup.js';

export const POST: RequestHandler = async ({ request }) => {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return json({ error: 'invalid JSON' }, { status: 400 });
  }

  const validation = validateSignupRequest(input);
  if (!validation.ok) {
    return json({ error: 'invalid input', detail: validation.detail }, { status: 400 });
  }

  // Executes asynchronously and doesn't block your app
  const run = await start(handleUserSignup, [validation.value.email]);

  return json({ message: 'User signup workflow started', runId: run.runId }, { status: 202 });
};
