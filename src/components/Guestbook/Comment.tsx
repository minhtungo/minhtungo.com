import Image from '@/components/common/Image';
import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const Comment = ({ fallback }) => {
  const { data: comments } = useSWR('/api/guestbook', fetcher, { fallback });
  return (
    <>
      {comments?.map((comment: any) => (
        <article className='mb-6 rounded-lg p-6 text-base' key={comment.id}>
          <footer className='mb-2 flex items-center justify-between'>
            <div className='flex items-center'>
              <p className='mr-3 inline-flex items-center text-sm'>
                <Image
                  className='mr-2 h-8 w-8 rounded-full'
                  width={30}
                  height={30}
                  src='https://avatars.githubusercontent.com/u/4323180?v=4'
                  alt='avatar'
                />
                {comment.email}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <time dateTime='2022-02-08' title='February 8th, 2022'>
                  {new Date(comment.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </p>
            </div>
          </footer>
          <p className='text-gray-500 dark:text-gray-400'>{comment.body}</p>
        </article>
      ))}
    </>
  );
};
export default Comment;
