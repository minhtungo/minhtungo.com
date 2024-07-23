import { Actions } from '@/components/guestbook';

import getCurrentUser from '@/actions/getCurrentUser';
import GuestbookForm from '@/app/guestbook/form';

const Guestbook = async () => {
  const user = await getCurrentUser();
  return <>{user ? <GuestbookForm user={user} /> : <Actions />}</>;
};

export default Guestbook;
