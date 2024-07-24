import { Card } from '@/components/ui/card';
import { EMAIL_ADDRESS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Roboto_Mono } from 'next/font/google';

interface CodeSnippetProps {
  className?: string;
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
  display: 'swap',
});

const CodeSnippet = ({ className }: CodeSnippetProps) => {
  return (
    <Card className={cn('bg-accent/10', roboto_mono.className, className)}>
      <div className='border-b px-4 py-2'>
        <div className='mr-2 inline-block h-3 w-3 rounded-full bg-red-500'></div>
        <div className='mr-2 inline-block h-3 w-3 rounded-full bg-yellow-300'></div>
        <div className='mr-2 inline-block h-3 w-3 rounded-full bg-green-400'></div>
      </div>
      <div className='px-4 py-5 tracking-wide'>
        <p>
          <span className='text-blue-600 dark:text-blue-400'>const</span>{' '}
          <span className='text-green-600 dark:text-green-400'>aboutMe</span>{' '}
          <span className='text-pink-700 dark:text-pink-500'>=</span>
          <span className='text-gray-700 dark:text-gray-50'>
            {' () '} {'=>'} {'{'}
          </span>
        </p>
        <p>
          &nbsp;&nbsp;
          <span className='text-pink-700 dark:text-pink-500'>return</span> {'{'}
        </p>
        <p className='text-gray-700 dark:text-gray-50'>
          &nbsp;&nbsp;&nbsp;&nbsp;name:{' '}
          <span className='text-yellow-600 dark:text-yellow-300'>
            {"'"}Minh Tu Ngo{"'"}
          </span>
          ,
        </p>
        <p className='text-gray-700 dark:text-gray-50'>
          &nbsp;&nbsp;&nbsp;&nbsp;email:{' '}
          <span className='text-yellow-600 dark:text-yellow-300'>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target='_blank'
              className='text-yellow-600 hover:underline focus:border-none dark:text-yellow-300'
            >
              {"'"}
              {EMAIL_ADDRESS}
              {"'"}
            </a>
          </span>
          ,
        </p>
        <p className='text-gray-700 dark:text-gray-50'>
          &nbsp;&nbsp;&nbsp;&nbsp;hobbies:{' '}
          <span className='text-yellow-600 dark:text-yellow-300'>
            {"['Reading', 'Coding', 'Lego', 'Music', 'Bubble Tea']"}
          </span>
          ,
          <span
            className="relative font-semibold text-slate-700 duration-200 after:absolute after:-top-[2px] after:left- after:my-auto after:animate-cursor after:content-['|'] motion-reduce:transition-none dark:text-slate-300 after:sm:text-base"
            aria-hidden='true'
          ></span>
        </p>

        <p className='text-gray-700 dark:text-gray-50'>&nbsp;&nbsp;{'}'}</p>
        <p className='text-gray-700 dark:text-gray-50'>{'}'}</p>
      </div>
    </Card>
  );
};
export default CodeSnippet;
