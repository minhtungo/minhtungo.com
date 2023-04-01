'use client';

import mergeClassNames from '@/lib/mergeClassNames';
import { KBarResults, useMatches } from 'kbar';
import { FC } from 'react';

interface ResultsProps {}

const Results: FC<ResultsProps> = ({}) => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className='select-none px-4 pt-4 pb-2 text-[10px] uppercase tracking-[1px]'>
            {item}
          </div>
        ) : (
          <div
            className={mergeClassNames(
              'mx-3 flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 transition-colors',
              active ? 'bg-slate-200 dark:bg-neutral-800/90' : 'bg-transparent'
            )}
          >
            <div className='flex items-center'>
              {item.icon && <span className='mr-4'>{item.icon}</span>}
              <span className='text-md'>{item.name}</span>
            </div>
          </div>
        )
      }
    />
  );
};

export default Results;
