import Title from '@/components/common/Title';
import Typography from '@/components/ui/typography';
import { ItemGrid } from '@/components/Uses';
import { USES_ITEMS } from '@/constant/uses';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'List of tools and technologies that I use everyday.',
};

export default function UsesPage() {
  return (
    <div className='mx-auto max-w-4xl'>
      <Title title='What I Use' subtitle={`Here's my current technology setup for coding, gaming, and daily life.`} />

      {USES_ITEMS.map((item) => {
        return (
          <div key={item.title}>
            <Typography variant='h3'>{item.title}</Typography>
            <ItemGrid items={item.items} />
          </div>
        );
      })}
    </div>
  );
}
