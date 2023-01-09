import Link from 'next/link';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Icon } from '..';

interface RepoProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoProps) => {
  return (
    <div className='p-5 bg-transparent-whiter dark:bg-transparent-black hover:text-shadow hover:shadow-primary h-full'>
      <div className='flex items-center'>
        <div className='flex items-center space-x-1'>
          <AiOutlineFolder className='text-blue-500 text-2xl' />
          <h2 className='text-lg font-semibold text-transparent bg-clip-text bg-primary-gradient'>
            {repo.name}
          </h2>
        </div>
        <div className='flex ml-auto text-[22px] gap-3 items-center'>
          <Icon>
            <Link
              href={repo.githubURL}
              className='text-gray-500 dark:text-gray-400 hover:text-blue-500'
            >
              <FiGithub className='' />
            </Link>
          </Icon>
          {repo.liveURL && (
            <Icon>
              <Link
                href={repo.liveURL}
                className='hover:text-blue-500 text-gray-500 dark:text-gray-400'
              >
                <FiExternalLink />
              </Link>
            </Icon>
          )}
        </div>
      </div>
      <p className='my-3 mt-2 font-normal text-gray-600 dark:text-gray-400 text-sm'>
        {repo.description}
      </p>
      {/* Tech Stack */}
      <div className='flex gap-4 text-gray-500 text-[13px]'>
        {repo.tools.map((item) => (
          <span key={`${repo.name}-${item}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default RepoCard;
