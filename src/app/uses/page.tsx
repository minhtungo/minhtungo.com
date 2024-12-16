import PageTitle from '@/components/common/PageTitle';
import TechList from '@/components/TechList';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
};

export default function UsesPage() {
  return (
    <>
      <PageTitle title='What I Use' subtitle={`My current technology setup for coding, gaming, and daily life.`} />
      <TechList />
    </>
  );
}
