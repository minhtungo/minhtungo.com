import { signIn } from 'next-auth/react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GoInfo } from 'react-icons/go';

import Button from '@/components/common/Button';

export default function Component() {
  return (
    <>
      <div className='mt-3 flex flex-wrap items-center gap-2 lg:mt-0'>
        <Button
          variant='secondary'
          size='medium'
          rounded='large'
          className='inline-flex items-center rounded-lg px-5 py-4  text-sm font-medium'
          onClick={() => signIn('github')}
        >
          <BsGithub className='mr-1 h-4 w-4' />
          <span>Github</span>
        </Button>
        <Button
          variant='secondary'
          size='medium'
          rounded='large'
          className='inline-flex items-center rounded-lg px-5 py-4 text-sm font-medium'
          onClick={() => signIn('google')}
        >
          <FcGoogle className='mr-1 h-4 w-4' />
          <span>Google</span>
        </Button>
      </div>
      <p className='mt-2 flex items-center text-xs italic text-gray-700 dark:text-neutral-500 sm:text-sm'>
        <GoInfo className='mr-1 h-3 w-3 sm:h-4 sm:w-4' />
        Your information is only used to display your username and avatar.
      </p>
    </>
  );
}
