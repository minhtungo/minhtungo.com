'use client';

import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from 'kbar';
import { FC } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FiGithub, FiLinkedin, FiYoutube, FiSun, FiMoon } from 'react-icons/fi';
import { RiFileCodeLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

import Results from './Results';

interface KBarProps {
  children: React.ReactNode;
}

const KBar: FC<KBarProps> = ({ children }) => {
  const { setTheme } = useTheme();
  const actions: Action[] = [
    {
      id: 'resume',
      name: 'Resume',
      keywords: 'resume',
      perform: () =>
        window.open(
          'https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view',
          '_blank'
        ),
      icon: <RiFileCodeLine className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
    {
      id: 'source',
      name: 'Source',
      keywords: 'source code',
      perform: () =>
        window.open('https://github.com/minhtungo/minhtungo.com', '_blank'),
      icon: <BiCodeAlt className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
    {
      id: 'light-mode',
      name: 'Light',
      keywords: 'light mode',
      section: 'Theme',
      perform: () => setTheme('light'),
      icon: <FiSun className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
    {
      id: 'dark-mode',
      name: 'Dark',
      keywords: 'dark mode',
      section: 'Theme',
      perform: () => setTheme('dark'),
      icon: <FiMoon className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
    {
      id: 'github',
      name: 'Github',
      keywords: 'github',
      section: 'Links',
      perform: () => window.open('https://github.com/minhtungo', '_blank'),
      icon: <FiGithub className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      keywords: 'linkedin',
      section: 'Links',
      perform: () =>
        window.open('https://www.linkedin.com/in/minhtungo', '_blank'),
      icon: <FiLinkedin className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
    {
      id: 'youtube',
      name: 'Youtube',
      keywords: 'youtube',
      section: 'Links',
      perform: () =>
        window.open('https://www.youtube.com/@mn.minhtungo', '_blank'),
      icon: <FiYoutube className='h-5 w-5 sm:h-[22px] sm:w-[22px]' />,
    },
  ];
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className='z-50 bg-black/10 backdrop-blur'>
          <KBarAnimator className='w-full max-w-lg rounded-lg border border-custom-border-black bg-slate-50 dark:border-transparent-white dark:bg-neutral-900'>
            <KBarSearch
              className='w-full bg-transparent py-3 px-6 outline-none'
              defaultPlaceholder='Type to search...'
            />
            <Results />
            <div className='h-2'></div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default KBar;
