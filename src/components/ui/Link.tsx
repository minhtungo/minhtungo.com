'use client';

import NextLink from 'next/link';
import { FC } from 'react';
import mergeClassNames from '@/lib/mergeClassNames';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  animation?: boolean;
}

const Link: FC<LinkProps> = ({
  href,
  children,
  className,
  animation = false,
}) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        arial-label={`Link to ${href}`}
        className={mergeClassNames(
          className,
          animation &&
            'before:primary-gradient relative before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100'
        )}
      >
        {children}
      </NextLink>
    );
  }

  if (isAnchorLink) {
    return (
      <a
        href={href}
        arial-label={`Link to ${href}`}
        className={mergeClassNames(
          className,
          animation &&
            'before:primary-gradient relative before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100'
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      target='_blank'
      arial-label={`Link to ${href}`}
      rel='noopener noreferrer'
      href={href}
      className={mergeClassNames(
        className,
        animation &&
          'before:primary-gradient relative before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100'
      )}
    >
      {children}
    </a>
  );
};

export default Link;
