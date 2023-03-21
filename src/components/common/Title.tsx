import { Heading, Text } from '@/components/FramerMotion';
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
      <div className='mb-2 flex items-center'>
        <Heading
          variants={FromLeftVariant}
          className={classNames(
            'primary-gradient bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl lg:font-bold'
          )}
        >
          {title}
        </Heading>
        {home && (
          <div className='relative flex-1 before:absolute before:left-3 before:top-[50%] before:h-[2px] before:w-[calc(100%-12px)] before:transform before:bg-transparent-black-tight before:content-[""] dark:before:bg-transparent-white md:before:w-[200px] lg:before:w-[350px]' />
        )}
      </div>

      {subtitle && (
        <Text
          variants={PopUpFromBottom}
          className='mt-2 text-[17px] tracking-wide text-gray-900 dark:text-neutral-400'
        >
          {subtitle}
        </Text>
      )}
    </div>
  );
};
export default Title;
