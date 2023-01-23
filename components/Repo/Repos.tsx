import { useState } from 'react';
import { motion } from 'framer-motion';
import RepoCard from './RepoCard';
import { Title, AnimatedDiv, Button } from '..';
import { FadeContainer, PopUp } from '../../lib/FramerMotionVariants';

interface ReposProps {
  repos: Repo[];
}

const SKIP = 6;

const Repo = ({ repos }: ReposProps) => {
  const [displayCount, setDisplayCount] = useState(SKIP);
  const [repoList, setRepoList] = useState(repos);

  const onLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + SKIP);
  };

  const onLoadLess = () => {
    setDisplayCount(SKIP);
  };

  return (
    <section id='repos' className='pt-12 lg:pt-16'>
      <div className='text-center'>
        <Title title='Repositories' subtitle='Other Noteworthy Projects' />
      </div>
      <AnimatedDiv
        variants={FadeContainer}
        className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:mt-6'
      >
        {repoList.slice(0, displayCount).map((repo) => (
          <motion.div variants={PopUp} key={repo.name}>
            <RepoCard repo={repo} />
          </motion.div>
        ))}
      </AnimatedDiv>
      {displayCount < repos.length && (
        <div className='text-center mt-4 lg:mt-6'>
          <Button onClick={onLoadMore} variant='secondary'>
            Show More
          </Button>
        </div>
      )}
      {displayCount > repos.length && (
        <div className='text-center mt-4 lg:mt-6'>
          <Button onClick={onLoadLess} variant='secondary'>
            Show Less
          </Button>
        </div>
      )}
    </section>
  );
};

export default Repo;
