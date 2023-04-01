'use client';

import { IconHelper } from '@/components/common';
import { ProjectsIcon, Text } from '@/components/ui';
import { Div } from '@/components/ui/FramerMotion';
import { FadeContainer, PopUpFromBottom } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import { TbSourceCode } from 'react-icons/tb';

interface RepoProps {
  repo: Repo;
}

const Card = ({ repo }: RepoProps) => {
  return (
    <div className='hover:text-shadow h-full rounded bg-card-background-light p-4 hover:shadow-primary dark:bg-card-background-dark'>
      <div className='flex items-center'>
        <div className='flex items-center space-x-1'>
          <TbSourceCode className='text-2xl text-blue-500 dark:text-blue-400' />
          <Text size='md' as='span' variant='title'>
            {repo.name}
          </Text>
        </div>
        <ProjectsIcon
          className='ml-auto'
          githubURL={repo.githubURL}
          liveURL={repo.liveURL || ''}
        />
      </div>
      <Text variant='description' className='mt-2 ml-[2.5px] !text-sm'>
        {repo.description}
      </Text>
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
