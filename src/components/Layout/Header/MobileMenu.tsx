import IconHelper from '@/components/common/IconHelper';
import Link from '@/components/common/Link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

export default function MobileMenu({ links }: { links: Link[] }) {
  return (
    <Menu as='span' className='flex items-center md:hidden'>
      {({ open }) => (
        <>
          <Menu.Button>
            {open ? (
              <IoMdClose className='h-6 w-6 transform rounded-md duration-300 active:scale-50' />
            ) : (
              <HiOutlineMenuAlt4 className='h-6 w-6 transform rounded-md duration-300 active:scale-50' />
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            show={open}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='absolute top-[35px] right-5 mt-2 w-56 origin-top-right divide-y divide-custom-border-black rounded-md bg-background-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-transparent-white dark:bg-background-dark'
            >
              <nav className='px-1 py-1 '>
                {links.map((link) => (
                  <Menu.Item key={link.label}>
                    {({ active }: { active: boolean }) => (
                      <Link
                        animation={false}
                        href={link.href}
                        className={`${
                          active
                            ? 'primary-gradient text-gray-50 dark:text-gray-900'
                            : 'text-gray-600 dark:text-gray-300'
                        } group flex w-full items-center gap-4 rounded-md px-2 py-2 text-sm`}
                      >
                        <IconHelper type={link.label} className='h-5 w-5' />
                        <span className='capitalize'>{link.label}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </nav>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
