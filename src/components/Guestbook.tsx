'use client';

import { saveGuestbookEntry } from '@/actions/saveGuestbookEntry';
import { Button } from '@/components/ui/button';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { use, useRef } from 'react';
import SubmittedButton from '../app/guestbook/SubmittedButton';
import { signInWithOauth } from '@/actions/auth';
import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import { cn } from '@/lib/utils';

interface GuestbookProps {
  userPromise: Promise<User | undefined>;
}

const Guestbook = ({ userPromise }: GuestbookProps) => {
  const user = use(userPromise);

  return <>{user ? <GuestbookForm user={user} className='mb-6' /> : <Actions className='mb-6' />}</>;
};

interface GuestbookFormProps {
  user: User | undefined;
  className?: string;
}

const GuestbookForm = ({ user, className }: GuestbookFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await saveGuestbookEntry(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className={cn('mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-2', className)}
    >
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
        />
      </div>

      <div className='mt-1 ml-auto flex gap-2'>
        <Button type='button' variant='outline' size='sm' onClick={() => signOut()}>
          Sign Out
        </Button>
        <SubmittedButton size='sm' />
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

export default Guestbook;
