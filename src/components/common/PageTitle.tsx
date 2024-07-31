import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import sparkles from '/public/static/images/sparkles.svg';
import Image from 'next/image';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('mx-auto max-w-xl text-center my-8 mb-12 relative', className)}>
      <Image
        className='absolute left-0 sm:left-8 top-4 mx-auto h-auto w-auto animate-pulse  lg:-translate-y-1/2 select-none pointer-events-none'
        src={sparkles}
        alt='sparkles'
      />
      <Typography variant='h2' tag='h1' className='text-primary'>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant='h5' tag='h2' className='mt-4 font-normal text-base sm:text-lg text-muted-foreground'>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default PageTitle;
