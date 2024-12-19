import StyledCard from '@/components/StyledCard';
import { Badge } from '@/components/ui/badge';
import Typography from '@/components/ui/typography';
import { Project } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const ProjectItem = ({ project: { title, description, href, techs, imageHref } }: { project: Project }) => {
  console.log('ProjectItem running heree-----------');
  return (
    <StyledCard className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-y-4 gap-x-3' title={title} href={href}>
      <div className='md:col-span-2 lg:col-span-1 mt-2'>
        <Image
          src={imageHref}
          alt={title}
          width={800}
          height={400}
          className='object-cover rounded-lg max-w-full border'
        />
      </div>
      <div className='md:col-span-3 lg:col-span-2'>
        <Typography variant='h5' tag='h3'>
          <div className='inline-flex gap-x-1 items-center font-medium leading-tight text-base group-hover:text-primary'>
            <div>{title}</div>
            <ArrowUpRight className='size-3 duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 shrink-1 translate-y-px' />
          </div>
        </Typography>
        <Typography className='text-sm text-muted-foreground mb-2.5 mt-[2px]'>{description}</Typography>
        <ul className='flex flex-wrap gap-1.5' aria-label='Technologies used'>
          {techs.map((tech) => (
            <li key={`${title}-${tech}-project-tech`}>
              <Badge variant='secondary'>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </StyledCard>
  );
};

export default ProjectItem;
