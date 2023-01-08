import { Disclosure, Transition } from '@headlessui/react';
import { Title } from '..';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { PopUpFromBottom } from '../../lib/FramerMotionVariants';
import { journeys } from '../../contents/journeys';

interface JourneyProps {
  journey: {
    title: string;
    description: string;
    icon: string;
    color: string;
    dark_color: string;
    date: string;
    status?: string;
  };
}

const JourneyCard = ({ journey }: JourneyProps) => {
  return (
    <motion.div
      className='mb-4 ml-6 md:ml-8 rounded-lg border-1 dark:border-2 shadow-lg p-4 px-6 bg-transparent-whiter border-transparent-black dark:bg-transparent-black dark:border-transparent-white'
      initial='hidden'
      animate='visible'
      variants={PopUpFromBottom}
    >
      <span
        className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-black ${journey.color} ring-1 ring-gray-700 `}
      >
        {journey.status ? (
          <>
            <div
              className={`absolute ${journey.color} rounded-full w-6 h-6 animate-ping`}
            />
            <div className={`absolute ${journey.color} rounded-full w-6 h-6`} />
          </>
        ) : null}

        <BsMoonStars
          type={journey.icon}
          className='h-3 w-3 text-gray-600 dark:text-white'
        />
      </span>
      <h3 className='flex m-0 w-full text-lg font-medium tracking-tight text-gray-800 dark:text-gray-300'>
        {journey.title}

        {journey.status ? (
          <span className='mr-2 ml-3 h-full rounded px-2.5 py-1 text-xs font-medium text-grey-dark bg-blue-400'>
            {journey.status}
          </span>
        ) : null}
      </h3>
      <time className='text-sm font-normal leading-none text-gray-500 dark:text-gray-500'>
        {journey.date}
      </time>
      <p className='text-sm text-gray-600 dark:text-gray-400 max-w-none my-1 '>
        {journey.description}
      </p>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <section id='journey' className='max-w-4xl mx-auto pt-12 lg:pt-16'>
      <Title title='My Journey' subtitle='Learning and growing' />
      <ul className='relative mt-4 lg:mt-6 ml-3 border-l border-gray-400 dark:border-gray-800'>
        {journeys.slice(0, 2).map((item) => (
          <li key={item.title}>
            <JourneyCard journey={item} />
          </li>
        ))}

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <div className='text-small ml-1.5 flex pt-2'>
                  <AiOutlineCaretDown
                    className={`h-5 w-5 text-gray-400 ${
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
    </section>
  );
};
export default Journey;
