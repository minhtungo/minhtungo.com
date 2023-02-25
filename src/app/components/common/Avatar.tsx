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
  width: number | string;
  height: number | string;
  isMobile?: boolean;
}) => {
  let widthClass = '';
  let heightClass = '';

  if (typeof width === 'number') {
    widthClass = `w-${width}`;
  } else if (typeof width === 'string') {
    if (width.includes('px')) {
      widthClass = `w-[${width}]`;
    } else {
      widthClass = `w-[${width}px]`;
    }
  }

  if (typeof height === 'number') {
    heightClass = `w-${height}`;
  } else if (typeof height === 'string') {
    if (height.includes('px')) {
      heightClass = `w-[${height}]`;
    } else {
      heightClass = `w-[${height}px]`;
    }
  }

  return (
    <span>
      <div
        className={classNames(
          'primary-gradient w-full animate-border rounded-full bg-[length:400%_400%] p-[1.5px]',
          !isMobile && 'hidden md:inline-flex',
          isMobile && 'flex md:hidden',
          className
        )}
      >
        <Image
          src='/static/images/avatar.png'
          alt='Avatar'
          height={50}
          width={50}
          className={classNames(
            'rounded-full bg-blue-200 dark:bg-gray-700',
            widthClass,
            heightClass
          )}
        />
      </div>
    </span>
  );
};

export default Avatar;
