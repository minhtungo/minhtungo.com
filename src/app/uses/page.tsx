import PageTitle from '@/components/common/PageTitle';
import TechItemList from '@/components/uses/TechItemList';
import { TECH_ITEM_LIST } from '@/lib/constants';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
};

export default function UsesPage() {
  return (
    <>
      <PageTitle
        title='What I Use'
        subtitle={`Here's my current technology setup for coding, gaming, and daily life.`}
      />
      <div className='space-y-6'>
        {TECH_ITEM_LIST.map((list) => (
          <TechItemList key={`${list.title}-uses-list-container`} techList={list} />
        ))}
      </div>
    </>
  );
}
