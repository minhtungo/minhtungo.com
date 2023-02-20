import Image from '../common/Image';
import Link from '@/components/common/Link';
import AnimatedDiv from '../FramerMotion/AnimatedDiv';
import { FadeContainer, PopUpFromBottom, PopUp } from '@/lib/framerVariants';
import { motion } from 'framer-motion';

type ItemGridProps = {
  items: Item[];
};

const ItemGrid = ({ items }: ItemGridProps) => {
  return (
    <AnimatedDiv
      variants={FadeContainer}
      list
      className='mt-5 mb-9 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4'
    >
      {items.map((item, i) => (
        <motion.li
          variants={PopUpFromBottom}
          key={item.name}
          className='flex items-center gap-3 rounded border border-custom-border-black p-[0.35rem] shadow-lg dark:border-transparent-white dark:bg-card-background-dark sm:flex-col sm:gap-2 sm:p-3'
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='m-0 h-24 w-24 object-contain sm:h-28 sm:w-40'
          />
          <div className='mt-2 flex flex-col gap-2 sm:text-center'>
            <span>
              <Link
                href={item.url}
                className='font-semibold text-gray-700 dark:text-gray-200'
              >
                {item.name}
              </Link>
            </span>
            <span className='text-sm font-medium text-gray-600/90 dark:text-gray-300/90'>
              {item.description}
            </span>
          </div>
        </motion.li>
      ))}
    </AnimatedDiv>
  );
};

export default ItemGrid;
