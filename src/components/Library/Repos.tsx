import { Title } from '@/components/ui';
import mergeClassNames from '@/lib/mergeClassNames';

import ViewMoreButton from '../common/ViewMoreButton';
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
        <div className='mt-6 text-center lg:mt-12'>
          <ViewMoreButton href='/library' />
        </div>
      )}
    </div>
  );
};

export default Repos;
