import mergeClassNames from '@/lib/mergeClassNames';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: LayoutProps) => {
  return (
    <main className={mergeClassNames('pt-20 md:pt-24', className)}>
      {children}
    </main>
  );
};

export default Container;
