import Link from 'next/link';
import { Container } from './';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <Container className='py-4 sm:py-6'>
        <hr className='my-6 sm:mx-auto border-transparent-white lg:my-8' />
        <div className='text-center sm:items-center sm:flex sm:justify-between'>
          <span className='text-sm text-gray-400 sm:text-center '>
            😸Minh Tu Ngo🐶 
          </span>
          <span className='text-sm text-gray-400 sm:text-center '>
<Link href ='https://skfb.ly/6W9QU' className='underline'>3D Model</Link> by Takuya on <Link href='http://creativecommons.org/licenses/by/4.0/' className='underline'>Sketchfab</Link>
          </span>
          <div className='flex justify-center mt-4 space-x-6 sm:mt-0'>
            <Link
              href='https://github.com/minhtungo'
              className='text-gray-400 hover:text-blue-500'
              target='_blank'
            >
              <FiGithub className='w-5 h-5' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/minhtungo/'
              className='text-gray-400 hover:text-blue-500' target='_blank'
            >
              <FiLinkedin className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
