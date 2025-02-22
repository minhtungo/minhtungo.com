import StyledCard from '@/components/StyledCard';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Typography from '@/components/ui/typography';
import { EXPERIENCES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { FC } from 'react';

interface ExperienceProps {
  className?: string;
}

const Experience: FC<ExperienceProps> = ({ className }) => {
  return (
    <ul className={cn('space-y-3 group/list', className)}>
      {EXPERIENCES.map(({ title, description, company, location, time, techs, href }, index) => (
        <li key={`${title}-experience-${index}`}>
          <StyledCard className='grid sm:grid-cols-9 gap-y-2' href={href} title={title}>
            <header
              className='text-xs text-muted-foreground font-medium tracking-tight sm:col-span-2 mt-1.5 space-y-1.5'
              aria-label={time}
            >
              <div className='uppercase'>{time}</div>
              <div>{location}</div>
            </header>
            <div className='sm:col-span-7'>
              <Typography variant='h5' tag='h3'>
                <div className='inline-flex gap-x-1 items-center font-medium leading-tight text-foreground text-base group-hover:text-primary'>
                  <div>
                    {title} · {company}
                  </div>
                  <ArrowUpRight className='size-3 duration-200 text-foreground group-hover:-translate-y-[2px] group-hover:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 shrink-1 translate-y-px' />
                </div>
              </Typography>
              <Typography className='text-sm text-muted-foreground mt-1 mb-3'>{description}</Typography>
              <ul className='flex flex-wrap gap-1.5' aria-label='Technologies used'>
                {techs.map((tech) => (
                  <li key={`${tech}-experience-tech`}>
                    <Badge variant='secondary'>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </StyledCard>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
