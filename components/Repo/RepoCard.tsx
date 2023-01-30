import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Icon } from '..';
import { renderTech } from '../../util/renderTech';

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
            <Link
              href={repo.githubURL}
              className='text-gray-500 dark:text-gray-400 hover:text-blue-500'
              target='_blank'
            >
              <FiGithub className='hover:text-blue-500 w-5 h-5' />
            </Link>
          </Icon>
          {repo.liveURL && (
            <Icon>
              <Link
                href={repo.liveURL}
                className=' text-gray-500 dark:text-gray-400'
                target='_blank'
              >
                <FiExternalLink className='hover:text-blue-500 w-5 h-5' />
              </Link>
            </Icon>
          )}
        </div>
      </div>
      <p className='my-3 mt-2 text-gray-600 dark:text-gray-400 text-sm'>
        {repo.description}
      </p>
      {/* Tech Stack */}
      <div className='flex gap-1 text-gray-500 text-xs md:text-[13px] flex-wrap'>
        {repo.tools.map((tool) => (
          <span
            key={`${repo.name}-${tool}`}
            className='bg-gray-200 dark:bg-transparent-white text-gray-500 dark:text-gray-400 rounded px-2 py-1 text-xs'
          >
            <div className='flex gap-1 items-center'>
              {renderTech(tool)}
              {tool}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default RepoCard;
