import { FromLeftVariant } from '@/lib/framerVariants';
import dynamic from 'next/dynamic';
import { TypeAnimation } from 'react-type-animation';

import { AnimatedText, Button, ModelLoader, SnowFall } from '..';
import Link from '../common/Link';

const LazyDogModel = dynamic(() => import('./Model/DogModel'), {
  ssr: false,
  loading: () => <ModelLoader />,
});

const Hero = () => {
  return (
    <section
      id='home'
      className='h-screen flex-1 gap-16 pt-8 md:flex md:items-center md:justify-between lg:pt-0'
    >
      {/* Dog Model */}
      <div className='relative z-10 mx-auto mt-4 flex h-[270px] w-[270px] basis-2/5 justify-center sm:h-[360px] sm:w-[360px] md:order-2 md:mx-0 md:mt-[6.6rem] md:h-[460px] md:w-[460px]'>
        <LazyDogModel />
      </div>
      {/* Hero Text */}
      <div className='-mt-14 basis-2/5 text-center md:text-start'>
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
        <p className='lg:text-md mt-4 text-sm dark:text-neutral-400 md:text-base lg:mt-3'>
          {"Don't forget to sign my"}{' '}
          <Link
            href='/guestbook'
            className='primary-gradient bg-clip-text text-transparent'
          >
            guestbook
          </Link>
          !
        </p>

        {/* buttons */}
        <div className='mt-5 flex flex-col justify-center gap-3 sm:flex-row md:justify-start'>
          <Button href='#contact'>Let{"'"}s Connect</Button>

          <Button
            href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            variant='secondary'
          >
            Resume
          </Button>
        </div>
      </div>
      <SnowFall />
    </section>
  );
};

export default Hero;
