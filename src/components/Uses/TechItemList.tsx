'use client';

import { Div } from '@/components/motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Typography from '@/components/ui/typography';
import type { TechItem, TechItemList } from '@/lib/constants';
import { FadeContainer, PopUpFromBottom } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Item = ({ item: { name, description, imageHref, href } }: { item: TechItem }) => {
  return (
    <div className='relative transition-all group h-full'>
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute hover:!bg-transparent duration-200 ease-in w-full h-full inset-0 z-10 p-4 pb-6'
      />
      <Card className='p-4 duration-200 ease-in group-hover:bg-accent/25 group-hover:shadow-lg gap-y-2 gap-x-6 flex sm:flex-col sm:justify-center items-center h-full'>
        <Image
          src={imageHref}
          alt={name}
          width={250}
          height={250}
          className='object-contain rounded-lg aspect-square h-20 w-20'
        />
        <div className='space-y-2 sm:text-center'>
          <Typography variant='h5' tag='h3'>
            <div className='inline-flex gap-x-1 items-center font-medium leading-tight text-base group-hover:text-primary'>
              <div>{name}</div>
              <ArrowUpRight className='size-3 duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 shrink-1 translate-y-px' />
            </div>
          </Typography>
          <Typography className='text-sm text-muted-foreground'>{description}</Typography>
        </div>
      </Card>
    </div>
  );
};

const TechItemList = ({ techList }: { techList: TechItemList }) => {
  return (
    <>
      <Typography variant='h3' className='mb-4'>
        {techList.title}
      </Typography>
      <Div
        variants={FadeContainer}
        className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch '
        list
      >
        {techList.items?.map((item) => (
          <motion.li variants={PopUpFromBottom} key={`${item.name}-tech-card`}>
            <Item item={item} />
          </motion.li>
        ))}
      </Div>
    </>
  );
};

export default TechItemList;
