import { cn } from '@/lib/utils';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const Logo = ({ className }: { className?: string }) => {
  return <div className={cn('font-medium text-primary', manrope.className, className)}>Minh Tu Ngo</div>;
};
export default Logo;
