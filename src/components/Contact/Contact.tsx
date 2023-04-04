import { Title } from '@/components/ui';
import { Text } from '@/components/ui/FramerMotion';
import { PopUpFromBottom } from '@/lib/framerVariants';
import mergeClassNames from '@/lib/mergeClassNames';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

import { SocialIcons } from '../ui';
import ContactForm from './ContactForm';

const Contact = ({ home }: { home?: boolean }) => {
  return (
    <div className={mergeClassNames('relative', home && 'pt-16 lg:pt-20')}>
      <Image
        className='absolute left-0 top-4 mx-auto h-auto w-auto animate-pulse sm:left-[10%] md:left-[15%] lg:left-[27.5%]'
        src='/static/images/sparkles.svg'
        alt='sparkles'
        width={60}
        height={60}
      />
      <Title
        title={home ? 'Get In Touch' : 'Contact'}
        subtitle={home ? '' : "Let's connect"}
        home={home}
        className={home ? '!mb-6' : 'lg:!mb-3'}
      />
      <div className='relative'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <div>
              <Text
                variants={PopUpFromBottom}
                className='text-sm font-light text-gray-700 dark:text-gray-400 md:text-base'
              >
                I{"'"}m always open to new projects and opportunities. Whether
                you
                {"'"}re a company looking to hire or you{"'"}re just looking to
                chat, I{"'"}d love to hear from you.
              </Text>
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

            <SocialIcons className='ml-2' />
          </div>
          <ContactForm className={'mt-2 md:-mt-3'} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
