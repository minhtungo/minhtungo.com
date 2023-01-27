import Image from 'next/image';
import Link from 'next/link';
import Avatar from './Avatar';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className='flex items-center gap-0 md:gap-3'>
      <Avatar width={8} height={8} />
      <span className={className}>Minh Tu Ngo</span>
    </div>
  );
};
export default Logo;
