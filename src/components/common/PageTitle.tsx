import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('mx-auto max-w-xl text-center my-10', className)}>
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
