import PageTitle from '@/components/common/PageTitle';
import type { Metadata } from 'next';
import Link from 'next/link';

import SocialIcons from '@/components/common/SocialIcons';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className='relative max-w-5xl mx-auto'>
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
