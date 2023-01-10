import { motion } from 'framer-motion';

import { PopUpFromBottom } from '../../lib/FramerMotionVariants';
import IconHelper from '../common/IconHelper';


interface JourneyCardProps {
  journey: Journey

}

const JourneyCard = ({ journey }: JourneyCardProps) => {
  return (
    <motion.div
      className='mb-4 ml-6 md:ml-8 rounded-lg border-1 dark:border-2 shadow-lg p-4 px-6 bg-transparent-whiter border-transparent-black dark:bg-transparent-black dark:border-transparent-white'
      initial='hidden'
      animate='visible'
      variants={PopUpFromBottom}
    >
      <div></div>

      <span
        className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-black ${journey.color} ring-1 ring-black  dark:ring-gray-700`}
      >
        {journey.status ? (
          <>
            <div
              className={`absolute ${journey.color} rounded-full w-6 h-6 animate-ping`}
            ></div>
            <div
              className={`absolute ${journey.color} rounded-full w-6 h-6`}
            ></div>
          </>
        ) : null}
        <IconHelper type={journey.icon} className='h-4 w-4 z-10' />
      </span>
      <h3 className='flex m-0 w-full text-lg font-medium tracking-tight text-gray-800 dark:text-gray-300'>
        {journey.title}

        {journey.status ? (
          <span className='mr-2 ml-3 h-full rounded px-2.5 py-1 text-xs font-medium text-grey-dark bg-blue-500'>
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

export default JourneyCard;