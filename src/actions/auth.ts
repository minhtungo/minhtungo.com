'use server';

import { signIn, signOut as naSignOut } from '@/auth';

export const signInWithOauth = async (provider: 'github' | 'google') => {
  await signIn(provider)
};

export const signOut = async () => {
  await naSignOut({
    redirectTo: '/',
  });
};
