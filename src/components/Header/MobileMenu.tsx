import { IconHelper, Link } from '@/components/ui';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';

export default function MobileMenu({ links }: { links: Link[] }) {
  const router = useRouter();
  return (
    <Menu as='span' className='flex items-center md:hidden'>
      {({ open, close }) => (
        <>
          <Menu.Button>{open ? <IoMdClose className='h-6 w-6 transform rounded-md duration-300 active:scale-50' /> : <HiOutlineMenuAlt4 className='h-6 w-6 transform rounded-md duration-300 active:scale-50' />}</Menu.Button>
          <Transition as={Fragment} show={open} enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
            <Menu.Items static className='absolute top-[35px] right-6 mt-2 w-40 origin-top-right divide-y divide-custom-border-black rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-transparent-white dark:bg-neutral-900 sm:w-56'>
              <nav className='px-1 py-1 '>
                {links.map((link) => (
                  <Menu.Item key={link.label}>
                    {({ active }: { active: boolean }) => (
                      <button className={`${active ? 'bg-slate-200 dark:bg-neutral-800/90' : 'text-gray-900 dark:text-gray-100'} group flex w-full items-center gap-4 rounded-md px-2 py-2 text-sm`} onClick={()=> {
                        router.push(link.href)
                      }}>
                        <IconHelper type={link.label} className='h-5 w-5' />
                        <span className='capitalize'>{link.label}</span>
                      </button>
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
