import { Actions } from '@/components/Guestbook';

import getCurrentUser from '@/actions/getCurrentUser';
import GuestbookForm from '@/app/(main)/guestbook/form';

const Guestbook = async () => {
  const user = await getCurrentUser();
  return <>{user ? <GuestbookForm user={user} /> : <Actions />}</>;
};

export default Guestbook;
