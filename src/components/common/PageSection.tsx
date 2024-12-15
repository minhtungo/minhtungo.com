import Title from '@/components/Title';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const PageSection = ({ children, className, title, subtitle }: SectionProps) => {
  return (
    <div className={cn('py-6 sm:py-8', className)}>
      {title && <Title title={title} subtitle={subtitle} />}
      {children}
    </div>
  );
};

export default PageSection;
