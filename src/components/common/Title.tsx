// import LineGradient from './LineGradient';
import { AnimatedHeading, AnimatedText } from '@/components';
import classNames from 'classnames';
import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={classNames('mb-8', className)}>
      <AnimatedHeading
        variants={FromLeftVariant}
        className='primary-gradient mb-2 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl lg:font-bold'
      >
        {title}
      </AnimatedHeading>

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
