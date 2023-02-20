import Image from '@/components/common/Image';
import { TypeAnimation } from 'react-type-animation';
import { RiFileCodeLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';

import astronaut from 'public/static/images/astronaut.gif';

import Button from '@/components/common/Button';
import Link from '@/components/common/Link';

const ProfileCard = () => {
  return (
    <div className='mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-card-background-light pb-4 shadow-md dark:bg-card-background-dark dark:text-gray-100'>
      <Link href='https://tenor.com/bCgDy.gif' animation={false}>
        {/* "GIF courtesy of Author's Dudun from https://tenor.com/bCgDy.gif" */}
        <Image
          src={astronaut}
          className='h-32 w-full object-cover'
          alt='astronaut playing'
          height={200}
          width={600}
          data-credit="GIF courtesy of Author's Dudun from https://tenor.com/bCgDy.gif"
        />
      </Link>

      <div className='-mt-8 flex justify-center'>
        <Link href='https://linkedin.com/in/minhtungo/' animation={false}>
          <div className='primary-gradient z-50 -mt-3 w-full animate-border rounded-full bg-gradient-to-r bg-[length:400%_400%] p-[2px]'>
            <Image
              src='/static/images/avatar.png'
              alt='Avatar'
              height={96}
              width={96}
              className='h-24 w-24 rounded-full bg-blue-200 dark:bg-gray-700 md:h-[4.6rem] md:w-[4.6rem]'
            />
          </div>
        </Link>
      </div>
      <div className='space-y-1 px-3 pb-4 pt-2 text-center'>
        <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200 '>
          Minh Tu Ngo
        </h2>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
          <TypeAnimation
            cursor={true}
            speed={65}
            sequence={[
              'Web Developer',
              1000,
              'Frontend Developer',
              1000,
              'Passionate',
              1000,
              '',
            ]}
            wrapper='span'
            repeat={Infinity}
          />
        </p>
      </div>
      <div className='w-full space-y-4 divide-y divide-custom-border-black dark:divide-transparent-white'>
        <div className='flex items-center justify-center space-x-3'>
          <Button
            href='mailto:mn.minhtungo@gmail.com'
            className='w-full flex-1'
          >
            <span className='flex items-center'>
              <MdOutlineEmail className='mr-1 mt-[1px] h-4 w-4' />
              Message
            </span>
          </Button>
          <Button
            href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            variant='secondary'
            className='w-full flex-1'
          >
            <span className='flex items-center'>
              <RiFileCodeLine className='mr-1 mt-[1px] h-4 w-4' />
              Resume
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
