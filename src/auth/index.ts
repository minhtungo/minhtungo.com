import db from '@/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const config = {
  adapter: DrizzleAdapter(db),
  providers: [Google, Github],
};

export const { signIn, signOut, handlers, auth } = NextAuth(config);
