import { SelectGuestBooks } from '@/db/schema';
import dayjs from '@/lib/dayjs';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MessagesProps {
  messages: (SelectGuestBooks & { isPending?: boolean })[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <ul className='mx-auto max-w-3xl'>
      {messages &&
        messages.map(({ id, image, createdBy, createdAt, content, isPending }) => (
          <li
            className={cn('py-4 flex gap-x-3 border-b border-border/50 last:border-none', isPending && 'opacity-60')}
            key={`${id}-message`}
          >
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
                <div className='text-xs text-muted-foreground'>{dayjs(createdAt).fromNow()}</div>
              </div>
              <p className='text-sm text-muted-foreground'>{content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Messages;
