import { AnimatedHeading, AnimatedText } from '@/components';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';
import classNames from 'classnames';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  home?: boolean;
}

const Title = ({ title, subtitle, className, home }: TitleProps) => {
  return (
    <div className={classNames('mb-8', className, home && 'text-left')}>
      <div className='mb-2 flex items-center p-0'>
        <AnimatedHeading
          variants={FromLeftVariant}
          className={classNames(
            'primary-gradient bg-clip-text text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl lg:font-bold',
            ''
          )}
        >
          {title}
        </AnimatedHeading>
        {home && (
          <div className='relative flex-1 before:absolute before:left-3 before:top-[50%] before:h-[2px] before:w-[calc(100%-12px)] before:transform before:bg-transparent-black-tight before:content-[""] dark:before:bg-transparent-white md:before:w-[200px] lg:before:w-[350px]' />
        )}
      </div>

      {subtitle && (
        <AnimatedText
          variants={PopUpFromBottom}
          className='text-sm tracking-wider text-gray-900 dark:text-neutral-300'
        >
          {subtitle}
        </AnimatedText>
      )}
    </div>
  );
};
export default Title;
