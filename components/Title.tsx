import LinearGradient from './LinearGradient';

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className='center'>
      <h1 className='text-xl md:text-3xl font-semibold my-3'>{title}</h1>
      <div className='flex justify-center mt-4'>
        <LinearGradient width='w-1/5' />
      </div>
      {subtitle && <h2 className='text-gray-400 mt-3 text-lg'>{subtitle}</h2>}
    </div>
  );
};
export default Title;
