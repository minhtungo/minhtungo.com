import { SOCIAL_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SocialIconProps {
  className?: string;
}

const SocialIcons: FC<SocialIconProps> = ({ className }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className={cn('flex items-center gap-3', className)}>
        {SOCIAL_INFO.map(({ icon, href, text }) => {
          return (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  className='text-sm text-muted-foreground flex items-center gap-x-2 hover:text-primary'
                >
                  {icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>{text}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default SocialIcons;
