import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
  className?: string;
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
  display: 'swap',
});

const CodeSnippet = ({ className = '' }: CodeSnippetProps) => {
  return (
    <div className={roboto_mono.className}>
      <div className={cn('rounded-lg bg-card-background-light text-sm text-off-white shadow-xl dark:bg-card-background-dark sm:text-base', className)}>
        <div className='border-b border-custom-border-black px-4 py-2 dark:border-transparent-white'>
          <div className='mr-2 inline-block h-3 w-3 rounded-full bg-red-500'></div>
          <div className='mr-2 inline-block h-3 w-3 rounded-full bg-yellow-300'></div>
          <div className='mr-2 inline-block h-3 w-3 rounded-full bg-green-400'></div>
        </div>
        <div className='px-4 py-5'>
          <p>
            <span className='text-blue-600 dark:text-blue-400'>const</span> <span className='text-green-600 dark:text-green-400'>aboutMe</span> <span className='tracking-wide text-pink-700 dark:text-pink-500'>=</span>
            <span className='tracking-wide text-gray-700 dark:text-gray-50'>
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
              <Link href='mailto:mn.minhtungo@gmail.com' target='_blank' className='text-yellow-600 hover:underline focus:border-none dark:text-yellow-300'>
                {"'"}mn.minhtungo@gmail.com{"'"}
              </Link>
            </span>
            ,
          </p>
          <p className='text-gray-700 dark:text-gray-50'>
            &nbsp;&nbsp;&nbsp;&nbsp;website:{' '}
            <span className='text-yellow-600 dark:text-yellow-300 '>
              <Link href='https://minhtungo.com' target='_blank' className='text-yellow-600 hover:underline focus:border-none dark:text-yellow-300'>
                minhtungo.com
              </Link>
              <span className="relative font-semibold text-slate-700 duration-200 after:absolute after:-top-[2px] after:left-3 after:my-auto after:animate-cursor after:content-['|'] motion-reduce:transition-none dark:text-slate-300 after:sm:text-base" aria-hidden='true'>
                {"'"}
              </span>
            </span>
            ,
          </p>
          <p className='text-gray-700 dark:text-gray-50'>&nbsp;&nbsp;{'}'}</p>
          <p className='text-gray-700 dark:text-gray-50'>{'}'}</p>
        </div>
      </div>
    </div>
  );
};
export default CodeSnippet;
