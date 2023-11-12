import { Actions } from '@/components/Guestbook';

import getCurrentUser from '@/actions/getCurrentUser';
import Form from './Form';

const Guestbook = async () => {
  const user = await getCurrentUser();
  return <>{user ? <Form user={user} /> : <Actions />}</>;
};

export default Guestbook;
