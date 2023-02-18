import { Icon } from '@/components';
import Link from '@/components/common/Link';
import { renderTech } from '@/util/renderTech';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface RepoProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoProps) => {
  return (
    <div className='hover:text-shadow h-full rounded bg-card-background-light p-4 hover:shadow-primary dark:bg-card-background-dark'>
      <div className='flex items-center'>
        <div className='flex items-center space-x-2'>
          <AiOutlineFolder className='text-2xl text-blue-500 dark:text-blue-400' />
          <h2 className='lg:text-md text-base font-semibold text-gray-800 dark:text-gray-300'>
            {repo.name}
          </h2>
        </div>
        <div className='ml-auto flex items-center gap-3 text-[22px]'>
          <Icon>
            <Link
              href={repo.githubURL}
              className='text-gray-500 hover:text-blue-500 dark:text-gray-400'
              animation={false}
            >
              <FiGithub className='h-5 w-5 hover:text-blue-500' />
            </Link>
          </Icon>
          {repo.liveURL && (
            <Icon>
              <Link
                href={repo.liveURL}
                className=' text-gray-500 dark:text-gray-400'
                animation={false}
              >
                <FiExternalLink className='h-5 w-5 hover:text-blue-500' />
              </Link>
            </Icon>
          )}
        </div>
      </div>
      {/* Tech Stack */}
      <div className='mt-2 flex flex-wrap items-center space-x-2'>
        {repo.tools.map((tool) => (
          <div
            className='group relative transition duration-200 ease-linear'
            key={`${repo.name}-${tool}`}
          >
            {renderTech(tool, 'w-5 h-5')}
            <span className='-left-[100%%] absolute -top-7 w-max scale-0 rounded bg-background-light px-2 py-1 text-sm font-medium text-gray-800 shadow transition-all group-hover:scale-100 dark:bg-background-dark dark:text-gray-300'>
              {tool}
            </span>
          </div>
        ))}
      </div>
      <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>
        {repo.description}
      </p>
    </div>
  );
};

export default RepoCard;
