import Image from '@/components/common/Image';
import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const Messages = ({ initialMessage }: { initialMessage: Message[] }) => {
  const { data: messages } = useSWR('/api/guestbook', fetcher, {
    fallback: initialMessage,
  });

  return (
    <div className='mx-auto max-w-3xl'>
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
          <p className='text-gray-800 dark:text-gray-300'>{comment.content}</p>
        </article>
      ))}
    </div>
  );
};

export default Messages;
