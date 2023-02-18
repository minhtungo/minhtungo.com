import { Inter } from '@next/font/google';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <main
      className={classNames(
        'mx-auto max-w-5xl px-6',
        className,
        inter.className
      )}
    >
      {children}
    </main>
  );
};

export default Container;
