import { Heading, Text } from '@/components/FramerMotion';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prismadb';

import type { Metadata } from 'next';
import { Guestbook, Messages } from '@/components/Guestbook';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'Guestbook | Minh Tu Ngo',
  description:
    'If you have any suggestions or comments, please feel free to reach out to me by email or leave a message.',
};

export default async function GuestbookPage() {
  const messages: Message[] = await prisma.guestBook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  const session = await getServerSession(authOptions);
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
      <Guestbook session={session} />
      <Messages initialMessage={messages} />
    </>
  );
}
