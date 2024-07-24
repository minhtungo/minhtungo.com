import db from '@/db';
import { guestbooks } from '@/db/schema';
import dayjs from 'dayjs';
import { desc } from 'drizzle-orm';
import Image from 'next/image';

const Messages = async ({}) => {
  const messages = await db.select().from(guestbooks).orderBy(desc(guestbooks.createdAt)).limit(10).execute();

  return (
    <ul className='mx-auto max-w-3xl'>
      {messages &&
        messages.map(({ id, image, createdBy, createdAt, content }) => (
          <li className='py-4 flex gap-x-3 border-b border-border/50 last:border-none' key={`${id}-message`}>
            <Image
              className='size-9 object-contain sm:size-10 rounded-full'
              width={40}
              height={40}
              src={image!}
              alt={createdBy}
            />
            <div className='space-y-1'>
              <div className='flex items-center gap-x-2 text-sm'>
                <div className='font-medium'>{createdBy}</div>
                <div className='text-xs text-muted-foreground'>{dayjs(createdAt).format('MMM D, YYYY')}</div>
              </div>
              <p className='text-sm text-muted-foreground'>{content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Messages;
