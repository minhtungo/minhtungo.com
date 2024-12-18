'use client';

import { signInWithOauth } from '@/actions/auth';
import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoginButtonsProps {
  className?: string;
}

const LoginButtons = ({ className }: LoginButtonsProps) => {
  return (
    <div className={cn('mt-3 flex flex-wrap items-center justify-center gap-2 lg:mt-4', className)}>
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
};

export default LoginButtons;
