'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';

import { Logo, Container } from './';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';

import { usePathname } from 'next/navigation';
import { MdMenu, MdClose } from 'react-icons/md';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const navigationRoutes: string[] = ['home', 'about', 'projects', 'contact'];

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === (href === '/home' ? '/' : href);

  return (
    <Link
      href={href === '/home' ? '/' : href}
      className={`${
        isActive ? 'font-bold text-gray-200' : 'font-normal text-gray-400'
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-neutral-700/50 rounded-md`}
    >
      <p className='capitalize'>{text}</p>
    </Link>
  );
};

const HamBurger = ({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: () => void;
}) => {
  return (
    <div className='sm:hidden' style={{ zIndex: 1000 }}>
      {!open ? (
        <MdMenu
          className='h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50'
          onClick={handleClick}
        />
      ) : (
        <MdClose
          className='h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50'
          onClick={handleClick}
        />
      )}
    </div>
  );
};

const MobileMenu = ({
  links,
  handleClick,
}: {
  links: string[];
  handleClick: () => void;
}) => {
  return (
    <div className='absolute font-normal bg-transparent-black w-screen h-screen top-0 left-0 z-10 sm:hidden'>
      <nav className='mt-28 mx-8 flex flex-col'>
        {links.map((link, index) => {
          const navLink =
            link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
          return (
            <Link
              href={navLink}
              key={`mobileNav-${index}`}
              onClick={handleClick}
              className='border-b border-gray-700 text-gray-100 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer'
            >
              <p>{link === 'rss' ? link.toUpperCase() : link}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const [navOpen, setNavOpen] = useState(false);

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
      <Container className='flex items-center justify-between py-[10px]'>
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
              return <NavItem key={index} href={`/${link}`} text={link} />;
            })}
          </div>
        </nav>

        {/* DarkMode Container */}
        <div className='cursor-pointer'>
          <BsMoonStars size={20} />
        </div>
      </Container>
    </header>
  );
};
export default Header;
