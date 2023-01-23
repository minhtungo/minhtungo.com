import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/static/images/avatar.png'
        alt='Avatar'
        height={50}
        width={50}
        className='w-8 h-8 rounded-full bg-blue-500 dark:bg-gray-700 ring-2 ring-blue-300 dark:ring-blue-300'
      />
      <span className={className}>Minh Tu Ngo</span>
    </div>
  );
};
export default Logo;
