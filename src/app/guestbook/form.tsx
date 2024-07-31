'use client';

import { FC, useRef } from 'react';
import SubmittedButton from './SubmittedButton';
import { saveGuestbookEntry } from '@/actions/saveGuestbookEntry';
import { signOut } from 'next-auth/react';
import { DefaultSession } from 'next-auth';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface formProps {
  user: DefaultSession['user'];
}

const GuestbookForm: FC<formProps> = ({ user }) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await saveGuestbookEntry(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className='mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-2'
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

export default GuestbookForm;
