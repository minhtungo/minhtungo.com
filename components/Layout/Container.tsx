import classNames from 'classnames';
import Head from 'next/head';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <>
      <main className={classNames('mx-auto max-w-7xl px-6', className)}>
        {children}
      </main>
    </>
  );
};

export default Container;
