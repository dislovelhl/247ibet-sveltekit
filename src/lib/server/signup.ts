const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

export type SignupRequest = {
  email: string;
};

export type SignupRequestValidation =
  | { ok: true; value: SignupRequest }
  | { ok: false; detail: string };

export function validateSignupRequest(input: unknown): SignupRequestValidation {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, detail: 'body must be a JSON object' };
  }

  const payload = input as Record<string, unknown>;
  for (const key of Object.keys(payload)) {
    if (key !== 'email') {
      return { ok: false, detail: `unknown key: ${key}` };
    }
  }

  if (typeof payload.email !== 'string') {
    return { ok: false, detail: 'email must be a string' };
  }

  const email = payload.email.trim().toLowerCase();
  if (email.length === 0) {
    return { ok: false, detail: 'email is required' };
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return { ok: false, detail: `email must not exceed ${MAX_EMAIL_LENGTH} characters` };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, detail: 'email must be a valid address' };
  }

  return { ok: true, value: { email } };
}
