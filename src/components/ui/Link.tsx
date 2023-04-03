'use client';

import NextLink from 'next/link';
import { FC } from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ href, children, className }) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        arial-label={`Link to ${href}`}
        className={className}
      >
        {children}
      </NextLink>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} arial-label={`Link to ${href}`} className={className}>
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
      className={className}
    >
      {children}
    </a>
  );
};

export default Link;
