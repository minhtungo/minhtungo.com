import { Skeleton } from '@/components/ui/skeleton';

interface MessagesSkeletonProps {}

const MessagesSkeleton = ({}: MessagesSkeletonProps) => {
  return (
    <div className='mx-auto max-w-3xl space-y-8'>
      {Array.from({
        length: 3,
      }).map((_, i) => (
        <div className='flex items-center gap-x-3' key={`message-skeleton-${i}`}>
          <Skeleton className='size-10 rounded-full' />
          <div className='space-y-1.5'>
            <div className='flex items-center gap-1'>
              <Skeleton className='h-4 w-16' />
              <Skeleton className='h-4 w-12' />
            </div>
            <Skeleton className='h-6 w-[300px]' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesSkeleton;
