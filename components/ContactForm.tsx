import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { Container, Button } from './';

const ContactForm = () => {
  return (
    <Container>
      <div className='relative p-4 mb-10 rounded-md shadow-md bg-transparent-black md:p-8 lg:p-18 lg:px-19 mt-10'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='md:ml-4'>
            <div>
              <h3 className='text-2xl font-semibold text-gray-50'>
                Get In Touch
              </h3>
              <p className='mt-2 text-base font-light text-gray-200'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* Info */}
            <div className='inline-flex flex-col mt-12 mb-6 space-y-4'>
              <div className='flex flex-row items-center space-x-6 hover:text-blue-500'>
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-transparent-white'>
                  <MdOutlineEmail className='w-4 h-4 ' />
                </div>
                <p className='text-sm font-light text-gray-50'>
                  mn.minhtungo@gmail.com
                </p>
              </div>
              <div className='flex flex-row items-center space-x-6 hover:text-blue-500'>
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-transparent-white'>
                  <MdOutlinePhone className='w-4 h-4' />
                </div>
                <p className='text-sm font-light text-gray-50'>613-453-6449</p>
              </div>
            </div>
            {/* Info */}

            {/* Social */}
            <div className='flex flex-row items-center space-x-4'>
              <Link
                href='https://github.com/minhtungo'
                target='_blank'
                className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-transparent-white'
              >
                <FiGithub className='w-5 h-5 text-gray-50' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/minhtungo'
                target='_blank'
                className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-transparent-white'
              >
                <FiLinkedin className='w-5 h-5 text-gray-50' />
              </Link>
            </div>
            {/* Social */}
          </div>
          <form className='flex flex-col xs:p-3 s:p-4 rounded-lg'>
            <div className='md:flex items-cente'>
              <input
                type='text'
                className='leading-none text-gray-50 p-3 py-2 focus:outline-none border-0 bg-transparent-white rounded w-full md:w-1/2'
                name='name'
                placeholder='Name'
              />
              <input
                type='email'
                className='leading-none text-gray-50 p-3 py-2 focus:outline-none border-0 bg-transparent-white rounded w-full md:w-1/2 md:ml-3 mt-3 md:mt-0'
                name='email'
                placeholder='Email'
              />
            </div>
            <input
              type='text'
              className='leading-none text-gray-50 p-3 py-2 focus:outline-none border-0 bg-transparent-white rounded w-full mt-3'
              name='subject'
              placeholder='Subject'
            />
            <textarea
              rows={4}
              className='h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-3 bg-transparent-white border-0 rounded'
              name='message'
              placeholder='Message'
            />
            <div className='flex items-center justify-center w-full'>
              <Button
                href='/'
                className='flex items-center justify-center mt-6'
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default ContactForm;
