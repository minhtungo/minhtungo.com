import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Avatar from '../../common/Avatar';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';

import Link from 'next/link';

// interface DropdownMenuProps {
//   renderThemeChanger: () => JSX.Element;
//   isDarkMode: boolean;
// }

export default function DropdownMenu() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Menu as='span' className='flex lg:hidden items-center mt-[6px] lg:mt-0'>
      {({ open }) => (
        <>
          <Menu.Button>
            <Avatar isMobile width={6} height={6} />
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
              className='absolute top-[35px] right-6 mt-2 w-32 sm:w-44 origin-top-right divide-y divide-custom-border-black dark:divide-transparent-white rounded-md bg-background-light dark:bg-background-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            >
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <Link
                      href='https://github.com/minhtungo'
                      target='_blank'
                      className={`${
                        active
                          ? 'bg-blue-500 text-gray-5'
                          : 'text-gray-600 dark:text-gray-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FiGithub className='mr-2 w-5 h-5' aria-hidden='true' />
                      Github
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <Link
                      href='https://www.linkedin.com/in/minhtungo/'
                      target='_blank'
                      className={`${
                        active
                          ? 'bg-blue-500 text-gray-50'
                          : 'text-gray-600 dark:text-gray-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FiLinkedin className='mr-2 w-5 h-5' aria-hidden='true' />
                      LinkedIn
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <Link
                      href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
                      target='_blank'
                      className={`${
                        active
                          ? 'bg-blue-500 text-gray-50'
                          : 'text-gray-600 dark:text-gray-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <IoDocumentTextOutline
                        className='mr-2 w-5 h-5'
                        aria-hidden='true'
                      />
                      Resume
                    </Link>
                  )}
                </Menu.Item>
              </div>
              {/* <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${
                        enabled
                          ? "bg-blue-500 text-gray-50"
                          : "text-gray-600 dark:text-gray-300"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span className="sr-only">Enable notifications</span>
                      <span
                        className={`${
                          enabled ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>

                    // <button
                    //   className={`${
                    //     active
                    //       ? "bg-blue-500 text-gray-50"
                    //       : "text-gray-600 dark:text-gray-300"
                    //   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    // >
                    //   {renderThemeChanger()}
                    //   {isDarkMode ? "Dark Mode" : "Light Mode"}
                    // </button>
                  )}
                </Menu.Item>
              </div> */}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
