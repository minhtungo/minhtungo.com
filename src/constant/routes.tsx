import { Computer, Library, MessageCircle, Projector, User } from 'lucide-react';

export const HEADER_LINKS = [
  // { href: '/', label: 'Home' },
  { href: '/about', label: 'About', icon: <User className='size-4' /> },
  { href: '/projects', label: 'Projects', icon: <Projector className='size-4' /> },
  { href: '/library', label: 'Library', icon: <Library className='size-4' /> },
  { href: '/uses', label: 'Uses', footer: true, icon: <Computer className='size-4' /> },
  { href: '/guestbook', label: 'Guestbook', icon: <MessageCircle className='size-4' /> },
];
