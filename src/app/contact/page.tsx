import Contact from '@/components/contact/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return <Contact />;
}
