import mergeClassNames from '@/lib/mergeClassNames';
import { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={mergeClassNames(
        'h-4 w-full animate-pulse rounded-md bg-card-background-light dark:bg-card-background-dark',
        className
      )}
    />
  );
};

export default Skeleton;
