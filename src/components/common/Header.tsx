'use client';

import { Link, Logo } from '@/components/ui';
import { HEADER_LINKS } from '@/constant/routes';
import { FadeContainer, FromLeftVariant, PopUp } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = debounce(() => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, 100);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 w-full backdrop-filter'>
      <div className={cn('mx-auto flex max-w-6xl items-center justify-between py-2 px-6 xl:px-0', scrolling && 'shadow backdrop-blur-xl border-b')}>
        <Link href='/' className='mr-3' aria-label='Link to Home Page'>
          <motion.div initial='hidden' animate='visible' variants={FromLeftVariant}>
            <Logo />
          </motion.div>
        </Link>
        <div className='flex items-center space-x-1'>
          <nav className='z-10 hidden md:flex'>
            <motion.ul initial='hidden' animate='visible' variants={FadeContainer} className='flex items-center lg:gap-x-1'>
              {HEADER_LINKS.map((link, index) => {
                return (
                  <motion.li key={`${link.href}-${index}`} variants={PopUp}>
                    <NavItem href={link.href} label={link.label} />
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <div className='flex items-center space-x-3'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
