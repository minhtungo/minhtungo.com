import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Container, Icon } from '@/components';

const Footer = () => {
  return (
    <footer className='py-4 md:py-6 '>
      <Container>
        <div className='my-4 flex items-center  space-x-5 lg:my-6'>
          <div className='h-px flex-1 bg-transparent-black-tight dark:bg-transparent-white' />
          <div className=''>
            <Icon>
              😸
              <span className='primary-gradient bg-clip-text text-xl font-bold text-transparent'>
                Minh Tu Ngo
              </span>
              🐶
            </Icon>
          </div>
          <div className='h-px flex-1 bg-transparent-black-tight dark:bg-transparent-white' />
        </div>
        <div className='text-center sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-600 dark:text-gray-400 sm:text-center '>
            {/* 😸Minh Tu Ngo🐶 */}
            <Link href='https://skfb.ly/6W9QU' className='underline'>
              3D Model
            </Link>{' '}
            by Takuya on{' '}
            <Link
              href='http://creativecommons.org/licenses/by/4.0/'
              className='underline'
            >
              Sketchfab
            </Link>
          </span>
          <div className='mt-4 flex justify-center space-x-4 sm:mt-0'>
            <Icon>
              <Link
                href='https://github.com/minhtungo'
                className='text-gray-600 dark:text-gray-400 '
                target='_blank'
              >
                <FiGithub className='h-5 w-5 hover:text-blue-500' />
              </Link>
            </Icon>
            <Icon>
              <Link
                href='https://www.linkedin.com/in/minhtungo/'
                className='text-gray-600 dark:text-gray-400 '
                target='_blank'
              >
                <FiLinkedin className='h-5 w-5 hover:text-blue-500' />
              </Link>
            </Icon>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
