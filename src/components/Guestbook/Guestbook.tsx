import GuestbookForm from '@/app/guestbook/form';
import Actions from '@/components/guestbook/Actions';
import { getCurrentUser } from '@/lib/auth';

const Guestbook = async () => {
  const user = await getCurrentUser();

  return <div className='mb-6'>{user ? <GuestbookForm user={user} /> : <Actions />}</div>;
};

export default Guestbook;
