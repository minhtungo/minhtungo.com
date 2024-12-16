'use client';

import { signInWithOauth } from '@/actions/auth';
import { saveGuestbookEntry } from '@/actions/saveGuestbookEntry';
import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import LoaderButton from '@/components/LoaderButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { use, useActionState } from 'react';

interface GuestbookProps {
  userPromise: Promise<User | undefined>;
}

const GuestbookForm = ({ userPromise }: GuestbookProps) => {
  const user = use(userPromise);

  return <>{user ? <MessageForm user={user} className='mb-6' /> : <Actions className='mb-6' />}</>;
};

interface GuestbookFormProps {
  user: User | undefined;
  className?: string;
}

const MessageForm = ({ user, className }: GuestbookFormProps) => {
  const [state, action, isPending] = useActionState(saveGuestbookEntry, {
    error: '',
  });

  return (
    <form action={action} className={cn('mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-2', className)}>
      <div className='flex w-full items-center gap-0 sm:gap-2'>
        <Image
          src={user?.image!}
          width={60}
          height={60}
          className='hidden size-8 rounded-full sm:block'
          alt={user?.name!}
        />
        <input
          type='text'
          placeholder='Your message...'
          aria-label='Your message'
          required
          name='content'
          className='peer mt-2 block w-full appearance-none py-2 px-3 text-sm focus:outline-none focus:ring-0 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-b border-input focus:border-accent-foreground'
          disabled={isPending}
        />
      </div>

      {state.error && <p className='text-destructive text-sm mt-3'>{state.error}</p>}

      <div className='mt-1 ml-auto flex gap-2'>
        <Button type='button' variant='outline' size='sm' onClick={() => signOut()}>
          Sign Out
        </Button>
        <LoaderButton size='sm' type='submit' isPending={isPending}>
          Submit
        </LoaderButton>
      </div>
    </form>
  );
};

const Actions = ({ className }: { className?: string }) => {
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

export default GuestbookForm;
