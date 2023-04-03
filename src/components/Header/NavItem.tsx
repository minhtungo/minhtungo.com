import { Button } from '@/components/ui';
import mergeClassNames from '@/lib/mergeClassNames';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      href={href}
      variant='ghost'
      className={mergeClassNames(
        'hidden rounded-md text-[14.75px] capitalize transition-all md:inline-block',
        isActive
          ? 'font-bold text-gray-900 dark:text-gray-100'
          : 'font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-100'
      )}
    >
      {label}
    </Button>
  );
};

export default NavItem;
