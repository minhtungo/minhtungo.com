import PageTitle from '@/components/common/PageTitle';
import Repos from '@/components/Repos';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library',
};

export default async function LibraryPage() {
  return (
    <>
      <PageTitle title='Archive' subtitle='Some of my other contributions and projects.' />
      <Repos />
    </>
  );
}
