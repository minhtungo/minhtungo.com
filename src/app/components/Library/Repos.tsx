'use client';

import { Button, Title } from '@/app/components/common';

import classNames from 'classnames';
import { IoMdArrowForward } from 'react-icons/io';

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
          home ? '' : 'Some collection of code snippets that I have created.'
        }
        home={home}
      />

      <RepoCard repos={repos} />
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
