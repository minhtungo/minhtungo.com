import { cn } from '@/lib/utils';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const Logo = ({ className }: { className?: string }) => {
  return <span className={cn('font-medium text-foreground', manrope.className, className)}>Minh Tu Ngo</span>;
};
export default Logo;
