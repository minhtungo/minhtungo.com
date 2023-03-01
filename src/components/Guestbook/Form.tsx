'use client';

import { Button, Image, LoadingSpinner } from '@/components/common';
import DOMPurify from 'dompurify';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import TextareaAutosize from 'react-textarea-autosize';
import { useSWRConfig } from 'swr';

const Form = () => {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [content, setContent] = useState('');
  const [isSending, setIsSending] = useState(false);

  const submitMessage = async () => {
    const rawContent = JSON.stringify({
      content: DOMPurify.sanitize(content),
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: rawContent,
    };
    const sendMessage = async () => {
      try {
        setIsSending(true);
        await fetch('/api/guestbook', requestOptions);
        setContent('');
        setIsSending(false);
        mutate('/api/guestbook');
      } catch (error) {
        setContent('');
        console.error(error);
        console.error(error);
      }
    };

    const sendingPromise = sendMessage();

    toast.promise(sendingPromise, {
      loading: 'Signing...',
      success:
        'Thank you for taking the time to leave a message on my site. Have a great day!',
      error:
        'Something went wrong! Please try again or reach me at mn.minhtungo@gmail.com.',
    });
  };

  return (
    <div className='mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-2'>
      <div className='flex w-full items-center gap-0 sm:gap-2'>
        <Image
          src={session?.user?.image!}
          width={60}
          height={60}
          className='hidden h-10 w-10 rounded-full sm:block'
          alt={session?.user?.name!}
        />
        <div className='w-full'>
          <TextareaAutosize
            id='message'
            className='block w-full rounded-lg border border-custom-border-black bg-card-background-light px-3 py-2 pr-16 text-sm text-gray-900 placeholder-gray-500 focus:outline-none dark:border-transparent-white dark:bg-card-background-dark dark:text-gray-200 dark:placeholder-gray-400'
            placeholder='Your message...'
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            required
          />
        </div>
      </div>
      <div className='mt-1 ml-auto flex gap-2'>
        <Button
          variant='secondary'
          size='medium'
          rounded='medium'
          onClick={signOut}
        >
          Sign Out
        </Button>
        <Button
          disabled={isSending || !content}
          size='medium'
          rounded='medium'
          onClick={() => submitMessage()}
          className='disabled:cursor-not-allowed'
        >
          {isSending ? (
            <>
              <LoadingSpinner className='mr-3 inline h-4 w-4 animate-spin text-blue-500' />
              Signing...
            </>
          ) : (
            'Sign'
          )}
        </Button>
      </div>
    </div>
  );
};
export default Form;
