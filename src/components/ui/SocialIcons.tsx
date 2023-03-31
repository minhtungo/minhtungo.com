import { Link } from '@/components/common';
import mergeClassNames from '@/lib/mergeClassNames';
import { FC } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

interface SocialIconProps {
  className?: string;
}

const SocialIcons: FC<SocialIconProps> = ({ className }) => {
  return (
    <div
      className={mergeClassNames(
        'flex items-center gap-3 text-gray-600 dark:text-gray-400',
        className
      )}
    >
      <Link href='https://github.com/minhtungo' animation={false}>
        <FiGithub className='h-5 w-5 hover:text-blue-500' />
        <span className='sr-only'>My Github account</span>
      </Link>

      <Link href='https://linkedin.com/in/minhtungo/' animation={false}>
        <FiLinkedin className='h-5 w-5 hover:text-blue-500' />
        <span className='sr-only'>My LinkedIn account</span>
      </Link>
    </div>
  );
};

export default SocialIcons;
