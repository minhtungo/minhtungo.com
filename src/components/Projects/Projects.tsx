import { cn } from '@/lib/utils';

interface ProjectsProp {
  isHome?: boolean;
}

const Projects = async ({ isHome }: ProjectsProp) => {
  return (
    <div className={cn(isHome && 'pt-16 lg:pt-20')}>
      {/* <Title title='Projects' subtitle={isHome ? '' : 'Showcase of my works on web development.'} home={isHome} />

      <div className='mx-auto -mt-2 grid grid-cols-1 gap-6 sm:gap-4 lg:-mt-9'>{projects?.map((project) => <ProjectItem project={project} key={project._id} />)}</div>
      <div className='mt-6 text-center lg:mt-12'>
        <ViewMoreButton href={isHome ? '/projects' : '/library'} />
      </div> */}
    </div>
  );
};

export default Projects;
