import { Disclosure, Transition } from '@headlessui/react';
import { Title } from '..';
import { AiOutlineCaretDown } from 'react-icons/ai';
import JourneyCard from './JourneyCard';
import { motion } from 'framer-motion';
import { PopUpFromBottom } from '@/lib/framerVariants';
import Lottie from 'react-lottie-player';
import animationData from '@/config/animation.json';
import { Fragment } from 'react';

interface JourneyProps {
  journeys: Journey[];
}

const Journey = ({ journeys }: JourneyProps) => {
  return (
    <section id='journey' className='mx-auto pt-16 pt-10 lg:pt-20 lg:pt-16'>
      <Title title='My Journey' subtitle='Learning and growing' />
      <div className='lg:gap-18 flex flex-col gap-8 lg:flex-row lg:gap-4'>
        <div className='mx-auto -mt-12 lg:-mt-24 lg:w-1/3'>
          <Lottie
            loop
            animationData={animationData}
            play
            className='max-w-[300px] md:max-w-[350px] lg:max-w-[450px]'
          />
        </div>

        <div className='relative -mt-8 w-full  lg:mt-2 lg:w-2/3'>
          <ul className='w-full border-l border-gray-400 dark:border-gray-800'>
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
                  <Disclosure.Button as={Fragment}>
                    <button aria-label='Load More Journey'>
                      <AiOutlineCaretDown
                        className={`ml-1.5 h-4 w-4 text-gray-400 md:w-5 lg:h-5 ${
                          open ? 'rotate-180 transform ' : ''
                        }`}
                      />
                    </button>
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
      </div>
    </section>
  );
};
export default Journey;
