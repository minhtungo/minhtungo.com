'use client';

import { Image, Text, Link } from '@/components/ui';
import { Div } from '@/components/ui/FramerMotion';
import { FadeContainer, PopUpFromBottom } from '@/lib/framerVariants';
import { motion } from 'framer-motion';

type ItemGridProps = {
  items: Item[];
};

const ItemGrid = ({ items }: ItemGridProps) => {
  return (
    <Div
      variants={FadeContainer}
      list
      className='mt-5 mb-8 grid grid-cols-1 gap-3 sm:mb-10 sm:grid-cols-2 md:sm:grid-cols-3 lg:grid-cols-4'
    >
      {items.map((item) => (
        <motion.li
          variants={PopUpFromBottom}
          key={item.name}
          className='flex items-center gap-3 rounded border border-custom-border-black p-2 shadow-lg dark:border-transparent-white dark:bg-card-background-dark sm:flex-col sm:gap-2 sm:p-3'
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='m-0 max-h-[72px] max-w-[72px] object-contain sm:h-28 sm:w-40 sm:max-w-none'
          />
          <div className='mt-2 flex flex-1 flex-col gap-1 sm:gap-2 sm:text-center'>
            <Text as='span' variant='title' size='md'>
              <Link
                href={item.url}
                className='font-semibold text-gray-700 transition-all duration-200 ease-out hover:underline dark:text-gray-200'
              >
                {item.name}
              </Link>
            </Text>

            <span className='text-sm font-medium text-gray-600/90 dark:text-gray-300/90'>
              {item.description}
            </span>
          </div>
        </motion.li>
      ))}
    </Div>
  );
};

export default ItemGrid;
