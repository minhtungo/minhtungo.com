'use client';

import { PopUpFromBottom } from '@/lib/framerVariants';
import { Disclosure, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';

import JourneyCard from './JourneyCard';
import { Heading } from '@/components/ui';
import CodeSnippet from '../CodeSnippet';

const Journey = () => {
  return (
    <div className='mx-auto pt-1 lg:pt-3'>
      <Heading className='mb-2 md:mb-6' as='h3'>
        My Journey
      </Heading>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='mx-auto lg:w-[36%]'>
          <CodeSnippet />
        </div>
        <div className='relative mt-4 w-full lg:w-[60%]'>
          <ul className='w-full border-l border-gray-400 dark:border-gray-800'>
            {journeys.slice(0, 2).map((item) => (
              <motion.li key={item.title} initial='hidden' whileInView='visible' variants={PopUpFromBottom}>
                <JourneyCard journey={item} />
              </motion.li>
            ))}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button as={Fragment}>
                    <button aria-label='Load More Journey'>
                      <AiOutlineCaretDown className={`ml-1.5 h-4 w-4 text-gray-400 md:w-5 lg:h-5 ${open ? 'rotate-180 transform ' : ''}`} />
                    </button>
                  </Disclosure.Button>
                  <Transition show={open} enter='transition duration-400 ease-in-out' enterFrom='transform scale-95 opacity-0' enterTo='transform scale-400 opacity-100' leave='transition duration-75 ease-out' leaveFrom='transform scale-100 opacity-100' leaveTo='transform scale-95 opacity-0'>
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
    </div>
  );
};
export default Journey;
