import PageTitle from '@/components/common/PageTitle';
import { Guestbook, Messages } from '@/components/guestbook';
import MessageSkeleton from '@/components/Skeleton/MessageSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and share your thoughts.',
};

export default async function GuestbookPage() {
  return (
    <>
      <PageTitle title='Guestbook' subtitle={"I'd love to hear from you! Please leave a message below. "} />
      <Suspense
        fallback={
          <div className='mt-3 flex flex-wrap items-center justify-center gap-2 lg:mt-4'>
            <Skeleton className='h-[34px] w-[110px]' />
            <Skeleton className='h-[34px] w-[110px]' />
          </div>
        }
      >
        <Guestbook />
      </Suspense>
      <Suspense
        fallback={
          <div className='mx-auto max-w-3xl'>
            {[1, 2, 3].map((_, i) => (
              <MessageSkeleton key={i} />
            ))}
          </div>
        }
      >
        <Messages />
      </Suspense>
    </>
  );
}
