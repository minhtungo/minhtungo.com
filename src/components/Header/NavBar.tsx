'use client';

import { Avatar, Link, Logo } from '@/components/common';
import { links } from '@/constant/routes';
import { FadeContainer, FromLeftVariant, PopUp } from '@/lib/framerVariants';
import mergeClassNames from '@/lib/mergeClassNames';
import { motion, useAnimation } from 'framer-motion';
import { useKBar } from 'kbar';
import throttle from 'lodash.throttle';
import { Manrope } from 'next/font/google';
import React, { useEffect, useRef } from 'react';
import { FiCommand } from 'react-icons/fi';

import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const NavBar = () => {
  const { query } = useKBar();

  const navRef = useRef<HTMLDivElement>(null);

  const control = useAnimation();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const throttledAddShadowToNavbar = throttle(() => {
    console.log('scrolling');
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-card-background-light',
          'dark:bg-card-background-dark',
          'border-b',
          'border-gray-200',
          'dark:border-transparent-white',
        ]
      );
      control.start('visible');
    } else {
      navRef.current!.classList.remove(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-card-background-light',
          'dark:bg-card-background-dark',
          'border-b',
          'border-gray-200',
          'dark:border-transparent-white',
        ]
      );
      control.start('hidden');
    }
  }, 60);

  useEffect(() => {
    window.addEventListener('scroll', throttledAddShadowToNavbar);
    return () => {
      window.removeEventListener('scroll', throttledAddShadowToNavbar);
    };
  }, []);

  return (
    <header
      className={mergeClassNames(
        'fixed top-0 left-0 right-0 z-50 w-full backdrop-filter',
        manrope.className
      )}
      ref={navRef}
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between py-2 px-6 xl:px-0'>
        <Link
          href='/'
          className='mr-3'
          aria-label='Link to Home Page'
          animation={false}
        >
          <motion.div
            initial='hidden'
            animate='visible'
            variants={FromLeftVariant}
          >
            <Avatar isMobile width={8} height={8} />
            <Logo />
          </motion.div>
        </Link>
        <div className='flex items-center space-x-1'>
          {/* Top Nav list on Desktop*/}
          <nav className='z-10 hidden md:flex'>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={FadeContainer}
              className='flex items-center lg:gap-1'
            >
              {links.map((link, index) => {
                return (
                  <motion.li key={index} variants={PopUp}>
                    <NavItem href={link.href} label={link.label} />
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <div className='flex items-center space-x-3'>
            <motion.button
              initial='hidden'
              animate='visible'
              variants={PopUp}
              className='flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 duration-300 hover:bg-gray-300 dark:hover:bg-zinc-800/70 sm:h-9 sm:w-9'
              onClick={() => query.toggle()}
              aria-label='Command Bar'
            >
              <FiCommand size={20} />
            </motion.button>

            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
