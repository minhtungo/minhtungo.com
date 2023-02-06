import { Disclosure, Transition } from '@headlessui/react';
import { Title } from '..';
import { AiOutlineCaretDown } from 'react-icons/ai';
import JourneyCard from './JourneyCard';
import { motion } from 'framer-motion';
import { PopUpFromBottom } from '@/lib/FramerMotionVariants';
import Lottie from 'react-lottie-player';
import animationData from '@/content/animation.json';

interface JourneyProps {
  journeys: Journey[];
}

const Journey = ({ journeys }: JourneyProps) => {
  return (
    <section id='journey' className='mx-auto pt-16 lg:pt-20'>
      <Title title='My Journey' subtitle='Learning and growing' />
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 lg:gap-18'>
        <div className='lg:w-1/3 -mt-12 lg:-mt-24 mx-auto'>
          <Lottie
            loop
            animationData={animationData}
            play
            className='max-w-[300px] md:max-w-[350px] lg:max-w-[450px]'
          />
        </div>

        <ul className='relative -mt-8 lg:mt-2 border-l border-gray-400 dark:border-gray-800 w-full lg:w-2/3'>
          {journeys.slice(0, 2).map((item) => (
            <motion.li
              key={item.title}
              initial='hidden'
              whileInView='visible'
              variants={PopUpFromBottom}
            >
              <JourneyCard journey={item} />
            </motion.li>
          ))}

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div className='text-small ml-1.5 flex pt-2'>
                    <AiOutlineCaretDown
                      className={`h-4 w-4 lg:h-5 md:w-5 text-gray-400 ${
                        open ? 'rotate-180 transform ' : ''
                      }`}
                    />
                  </div>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter='transition duration-400 ease-in-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-400 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel>
                    {journeys.slice(2).map((journey) => (
                      <JourneyCard key={journey.title} journey={journey} />
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </ul>
      </div>
    </section>
  );
};
export default Journey;
