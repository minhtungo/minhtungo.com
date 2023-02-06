import Image from 'next/image';
import IconHelper from '../components/common/IconHelper';
import * as React from 'react';

export const renderTech = (tool: string, className = 'w-4 h-4') => {
  switch (tool) {
    case 'NextJS':
      return (
        <Image
          src={`/static/images/stack/next.svg`}
          height={20}
          width={20}
          className={className}
          alt={tool}
        />
      );
    case 'Sanity':
      return (
        <Image
          src={`/static/images/stack/sanity.webp`}
          height={20}
          width={20}
          className={className}
          alt={tool}
        />
      );
    case 'Styled-Components':
      return (
        <Image
          src={`/static/images/stack/styled-components.png`}
          height={20}
          width={20}
          className={className}
          alt={tool}
        />
      );
    case 'tRPC':
      return (
        <Image
          src={`/static/images/stack/trpc.png`}
          height={20}
          width={20}
          className={className}
          alt={tool}
        />
      );
    default:
      return <IconHelper type={tool} className={className} />;
  }
};
