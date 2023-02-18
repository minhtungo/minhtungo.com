import { useRouter } from 'next/router';
import Link from '@/components/common/Link';

import { motion } from 'framer-motion';
import { PopUp } from '@/lib/framerVariants';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  const router = useRouter();
  const path = router.asPath;
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? 'font-bold text-gray-800 dark:text-gray-200'
          : 'font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-100'
      } mx-2.5 hidden rounded-md text-base transition-all md:inline-block`}
    >
      <motion.span className='capitalize' variants={PopUp}>
        {label}
      </motion.span>
    </Link>
  );
};

export default NavItem;
