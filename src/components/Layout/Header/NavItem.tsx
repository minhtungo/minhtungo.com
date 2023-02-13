import { useRouter } from 'next/router';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { PopUp } from '@/lib/FramerMotionVariants';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const path = router.asPath;
  const isActive = path === (href === '/home' ? '/' : `/#${href}`);
  const hrefLink =
    href === 'uses' ? `/${href}` : href === '/home' ? '/' : `/#${href}`;

  return (
    <Link
      href={hrefLink}
      className={`${
        isActive
          ? 'font-bold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-700 dark:text-gray-300'
      } hidden rounded-md px-2 py-[3px] text-base transition-all hover:bg-gray-300 dark:hover:bg-neutral-700/50 lg:inline-block lg:px-3`}
    >
      <motion.p className='capitalize' variants={PopUp}>
        {text}
      </motion.p>
    </Link>
  );
};

export default NavItem;
