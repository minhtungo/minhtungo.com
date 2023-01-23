import IconHelper from '../common/IconHelper';

interface JourneyCardProps {
  journey: Journey;
}

const JourneyCard = ({ journey }: JourneyCardProps) => {
  return (
    <div className='mb-4 ml-6 md:ml-8 rounded-lg border-1 dark:border-2 shadow-lg p-4 px-6 bg-transparent-whiter border-transparent-black dark:bg-transparent-black dark:border-transparent-white'>
      <span
        className={`absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-blue-900`}
      >
        {journey.status ? (
          <>
            <div
              className={`absolute bg-blue-200  rounded-full w-6 h-6 animate-ping`}
            />
            <div className={`absolute rounded-full w-6 h-6`} />
          </>
        ) : null}
        <IconHelper
          type={journey.icon}
          className='w-3 h-3 text-blue-800 dark:text-blue-300 z-10'
        />
      </span>
      <h3 className='flex w-full text-base lg:text-md font-semibold text-gray-800 dark:text-gray-300'>
        {journey.title}

        {journey.status ? (
          <span className='bg-blue-200 text-blue-800 text-sm font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
            {journey.status}
          </span>
        ) : null}
      </h3>
      <time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {journey.date}
      </time>
      <p className='text-sm text-gray-600 dark:text-gray-400 max-w-none my-1 '>
        {journey.description}
      </p>
    </div>
  );
};

export default JourneyCard;
