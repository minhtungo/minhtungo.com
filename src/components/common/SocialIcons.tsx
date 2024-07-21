import { SOCIAL_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

interface SocialIconProps {
  className?: string;
}

const SocialIcons: FC<SocialIconProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIAL_INFO.map(({ icon, href, text }) => {
        return (
          <Link href={href} className='text-sm text-muted-foreground flex items-center gap-x-3 hover:text-primary'>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
