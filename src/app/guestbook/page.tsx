import PageTitle from '@/components/common/PageTitle';
import Guestbook from '@/components/Guestbook';
import Messages from '@/components/Messages';
import MessageSkeleton from '@/components/MessageSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

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
      <Suspense
        fallback={
          <div className='flex justify-center gap-2'>
            <Skeleton className='h-[34px] w-[110px]' />
            <Skeleton className='h-[34px] w-[110px]' />
          </div>
        }
      >
        <Guestbook userPromise={userPromise} />
      </Suspense>
      <Suspense
        fallback={
          <div className='mx-auto max-w-3xl space-y-8'>
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
