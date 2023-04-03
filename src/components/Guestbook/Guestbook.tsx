import { Actions } from '@/components/Guestbook';
import { DefaultSession } from 'next-auth';

import Form from './Form';

import { FC } from 'react';

interface GuestbookProps {
  promise: Promise<DefaultSession | null>;
}

const Guestbook = async ({ promise }) => {
  const user = await promise;
  return <>{user ? <Form user={user} /> : <Actions />}</>;
};

export default Guestbook;
