import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

interface ViewMoreButtonProps {
  href: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ href }) => {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: 'outline',
        }),
        'group transition'
      )}
      href={href}
    >
      View More
      <ChevronRight className='ml-1 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
    </Link>
  );
};

export default ViewMoreButton;
