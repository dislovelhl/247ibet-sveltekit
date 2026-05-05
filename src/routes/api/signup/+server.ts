import { start } from "workflow/api";
import { handleUserSignup } from "../../../workflows/user-signup";
import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({
  request,
}) => {
  const { email } = await request.json();

  // Executes asynchronously and doesn't block your app
  const run = await start(handleUserSignup, [email]);

  return json({ message: "User signup workflow started", runId: run.runId });
};
