import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Avatar = ({ className }: { className?: string }) => {
  return (
    <span>
      <div
        className={cn(
          'hidden md:inline-flex primary-gradient w-full animate-border rounded-full bg-[length:400%_400%] p-[1.5px]',
          className
        )}
      >
        <Image src='/static/images/avatar.png' alt='Avatar' fill className='rounded-full' />
      </div>
    </span>
  );
};

export default Avatar;
