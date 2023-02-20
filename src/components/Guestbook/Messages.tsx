import Image from '@/components/common/Image';
import AnimatedText from '@/components/FramerMotion/AnimatedText';
import fetcher from '@/lib/fetcher';
import { PopUpFromBottom } from '@/lib/framerVariants';
import useSWR from 'swr';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';

const Messages = ({ initialMessage }: { initialMessage: Message[] }) => {
  const { data: messages } = useSWR('/api/guestbook', fetcher, {
    fallback: initialMessage,
  });

  return (
    <AnimatedDiv variants={PopUpFromBottom} className='mx-auto max-w-3xl'>
      {messages?.map((comment: any) => (
        <article className='my-6 rounded-lg text-base' key={comment.id}>
          <footer className='mb-2 flex items-center'>
            <div className='mr-3 inline-flex items-center text-sm'>
              <Image
                className='mr-2 h-8 w-8 rounded-full'
                width={60}
                height={60}
                src={comment.image}
                alt='avatar'
              />
              {comment.createdBy}
            </div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>
              <time dateTime='2022-02-08' title='February 8th, 2022'>
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
          <div className='text-sm text-gray-700 dark:text-neutral-400  sm:text-base '>
            {comment.content}
          </div>
        </article>
      ))}
    </AnimatedDiv>
  );
};

export default Messages;
