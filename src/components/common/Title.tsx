import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface TitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const Title = ({ title, subtitle, description, className }: TitleProps) => {
  return (
    <div className={cn('text-center mb-10', className)}>
      {subtitle && (
        <Typography variant='p' tag='h2' className='text-primary mb-1.5'>
          {subtitle}
        </Typography>
      )}
      <Typography variant='h2'>{title}</Typography>
      {description && (
        <Typography variant='p' className='text-muted-foreground max-w-2xl mt-3 mx-auto text-lg'>
          {description}
        </Typography>
      )}
    </div>
  );
};

export default Title;
