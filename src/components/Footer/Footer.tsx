import { Icon, Link } from '@/components/common';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import footer from '@/constant/footer';
import { NowPlaying } from '@/components/Spotify';
import { SocialIcons } from '../ui';

const Footer = () => {
  return (
    <footer className='py-6 pt-12'>
      <hr className='my-6 border-transparent-black-tight dark:border-transparent-white' />
      <div className='md:flex md:justify-between'>
        <div className='mb-6 flex w-fit flex-col justify-center md:mb-0'>
          <div className='flex items-center'>
            <Link href='/' animation={false}>
              <p className='flex cursor-pointer items-center whitespace-nowrap text-xl font-semibold dark:text-gray-50'>
                Minh Tu Ngo.
                <span className='mx-1 mr-2 rounded-lg bg-black/[7%] px-2 py-1 text-xs dark:bg-white/10'>
                  v2.0.0
                </span>
              </p>
            </Link>
          </div>
          <p className='mt-2 mb-3 text-sm font-semibold text-gray-700 dark:text-gray-400'>
            Powered by NextJS, Vercel and 💖.
          </p>
          <NowPlaying />
        </div>

        <div className='grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-24'>
          {footer.categories.map((category, index) => (
            <ul
              key={index}
              className='text-[15px] text-gray-600 dark:text-gray-400 md:text-base'
            >
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
      <div className='mt-8 flex flex-col justify-center text-center lg:mt-10'>
        <Link
          href='/'
          animation={false}
          className='text-sm text-gray-600 dark:text-gray-400'
        >
          Made by{' '}
          <span className='primary-gradient bg-clip-text font-medium text-transparent'>
            Minh Tu Ngo
          </span>
          .
        </Link>
        <SocialIcons className='mx-auto mt-4' />
      </div>
    </footer>
  );
};

export default Footer;
