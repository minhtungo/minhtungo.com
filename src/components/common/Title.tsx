import { Heading, Text } from '@/components/ui/FramerMotion';
import { PopUpFromBottom } from '@/lib/framerVariants';
import mergeClassNames from '@/lib/mergeClassNames';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  home?: boolean;
}

const Title = ({ title, subtitle, className, home }: TitleProps) => {
  if (home) {
    return (
      <div
        className={mergeClassNames(
          'mb-8 flex items-center text-left',
          className
        )}
      >
        <Heading
          variants={PopUpFromBottom}
          className='primary-gradient bg-clip-text text-2xl font-semibold text-transparent lg:text-3xl lg:font-bold'
        >
          {title}
        </Heading>
        <div className='relative flex-1 before:absolute before:left-3 before:top-[50%] before:h-[1.8px] before:w-[calc(100%-12px)] before:transform before:bg-transparent-black-tight before:content-[""] dark:before:bg-transparent-white md:before:w-[200px] lg:before:w-[350px]' />
      </div>
    );
  }
  return (
    <div className={mergeClassNames('mb-12 pt-2 text-center', className)}>
      <Heading
        variants={PopUpFromBottom}
        className='primary-gradient bg-clip-text text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl lg:font-bold'
      >
        {title}
      </Heading>

      {subtitle && (
        <Text
          variants={PopUpFromBottom}
          className='mt-2 text-sm tracking-wide text-gray-900 dark:text-neutral-400 md:text-base'
        >
          {subtitle}
        </Text>
      )}
    </div>
  );
};
export default Title;
