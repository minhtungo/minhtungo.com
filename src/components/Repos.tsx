'use client';

import AnimatedContainer from '@/components/common/AnimatedContainer';
import StyledCard from '@/components/StyledCard';
import { Badge } from '@/components/ui/badge';
import Typography from '@/components/ui/typography';
import { REPOS, type Repo } from '@/lib/constants';
import { FadeContainer, PopUpFromBottom } from '@/lib/motion';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';

const RepoItem = ({ repo: { title, description, href, techs } }: { repo: Repo }) => {
  return (
    <StyledCard title={title} href={href}>
      <Typography variant='h5' tag='h3'>
        <div className='inline-flex gap-x-2 items-center font-medium leading-tight text-base ease-in duration-150 group-hover:text-primary'>
          <Folder className='size-5' />
          <div>{title}</div>
        </div>
      </Typography>
      <Typography className='text-sm text-muted-foreground mb-2.5 mt-[2px]'>{description}</Typography>
      <ul className='flex flex-wrap gap-1.5' aria-label='Technologies used'>
        {techs.map((tech) => (
          <li key={`${title}-${tech}-repo-tech`}>
            <Badge variant='secondary'>{tech}</Badge>
          </li>
        ))}
      </ul>
    </StyledCard>
  );
};

interface ReposProps {
  start?: number;
  end?: number;
}

const Repos = ({ start = 0, end = REPOS.length }: ReposProps) => {
  const repos = REPOS.slice(start, end);

  return (
    <AnimatedContainer
      variants={FadeContainer}
      className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 group/list'
      list
    >
      {repos?.map((repo) => (
        <motion.li variants={PopUpFromBottom} key={`${repo.title}-repo-card`}>
          <RepoItem repo={repo} />
        </motion.li>
      ))}
    </AnimatedContainer>
  );
};

export default Repos;
