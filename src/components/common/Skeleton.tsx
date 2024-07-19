import mergeClassNames from '@/lib/mergeClassNames';
import { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={mergeClassNames(
        'h-4 w-full animate-pulse rounded-md bg-gray-300 dark:bg-zinc-800',
        className
      )}
    />
  );
};

export default Skeleton;
