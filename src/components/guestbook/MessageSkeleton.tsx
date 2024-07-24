import { Skeleton } from '@/components/ui/skeleton';
import { FC } from 'react';

interface MessageSkeletonProps {}

const MessageSkeleton: FC<MessageSkeletonProps> = () => {
  return (
    <div className='flex items-center gap-x-3'>
      <Skeleton className='size-10 rounded-full' />
      <div className='space-y-1.5'>
        <div className='flex items-center gap-1'>
          <Skeleton className='h-4 w-16' />
          <Skeleton className='h-4 w-12' />
        </div>
        <Skeleton className='h-6 w-[300px]' />
      </div>
    </div>
  );
};

export default MessageSkeleton;
