'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HEADER_LINKS, MOBILE_HEADER_LINKS } from '@/lib/routes';
import { EllipsisVertical, MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className='md:hidden transition-all text-muted-foreground ml-1'>
        {open ? (
          <X className='size-5 duration-300 ease-in' />
        ) : (
          <EllipsisVertical className='size-5 duration-300 ease-in' />
        )}
      </PopoverTrigger>
      <PopoverContent sideOffset={10} alignOffset={1} align='end' className='w-48 p-1.5' asChild>
        <nav>
          <ul className='space-y-1'>
            {MOBILE_HEADER_LINKS.map(({ href, label, icon }) => {
              return (
                <li
                  className='relative flex items-center rounded-lg px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground gap-x-2 text-base'
                  onClick={() => setOpen(false)}
                  key={`${href}-mobile-menu`}
                >
                  {icon}
                  {label === 'Resume' ? (
                    <a className='w-full' href={href}>
                      {label}
                    </a>
                  ) : (
                    <Link className='w-full' href={href}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </PopoverContent>
    </Popover>
  );
};

export default MobileMenu;
