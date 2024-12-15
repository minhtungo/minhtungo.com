'use client';

import { signInWithOauth } from '@/actions/auth';
import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import { Button } from '@/components/ui/button';

export default function Actions() {
  return (
    <div className='mt-3 flex flex-wrap items-center justify-center gap-2 lg:mt-4'>
      <Button variant='outline' size='sm' onClick={() => signInWithOauth('github')}>
        <Github className='size-4' />
        <span>Github</span>
      </Button>
      <Button variant='outline' size='sm' onClick={() => signInWithOauth('google')}>
        <Google className='size-4' />
        <span>Google</span>
      </Button>
    </div>
  );
}
