'use client';

import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { EMAIL_ADDRESS, RESUME_HREF } from '@/lib/constants';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import astronaut from '/public/static/images/astronaut.gif';

import { TypeAnimation } from 'react-type-animation';

const ProfileCard = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn('rounded-lg border bg-muted/[0.075] border-border/50 text-card-foreground shadow-sm', className)}
      initial='hidden'
      whileInView='visible'
      variants={PopUpFromBottom}
    >
      <Link href='https://tenor.com/bCgDy.gif' target='_blank' rel='noopener noreferrer'>
        {/* "GIF courtesy of Author's Dudun from https://tenor.com/bCgDy.gif" */}
        <Image
          src={astronaut}
          className='h-32 w-full object-cover rounded-lg'
          alt='astronaut playing'
          data-credit="GIF courtesy of Author's Dudun from https://tenor.com/bCgDy.gif"
        />
      </Link>
      <Card className='p-6 pt-0'>
        <div className='-mt-8 flex justify-center'>
          <Link href='https://linkedin.com/in/minhtungo/' target='_blank' rel='noopener noreferrer'>
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
          <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200 '>Minh Tu Ngo</h2>
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            <TypeAnimation
              cursor={true}
              speed={65}
              sequence={['Web Developer', 1000, 'Frontend Developer', 1000, 'Passionate', 1000, '']}
              wrapper='span'
              repeat={Infinity}
            />
          </p>
        </div>
        <div className='w-full space-y-4 divide-y divide-custom-border-black dark:divide-transparent-white'>
          <div className='flex items-center justify-center space-x-3'>
            <a
              href={RESUME_HREF}
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex gap-x-1 items-center')}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FileText className='size-4' />
              Resume
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex gap-x-1 items-center')}
            >
              <Mail className='size-4' />
              Message
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
