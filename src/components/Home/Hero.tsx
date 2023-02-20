import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import { AnimatedText, Button, ModelLoader } from '..';
import Link from '../common/Link';

const LazyDogModel = dynamic(() => import('./Model/DogModel'), {
  ssr: false,
  loading: () => <ModelLoader />,
});

const Hero = () => {
  return (
    <section
      id='home'
      className='h-screen flex-1 gap-12 pt-8 md:flex md:items-center md:justify-between lg:pt-0 '
    >
      {/* Dog Model */}
      <div className='relative z-10 mx-auto mt-4 flex h-[270px] w-[270px] basis-2/5 justify-center sm:h-[360px] sm:w-[360px] md:order-2 md:mx-0 md:mt-[6.6rem] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px]'>
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

        <AnimatedText className='mb-[5px] pl-[3px]' variants={FromLeftVariant}>
          Hi, I am
        </AnimatedText>
        <AnimatedText variants={FromLeftVariant}>
          <span className='primary-gradient bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl'>
            Minh Tu Ngo.
          </span>
          <span className='wave text-2xl md:text-4xl lg:text-5xl'>👋</span>
        </AnimatedText>
        <p className='text-md mt-3 font-medium dark:text-neutral-300 md:text-base lg:mt-4 lg:text-lg'>
          <TypeAnimation
            cursor={true}
            speed={53}
            sequence={[
              'I Love Bubble Tea.',
              1000,
              'I Love Building Things For The Web.',
              1000,
              'I Love React.',
              1000,
              '',
            ]}
            wrapper='span'
            repeat={Infinity}
          />
        </p>
        <AnimatedText
          variants={PopUpFromBottom}
          className='lg:text-md mt-4 text-sm dark:text-neutral-400 md:text-base lg:mt-3'
        >
          {"Don't forget to sign my"}{' '}
          <Link
            href='/guestbook'
            className='primary-gradient bg-clip-text text-transparent'
          >
            guestbook
          </Link>
          !
        </AnimatedText>

        {/* buttons */}
        <div className='mt-5 flex flex-col justify-center gap-3 sm:flex-row md:justify-start'>
          <Button href='#contact' size='large'>
            Let{"'"}s Connect
          </Button>

          <Button href='/about' variant='secondary' size='large'>
            More About Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
