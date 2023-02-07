import { Button, ModelLoader, SnowFall } from './';
import { TypeAnimation } from 'react-type-animation';
import { FromLeftVariant } from '../lib/FramerMotionVariants';
import { AnimatedHeading } from './';
import { motion } from 'framer-motion';

import dynamic from 'next/dynamic';

const LazyDogModel = dynamic(() => import('../components/DogModel'), {
  ssr: false,
  loading: () => <ModelLoader />,
});

interface HeroProps {
  resumeURL: string;
}

const Hero = ({ resumeURL }: HeroProps) => {
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16 h-screen flex-1 pt-8 lg:pt-0'
    >
      {/* Dog Model */}
      <div className='basis-2/5 z-10 mt-4 md:mt-[6.6rem] flex justify-center md:order-2 h-[280px] w-[280px] sm:w-[360px] sm:h-[360px] md:h-[480px] md:w-[480px] mx-auto md:mx-0 relative'>
        {/* <LazyDogModel /> */}
      </div>
      {/* Hero Text */}
      <div className='basis-2/5 -mt-14 text-center md:text-start'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='pl-[3px] mb-[5px]'>Hi there, I am</p>
          <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-border text-2xl md:text-4xl lg:text-5xl'>
            Minh Tu Ngo.
          </span>
          <span className='wave text-2xl md:text-4xl lg:text-5xl'>👋</span>
          <p className='mt-4 lg:mt-8 mb-7 text-lg font-semibold'>
            &lt;&gt;
            <TypeAnimation
              cursor={true}
              speed={50}
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
            &lt;/&gt;
          </p>
        </motion.div>

        {/* buttons */}
        <div className='flex mt-5 justify-center md:justify-start'>
          <Button href='#contact' className='mr-4'>
            Let{"'"}s Connect
          </Button>

          <Button
            href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            target='_blank'
            variant='secondary'
            newTab
          >
            My Resume
          </Button>
        </div>
      </div>
      <SnowFall />
    </section>
  );
};

export default Hero;
