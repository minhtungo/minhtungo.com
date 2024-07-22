import Typography from '@/components/ui/typography';
import Marquees from '../common/Marquees';
import { FAVORITE_TECHS } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TechStack = () => {
  return (
    <div>
      <Typography variant='h3' className='mb-2'>
        Some Technologies I Have Used Recently
      </Typography>
      <TooltipProvider delayDuration={100}>
        <div className='w-[90vw] max-w-[1096px] overflow-x-hidden mx-auto'>
          <Marquees className='pt-8'>
            {FAVORITE_TECHS.map(({ name, icon }) => (
              <div key={`${name}-tech-stack`} className='px-4 lg:px-6'>
                <Tooltip>
                  <TooltipTrigger>{icon}</TooltipTrigger>
                  <TooltipContent className='px-2.5 py-1 text-xs'>{name}</TooltipContent>
                </Tooltip>
              </div>
            ))}
          </Marquees>
        </div>
      </TooltipProvider>
    </div>
  );
};
export default TechStack;
