import Avatar from './Avatar';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className='flex items-center justify-center gap-0 md:gap-3'>
      <Avatar width={8} height={8} className='mt-1' />
      <span className='text-md hidden font-medium lg:inline'>Minh Tu Ngo</span>
    </div>
  );
};
export default Logo;
