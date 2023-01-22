import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from './Button';

const ProfileCard = () => {
  return (
    <div className='flex flex-col justify-center max-w-sm p-4 shadow-md rounded-xl sm:px-12 bg-transparent-whiter dark:text-gray-100 dark:bg-transparent-black mx-auto lg:mx-0 w-full'>
      <Image
        src='/static/images/avatar.png'
        alt='Avatar'
        height={150}
        width={150}
        className='w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full dark:bg-gray-700 aspect-square'
      />
      <div className='space-y-4 text-center'>
        <div className='my-2 space-y-1'>
          <h2 className='text-lg font-semibold sm:text-xl text-gray-700 dark:text-gray-200'>
            Minh Tu Ngo
          </h2>
          <p className='px-5 text-xs sm:text-base text-gray-600 dark:text-gray-400'>
            Web developer
          </p>
        </div>
        <div className='space-y-4 divide-y divide-transparent-background-whit dark:divide-transparent-white'>
          <div className='flex space-x-3 items-center justify-center'>
            <Button href='mailto:mn.minhtungo@gmail.com'>Message</Button>
            <Button
              href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
              variant='secondary'
              newTab
            >
              Resume
            </Button>
          </div>
          <div className='flex justify-center pt-2 space-x-4 align-center text-gray-600 dark:text-gray-300'>
            <Link
              rel='noopener noreferrer'
              href='https://github.com/minhtungo'
              className='hover:text-blue-500 p-2 '
              target='_blank'
              aria-label='GitHub URL'
            >
              <FiGithub className='w-5 h-5' />
            </Link>
            <Link
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/minhtungo/'
              aria-label='LinkedIn URL'
              className='hover:text-blue-500 p-2'
              target='_blank'
            >
              <FiLinkedin className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
