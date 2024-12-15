import { cn } from '@/lib/utils';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const Logo = ({ className }: { className?: string }) => {
  return <span className={cn('font-semibold text-primary text-lg', manrope.className, className)}>MN</span>;
};
export default Logo;
