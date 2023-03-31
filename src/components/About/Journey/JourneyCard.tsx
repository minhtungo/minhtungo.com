import IconHelper from '@/components/common/IconHelper';

import { Text } from '@/components/ui';

interface JourneyCardProps {
  journey: Journey;
}

const JourneyCard = ({ journey }: JourneyCardProps) => {
  return (
    <div className='mb-4 ml-6 rounded-lg border border-custom-border-black bg-card-background-light p-3 px-4 shadow-lg dark:border-transparent-white dark:bg-card-background-dark md:ml-8 md:px-6'>
      <span
        className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-gray-200 dark:bg-blue-400 dark:ring-gray-900`}
      >
        {journey.status ? (
          <>
            <div
              className={`absolute h-6  w-6 animate-ping rounded-full bg-blue-200`}
            />
            <div className={`absolute h-6 w-6 rounded-full`} />
          </>
        ) : null}
        <IconHelper
          type={journey.icon}
          className='z-10 h-3 w-3 text-blue-800 dark:text-blue-900'
        />
      </span>
      <div className='flex w-full items-center'>
        <Text variant='title' size='md'>
          {journey.title}
        </Text>
        {journey.status ? (
          <span className='flex- ml-3 hidden rounded bg-blue-200 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-400 dark:text-blue-900 md:inline md:text-sm'>
            {journey.status}
          </span>
        ) : null}
      </div>

      <time className='text-xs font-normal leading-none text-gray-400 dark:text-gray-500 md:text-sm'>
        {journey.status ? (
          <span className='flex- rounded bg-blue-200 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 md:hidden md:text-sm'>
            {journey.status}
          </span>
        ) : (
          journey.date
        )}
      </time>
      <Text size='sm' variant='description' className='mt-1'>
        {journey.description}
      </Text>
    </div>
  );
};

export default JourneyCard;
