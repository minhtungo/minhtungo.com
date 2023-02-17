import { AnimatedHeading, AnimatedText } from '@/components';
import Guestbook from '@/components/Guestbook/Guestbook';
import { Container, Meta } from '@/components/Layout';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/FramerMotionVariants';
import prisma from '@/lib/prismadb';
import { useSession } from 'next-auth/react';

export const getStaticProps = async () => {
  const messages = await prisma.guestBook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    props: {
      messages,
    },
  };
};

const GuestBookPage = ({ messages }: { messages: Message[] }) => {
  const { data: session } = useSession();

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

        <AnimatedText
          variants={PopUpFromBottom}
          className='text-gray-900 dark:text-gray-200'
        >
          {session
            ? 'Leave a comment below, it can be totally random 👇.'
            : 'Sign in to leave a comment.'}
        </AnimatedText>
        <Guestbook messages={messages} />
      </Container>
    </>
  );
};

export default GuestBookPage;
