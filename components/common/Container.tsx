import classNames from 'classnames';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={classNames('max-w-7xl mx-auto px-6', className)}>
      {children}
    </main>
  );
};

export default Container;
