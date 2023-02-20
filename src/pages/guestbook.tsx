import { AnimatedHeading, AnimatedText } from '@/components';
import Guestbook from '@/components/Guestbook/Guestbook';
import { Layout, MetaData } from '@/components/Layout';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';
import prisma from '@/lib/prismadb';
import { useSession } from 'next-auth/react';
import pageMeta from '@/config/meta';

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
  const { title, description } = pageMeta.guestbook;

  return (
    <>
      <MetaData title={title} description={description} />
      <Layout className='min-h-screen'>
        <AnimatedHeading
          variants={FromLeftVariant}
          className='primary-gradient mb-2 bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
        >
          Guestbook
        </AnimatedHeading>

        <AnimatedText
          variants={PopUpFromBottom}
          className='text-sm text-gray-900 dark:text-gray-200 sm:text-base'
        >
          {session
            ? `Hi ${session.user?.name}! I am glad you're here. Please leave a message below.`
            : "I'd love to hear from you! To leave a message, simply sign in with your preferred account below. "}
        </AnimatedText>
        <Guestbook messages={messages} />
      </Layout>
    </>
  );
};

export default GuestBookPage;
