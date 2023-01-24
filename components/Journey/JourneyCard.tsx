import IconHelper from "../common/IconHelper";

interface JourneyCardProps {
  journey: Journey;
}

const JourneyCard = ({ journey }: JourneyCardProps) => {
  return (
    <div className="mb-4 ml-6 md:ml-8 rounded-lg border-1 dark:border-2 shadow-lg p-3 md:p-4 md:px-6 bg-card-background-light border-custom-border-black dark:bg-card-background-dark dark:border-transparent-white">
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
          className="w-3 h-3 text-blue-800 dark:text-blue-300 z-10"
        />
      </span>
      <div className="flex w-full items-center">
        <h3 className="text-base md:text-md font-semibold text-gray-800 dark:text-gray-300">
          {journey.title}
        </h3>
        {journey.status ? (
          <span className="hidden md:inline bg-blue-200 text-blue-800 text-xs md:text-sm font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3 flex-">
            {journey.status}
          </span>
        ) : null}
      </div>

      <time className="text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {journey.status ? (
          <span className="md:hidden bg-blue-200 text-blue-800 text-xs md:text-sm font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 flex-">
            {journey.status}
          </span>
        ) : (
          journey.date
        )}
      </time>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-none my-1 ">
        {journey.description}
      </p>
    </div>
  );
};

export default JourneyCard;
