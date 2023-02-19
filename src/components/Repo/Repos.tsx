import { FadeContainer, PopUpFromBottom } from '@/lib/framerVariants';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { IoMdArrowForward } from 'react-icons/io';

import { AnimatedDiv, Button, Title } from '..';
import RepoCard from './RepoCard';

interface ReposProps {
  repos?: Repo[] | undefined;
  home?: boolean;
}

const Repo = ({ repos, home }: ReposProps) => {
  return (
    <section id='repos' className={classNames(home && 'pt-16 lg:pt-20')}>
      <Title
        title='Library'
        subtitle={
          home
            ? 'Other Noteworthy Projects'
            : 'Some collection of code snippets that I have created.'
        }
        home={home}
      />

      <AnimatedDiv
        variants={FadeContainer}
        className='mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-6 lg:grid-cols-3'
      >
        {repos?.map((repo) => (
          <motion.div variants={PopUpFromBottom} key={repo.name}>
            <RepoCard repo={repo} />
          </motion.div>
        ))}
      </AnimatedDiv>
      {home && (
        <div className='group relative mt-4 text-center transition duration-200 motion-reduce:transition-none lg:mt-6'>
          <Button href='/library' variant='secondary'>
            See More Repos{' '}
            <IoMdArrowForward className='ml-1 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Repo;
