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
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <Typography variant='h2' tag='h1' className='text-primary'>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant='h5' tag='p' className='mt-4 font-medium text-lg text-muted-foreground'>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default PageTitle;
