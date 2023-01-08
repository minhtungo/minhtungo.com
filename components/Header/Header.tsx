import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

import { useTheme } from 'next-themes';

import {
  FadeContainer,
  FromLeftVariant,
} from '../../lib/FramerMotionVariants';

import { Logo, Container, Icon } from '..';
import HamBurger from './Hamburger';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu';

const navigationRoutes: string[] = [
  'home',
  'about',
  'journey',
  'projects',
  'contact',
];

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const [navOpen, setNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const control = useAnimation();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-transparent-whiter',
          'dark:bg-transparent-black',
        ]
      );
      control.start('visible');
    } else {
      navRef.current!.classList.remove(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-transparent-whiter',
          'dark:bg-transparent-black',
        ]
      );
      control.start('hidden');
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener('scroll', addShadowToNavbar);
    return () => {
      window.removeEventListener('scroll', addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  // to lock the scroll when mobile is open
  const lockScroll = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('lock-scroll');
  };

  const handleClick = () => {
    lockScroll();
    setNavOpen(!navOpen);
  };

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <header className='fixed w-full top-0 left-0 right-0 z-50' ref={navRef}>
      <Container className='flex items-center justify-between py-[12px]'>
        <HamBurger open={navOpen} handleClick={handleClick} />
        <AnimatePresence>
          {navOpen && (
            <MobileMenu links={navigationRoutes} handleClick={handleClick} />
          )}
        </AnimatePresence>
        <Link href='/' className='mr-3' aria-label='Link to Home Page'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={FromLeftVariant}
          >
            <Logo className='hidden sm:inline-flex font-semibold text-lg' />
          </motion.div>
          {/* <div className='w-full sm:!hidden'>
          <p>Minh Tu Ngo</p>
        </div> */}
        </Link>
        {/* Top Nav list */}
        <motion.nav className='hidden sm:flex z-10 md:inset-0 md:justify-center'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={FadeContainer}
            className='flex items-center md:gap-2'
          >
            {navigationRoutes.map((link, index) => {
              return <NavItem key={index} href={`${link}`} text={link} />;
            })}
          </motion.div>
        </motion.nav>
        <motion.div className='flex items-center space-x-4 text-gray-500 dark:text-gray-300'>
          <Icon>
            <Link
              href='https://github.com/minhtungo'
              className='hover:text-blue-500'
              target='_blank'
            >
              <FiGithub className='w-5 h-5' />
            </Link>
          </Icon>

          <Icon>
            <Link
              href='https://www.linkedin.com/in/minhtungo/'
              className='hover:text-blue-500'
              target='_blank'
            >
              <FiLinkedin className='w-5 h-5' />
            </Link>
          </Icon>
          <Icon>
            {/* DarkMode Container */}
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={24}
              sunColor='#FFD600'
              moonColor='#FFD600'
            />
          </Icon>
        </motion.div>
      </Container>
    </header>
  );
};
export default Header;
