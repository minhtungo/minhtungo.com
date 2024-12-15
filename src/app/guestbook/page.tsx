import PageTitle from '@/components/common/PageTitle';
import GuestbookForm from '@/components/GuestbookForm';
import Messages from '@/components/Messages';

import GuestBookFormSkeleton from '@/components/skeletons/GuestBookFormSkeleton';
import MessagesSkeleton from '@/components/skeletons/MessagesSkeleton';

import { getCurrentUser } from '@/lib/auth';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Guestbook',
};

export default function GuestbookPage() {
  const userPromise = getCurrentUser();

  return (
    <>
      <PageTitle
        title='Guestbook'
        subtitle="I'd love to hear from you! Feel free to leave a message below."
        className='mb-6'
      />
      <Suspense fallback={<GuestBookFormSkeleton />}>
        <GuestbookForm userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<MessagesSkeleton />}>
        <Messages />
      </Suspense>
    </>
  );
}
