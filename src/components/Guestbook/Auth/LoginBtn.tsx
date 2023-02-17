import { signIn } from 'next-auth/react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import Button from '@/components/common/Button';

export default function Component() {
  return (
    <div className='mt-3 flex flex-wrap items-center gap-2'>
      <Button
        variant='secondary'
        size='medium'
        rounded='large'
        className='inline-flex items-center rounded-lg px-5 py-4  text-sm font-medium'
        onClick={() => signIn('github')}
      >
        <BsGithub className='mr-2 -ml-1 h-4 w-4' />
        <span>Sign in with Github</span>
      </Button>
      <Button
        variant='secondary'
        size='medium'
        rounded='large'
        className='inline-flex items-center rounded-lg bg-blue-500 px-5 py-4 text-sm font-medium'
        onClick={() => signIn('google')}
      >
        <FcGoogle className='mr-2 -ml-1 h-4 w-4' />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}
