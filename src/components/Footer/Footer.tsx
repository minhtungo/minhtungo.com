import { Icon, Link } from '@/components/common';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import footer from '@/config/footer';
import { NowPlaying } from '@/components/Spotify';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-6xl py-6 pt-12 xl:pt-20'>
      <NowPlaying />
      <hr className='my-4 border-transparent-black-tight dark:border-transparent-white sm:mx-auto' />
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
          <p className='mt-2 text-sm font-semibold text-gray-700 dark:text-gray-400'>
            Powered by NextJS, Vercel and 💖.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-24'>
          {footer.categories.map((category, index) => (
            <ul key={index} className='text-gray-600 dark:text-gray-400'>
              {category.links.map((link, index) => (
                <li className='mt-2' key={index}>
                  <Link href={link.href} icon={category.title === 'Social'}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
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
        <div className='mt-4 flex justify-center space-x-4 sm:mt-0'>
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
