import PageTitle from '@/components/common/PageTitle';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SocialIcons from '@/components/common/SocialIcons';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import sparkles from '/public/static/images/sparkles.svg';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className='relative max-w-4xl mx-auto'>
      <Image
        className='absolute left-0 top-0 mx-auto h-auto w-auto animate-pulse sm:left-[10%] md:left-[15%] lg:left-[27.5%] select-none'
        src={sparkles}
        alt='sparkles'
      />
      <PageTitle
        title='Get In Touch'
        subtitle="Thank you for your visit! I'm always open to new projects and opportunities. Whether you're a company looking to hire or you're just looking to chat, I'd love to hear from you."
      />
      <div className='grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-3 mt-14'>
        <div className='space-y-4 sm:col-span-1'>
          {CONTACT_INFO.map(({ icon, href, text }) => {
            return (
              <Link href={href} className='flex items-center gap-x-2 hover:text-primary text-sm text-muted-foreground'>
                {icon}
                {text}
              </Link>
            );
          })}
          <SocialIcons />
        </div>
        <ContactForm className='sm:col-span-2' />
      </div>
    </div>
  );
}
