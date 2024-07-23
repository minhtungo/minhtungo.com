import PageTitle from '@/components/common/PageTitle';
import Repos from '@/components/repo/Repos.client';
import { REPOS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library',
};

export default async function LibraryPage() {
  return (
    <>
      <PageTitle
        title='Archive'
        subtitle='My archive. I love to create amazing web applications to make the internet a better place.'
      />
      <Repos repos={REPOS} />
    </>
  );
}
