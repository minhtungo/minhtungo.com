import { cn } from '@/lib/utils';
import Typography from '@/components/ui/typography';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={cn('mb-8', className)}>
      <Typography variant='h3' tag='h2'>
        {title}
      </Typography>
      {subtitle && <Typography variant='p'>{subtitle}</Typography>}
    </div>
  );
};

export default Title;
