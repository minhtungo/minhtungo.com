'use client';

import { HEADER_LINKS } from '@/constant/routes';
import { FadeContainer, FromLeftVariant, PopUp } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { buttonVariants } from '@/components/ui/Button';
import Container from '@/components/common/Container';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

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
  }, 80);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300'>
      <Container
        className={cn(
          'flex items-center justify-between h-14 border-b border-transparent',
          scrolling && 'shadow-sm backdrop-blur border-border'
        )}
      >
        <motion.div className='flex items-center' initial='hidden' animate='visible' variants={FromLeftVariant}>
          <Link href='/' aria-label='Link to Home Page' className='select-none'>
            <Logo />
          </Link>
        </motion.div>
        <div className='flex items-center space-x-1'>
          <nav className='z-10 hidden md:flex'>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={FadeContainer}
              className='flex items-center lg:gap-x-1'
            >
              {HEADER_LINKS.map(({ href, label }) => {
                return (
                  <motion.li key={`${label}-nav-item`} variants={PopUp}>
                    <Link
                      href={href}
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                          size: 'sm',
                        }),
                        'capitalize hover:bg-accent/50',
                        pathname === href && 'bg-accent'
                      )}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};
export default Header;
