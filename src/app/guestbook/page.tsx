import PageTitle from '@/components/common/PageTitle';
import Guestbook from '@/components/guestbook/Guestbook';
import Messages from '@/components/guestbook/Messages';
import MessageSkeleton from '@/components/guestbook/MessageSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Guestbook',
};

export default async function GuestbookPage() {
  return (
    <>
      <PageTitle title='Guestbook' subtitle={"I'd love to hear from you! Feel free to leave a message below."} />
      <Suspense
        fallback={
          <div className='flex justify-center gap-2'>
            <Skeleton className='h-[34px] w-[110px]' />
            <Skeleton className='h-[34px] w-[110px]' />
          </div>
        }
      >
        <Guestbook />
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
