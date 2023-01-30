import Link from 'next/link';
import { motion } from 'framer-motion';
import { HamFastFadeContainer } from '../../lib/FramerMotionVariants';

const MobileMenu = ({
  links,
  handleClick,
}: {
  links: string[];
  handleClick: () => void;
}) => {
  return (
    <motion.div
      className='absolute font-normal bg-transparent-background-white dark:bg-transparent-blacker w-screen h-screen top-0 left-0 z-10 lg:hidden'
      variants={HamFastFadeContainer}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <motion.nav className='mt-28 mx-8 flex flex-col'>
        {links.map((link, index) => {
          const navLink =
            link.toLowerCase() === 'home' ? '/' : `#${link.toLowerCase()}`;
          return (
            <Link
              href={navLink}
              key={`mobileNav-${index}`}
              onClick={handleClick}
              className='border-b border-gray-300 dark:border-gray-700 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer'
            >
              <motion.p>{link === 'rss' ? link.toUpperCase() : link}</motion.p>
            </Link>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};

export default MobileMenu;
