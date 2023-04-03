import { Guestbook, Messages } from '@/components/Guestbook';
import { getServerSession } from 'next-auth';
import { Title } from '@/components/ui';

import type { Metadata } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Suspense } from 'react';
import getCurrentUser from '@/actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'Guestbook | Minh Tu Ngo',
  description: 'Sign my guestbook and share your thoughts.',
};

export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  const user = getCurrentUser();

  return (
    <>
      <Title
        title='Guestbook'
        subtitle={
          "I'd love to hear from you! Please leave a message below. "
        }
        className='!mb-2'
      />

      <Suspense
        fallback={<div className=''>Loading...</div>}
      >
        <Guestbook promise={user} />
      </Suspense>
      <Messages />
    </>
  );
}
