import Image from 'next/image';

import Title from '@/components/common/Title';
import { buttonVariants } from '@/components/ui/Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { EMAIL_ADDRESS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import sparkles from '/public/static/images/sparkles.svg';

const LetConnect = () => {
  return (
    <div className='relative'>
      <Image
        className='absolute left-0 top-4 mx-auto h-auto w-auto animate-pulse sm:left-[10%] md:left-[15%] lg:-translate-y-1/2 lg:left-[27.5%] select-none'
        src={sparkles}
        alt='sparkles'
      />
      <Title
        title='Get In Touch'
        subtitle="Let's connect"
        description={`I'm always open to new projects and opportunities. Whether you're a company looking to hire or you're just looking to chat, I'd love to hear from you.`}
      />
      <TooltipProvider delayDuration={100}>
        <div className='mt-6 text-center'>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                className={cn(
                  buttonVariants({
                    variant: 'default',
                  })
                )}
                href={`mailto:${EMAIL_ADDRESS}`}
              >
                Say Hello
              </a>
            </TooltipTrigger>
            <TooltipContent>{EMAIL_ADDRESS}</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};
export default LetConnect;
