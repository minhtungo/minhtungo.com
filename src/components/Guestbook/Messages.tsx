import { Image } from '@/components/ui';
import dayjs from 'dayjs';
import prisma from '@/lib/prismadb';

const Messages = async ({}) => {
  const messages = await prisma.guestBook.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return (
    <div className='mx-auto max-w-3xl mt-10'>
      {messages &&
        messages.map(({ id, image, createdBy, createdAt, content }) => (
          <article className='mb-4 pb-4 border-b border-transparent-black-tight dark:border-transparent-white last:border-none' key={id}>
            <footer className='mb-3 flex gap-3'>
              <Image className='h-10 w-10 rounded-full' width={45} height={45} src={image} alt={createdBy} />
              <div className='flex flex-col justify-center gap-px text-sm'>
                <div className='text-[13px] font-medium dark:text-gray-100 sm:text-[15px]'>{createdBy}</div>
                <div className='text-xs text-gray-500 dark:text-neutral-500 sm:text-[13px]'>{dayjs(createdAt).format('MMM D, YYYY HH:mm')}</div>
              </div>
            </footer>
            <p className='pl-[52px] text-[13px] text-gray-700 dark:text-neutral-300 sm:text-[15px]'>{content}</p>
          </article>
        ))}
    </div>
  );
};

export default Messages;
