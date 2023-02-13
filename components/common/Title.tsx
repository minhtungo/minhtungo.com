// import LineGradient from './LineGradient';
import { AnimatedHeading, AnimatedText } from '../';
import classNames from 'classnames';
import {
  FromLeftVariant,
  PopUpFromBottom,
} from '../../lib/FramerMotionVariants';
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
        'text-center mb-8 lg:mb-8',
        inter.className,
        className
      )}
    >
      {/* <div className='flex justify-center mb-4'>
        <LineGradient width='w-1/6' />
      </div> */}
      <AnimatedHeading
        variants={FromLeftVariant}
        className='text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-600 bg-[length:400%_400%] animate-border'
      >
        {title}
      </AnimatedHeading>

      {subtitle && (
        <AnimatedText
          variants={PopUpFromBottom}
          className='text-gray-900 dark:text-gray-200 text-xs tracking-wider'
        >
          {subtitle}
        </AnimatedText>
      )}
    </div>
  );
};
export default Title;
