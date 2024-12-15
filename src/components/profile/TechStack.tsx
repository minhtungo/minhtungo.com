import Typography from '@/components/ui/typography';
import Marquees from '../Marquees';
import { FAVORITE_TECHS } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TechStack = () => {
  return (
    <>
      <Typography variant='h3' className='mb-2'>
        Some Technologies I Have Used Recently
      </Typography>
      <TooltipProvider delayDuration={100}>
        <div className='w-[88vw] max-w-[1224px] overflow-x-hidden mx-auto h-[70px]'>
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
    </>
  );
};
export default TechStack;
