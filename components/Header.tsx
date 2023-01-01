import Link from 'next/link';
import { Button, Container } from './';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]'>
      <Container className='flex h-[var(--navigation-height)]'>
        <Link className='flex items-center' href='/'>
          <Logo className='text-md font-bold' />
        </Link>
        <nav className='h-full'>
          <ul className='flex items-center h-full [&_a]:text-md [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6'>
            <li>
              <Link href='#'>About</Link>
            </li>
            <li>
              <Link href='#'>Projects</Link>
            </li>
            <li>
              <Link href='#'>About</Link>
            </li>
          </ul>
        </nav>
        <div className='ml-auto h-full flex items-center'>
          <Button href='#'>Resume</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
