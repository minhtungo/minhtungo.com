'use client';

import { Icon, Link, IconHelper } from '@/components/common';
import { Div } from '@/components/FramerMotion';
import { FadeContainer, PopUpFromBottom } from '@/lib/framerVariants';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { TbSourceCode } from 'react-icons/tb';
import { Paragraph } from '../ui';

interface RepoProps {
  repo: Repo;
}

const Card = ({ repo }: RepoProps) => {
  return (
    <div className='hover:text-shadow h-full rounded bg-card-background-light p-4 hover:shadow-primary dark:bg-card-background-dark'>
      <div className='flex items-center'>
        <div className='flex items-center space-x-1'>
          <TbSourceCode className='text-2xl text-blue-500 dark:text-blue-400' />
          <h2 className='lg:text-md text-base font-semibold text-gray-800 dark:text-gray-100'>
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
      <Paragraph variant='description' className='mt-2 ml-[2.5px] !text-sm'>
        {repo.description}
      </Paragraph>
      {/* Tech Stack */}
      <div className='mt-2 flex flex-wrap items-center space-x-2 sm:mt-3'>
        {repo.tools.map((tool) => (
          <div
            className='group relative flex justify-center transition duration-200 ease-linear'
            key={`${repo.name}-${tool}`}
          >
            <IconHelper type={tool} className='h-5 w-5' />
            <span className='absolute -top-7 mx-auto w-max scale-0 transform rounded bg-background-light px-2 py-1 text-sm font-medium text-gray-800 shadow transition-all group-hover:scale-100 dark:bg-background-dark dark:text-gray-300'>
              {tool}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RepoCard = ({ repos }: { repos: Repo[] | undefined }) => {
  return (
    <Div
      variants={FadeContainer}
      className='mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-6 lg:grid-cols-3'
    >
      {repos?.map((repo) => (
        <motion.div variants={PopUpFromBottom} key={repo.name}>
          <Card repo={repo} />
        </motion.div>
      ))}
    </Div>
  );
};

export default RepoCard;
