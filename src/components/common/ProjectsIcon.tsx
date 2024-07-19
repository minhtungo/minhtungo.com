import { Link } from '@/components/ui';
import mergeClassNames from '@/lib/mergeClassNames';
import { FC } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectsIconProps {
  githubURL: string;
  liveURL?: string;
  className?: string;
}

const ProjectsIcon: FC<ProjectsIconProps> = ({ githubURL, liveURL, className }) => {
  return (
    <div className={mergeClassNames('flex items-center gap-[10px] text-blue-500 dark:text-blue-400', className)}>
      <Link href={githubURL}>
        <FiGithub className='h-4 w-4 hover:text-blue-500 md:h-[18px] md:w-[18px]' />
        <span className='sr-only'>Link to Github</span>
      </Link>
      {liveURL && (
        <Link href={liveURL}>
          <FiExternalLink className='h-4 w-4 hover:text-blue-500 md:h-[18px] md:w-[18px]' />
          <span className='sr-only'>Link to live website</span>
        </Link>
      )}
    </div>
  );
};

export default ProjectsIcon;
