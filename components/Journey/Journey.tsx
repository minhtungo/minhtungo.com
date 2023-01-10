import { Disclosure, Transition } from '@headlessui/react';
import { Title } from '..';
import { AiOutlineCaretDown } from 'react-icons/ai';
import JourneyCard from './JourneyCard';

interface JourneyProps {
  journeys: Journey[];
}

const Journey = ({journeys}: JourneyProps) => {
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
