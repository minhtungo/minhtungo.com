import { buttonVariants } from '@/components/ui/Button';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import TypingAnimation from '../common/TypingAnimation';
import sparkles from '/public/static/images/sparkles.svg';

const Hero = () => {
  return (
    <div className='min-h-screen flex-1 gap-12 pt-8 md:flex md:items-center md:justify-between lg:pt-0'>
      {/* Dog Model */}
      <div className='relative z-10 mx-auto mt-4 flex h-[270px] w-[270px] basis-2/5 justify-center sm:h-[360px] sm:w-[360px] md:order-2 md:mx-0 md:mt-[6.6rem] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[550px]'>
        <Image
          className='absolute top-0 h-auto w-auto animate-pulse sm:-top-1 md:left-0 md:-top-12 select-none'
          src={sparkles}
          alt='sparkles'
        />
        {/* <LazyDogModel /> */}
      </div>
      {/* Hero Text */}
      <div className='relative -mt-14 basis-3/5 text-center md:text-start'>
        <Image
          className='absolute -top-4 h-auto w-auto animate-pulse sm:-top-[3rem] sm:left-[10%] md:left-0 md:-top-20 select-none'
          src={sparkles}
          alt='sparkles'
        />

        <h2 className='text-sm font-semibold'>Hi, I am</h2>
        <div className='flex items-center justify-center md:justify-start'>
          <Typography variant='h1' className='primary-gradient text-center bg-clip-text text-transparent mt-2'>
            Minh Tu Ngo.
          </Typography>
          <span className='wave text-2xl md:text-4xl lg:text-5xl'>👋</span>
        </div>

        <div className='mt-3 font-medium md:mt-4 text-base lg:ml-[2px] lg:text-lg'>
          <TypingAnimation />
        </div>
        <div className='mt-4 text-base text-muted-foreground'>
          Don't forget to sign my{' '}
          <Link href='/guestbook' className='underline hover:text-primary'>
            guestbook
          </Link>
          !
        </div>

        {/* buttons */}
        <div className='mt-5 flex flex-col justify-center gap-3 sm:flex-row md:justify-start lg:ml-[2px]'>
          <Link
            href='/about'
            className={cn(
              buttonVariants({
                variant: 'default',
              })
            )}
          >
            About Me
          </Link>
          <Link
            href='/contact'
            className={cn(
              buttonVariants({
                variant: 'outline',
              })
            )}
          >
            Say Hello
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
