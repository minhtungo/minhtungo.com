'use client';

import { Avatar, Icon, Link, Logo } from '@/components/common';
import { links } from '@/config/routes';
import { FadeContainer, FromLeftVariant } from '@/lib/framerVariants';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [mounted]);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    return (
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={22}
        moonColor='#FFD700'
        sunColor='#e6c300'
      />
    );
  };

  const control = useAnimation();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
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
  }, [control]);

  useEffect(() => {
    window.addEventListener('scroll', addShadowToNavbar);
    return () => {
      window.removeEventListener('scroll', addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-filter`}
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
        <div className='flex items-center space-x-4'>
          {/* Top Nav list on Desktop*/}
          <nav className='z-10 hidden md:flex'>
            <motion.ul
              initial='hidden'
              animate='visible'
              variants={FadeContainer}
              className='flex items-center lg:gap-2'
            >
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <NavItem href={link.href} label={link.label} />
                  </li>
                );
              })}
            </motion.ul>
          </nav>
          <div className='flex items-center space-x-3'>
            <Icon>
              {/* DarkMode Container */}
              {renderThemeChanger()}
            </Icon>
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
