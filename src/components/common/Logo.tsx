import Avatar from '../ui/Avatar';
import { Manrope } from 'next/font/google';
import clsx from 'clsx';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-0 md:gap-3',
        manrope.className
      )}
    >
      <Avatar width={8} height={8} className='mt-1' />
      <span className='text-md hidden font-medium lg:inline'>Minh Tu Ngo</span>
    </div>
  );
};
export default Logo;
