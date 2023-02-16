import { useSession, signIn, signOut } from 'next-auth/react';
import { useRef, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import Button from '../common/Button';
import Image from 'next/image';

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Image
          src={session.user?.image!}
          alt={`${session.user?.name}-avatar`}
          width={48}
          height={48}
          className='rounded-full'
        />
        Leave a comment below, it can be totally random
      </>
    );
  }

  return (
    <div className='mt-4 flex flex-wrap items-center'>
      <Button
        variant='secondary'
        size='medium'
        rounded='large'
        className='inline-flex items-center rounded-lg px-5 py-4 text-xs font-medium sm:text-sm'
        onClick={() => signIn('github')}
      >
        <BsGithub className='mr-2 -ml-1 h-4 w-4' />
        <span>Sign in with Github</span>
      </Button>
      <span className='ml-2 text-xs sm:text-sm'>to leave a comment.</span>
    </div>
  );
}
