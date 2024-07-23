import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

interface ViewMoreButtonProps {
  href: string;
  title?: string;
  className?: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ className, href, title = 'View More' }) => {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: 'outline',
        }),
        'group transition inline-flex items-center gap-x-1',
        className
      )}
      href={href}
    >
      {title}
      <ChevronRight className='size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
    </Link>
  );
};

export default ViewMoreButton;
