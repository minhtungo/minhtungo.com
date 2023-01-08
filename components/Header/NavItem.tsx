import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { PopUp } from '../../lib/FramerMotionVariants';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === (href === '/home' ? '/' : `#${href}`);

  return (
    <Link
      href={href === 'home' ? '/' : `#${href}`}
      className={`${
        isActive
          ? 'font-bold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-300'
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-neutral-700/50 rounded-md`}
    >
      <motion.p className='capitalize' variants={PopUp}>
        {text}
      </motion.p>
    </Link>
  );
};

export default NavItem;
