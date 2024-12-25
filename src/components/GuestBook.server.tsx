import GuestBook from '@/components/GuestBook.client';
import { getMessages } from '@/db/queries';
import { getCurrentUser } from '@/lib/auth';

const GuestBookServer = async () => {
  const userPromise = getCurrentUser();
  const messagePromise = getMessages();
  const [user, messages] = await Promise.all([userPromise, messagePromise]);

  return <GuestBook user={user} messages={messages} />;
};

export default GuestBookServer;
