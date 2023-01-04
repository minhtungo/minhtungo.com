'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo, Container, Button } from '.';
import { MdMenu } from 'react-icons/md';
import { BsMoonStars, BsSun } from 'react-icons/bs';

// import { useTheme } from 'next-themes';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href='/'
      className={`${
        isActive
          ? 'font-bold text-gray-900 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400'
      } 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:bg-gray-100 dark:hover:bg-midnight transition-all`}
    >
      <span
        className={`${
          isActive
            ? 'py-1 border-b-2 border-teal-400 dark:border-teal-500'
            : 'capsize'
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

const Header = () => {
  //   const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnThemeChange = () => {};

  return (
    <Container>
      <div className='z-50 text-gray-100 white:text-gray-900 fixed inset-0'>
        <div className='flex items-center justify-between px-4 py-3 sm:px-6 md:space-x-10 mx-auto'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <span className='sr-only'>Logo</span>
            {/* <Image
            alt='Minh Tu Ngo'
            height={48}
            width={48}
            src={}
            placeholder='blur'
            blurDataURL={}
            className='rounded-full'
          /> */}
            <Logo />
          </div>
          <div
            className='-mr-2 -my-2 md:hidden'
            onClick={() => setIsOpen(true)}
          >
            <div className='bg-transparent-black text-gray-400 rounded-full p-3 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state'>
              <span className='sr-only'>Toggle Menu</span>
              <MdMenu />
            </div>
          </div>
          <nav className='hidden space-x-6 text-lg md:flex'>
            <NavItem href='/' text='Home' />
            <NavItem href='/about' text='About' />
            <NavItem href='/projects' text='Projects' />
            <NavItem href='/blog' text='Blog' />
            <NavItem href='/community-wall' text='Community wall' />
          </nav>
          <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
            <Button
              aria-label='Toggle Dark/Light Mode'
              onClick={handleOnThemeChange}
              href='/'
            >
              <BsMoonStars className='h7 w-7 fill-none' />
            </Button>
          </div>
        </div>

        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className='fixed inset-0 z-50 md:hidden'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80' />
            <div className='fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5'>
              <button
                onClick={() => setIsOpen(false)}
                className='absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
              >
                <span className='sr-only'>Close navigation</span>
                <svg className='w-7 h-7' fill='none' viewBox='0 0 24 24' />
              </button>
              <ul className='space-y-6'>
                <li>
                  <Link
                    href='/'
                    className='hover:text-teal-400 dark:hover:text-teal-500'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='hover:text-teal-400 dark:hover:text-teal-500'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='/projects'
                    className='hover:text-teal-400 dark:hover:text-teal-500'
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href='/blog'
                    className='hover:text-teal-400 dark:hover:text-teal-500'
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/community-wall'
                    className='hover:text-teal-400 dark:hover:text-teal-500'
                  >
                    Community wall
                  </Link>
                </li>
              </ul>
              <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-200/10'>
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='flex items-center justify-center w-full py-3 bg-gray-200 rounded-full dark:bg-midnight-hover general-ring-state'
                  // onClick={() =>
                  //   setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                  // }
                >
                  <BsMoonStars />
                  {/* {mounted && (
                    <>
                      <div>
                        {resolvedTheme === 'dark' ? (
                          <svg
                            className='w-7 h-7'
                            fill='none'
                            viewBox='0 0 24 24'
                          />
                        ) : (
                          <svg
                            className='w-7 h-7'
                            fill='none'
                            viewBox='0 0 24 24'
                          />
                        )}
                      </div>
                      {resolvedTheme === 'dark' ? (
                        <p className='ml-3 font-semibold'>
                          Change to light theme
                        </p>
                      ) : (
                        <p className='ml-3 font-semibold'>
                          Change to dark theme
                        </p>
                      )}
                    </>
                  )} */}
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </Container>
  );
};

export default Header;
