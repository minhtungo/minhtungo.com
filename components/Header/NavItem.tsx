import { usePathname } from 'next/navigation';
import Link from 'next/link';


interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === (href === '/home' ? '/' : href);

  return (
    <Link
      href={href === 'home' ? '/' : `#${href}`}
      className={`${
        isActive ? 'font-bold text-gray-200' : 'font-normal text-gray-400'
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-neutral-700/50 rounded-md`}
    >
      <p className='capitalize'>{text}</p>
    </Link>
  );
};

export default NavItem