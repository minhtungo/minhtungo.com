import ReposClient from '@/components/repo/Repos.client';
import { REPOS } from '@/lib/constants';
import ViewMoreButton from '../common/ViewMoreButton';

interface ReposProps {
  repos?: Repo[];
  showButton?: boolean;
  className?: string;
}

const Repos = async ({ showButton }: ReposProps) => {
  return (
    <>
      <ReposClient repos={REPOS} />
      {showButton && (
        <div className='mt-6 text-center lg:mt-12'>
          <ViewMoreButton href='/library' />
        </div>
      )}
    </>
  );
};

export default Repos;
