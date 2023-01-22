// import LineGradient from './LineGradient';
import { AnimatedHeading, AnimatedText } from '../';
import classNames from 'classnames';
import {
  FromLeftVariant,
  PopUpFromBottom,
} from '../../lib/FramerMotionVariants';
import { Inter } from '@next/font/google';
import LineGradient from './LineGradient';
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
        'text-center mb-8 lg:mb-12',
        inter.className,
        className
      )}
    >
      {/* <div className='flex justify-center mb-4'>
        <LineGradient width='w-1/6' />
      </div> */}
      <AnimatedHeading
        variants={FromLeftVariant}
        className='text-2xl md:text-3xl lg:text-4xl font-medium lg:font-semibold mb-3'
      >
        {title}
      </AnimatedHeading>
      {subtitle && (
        <AnimatedText
          variants={PopUpFromBottom}
          className='text-blue-600 dark:text-blue-500 text-xs capitalize tracking-wider'
        >
          {subtitle}
        </AnimatedText>
      )}
    </div>
  );
};
export default Title;
