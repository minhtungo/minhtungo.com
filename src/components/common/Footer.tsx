import Container from '@/components/common/Container';
import NowPlaying from '@/components/common/NowPlaying';
import SocialIcons from '@/components/common/SocialIcons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { USED_TECHS } from '@/lib/constants';

const Footer = () => {
  return (
    <Container tag='footer' className='mt-16 space-y-5 pb-6'>
      <div className='flex gap-y-3 border-t border-border/50 pt-4 flex-col-reverse sm:flex-row items-center sm:justify-between'>
        <NowPlaying />
        <SocialIcons />
      </div>
      <div className='flex gap-y-3 flex-col-reverse sm:flex-row items-center sm:justify-between'>
        <div className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} Minh Tu Ngo. All rights reserved.
        </div>

        <TooltipProvider delayDuration={100}>
          <div className='flex items-center gap-3'>
            {USED_TECHS.map(({ name, icon }) => {
              return (
                <Tooltip key={`tech-used-${name}`}>
                  <TooltipTrigger>{icon}</TooltipTrigger>
                  <TooltipContent>{name}</TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </Container>
  );
};

export default Footer;
