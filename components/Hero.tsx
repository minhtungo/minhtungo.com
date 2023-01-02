import { DogModel, Button, ModelLoader } from './';
// import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const LazyDogModel = dynamic(() => import('../components/DogModel'), {
  ssr: false,
  loading: () => <ModelLoader />,
});

export const Hero = () => {
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16 h-screen py-10 flex-1'
    >
      {/* Dog Model */}
      <div className='basis-2/5 z-10 mt-4 md:mt-32 flex justify-center md:order-2 h-[280px] w-[280px] md:h-[480px] lg:w-[480px]'>
        <LazyDogModel />
      </div>
      {/* Hero Text */}
      <div className='basis-2/5 -mt-14'>
        <p className='text-2xl md:text-4xl lg:text-5xl font-play fair text-center md:text-start'>
          Minh Tu Ngo
        </p>
        <p className='mt-6 lg:mt-10 mb-7 text-sm text-center md:text-start'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          modi omnis ratione consequuntur inventore necessitatibus perferendis
          cumque dolores, quasi facilis soluta nulla! Fuga, voluptate quia
          consectetur incidunt autem nisi quod!
        </p>
        {/* buttons */}
        <div className='flex mt-5 justify-center md:justify-start'>
          <Button href='/' className='mr-4'>
            Contact Me
          </Button>
          <Button href='' variant='secondary'>
            My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
