import LoginButtons from '@/components/LoginButtons';
import MessageForm from '@/components/MessageForm';
import { getCurrentUser } from '@/lib/auth';

interface GuestBookProps {}

const GuestBook = async ({}: GuestBookProps) => {
  const user = await getCurrentUser();
  return <>{user ? <MessageForm user={user} className='mb-6' /> : <LoginButtons className='mb-6' />}</>;
};

export default GuestBook;
