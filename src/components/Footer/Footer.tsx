import SocialIcons from '@/components/common/SocialIcons';
import { NowPlaying } from '@/components/Spotify';
import footer from '@/constant/footer';
import { USED_TECHS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-4xl py-6 px-6 pt-24 xl:px-0'>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='mb-6 flex w-fit flex-col justify-center md:mb-0'>
          <div className='flex items-center'>
            <Link href='/' className='flex gap-x-2 cursor-pointer items-center whitespace-nowrap text-lg font-semibold'>
              Minh Tu Ngo.
              <span className='rounded-lg bg-muted/10 px-2 py-1 text-xs'>v3</span>
            </Link>
          </div>
          <p className='mt-2 mb-3 text-sm font-semibold text-muted-foreground'>Powered by NextJS, Vercel and 💖</p>
          <NowPlaying />
        </div>

        <div className='grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-24'>
          {footer.categories.map((category, index) => (
            <ul key={index} className='text-sm text-muted-foreground'>
              {category.links.map((link, index) => (
                <li className='mt-2' key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <hr className='my-6 mt-12 border-transparent-black-tight dark:border-transparent-white' />
      <div className='flex flex-col justify-center text-center'>
        <SocialIcons className='mx-auto' />
        <div className='mx-auto mt-4 flex items-center gap-2'>
          {USED_TECHS.map(({ name, src }) => {
            return <Image className='size-5' src={src} alt={`${name}-tech-logo`} height={20} width={20} />;
          })}
        </div>
        <Link href='/' className='mt-4 text-sm text-muted-foreground'>
          Made by <span className='primary-gradient bg-clip-text font-medium text-transparent'>Minh Tu Ngo</span>.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
