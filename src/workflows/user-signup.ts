import { FatalError, sleep } from 'workflow';

interface SignupUser {
  id: string;
  email: string;
}

export async function handleUserSignup(email: string) {
  'use workflow';

  const user = await createUser(email);
  await sendWelcomeEmail(user);

  await sleep('5s');
  await sendOnboardingEmail(user);

  console.info(
    '[user-signup]',
    JSON.stringify({
      event: 'workflow-complete',
      userId: user.id,
      email: user.email,
    }),
  );

  return { userId: user.id, status: 'onboarded' as const };
}

async function createUser(email: string): Promise<SignupUser> {
  'use step';

  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !normalizedEmail.includes('@')) {
    throw new FatalError('Invalid email address');
  }

  const user = { id: crypto.randomUUID(), email: normalizedEmail };
  console.info('[user-signup]', JSON.stringify({ event: 'user-created', userId: user.id }));
  return user;
}

async function sendWelcomeEmail(user: SignupUser): Promise<void> {
  'use step';

  console.info('[user-signup]', JSON.stringify({ event: 'welcome-email-queued', userId: user.id }));
}

async function sendOnboardingEmail(user: SignupUser): Promise<void> {
  'use step';

  console.info(
    '[user-signup]',
    JSON.stringify({ event: 'onboarding-email-queued', userId: user.id }),
  );
}
