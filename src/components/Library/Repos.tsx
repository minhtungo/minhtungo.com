import { cn } from '@/lib/utils';
import ViewMoreButton from '../common/ViewMoreButton';
import Title from '@/components/common/Title';

interface ReposProps {
  repos?: Repo[] | undefined;
  showButton?: boolean;
  className?: string;
}

const Repos = async ({ showButton, className }: ReposProps) => {
  return (
    <div className={cn('pt-16 lg:pt-20', className)}>
      <Title title='Some repos from Github profile' />
      {/* <RepoCard repos={repos} /> */}

      {showButton && (
        <div className='mt-6 text-center lg:mt-12'>
          <ViewMoreButton href='/library' />
        </div>
      )}
    </div>
  );
};

export default Repos;
