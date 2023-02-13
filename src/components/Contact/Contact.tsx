import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { Title, AnimatedText, Icon } from '..';
import { PopUpFromBottom } from '@/lib/FramerMotionVariants';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='pt-16 lg:pt-20'>
      <Title title='Contact' subtitle="Let's connect" />
      <div className='relative'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='md:ml-4'>
            <div>
              <AnimatedText
                variants={PopUpFromBottom}
                className='text-md font-semibold text-gray-800 dark:text-gray-300 md:text-lg lg:text-xl'
              >
                Get In Touch
              </AnimatedText>
              <AnimatedText
                variants={PopUpFromBottom}
                className='mt-2 text-sm font-light text-gray-700 dark:text-gray-400 md:text-base'
              >
                I{"'"}m always open to new projects and opportunities. Whether
                you
                {"'"}re a company looking to hire or you{"'"}re just looking to
                chat, I{"'"}d love to hear from you.
              </AnimatedText>
            </div>
            {/* Info */}
            <div className='mt-8 mb-6 inline-flex flex-col space-y-4'>
              <Link
                href='mailto:mn.minhtungo@gmail.com'
                className='flex flex-row items-center space-x-4 hover:text-blue-500'
              >
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 dark:bg-transparent-white'>
                  <MdOutlineEmail className='h-4 w-4 ' />
                </div>
                <p className='text-sm font-light text-gray-800 dark:text-gray-300'>
                  mn.minhtungo@gmail.com
                </p>
              </Link>
              <Link
                href='tel:613-453-6449'
                className='flex flex-row items-center space-x-4 hover:text-blue-500'
              >
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 dark:bg-transparent-white'>
                  <MdOutlinePhone className='h-4 w-4' />
                </div>
                <p className='text-sm font-light text-gray-800 dark:text-gray-300'>
                  613-453-6449
                </p>
              </Link>
            </div>
            {/* Info */}

            {/* Social */}
            <div className='ml-2 flex flex-row items-center space-x-4'>
              <Icon>
                <Link
                  href='https://github.com/minhtungo'
                  className='text-gray-600 dark:text-gray-400 '
                  target='_blank'
                >
                  <FiGithub className='h-5 w-5 hover:text-blue-500' />
                </Link>
              </Icon>
              <Icon>
                <Link
                  href='https://www.linkedin.com/in/minhtungo/'
                  className='text-gray-600 dark:text-gray-400 '
                  target='_blank'
                >
                  <FiLinkedin className='h-5 w-5 hover:text-blue-500' />
                </Link>
              </Icon>
            </div>
            {/* Social */}
          </div>
          <ContactForm />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
export default Contact;
