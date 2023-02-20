import { Button } from '@/components';
import Image from '@/components/common/Image';
import { LoginBtn } from '@/components/Guestbook/Auth';
import Messages from '@/components/Guestbook/Messages';
import DOMPurify from 'dompurify';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSWRConfig } from 'swr';
import TextareaAutosize from 'react-textarea-autosize';

const Guestbook = ({ messages }: { messages: Message[] }) => {
  const { data: session } = useSession();

  const { mutate } = useSWRConfig();
  const [content, setContent] = useState('');

  const submitMessage = async () => {
    const loading = toast.loading('Signing');

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

    try {
      const res = await fetch('/api/guestbook', requestOptions);
      setContent('');
      if (!res.ok) {
        toast.dismiss(loading);
        toast.error('Something went wrong. Please try again later.');
        return;
      }

      toast.dismiss(loading);
      toast.success('Added successfully');

      mutate('/api/guestbook');
    } catch (error) {
      setContent('');
      toast.dismiss(loading);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className=''>
      {session ? (
        <>
          <div className='mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-2'>
            <div className='flex w-full items-center gap-0 sm:gap-2'>
              <Image
                src={session.user?.image!}
                width={60}
                height={60}
                className='hidden h-10 w-10 rounded-full sm:block'
                alt={session.user?.name!}
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
                size='medium'
                rounded='medium'
                onClick={() => submitMessage()}
              >
                Sign
              </Button>
            </div>
          </div>
        </>
      ) : (
        <LoginBtn />
      )}
      <Messages initialMessage={messages} />
    </div>
  );
};
export default Guestbook;
