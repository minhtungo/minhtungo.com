'use client';

import Google from '@/components/icons/Google';
import { Button } from '@/components/ui/Button';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function Actions() {
  return (
    <div className='mt-3 flex flex-wrap items-center justify-center gap-2 lg:mt-4'>
      <Button variant='outline' size='sm' onClick={() => signIn('github')}>
        <Github className='size-4' />
        <span>Github</span>
      </Button>
      <Button variant='outline' size='sm' onClick={() => signIn('google')}>
        <Google className='size-4' />
        <span>Google</span>
      </Button>
    </div>
  );
}
