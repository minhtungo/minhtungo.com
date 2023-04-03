import { PopUpFromBottom } from '@/lib/framerVariants';
import Image from 'next/image';
import { Text } from '@/components/ui/FramerMotion';
import { Link, TypingAnimation } from '@/components/common';
import { LazyDogModel } from '@/components/Home';
import { Button, Heading } from '@/components/ui';

const CONTENT = [
  'I Love Bubble Tea.',
  1000,
  'I Love Building Things For The Web.',
  1000,
  'I Love React.',
  1000,
  '',
];

const Hero = () => {
  return (
    <div className='h-screen flex-1 gap-12 pt-8 md:flex md:items-center md:justify-between lg:pt-0'>
      {/* Dog Model */}
      <div className='relative z-10 mx-auto mt-4 flex h-[270px] w-[270px] basis-2/5 justify-center sm:h-[360px] sm:w-[360px] md:order-2 md:mx-0 md:mt-[6.6rem] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[550px]'>
        <Image
          className='absolute top-0 h-auto w-auto animate-pulse sm:-top-1 md:left-0 md:-top-12'
          src='/static/images/sparkles.svg'
          alt='sparkles'
          width={60}
          height={60}
        />

        <LazyDogModel />
      </div>
      {/* Hero Text */}
      <div className='relative -mt-14 basis-3/5 text-center md:text-start'>
        <Image
          className='absolute -top-4 h-auto w-auto animate-pulse sm:-top-[3rem] sm:left-[10%] md:left-0 md:-top-20 '
          src='/static/images/sparkles.svg'
          alt='sparkles'
          width={60}
          height={60}
        />

        <Text className='mb-[5px] pl-[3px]' variants={PopUpFromBottom}>
          Hi, I am
        </Text>
        <Text variants={PopUpFromBottom}>
          <Heading
            variant='gradient'
            size='lg'
            weight='bold'
            className='primary-gradient inline pb-2'
          >
            Minh Tu Ngo.
          </Heading>
          <span className='wave text-2xl md:text-4xl lg:text-5xl'>👋</span>
        </Text>
        <div className='text-md mt-3 font-medium dark:text-neutral-300 md:mt-4 md:text-base lg:ml-[2px] lg:text-lg'>
          <TypingAnimation content={CONTENT} />
        </div>
        <Text
          variants={PopUpFromBottom}
          className='lg:text-md mt-4 text-sm dark:text-neutral-400 md:text-base lg:ml-[1px] lg:mt-3'
        >
          {"Don't forget to sign my"}{' '}
          <Link
            href='/guestbook'
            className='primary-gradient bg-clip-text text-transparent'
          >
            guestbook
          </Link>
          !
        </Text>

        {/* buttons */}
        <div className='mt-5 flex flex-col justify-center gap-3 sm:flex-row md:justify-start lg:ml-[2px]'>
          <Button href='/about' size='lg'>
            More About Me
          </Button>
          <Button href='/contact' variant='secondary' size='lg'>
            Let{"'"}s Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
