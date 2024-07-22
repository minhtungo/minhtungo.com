'use client';

import { Div } from '@/components/FramerMotion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Typography from '@/components/ui/typography';
import { Project } from '@/lib/constants';
import { FadeContainer, PopUpFromBottom } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ project: { title, description, href, techs, imageHref } }: { project: Project }) => {
  return (
    <div className='relative transition-all group'>
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute hover:!bg-transparent duration-200 ease-in w-full h-full inset-0 z-10 group-hover/list:bg-card/40 p-4 pb-6'
      />
      <Card className='p-4 grid sm:grid-cols-3 duration-200 ease-in group-hover:bg-accent/10 group-hover:shadow-lg gap-y-2 gap-x-4'>
        <div className='sm:col-span-1 mt-2'>
          <Image src={imageHref} alt={title} width={400} height={400} className='object-cover rounded-lg' />
        </div>
        <div className='sm:col-span-2 space-y-2.5'>
          <Typography variant='h5' tag='h3'>
            <div className='inline-flex gap-x-1 items-center font-medium leading-tight text-base group-hover:text-primary'>
              <div>{title}</div>
              <ArrowUpRight className='size-3 duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 shrink-1 translate-y-px' />
            </div>
          </Typography>
          <Typography className='text-sm text-muted-foreground'>{description}</Typography>
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

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Div variants={FadeContainer} className='grid sm:grid-cols-2 gap-3 group/list' list>
      {projects?.map((project) => (
        <motion.li variants={PopUpFromBottom} key={`${project.title}-project-card`}>
          <ProjectItem project={project} />
        </motion.li>
      ))}
    </Div>
  );
};

export default Projects;
