import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { Container, Button, Title } from '..';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='mt-12 lg:mt-16'>
      <Title title='Contact' subtitle="Let's connect" />
      <div className='relative'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='md:ml-4'>
            <div>
              <h3 className='text-2xl font-semibold text-gray-200'>
                Get In Touch
              </h3>
              <p className='mt-2 text-base font-light text-gray-400'>
                I{"'"}m always open to new projects and opportunities. Whether
                you
                {"'"}re a company looking to hire or you{"'"}re just looking to
                chat, I{"'"}d love to hear from you.
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
