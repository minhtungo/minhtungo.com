import { Skeleton } from '@/components/ui/skeleton';

const GuestBookFormSkeleton = () => {
  return (
    <div className='flex justify-center gap-2'>
      <Skeleton className='h-[34px] w-[110px]' />
      <Skeleton className='h-[34px] w-[110px]' />
    </div>
  );
};

export default GuestBookFormSkeleton;
