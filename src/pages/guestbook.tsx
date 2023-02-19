import { AnimatedHeading, AnimatedText } from '@/components';
import Guestbook from '@/components/Guestbook/Guestbook';
import { Layout, Meta } from '@/components/Layout';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';
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
    <Layout pageTitle='Guestbook'>
      <AnimatedHeading
        variants={FromLeftVariant}
        className='primary-gradient mb-6 bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
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
    </Layout>
  );
};

export default GuestBookPage;
