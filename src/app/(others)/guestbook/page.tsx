import { Guestbook, Messages } from '@/components/Guestbook';
import Loader from '@/components/Guestbook/Loader';
import { Skeleton, Title } from '@/components/ui';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Guestbook | Minh Tu Ngo',
  description: 'Sign my guestbook and share your thoughts.',
};

export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  return (
    <>
      <Title title='Guestbook' subtitle={"I'd love to hear from you! Please leave a message below. "} className='!mb-2' />

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
            <hr className='my-6 border-transparent-black-tight dark:border-transparent-white sm:mx-auto' />
            <Loader />
            <Loader />
            <Loader />
          </div>
        }
      >
        <Messages />
      </Suspense>
    </>
  );
}
