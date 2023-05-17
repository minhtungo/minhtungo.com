'use client';

import mergeClassNames from '@/lib/mergeClassNames';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { buttonVariants } from '../ui/Button';

interface ViewMoreButtonProps {
  href: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ href }) => {
  return (
    <Link
      className={mergeClassNames(
        buttonVariants({
          variant: 'secondary',
          size: 'md',
          className: 'group transition',
        })
      )}
      href={href}
    >
      View More
      <IoMdArrowForward className='ml-1 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
    </Link>
  );
};

export default ViewMoreButton;
