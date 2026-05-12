import { describe, expect, it } from 'vitest';
import { validateSignupRequest } from '../src/lib/server/signup.js';

describe('validateSignupRequest', () => {
  it('accepts and normalizes a valid email address', () => {
    expect(validateSignupRequest({ email: '  USER@Example.com ' })).toEqual({
      ok: true,
      value: { email: 'user@example.com' },
    });
  });

  it('rejects non-object bodies', () => {
    expect(validateSignupRequest(null)).toEqual({
      ok: false,
      detail: 'body must be a JSON object',
    });
  });

  it('rejects unknown keys', () => {
    expect(validateSignupRequest({ email: 'user@example.com', name: 'User' })).toEqual({
      ok: false,
      detail: 'unknown key: name',
    });
  });

  it('rejects invalid email values', () => {
    expect(validateSignupRequest({ email: 'not-an-email' })).toEqual({
      ok: false,
      detail: 'email must be a valid address',
    });
  });

  it('rejects empty email strings', () => {
    expect(validateSignupRequest({ email: '   ' })).toEqual({
      ok: false,
      detail: 'email is required',
    });
  });
});
