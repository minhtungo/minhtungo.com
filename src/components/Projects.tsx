'use client';

import AnimatedContainer from '@/components/common/AnimatedContainer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Typography from '@/components/ui/typography';
import { Project, PROJECTS } from '@/lib/constants';
import { FadeContainer, PopUpFromBottom } from '@/lib/motion';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const ProjectItem = ({ project: { title, description, href, techs, imageHref } }: { project: Project }) => {
  return (
    <div className='relative transition-all group h-full'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute hover:!bg-transparent duration-200 ease-in w-full h-full inset-0 z-10 lg:group-hover/list:bg-card/40 p-4 pb-6'
        arial-label={`Check out the ${title} project`}
      />
      <Card className='px-3.5 pt-2.5 pb-3.5 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 duration-200 ease-in group-hover:bg-accent/25 group-hover:shadow-lg gap-y-3 gap-x-4 h-full'>
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
      </Card>
    </div>
  );
};

const Projects = ({ start = 0, end = PROJECTS.length }: { start?: number; end?: number }) => {
  const projects = PROJECTS.slice(start, end);

  return (
    <AnimatedContainer variants={FadeContainer} className='grid lg:grid-cols-2 gap-3 group/list' list>
      {projects?.map((project) => (
        <motion.li variants={PopUpFromBottom} key={`${project.title}-project-card`}>
          <ProjectItem project={project} />
        </motion.li>
      ))}
    </AnimatedContainer>
  );
};

export default Projects;
