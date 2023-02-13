import Link from 'next/link';
import { motion } from 'framer-motion';
import { HamFastFadeContainer } from '@/lib/FramerMotionVariants';

const MobileMenu = ({
  links,
  handleClick,
}: {
  links: string[];
  handleClick: () => void;
}) => {
  return (
    <motion.div
      className='absolute top-0 left-0 z-10 h-screen w-screen bg-transparent-background-white font-normal dark:bg-transparent-blacker lg:hidden'
      variants={HamFastFadeContainer}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <motion.nav className='mx-8 mt-28 flex flex-col'>
        {links.map((link, index) => {
          const navLink =
            link === 'uses' ? `/${link}` : link === 'home' ? '/' : `/#${link}`;
          return (
            <Link
              href={navLink}
              key={`mobileNav-${index}`}
              onClick={handleClick}
              className='flex w-auto cursor-pointer border-b border-gray-300 py-4 text-base font-semibold capitalize dark:border-gray-700'
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
