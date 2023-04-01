import { Title } from '@/components/common';
import mergeClassNames from '@/lib/mergeClassNames';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

import { Button } from '@/components/ui';
import RepoCard from './RepoCard';

interface ReposProps {
  repos?: Repo[] | undefined;
  home?: boolean;
}

const Repos = ({ repos, home }: ReposProps) => {
  return (
    <div className={mergeClassNames(home && 'pt-16 lg:pt-20')}>
      <Title
        title='Library'
        subtitle={
          home ? '' : 'Some collection of code snippets that I have created.'
        }
        home={home}
      />
      <RepoCard repos={repos} />
      {home && (
        <Link
          className='group relative mt-6 block text-center transition duration-200 motion-reduce:transition-none lg:mt-12'
          href='/library'
        >
          <Button size='md' variant='secondary'>
            View More{' '}
            <IoMdArrowForward className='ml-1 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Repos;
