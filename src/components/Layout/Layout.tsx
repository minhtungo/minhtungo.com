import classNames from 'classnames';
import Meta from './Meta';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  pageTitle?: string;
}
const Layout = ({ children, className, pageTitle }: LayoutProps) => {
  return (
    <>
      <Meta title={pageTitle} />
      <div className={classNames('pt-20 md:pt-24', className)}>{children}</div>
    </>
  );
};

export default Layout;
