import { SOCIAL_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

interface SocialIconProps {
  className?: string;
}

const SocialIcons: FC<SocialIconProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-3 text-muted-foreground', className)}>
      {SOCIAL_INFO.map(({ icon, href, text }) => {
        return (
          <Link href={href} className='flex flex-row items-center space-x-4 hover:text-primary'>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-muted'>{icon}</div>
            <p className='text-sm text-muted-foreground'>{text}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
