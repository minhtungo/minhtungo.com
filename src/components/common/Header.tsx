'use client';

import { FadeContainer, PopUp } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import Container from '@/components/common/Container';
import ThemeToggle from '@/components/common/ThemeToggle';
import { buttonVariants } from '@/components/ui/button';
import { EMAIL_ADDRESS, RESUME_HREF } from '@/lib/constants';
import { HEADER_LINKS } from '@/lib/routes';
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
        <nav className='z-10 '>
          <motion.ul
            initial='hidden'
            animate='visible'
            variants={FadeContainer}
            className='flex items-center md:gap-x-2'
          >
            <motion.li variants={PopUp} className='mr-4'>
              <Link href='/' aria-label='Link to Home Page' className='select-none'>
                <Logo />
              </Link>
            </motion.li>
            {HEADER_LINKS.map(({ href, label }) => {
              return (
                <motion.li className='hidden md:flex' key={`${label}-nav-item`} variants={PopUp}>
                  <Link
                    href={href}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      }),
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
        <motion.ul
          initial='hidden'
          animate='visible'
          variants={FadeContainer}
          className='flex items-center gap-x-2.5 ml-auto'
        >
          <motion.li variants={PopUp}>
            <ThemeToggle />
          </motion.li>
          <motion.li variants={PopUp}>
            <a
              className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'hidden md:inline-flex')}
              href={RESUME_HREF}
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </motion.li>
          <motion.li variants={PopUp}>
            <a
              className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'hidden md:inline-flex')}
              href={`mailto:${EMAIL_ADDRESS}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Say Hello
            </a>
          </motion.li>
        </motion.ul>
        <MobileMenu />
      </Container>
    </header>
  );
};
export default Header;
