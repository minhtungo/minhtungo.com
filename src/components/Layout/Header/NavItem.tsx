import { useRouter } from 'next/router';
import Link from '@/components/common/Link';

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
      } mx-2 hidden rounded-md text-base transition-all lg:inline-block`}
    >
      <motion.p className='capitalize' variants={PopUp}>
        {text}
      </motion.p>
    </Link>
  );
};

export default NavItem;
