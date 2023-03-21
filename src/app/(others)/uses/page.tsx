// @ts-nocheck

import { Title } from '@/components/common';
import { ItemGrid } from '@/components/Uses';
import { USES_ITEMS } from '@/config/uses';

import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Uses | Minh Tu Ngo',
  description: 'List of tools and technologies that I use everyday.',
};

export default function UsesPage() {
  return (
    <div>
      <Title
        title='Uses'
        subtitle={`Here's my current technology setup for coding, gaming, and daily life.`}
        className='lg:!mb-3'
      />
      <Image
        src='/static/images/uses/room.jpg'
        width={1000}
        height={580}
        alt='Room'
        className='mb-4 h-full w-full rounded-lg object-cover object-top shadow-lg lg:w-[70%]'
      />

      {USES_ITEMS.map((item) => {
        return (
          <div key={item.title}>
            <h3 className='text-lg text-black dark:text-gray-50 md:text-xl lg:text-2xl'>
              {item.title}
            </h3>
            <ItemGrid items={item.items} />
          </div>
        );
      })}
    </div>
  );
}
