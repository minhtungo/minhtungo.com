import ReposClient from '@/components/repo/Repos.client';
import { REPOS } from '@/lib/constants';

interface ReposProps {
  start?: number;
  end?: number;
}

const Repos = async ({ start = 0, end = REPOS.length }: ReposProps) => {
  return <ReposClient repos={REPOS.slice(start, end)} />;
};

export default Repos;
