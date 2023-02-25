import Image from '@/components/common/Image';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import fetcher from '@/lib/fetcher';
import { PopUpFromBottom } from '@/lib/framerVariants';
import useSWR from 'swr';

const Messages = ({ initialMessage }: { initialMessage: Message[] }) => {
  const { data: messages } = useSWR('/api/guestbook', fetcher, {
    fallbackData: initialMessage,
    revalidateOnFocus: false,
  });

  return (
    <AnimatedDiv variants={PopUpFromBottom} className='mx-auto max-w-3xl'>
      <hr className='my-6 border-transparent-black-tight dark:border-transparent-white sm:mx-auto' />

      {messages?.map((comment: any) => (
        <article className='my-6 rounded-lg text-base' key={comment.id}>
          <footer className='mb-2 flex items-center'>
            <div className='mr-3 inline-flex items-center text-[13px] font-semibold dark:text-gray-100 sm:text-[15px]'>
              <Image
                className='mr-2 h-8 w-8 rounded-full'
                width={60}
                height={60}
                src={comment.image}
                alt='avatar'
              />
              {comment.createdBy}
            </div>
            <div className='text-xs text-gray-500 dark:text-neutral-500 sm:text-[13px]'>
              <time dateTime={`${comment.createdAt}`} title='Messaged Created'>
                {new Date(comment.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </time>
            </div>
          </footer>
          <div className='text-[13px] text-gray-800 dark:text-neutral-300 sm:text-base'>
            {comment.content}
          </div>
        </article>
      ))}
    </AnimatedDiv>
  );
};

export default Messages;
