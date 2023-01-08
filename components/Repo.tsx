import Link from 'next/link';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Title, Icon, AnimatedDiv } from './';
import { FadeContainer, PopUp } from '../lib/FramerMotionVariants';
import { motion } from 'framer-motion';
import { repos } from '../contents/repo';

interface RepoProps {
  repo: {
    name: string;
    githubURL: string;
    liveURL?: string;
    description: string;
    tech: string[];
    id: number;
  };
}
const RepoCard = ({ repo }: RepoProps) => {
  return (
    <div className='p-5 bg-transparent-whiter dark:bg-transparent-black hover:text-shadow hover:shadow-primary h-full'>
      <div className='flex items-center mb-3'>
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
      <p className='my-3 text-base font-normal text-gray-600 dark:text-gray-400'>
        {repo.description}
      </p>
      {/* Tech Stack */}
      <div className='flex gap-4 text-gray-500'>
        {repo.tech.map((item) => (
          <span key={`${repo.name}-${item}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

const Repo = () => {
  return (
    <section id='repos' className='pt-12 lg:pt-16'>
      <div className='text-center'>
        <Title title='Repositories' subtitle='Other Noteworthy Projects' />
      </div>
      <AnimatedDiv
        variants={FadeContainer}
        className='grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:mt-6'
      >
        {repos.map((repo) => (
          <motion.div variants={PopUp} key={repo.name}>
            <RepoCard repo={repo} />
          </motion.div>
        ))}
      </AnimatedDiv>
    </section>
  );
};

export default Repo;
