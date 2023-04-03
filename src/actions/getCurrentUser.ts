import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}

export default async function getCurrentUser() {
  const session = await getSession();

  if (session) {
    return session.user;
  } else {
    return undefined;
  }
}
