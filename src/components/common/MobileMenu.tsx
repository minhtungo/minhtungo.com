import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HEADER_LINKS } from '@/lib/routes';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger className='md:hidden'>
        <MenuIcon className='size-5' />
      </PopoverTrigger>
      <PopoverContent>
        <nav className='p-4'>
          <ul className='flex flex-col gap-2'>
            {HEADER_LINKS.map(({ href, label }) => {
              return (
                <li
                  key={`${href}-mobile-menu`}
                  className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
                >
                  <Link href={href}>{label}</Link>
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
