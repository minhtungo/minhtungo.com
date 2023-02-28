import { Heading, Text } from '@/components/FramerMotion';
import { Messages, Form } from '@/components/Guestbook';
import { FromLeftVariant } from '@/lib/framerVariants';
import prisma from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { Actions } from '@/components/Guestbook';

import { getServerSession } from 'next-auth/next';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guestbook | Minh Tu Ngo',
  description:
    'If you have any suggestions or comments, please feel free to reach out to me by email or leave a message.',
};

export default async function GuestbookPage() {
  const session = await getServerSession(authOptions);

  const messages: any = await prisma.guestBook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const messagesWithDateString = messages.map((message: any) => {
    const { updatedAt, createdAt, ...rest } = message;
    return {
      ...rest,
      updatedAt: JSON.stringify(updatedAt), // convert the date object to an ISO string
      createdAt: JSON.stringify(createdAt), // convert the date object to an ISO string
    };
  });

  // const session = await getServerSession(authOptions);
  return (
    <>
      <Heading
        variants={FromLeftVariant}
        className='primary-gradient mb-2 bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
      >
        Guestbook
      </Heading>
      <Text
        variants={PopUpFromBottom}
        className='text-sm text-gray-900 dark:text-gray-200 sm:text-base'
      >
        {session
          ? `Hi ${session.user?.name}! I am glad you're here. Please leave a message below.`
          : "I'd love to hear from you! To leave a message, simply sign in with your preferred account below. "}
      </Text>
      {session ? <Form /> : <Actions />}
      <Messages initialMessage={messagesWithDateString} />
    </>
  );
}
