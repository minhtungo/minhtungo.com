'use client';

import { HEADER_LINKS } from '@/constant/routes';
import { FadeContainer, PopUp } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import Container from '@/components/common/Container';
import ThemeToggle from '@/components/common/ThemeToggle';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const handleScroll = debounce(() => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent',
        scrolling && 'shadow-sm bg-background/60 backdrop-blur border-border'
      )}
    >
      <Container className='flex items-center justify-between h-14'>
        <motion.div initial='hidden' animate='visible' variants={FadeContainer}>
          <Link href='/' aria-label='Link to Home Page' className='select-none'>
            <Logo />
          </Link>
        </motion.div>
        <div className='flex items-center space-x-2'>
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
                        'capitalize text-primary/80 hover:bg-accent/50',
                        pathname === href && 'bg-accent text-primary'
                      )}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};
export default Header;
