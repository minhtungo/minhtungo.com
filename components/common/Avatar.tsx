import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

const Avatar = ({
  className,
  isMobile,
  width,
  height,
}: {
  className?: string;
  width: number;
  height: number;
  isMobile?: boolean;
}) => {
  return (
    <span>
      <div
        className={classNames(
          'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-[1.5px] w-full rounded-full animate-border',
          !isMobile && 'hidden lg:inline-flex',
          isMobile && 'inline-flex lg:hidden'
        )}
      >
        <Image
          src='/static/images/avatar.png'
          alt='Avatar'
          height={50}
          width={50}
          className={classNames(
            'rounded-full bg-blue-200 dark:bg-gray-700',
            className,
            `w-${width} h-${height}`
          )}
        />
      </div>
    </span>
  );
};

export default Avatar;
