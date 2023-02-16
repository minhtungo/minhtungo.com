import { AnimatedHeading, Button } from '@/components';
import { LoginBtn } from '@/components/Auth';
import Input from '@/components/common/Input';
import Comment from '@/components/Guestbook/Comment';
import { Container, Meta } from '@/components/Layout';
import { FromLeftVariant } from '@/lib/FramerMotionVariants';
import DOMPurify from 'dompurify';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { useSWRConfig } from 'swr';
import prisma from '@/lib/prismadb';
import Image from '@/components/common/Image';

export const getServerSideProps = async () => {
  const comments = await prisma.guestBook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    props: {
      comments,
    },
  };
};

const GuestBookPage = ({ comments }) => {
  const { data: session } = useSession();

  const { mutate } = useSWRConfig();
  const [content, setContent] = useState('');

  const createComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      await fetch('/api/guestbook', requestOptions);
      setContent('');
      mutate('/api/guestbook');
    } catch (error) {
      setContent('');
      console.log(error);
    }
  };

  const fetchComments = async () => {
    console.log('fetching comments');
    const data = await fetch('/api/guestbook', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await data.json();
    console.log(res);
  };

  fetchComments();

  return (
    <>
      <Meta title='Guestbook' />
      <Container className='max-w-5xl pt-20'>
        <AnimatedHeading
          variants={FromLeftVariant}
          className='mb-6 animate-border bg-gradient-to-r from-cyan-700 to-blue-600 bg-[length:400%_400%] bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
        >
          Guestbook
        </AnimatedHeading>
        <h3>Leave a comment below, it can be totally random 👇</h3>
        <div className='mx-auto max-w-3xl'>
          {session ? (
            <>
              <div className='mt-4 flex w-full flex-col items-center gap-2'>
                <div className='flex w-full items-center gap-0 sm:gap-2'>
                  <Image
                    src={session.user?.image!}
                    width={60}
                    height={60}
                    className='hidden h-10 w-10 rounded-full sm:block'
                    alt={session.user?.name!}
                  />
                  <form
                    className='relative w-full'
                    onSubmit={(e) => createComment(e)}
                  >
                    <input
                      type='search'
                      id='comment'
                      className='block w-full rounded-lg border border-custom-border-black bg-card-background-light px-3 py-2 pr-16 text-sm text-gray-900 placeholder-gray-500 focus:outline-none dark:border-transparent-white dark:bg-card-background-dark dark:text-gray-200 dark:placeholder-gray-400'
                      placeholder='Your message...'
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                      value={content}
                      required
                    />
                    <button
                      type='submit'
                      className='hover:text-shadow absolute bottom-[4.8px] right-1 rounded-md bg-primary-gradient px-4 py-1 text-sm font-medium text-gray-200 transition-[shadow,text-shadow] hover:shadow-primary focus:outline-none'
                    >
                      Sign
                    </button>
                  </form>
                </div>
                <div className='mr-auto'>
                  <Button
                    variant='secondary'
                    size='small'
                    rounded='medium'
                    onClick={signOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <LoginBtn />
          )}
          <Comment fallback={comments} />
        </div>
      </Container>
    </>
  );
};

export default GuestBookPage;
