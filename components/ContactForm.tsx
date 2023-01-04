import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { Container, Button } from './';

const ContactForm = () => {
  return (
    <div className='relative p-4 mb-10 rounded-md shadow-md md:p-8 lg:p-18 lg:px-19 mt-10'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='md:ml-4'>
          <div>
            <h3 className='text-2xl font-semibold text-gray-200'>
              Get In Touch
            </h3>
            <p className='mt-2 text-base font-light text-gray-400'>
              I'm always open to new projects and opportunities. Whether you're
              a company looking to hire or you're just looking to chat, I'd love
              to hear from you.
            </p>
          </div>
          {/* Info */}
          <div className='inline-flex flex-col mt-12 mb-6 space-y-4'>
            <div className='flex flex-row items-center space-x-6 hover:text-blue-500'>
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-transparent-white'>
                <MdOutlineEmail className='w-4 h-4 ' />
              </div>
              <p className='text-sm font-light text-gray-200'>
                mn.minhtungo@gmail.com
              </p>
            </div>
            <div className='flex flex-row items-center space-x-6 hover:text-blue-500'>
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-transparent-white'>
                <MdOutlinePhone className='w-4 h-4' />
              </div>
              <p className='text-sm font-light text-gray-200'>613-453-6449</p>
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
              <FiGithub className='w-5 h-5 text-gray-200' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/minhtungo'
              target='_blank'
              className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-transparent-white'
            >
              <FiLinkedin className='w-5 h-5 text-gray-200' />
            </Link>
          </div>
          {/* Social */}
        </div>
        <form className='flex flex-col xs:p-3 s:p-4 rounded-lg'>
          <>
            <div className='w-full grid grid-cols-2 gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='name'
                  id='floating_name'
                  className='block py-2 mt-2 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-transparent-white appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_name'
                  className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Your Name
                </label>
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='email'
                  className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email
                </label>
              </div>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='subject'
                name='subject'
                id='floating_subject'
                className='block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_subject'
                className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Subject
              </label>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <textarea
                name='message'
                id='floating_message'
                className='block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-400 appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_message'
                className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Message
              </label>
            </div>
          </>

          <div className='flex items-center justify-center w-full'>
            <Button href='/' className='flex items-center justify-center mt-6'>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
