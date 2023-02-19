import classNames from 'classnames';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={classNames('pt-20 md:pt-24', className)}>{children}</div>
  );
};

export default Layout;
