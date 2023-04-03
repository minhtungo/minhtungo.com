import { Actions } from '@/components/Guestbook';
import { DefaultSession } from 'next-auth';

import Form from './Form';

import { FC } from 'react';

interface GuestbookProps {
  user: DefaultSession['user'];
}

const Guestbook: FC<GuestbookProps> = ({ user }) => {
  return <>{user ? <Form user={user} /> : <Actions />}</>;
};

export default Guestbook;
