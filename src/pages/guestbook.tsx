import { AnimatedHeading, Button } from '@/components';
import { LoginBtn } from '@/components/Auth';
import Input from '@/components/common/Input';
import { Container, Meta } from '@/components/Layout';
import { FromLeftVariant } from '@/lib/FramerMotionVariants';
import DOMPurify from 'dompurify';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useSWRConfig } from 'swr';

const GuestBookPage = () => {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [content, setContent] = useState('');

  const createComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rawContent = JSON.stringify({
      body: DOMPurify.sanitize(content),
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: rawContent,
    };

    try {
      const data = await fetch('/api/guestbook', requestOptions);
      const res = await data.json();
      console.log(res);
      setContent('');
      mutate('/api/guestbook');
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
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
      <Container className='max-w-6xl pt-20'>
        <AnimatedHeading
          variants={FromLeftVariant}
          className='mb-6 animate-border bg-gradient-to-r from-cyan-700 to-blue-600 bg-[length:400%_400%] bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
        >
          Guestbook
        </AnimatedHeading>
        <LoginBtn />
        {session && (
          <form className='mb-16 w-full' onSubmit={(e) => createComment(e)}>
            <Input
              type='text'
              name='comment'
              label='Comment'
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Button type='submit' className='mt-4'>
              Sign
            </Button>
          </form>
        )}
      </Container>
    </>
  );
};
export default GuestBookPage;
