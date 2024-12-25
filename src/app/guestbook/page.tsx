import PageTitle from '@/components/common/PageTitle';
import GuestBookServer from '@/components/GuestBook.server';

import GuestBookFormSkeleton from '@/components/skeletons/GuestBookFormSkeleton';
import MessagesSkeleton from '@/components/skeletons/MessagesSkeleton';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Guestbook',
};

export default function GuestbookPage() {
  return (
    <>
      <PageTitle
        title='Guestbook'
        subtitle="I'd love to hear from you! Feel free to leave a message below."
        className='mb-6'
      />
      <Suspense
        fallback={
          <div className='grid space-y-6'>
            <GuestBookFormSkeleton />
            <MessagesSkeleton />
          </div>
        }
      >
        <GuestBookServer />
      </Suspense>
    </>
  );
}
