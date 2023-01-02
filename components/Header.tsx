'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import classNames from 'classnames';
import { Button, Container, Logo } from './';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full backdrop-blur-[12px]'>
      <Container className='flex h-navigation-height border-b border-transparent-white '>
        <Link className='flex items-center text-md' href='/'>
          <Logo className='mr-4 font-bold' />
        </Link>

        <div
          className={classNames(
            'transition-[visibility] md:visible',
            isMenuOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={classNames(
              'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
              isMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={classNames(
                'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
                'ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-grey',
                isMenuOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href='#'>About</Link>
              </li>
              <li>
                <Link href='#'>Projects</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center h-full ml-auto'>
          <Button href='#'>Resume</Button>
        </div>
        <button
          className='ml-6 md:hidden'
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className='sr-only'>Toggle Menu</span>
          <MdMenu />
        </button>
      </Container>
    </header>
  );
};

export default Header;
