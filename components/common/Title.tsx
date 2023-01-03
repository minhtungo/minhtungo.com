import LineGradient from './LineGradient';
import classNames from 'classnames';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={classNames('text-center mb-12', className)}>
      <h2 className='text-xl md:text-3xl lg:text-4xl font-medium lg:font-semibold mb-3'>
        {title}
      </h2>
      {subtitle && (
        <h2 className='text-blue-500 text-xs uppercase mb-1 tracking-wider'>
          {subtitle}
        </h2>
      )}
      {/* <div className='flex justify-center mt-4'>
        <LineGradient width='w-1/6' />
      </div> */}
    </div>
  );
};
export default Title;
