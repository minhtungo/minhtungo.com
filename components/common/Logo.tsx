import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className='flex items-center gap-3'>
      <span>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-[1px] w-full rounded-full animate-border'>
          <Image
            src='/static/images/avatar.png'
            alt='Avatar'
            height={50}
            width={50}
            className='w-8 h-8 rounded-full bg-blue-200 dark:bg-gray-700 '
          />
        </div>
      </span>
      <span className={className}>Minh Tu Ngo</span>
    </div>
  );
};
export default Logo;
