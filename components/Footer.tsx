import Link from 'next/link';
import { Container } from './';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <Container className='p-4 sm:p-6'>
        <hr className='my-6 sm:mx-auto border-transparent-white lg:my-8' />
        <div className='text-center sm:items-center sm:flex sm:justify-between'>
          <span className='text-sm text-gray-400 sm:text-center '>
            😸Minh Tu Ngo🐶
          </span>
          <div className='flex justify-center mt-4 space-x-6 sm:mt-0'>
            <Link
              href='https://github.com/minhtungo'
              className='text-gray-500 hover:text-blue-500'
            >
              <FiGithub className='w-5 h-5' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/minhtungo/'
              className='text-gray-500 hover:text-blue-500'
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
