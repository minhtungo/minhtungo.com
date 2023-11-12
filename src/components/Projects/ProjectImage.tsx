import { Image } from '@/components/ui';
import mergeClassNames from '@/lib/mergeClassNames';

interface ProjectImageProps {
  src: string;
  name: string;
  url: string;
  className?: string;
}

const ProjectImage = ({ src, name, className = '', url }: ProjectImageProps) => {
  return (
    <a className={mergeClassNames('group relative -mt-[30%] w-[100%] shrink-0 overflow-hidden rounded-t-lg rounded-b-none shadow-2xl before:absolute before:inset-0 before:z-10 before:bg-black/20 sm:-mt-4 md:mt-0 md:w-[60%] lg:rounded-lg', className)} href={url} target='_blank' rel='noreferrer'>
      <Image title={name} alt={name} src={src} width={800} height={400} className='h-full w-full object-cover backdrop-blur-xl lg:inline-block' />
    </a>
  );
};

export default ProjectImage;
