import { AiOutlineFolder } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { Icon } from '@/components';
import { renderTech } from '@/util/renderTech';

interface RepoProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoProps) => {
  return (
    <div className='p-4 bg-card-background-light dark:bg-card-background-dark hover:text-shadow hover:shadow-primary h-full rounded'>
      <div className='flex items-center'>
        <div className='flex items-center space-x-2'>
          <AiOutlineFolder className='text-blue-500 text-2xl' />
          <h2 className='text-base lg:text-md font-semibold text-gray-800 dark:text-gray-300'>
            {repo.name}
          </h2>
        </div>
        <div className='flex ml-auto text-[22px] gap-3 items-center'>
          <Icon>
            <a
              href={repo.githubURL}
              className='text-gray-500 dark:text-gray-400 hover:text-blue-500'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub className='hover:text-blue-500 w-5 h-5' />
            </a>
          </Icon>
          {repo.liveURL && (
            <Icon>
              <a
                href={repo.liveURL}
                className=' text-gray-500 dark:text-gray-400'
                target='_blank'
                rel='noreferrer'
              >
                <FiExternalLink className='hover:text-blue-500 w-5 h-5' />
              </a>
            </Icon>
          )}
        </div>
      </div>
      {/* Tech Stack */}
      <div className='flex space-x-2 items-center flex-wrap mt-2'>
        {repo.tools.map((tool) => (
          <span
            className='flex gap-1 items-center transition duration-200 ease-linear group relative'
            key={`${repo.name}-${tool}`}
          >
            {renderTech(tool, 'w-5 h-5')}
            <span className='absolute -top-7 -left-[50%] w-max scale-0 bg-background-light dark:bg-background-dark px-2 py-1 text-sm group-hover:scale-100 text-gray-800 dark:text-gray-300 transition-all rounded font-medium shadow'>
              {tool}
            </span>
          </span>
        ))}
      </div>
      <p className='mt-4 text-gray-600 dark:text-gray-400 text-sm'>
        {repo.description}
      </p>
    </div>
  );
};

export default RepoCard;
