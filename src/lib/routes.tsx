import { RESUME_HREF } from '@/lib/constants';
import { Computer, FileText, Library, MessageCircle, Projector, User } from 'lucide-react';

export const HEADER_LINKS = [
  { href: '/about', label: 'About', icon: <User className='size-5' /> },
  { href: '/projects', label: 'Projects', icon: <Projector className='size-5' /> },
  { href: '/archive', label: 'Library', icon: <Library className='size-5' /> },
  { href: '/uses', label: 'Uses', footer: true, icon: <Computer className='size-5' /> },
  { href: '/guestbook', label: 'Guestbook', icon: <MessageCircle className='size-5' /> },
];

export const MOBILE_HEADER_LINKS = [
  { href: '/about', label: 'About', icon: <User className='size-5' /> },
  { href: '/projects', label: 'Projects', icon: <Projector className='size-5' /> },
  { href: '/archive', label: 'Library', icon: <Library className='size-5' /> },
  { href: '/uses', label: 'Uses', footer: true, icon: <Computer className='size-5' /> },
  { href: '/guestbook', label: 'Guestbook', icon: <MessageCircle className='size-5' /> },
  { href: RESUME_HREF, label: 'Resume', icon: <FileText className='size-5' /> },
];
