import { useRouter } from 'next/router';
import Link from '@/components/common/Link';

import { motion } from 'framer-motion';
import { PopUp } from '@/lib/frammerVariants';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const path = router.asPath;
  const isActive =
    path ===
    (href === '/home'
      ? '/'
      : href === '/guestbook' || href === '/uses'
      ? `/${href}`
      : `/#${href}`);
  const hrefLink =
    href === 'uses' || href === 'guestbook'
      ? `/${href}`
      : href === '/home'
      ? '/'
      : `/#${href}`;

  return (
    <Link
      href={hrefLink}
      className={`${
        isActive
          ? 'font-bold text-gray-800 dark:text-gray-200'
          : 'font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-100'
      } mx-2.5 hidden rounded-md text-base transition-all md:inline-block`}
    >
      <motion.span className='capitalize' variants={PopUp}>
        {text}
      </motion.span>
    </Link>
  );
};

export default NavItem;
