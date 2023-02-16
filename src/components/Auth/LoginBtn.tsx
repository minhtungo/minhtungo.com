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
    <Button
      variant='secondary'
      size='medium'
      rounded='large'
      className='inline-flex items-center rounded-lg px-5 py-4 text-sm font-medium'
      onClick={() => signIn('github')}
    >
      <BsGithub className='mr-2 -ml-1 h-4 w-4' />
      Sign in with Github
    </Button>
  );
}
