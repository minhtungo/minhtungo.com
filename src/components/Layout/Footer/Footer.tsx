import Link from '@/components/common/Link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Container, Icon } from '@/components';
import Image from 'next/image';
import Avatar from '@/components/common/Avatar';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-6xl px-6 py-6 pt-12 xl:px-0 xl:pt-20'>
      <hr className='my-6 border-transparent-black-tight dark:border-transparent-white sm:mx-auto' />

      <div className='md:flex md:justify-between'>
        <div className='mb-6 flex flex-col justify-center md:mb-0'>
          <div className='flex items-center'>
            <Link href='/' animation={false}>
              <p className='flex cursor-pointer items-center whitespace-nowrap text-2xl font-semibold dark:text-gray-50'>
                Minh Tu Ngo.
                <span className='mx-1 mr-2 rounded-lg bg-black/[7%] px-2 py-1 text-xs dark:bg-white/10'>
                  v2.0.0
                </span>
              </p>
            </Link>
          </div>
          <p className='mt-2 text-gray-700 dark:text-gray-400'>
            Created with ❤️ using Next.js.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-24'>
          <div>
            <ul className='text-gray-600 dark:text-gray-400'>
              <li className='mb-2'>
                <Link href='/about'>About</Link>
              </li>
              <li className='mb-2'>
                <Link href='/projects'>Projects</Link>
              </li>
              <li className='mb-2'>
                <Link href='/library'>Library</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='text-gray-600 dark:text-gray-400'>
              <li className='mb-2'>
                <Link href='https://github.com/minhtungo' icon>
                  Github
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/in/minhtungo/' icon>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='text-gray-600 dark:text-gray-400'>
              <li className='mb-2'>
                <Link href='/contact'>Contact</Link>
              </li>
              <li className='mb-2'>
                <Link href='/guestbook'>Guestbook</Link>
              </li>
              <li>
                <Link href='/uses'>Uses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-6 text-center sm:flex sm:items-center sm:justify-between'>
        <Link href='/'>
          😸
          <span className='primary-gradient bg-clip-text font-medium text-transparent'>
            Minh Tu Ngo
          </span>
          🐶
        </Link>
        <div className='mt-4 flex justify-center space-x-6 sm:mt-0'>
          <Icon>
            <Link
              href='https://github.com/minhtungo'
              className='flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <FiGithub className='h-5 w-5 hover:text-blue-500' />
              <span className='sr-only'>Github account</span>
            </Link>
          </Icon>
          <Icon>
            <Link
              href='https://linkedin.com/in/minhtungo/'
              className='flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <FiLinkedin className='h-5 w-5 hover:text-blue-500' />
              <span className='sr-only'>LinkedIn account</span>
            </Link>
          </Icon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
