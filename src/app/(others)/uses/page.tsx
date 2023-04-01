// @ts-nocheck

import { Title } from '@/components/common';
import { Heading } from '@/components/ui';
import { ItemGrid } from '@/components/Uses';
import { USES_ITEMS } from '@/constant/uses';

import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Uses | Minh Tu Ngo',
  description: 'List of tools and technologies that I use everyday.',
};

export default function UsesPage() {
  return (
    <div className='mx-auto max-w-4xl'>
      <Title
        title='What I Use'
        subtitle={`Here's my current technology setup for coding, gaming, and daily life.`}
      />
      <Image
        src='/static/images/uses/room.jpg'
        width={900}
        height={505}
        alt='Room'
        className='mb-6 h-full w-full rounded-lg object-cover object-top shadow-lg md:mb-8 lg:!-mt-2'
        priority
      />

      {USES_ITEMS.map((item) => {
        return (
          <div key={item.title}>
            <Heading as='h3'>{item.title}</Heading>
            <ItemGrid items={item.items} />
          </div>
        );
      })}
    </div>
  );
}
