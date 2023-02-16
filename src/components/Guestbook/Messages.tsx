import Image from '@/components/common/Image';
import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const Messages = ({ initialMessage }: { initialMessage: Message[] }) => {
  const { data: messages } = useSWR('/api/guestbook', fetcher, {
    fallback: initialMessage,
  });
  return (
    <>
      {messages?.map((comment: any) => (
        <article className='my-6 rounded-lg text-base' key={comment.id}>
          <footer className='mb-2 flex items-center'>
            <p className='mr-3 inline-flex items-center text-sm'>
              <Image
                className='mr-2 h-8 w-8 rounded-full'
                width={60}
                height={60}
                src={comment.image}
                alt='avatar'
              />
              {comment.createdBy}
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              <time dateTime='2022-02-08' title='February 8th, 2022'>
                {new Date(comment.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </p>
          </footer>
          <p className='text-gray-800 dark:text-gray-300'>{comment.content}</p>
        </article>
      ))}
    </>
  );
};

export default Messages;
