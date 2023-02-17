// import LineGradient from './LineGradient';
import { AnimatedHeading, AnimatedText } from '@/components';
import classNames from 'classnames';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/frammerVariants';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div
      className={classNames(
        'mb-8 text-center lg:mb-8',
        inter.className,
        className
      )}
    >
      {/* <div className='flex justify-center mb-4'>
        <LineGradient width='w-1/6' />
      </div> */}
      <AnimatedHeading
        variants={FromLeftVariant}
        className='mb-2 bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-3xl lg:text-4xl lg:font-bold'
      >
        {title}
      </AnimatedHeading>

      {subtitle && (
        <AnimatedText
          variants={PopUpFromBottom}
          className='text-xs tracking-wider text-gray-900 dark:text-gray-200'
        >
          {subtitle}
        </AnimatedText>
      )}
    </div>
  );
};
export default Title;
