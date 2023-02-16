import Image from '@/components/common/Image';

const Comment = () => {
  return (
    <article className='mb-6 rounded-lg p-6 text-base'>
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
            Minh Tu Ngo
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            <time dateTime='2022-02-08' title='February 8th, 2022'>
              Feb. 8, 2022
            </time>
          </p>
        </div>
      </footer>
      <p className='text-gray-500 dark:text-gray-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio,
        dolorem nesciunt quo fugit, asperiores aliquid, corrupti eos rem
        architecto a nihil. Eligendi molestiae quis excepturi explicabo
        repudiandae ab necessitatibus.
      </p>
    </article>
  );
};
export default Comment;
