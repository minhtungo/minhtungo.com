'use client';

import { signIn } from 'next-auth/react';

export default function Actions() {
  return (
    <div className='mt-3 flex flex-wrap items-center justify-center gap-2 lg:mt-4'>
      <Button
        variant='secondary'
        size='md'
        rounded='lg'
        className='px-5 py-4 text-sm font-medium'
        onClick={() => signIn('github')}
      >
        <BsGithub className='mr-1 h-4 w-4' />
        <span>Github</span>
      </Button>
      <Button
        variant='secondary'
        size='md'
        rounded='lg'
        className='px-5 py-4 text-sm font-medium'
        onClick={() => signIn('google')}
      >
        <FcGoogle className='mr-1 h-4 w-4' />
        <span>Google</span>
      </Button>
    </div>
  );
}
