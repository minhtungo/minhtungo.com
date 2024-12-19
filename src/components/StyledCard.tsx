import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StyledCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  href: string;
}

const StyledCard = ({ title, href, className, children }: StyledCardProps) => {
  return (
    <div className='relative transition-all group h-full'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute hover:!bg-transparent duration-200 ease-in w-full h-full inset-0 z-10 lg:group-hover/list:bg-card/40 p-4 pb-6'
        arial-label={`Check out ${title}`}
      />
      <Card
        className={cn(
          'px-3.5 pt-2.5 pb-3.5 duration-200 ease-in group-hover:bg-accent/25 group-hover:shadow-lg h-full',
          className
        )}
      >
        {children}
      </Card>
    </div>
  );
};

export default StyledCard;
