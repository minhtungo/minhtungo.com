import Image from 'next/image';

import Title from '@/components/common/Title';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
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
      <div className='mt-6 text-center'>
        <Link
          className={cn(
            buttonVariants({
              variant: 'default',
            })
          )}
          href='/contact'
        >
          Say Hello
        </Link>
      </div>
    </div>
  );
};
export default LetConnect;
