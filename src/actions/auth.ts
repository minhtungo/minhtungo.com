'use server';

import { signIn, signOut as naSignOut } from '@/auth';

export const signInWithOauth = async ({ provider, redirectURL }: { provider: 'github' | 'google'; redirectURL: string }) => {
  await signIn(provider, {
    redirectTo: redirectURL || '/guestbook',
  });
};

export const signOut = async () => {
  await naSignOut({
    redirectTo: '/',
  });
};
