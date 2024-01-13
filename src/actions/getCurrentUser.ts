import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

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
