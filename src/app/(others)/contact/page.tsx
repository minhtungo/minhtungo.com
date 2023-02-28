// @ts-nocheck

import { Contact } from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Minh Tu Ngo',
  description: 'List of tools and technologies that I use everyday.',
};

export default function ContactPage() {
  return <Contact />;
}
