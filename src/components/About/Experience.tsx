import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Typography from '@/components/ui/typography';
import { EXPERIENCES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface ExperienceProps {
  className?: string;
}

const Experience: FC<ExperienceProps> = ({ className }) => {
  return (
    <ul className={cn('space-y-2 group/list', className)}>
      {EXPERIENCES.map(({ title, description, company, location, time, techs, href }) => (
        <li key={`${title}-experience`} className='relative transition-all group'>
          <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute hover:!bg-transparent duration-200 ease-in w-full h-full inset-0 z-10 group-hover/list:bg-card/40 p-4 pb-6'
          />
          <Card className='p-4 pb-6 grid sm:grid-cols-9 shadow-none duration-200 ease-in group-hover:bg-accent/10 group-hover:shadow-lg gap-y-2'>
            <header
              className='text-xs text-muted-foreground font-medium tracking-tight sm:col-span-2 mt-1.5 space-y-1.5'
              aria-label={time}
            >
              <div className='uppercase'>{time}</div>
              <div>{location}</div>
            </header>
            <div className='sm:col-span-7 space-y-2.5'>
              <Typography variant='h5' tag='h3'>
                <div>
                  <Link
                    href={href}
                    className='inline-flex gap-x-1 items-center font-medium leading-tight text-foreground text-base group-hover:text-primary'
                  >
                    <div>
                      {title} · {company}
                    </div>
                    <ArrowUpRight className='size-3 duration-200 text-foreground group-hover:-translate-y-[2px] group-hover:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 shrink-1 translate-y-px' />
                  </Link>
                </div>
              </Typography>
              <Typography className='text-sm text-muted-foreground'>{description}</Typography>
              <ul className='flex flex-wrap gap-1.5' aria-label='Technologies used'>
                {techs.map((tech) => (
                  <li key={`${tech}-experience-tech`}>
                    <Badge variant='secondary'>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
