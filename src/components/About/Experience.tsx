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
        <li key={`${title}-experience`} className='relative transition-all'>
          <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute peer/link hover:!bg-transparent duration-200 ease-in w-full h-full inset-0 z-10 group-hover/list:bg-card/50 p-4 pb-6'
          ></Link>
          <Card className='p-4 pb-6 grid sm:grid-cols-9 shadow-none duration-200 ease-in peer-hover/link:bg-accent/10 peer-hover/link:shadow-lg gap-y-2'>
            <header
              className='text-xs text-muted-foreground font-medium tracking-tight sm:col-span-2 mt-1.5 space-y-1.5'
              aria-label={time}
            >
              <p className='uppercase'>{time}</p>
              <p>{location}</p>
            </header>
            <div className='sm:col-span-7 space-y-2.5'>
              <Typography variant='h5' tag='h3'>
                <div>
                  <Link
                    href={href}
                    className='inline-flex gap-x-1 items-center font-medium leading-tight text-card-foreground text-base peer-hover/link:text-primary'
                  >
                    <div>
                      {title} · {company}
                    </div>
                    <ArrowUpRight className='size-3 duration-200 text-card-foreground peer-hover/link:-translate-y-[2px] peer-hover/link:translate-x-[2px] motion-reduce:transition-none motion-reduce:peer-hover/link:translate-x-0 shrink-1 translate-y-px' />
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
