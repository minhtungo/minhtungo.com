import classNames from 'classnames';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: LayoutProps) => {
  return (
    <main className={classNames('pt-20 md:pt-24', className)}>{children}</main>
  );
};

export default Container;
