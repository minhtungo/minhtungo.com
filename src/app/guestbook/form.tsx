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
          className='hidden h-10 w-10 rounded-full sm:block'
          alt={user?.name!}
        />
        <input
          type='text'
          placeholder='Your message...'
          aria-label='Your message'
          required
          name='content'
          className='peer mt-2 block w-full appearance-none border-b-[1.55px] border-transparent-black-tight bg-transparent py-2 px-1.5 text-sm  text-gray-800 focus:border-neutral-500/80 focus:outline-none focus:ring-0 dark:border-transparent-white dark:text-gray-300 dark:focus:border-neutral-400'
        />
      </div>

      <div className='mt-1 ml-auto flex gap-2'>
        <Button variant='outline' onClick={() => signOut()}>
          Sign Out
        </Button>
        <SubmittedButton />
      </div>
    </form>
  );
};

export default GuestbookForm;
