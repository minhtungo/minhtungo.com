import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AnimatedDiv, Button, Title } from '..';
import { FadeContainer, PopUp } from '../../lib/FramerMotionVariants';
import RepoCard from './RepoCard';

interface ReposProps {
  repos?: Repo[] | undefined;
}

const SKIP = 6;

const Repo = ({ repos }: ReposProps) => {
  const [displayCount, setDisplayCount] = useState(SKIP);
  const [repoList, setRepoList] = useState<Repo[] | undefined>([]);
  const [isMore, setIsMore] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    setRepoList(repos);
  }, []);

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
    <section id='repos' className='pt-12 lg:pt-20'>
      <div className='text-center'>
        <Title title='Repositories' subtitle='Other Noteworthy Projects' />
      </div>

      <AnimatedDiv
        variants={FadeContainer}
        className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:mt-6'
      >
        {repoList?.slice(0, SKIP).map((repo) => (
          <motion.div variants={PopUp} key={repo.name}>
            <RepoCard repo={repo} />
          </motion.div>
        ))}
      </AnimatedDiv>
      {isMore && (
        <AnimatePresence>
          <motion.div
            variants={FadeContainer}
            initial='hidden'
            animate={controls}
            exit='hidden'
            className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 mt-3'
          >
            {repoList?.slice(SKIP, displayCount).map((repo) => (
              <motion.div
                variants={PopUp}
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <RepoCard repo={repo} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {repoList && displayCount < repoList?.length && (
        <div className='text-center mt-4 lg:mt-6'>
          <Button onClick={onLoadMore} variant='secondary'>
            Show More
          </Button>
        </div>
      )}

      {repoList && displayCount > repoList?.length && (
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
