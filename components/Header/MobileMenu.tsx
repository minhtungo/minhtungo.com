import Link from 'next/link';

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

export default MobileMenu;