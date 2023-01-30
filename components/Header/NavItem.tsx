import { useRouter } from 'next/router';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { PopUp } from '../../lib/FramerMotionVariants';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === (href === '/home' ? '/' : `/#${href}`);

  return (
    <Link
      href={href === '/home' ? '/' : `#${href}`}
      className={`${
        isActive
          ? 'font-bold text-gray-800 dark:text-gray-200'
          : 'text-gray-700 dark:text-gray-300 font-normal'
      } lg:inline-block transition-all text-base hidden px-2 lg:px-3 py-[3px] hover:bg-gray-300 dark:hover:bg-neutral-700/50 rounded-md`}
    >
      <motion.p className='capitalize' variants={PopUp}>
        {text}
      </motion.p>
    </Link>
  );
};

export default NavItem;
