import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
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
  const [isMore, setIsMore] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [displayCount]);

  const onLoadMore = () => {
    setIsMore(true);
    setDisplayCount((prevCount) => prevCount + SKIP);
  };

  const onLoadLess = () => {
    setIsMore(false);
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
        <AnimatePresence>
          {repoList.slice(0, SKIP).map((repo) => (
            <motion.div
              variants={PopUp}
              key={repo.name}
              transition={{ delay: 0.5 }}
            >
              <RepoCard repo={repo} />
            </motion.div>
          ))}

          {isMore &&
            repoList.slice(SKIP, displayCount).map((repo) => (
              <motion.div
                variants={PopUp}
                key={repo.name}
                transition={{ delay: 0.1, type: 'spring' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <RepoCard repo={repo} />
              </motion.div>
            ))}
        </AnimatePresence>
      </AnimatedDiv>
      {/* //new cards will be added to the bottom of the list but it is not showing
      now */}

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
