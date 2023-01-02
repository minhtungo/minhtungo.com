import ReactLogo from '/icons/react.svg';
import NextLogo from '/icons/next.svg';

const Tech = () => {
  return (
    <div className='relative'>
      <div className='relative py-16 mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-10'>
          <span className='font-semibold tracking-wider text-white uppercase whitespace-nowrap'>
            Tech that I used recently
          </span>
          <div className='flex flex-wrap gap-y-4 gap-x-14 items-center pt-6 -mx-2 lg:flex-nowrap md:pt-0 md:mx-0'>
            <span className='w-auto h-16 text-gray-400 transition cursor-pointer fill-current hover:text-white content-react' />
            <span className='w-auto h-16 text-gray-400 transition cursor-pointer fill-current hover:text-white content-next' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tech;
