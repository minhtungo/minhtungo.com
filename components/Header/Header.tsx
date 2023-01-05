'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Logo, Container } from '..';
import HamBurger from './Hamburger';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const navigationRoutes: string[] = ['home', 'about', 'projects', 'contact'];

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const [navOpen, setNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(
        ...['shadow', 'backdrop-blur-xl', 'bg-transparent-black']
      );
    } else {
      navRef.current!.classList.remove(
        ...['shadow', 'backdrop-blur-xl', 'bg-transparent-black']
      );
    }
  }, []);

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

  return (
    <header className='fixed w-full top-0 z-50 print:hidden' ref={navRef}>
      <Container className='flex items-center justify-between py-[12px]'>
        <HamBurger open={navOpen} handleClick={handleClick} />
        {navOpen && (
          <MobileMenu links={navigationRoutes} handleClick={handleClick} />
        )}
        <Link href='/' className='mr-3' aria-label='Link to Home Page'>
          <Logo className='hidden sm:inline-flex' />
          {/* <div className='w-full sm:!hidden'>
          <p>Minh Tu Ngo</p>
        </div> */}
        </Link>
        {/* Top Nav list */}
        <nav className='hidden sm:flex z-10 md:inset-0 md:justify-center'>
          <div className='flex items-center md:gap-2'>
            {navigationRoutes.map((link, index) => {
              return <NavItem key={index} href={`${link}`} text={link} />;
            })}
          </div>
        </nav>
        <div className='flex items-center space-x-4'>
          <Link
            href='https://github.com/minhtungo'
            className='text-gray-400 hover:text-blue-500'
            target='_blank'
          >
            <FiGithub className='w-5 h-5' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/minhtungo/'
            className='text-gray-400 hover:text-blue-500'
            target='_blank'
          >
            <FiLinkedin className='w-5 h-5' />
          </Link>
          {/* DarkMode Container */}
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            size={24}
            sunColor='rgb(156 163 175)'
            moonColor='rgb(156 163 175'
          />
        </div>
      </Container>
    </header>
  );
};
export default Header;
