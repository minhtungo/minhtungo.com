import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import Button from '@/components/common/Button';

const ProfileCard = () => {
  return (
    <div className=' max-w-sm overflow-hidden shadow-md rounded-xl  bg-card-background-light dark:text-gray-100 dark:bg-card-background-dark mx-auto w-full pb-4'>
      <a href='https://tenor.com/bCgDy.gif' target='_blank' rel='noreferrer'>
        <Image
          src='/static/images/astronaut.gif'
          className='w-full h-32 object-cover'
          alt='astronaut playing'
          height={500}
          width={500}
          data-credit="GIF courtesy of Author's Dudun from https://tenor.com/bCgDy.gif"
        />
      </a>

      <div className='flex justify-center -mt-8'>
        <a
          href='https://www.linkedin.com/in/minhtungo/'
          target='_blank'
          rel='noreferrer'
        >
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-[2px] w-full rounded-full -mt-3 animate-border'>
            <Image
              src='/static/images/avatar.png'
              alt='Avatar'
              height={150}
              width={150}
              className='w-24 h-24 md:w-[4.6rem] md:h-[4.6rem] rounded-full bg-blue-200 dark:bg-gray-700 '
            />
          </div>
        </a>
      </div>
      <div className='text-center px-3 pb-4 pt-2 space-y-1'>
        <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200 '>
          Minh Tu Ngo
        </h2>
        <p className='text-sm text-blue-500'>
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
      <div className='space-y-4 divide-y divide-custom-border-black dark:divide-transparent-white w-full'>
        <div className='flex space-x-3 items-center justify-center'>
          <Button
            href='mailto:mn.minhtungo@gmail.com'
            className='w-full flex-1'
          >
            Message
          </Button>
          <Button
            href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            variant='secondary'
            newTab
            className='w-full flex-1'
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
