import Image from 'next/image';
import Link from 'next/link';

import SocialIcons from '@/components/common/SocialIcons';
import Title from '@/components/common/Title';
import Typography from '@/components/ui/typography';
import { CONTACT_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ContactForm from './ContactForm';

const Contact = ({ home }: { home?: boolean }) => {
  return (
    <div className={cn('relative', home && 'pt-16 lg:pt-20')}>
      <Image className='absolute left-0 top-4 mx-auto h-auto w-auto animate-pulse sm:left-[10%] md:left-[15%] lg:left-[27.5%]' src='/static/images/sparkles.svg' alt='sparkles' width={60} height={60} />
      <Title title='Get In Touch' subtitle="Let's connect" />
      <div className='relative'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <Typography className='text-sm md:text-base'>
              `I{"'"}m always open to new projects and opportunities. Whether you
              {"'"}re a company looking to hire or you{"'"}re just looking to chat, I{"'"}d love to hear from you.`
            </Typography>
            <div className='mt-8 mb-6 inline-flex flex-col space-y-4'>
              {CONTACT_INFO.map(({ icon, href, text }) => {
                return (
                  <Link href={href} className='flex flex-row items-center space-x-4 hover:text-primary'>
                    <div className='flex h-9 w-9 items-center justify-center rounded-full bg-muted'>{icon}</div>
                    <p className='text-sm text-muted-foreground'>{text}</p>
                  </Link>
                );
              })}
            </div>
            <SocialIcons className='ml-2' />
          </div>
          <ContactForm className={'mt-2 md:-mt-3'} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
