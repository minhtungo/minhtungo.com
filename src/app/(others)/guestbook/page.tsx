import { Guestbook, Messages } from '@/components/Guestbook';
import { getServerSession } from 'next-auth';
import { Title } from '@/components/ui';

import type { Metadata } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const metadata: Metadata = {
  title: 'Guestbook | Minh Tu Ngo',
  description: 'Sign my guestbook and share your thoughts.',
};

export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Title
        title='Guestbook'
        subtitle={
          session
            ? `Hi ${session.user?.name}! I am glad you're here. Please leave a message below.`
            : "I'd love to hear from you! To leave a message, simply sign in with your preferred account below. "
        }
        className='!mb-2'
      />
      <Guestbook user={session?.user} />
      <Messages />
    </>
  );
}
