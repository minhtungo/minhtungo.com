import Link from 'next/link';
import classNames from 'classnames';
import { Roboto_Mono } from '@next/font/google';

interface CodeSnippetProps {
  className?: string;
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
});

const CodeSnippet = ({ className = '' }: CodeSnippetProps) => {
  return (
    <div className={`${roboto_mono.className}`}>
      <div
        className={classNames(
          'card-background-light rounded-lg text-off-white shadow-xl dark:bg-transparent-background-black',
          className
        )}
      >
        <div className='border-b border-custom-border-black px-6 py-3 dark:border-transparent-white'>
          <div className='mr-2 inline-block h-3 w-3 rounded-full bg-red-500'></div>
          <div className='mr-2 inline-block h-3 w-3 rounded-full bg-yellow-300'></div>
          <div className='mr-2 inline-block h-3 w-3 rounded-full bg-green-400'></div>
        </div>
        <div className='px-6 py-5'>
          <p>
            <span className='text-blue-600 dark:text-blue-400'>const</span>{' '}
            <span className='text-green-600 dark:text-green-400'>aboutMe</span>{' '}
            <span className='tracking-wide text-pink-700 dark:text-pink-500'>
              =
            </span>
            <span className='tracking-wide text-gray-700 dark:text-gray-50'>
              {' () '} {'=>'} {'{'}
            </span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className='text-pink-700 dark:text-pink-500'>
              return
            </span>{' '}
            {'{'}
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
              <Link
                href='mailto:mn.minhtungo@gmail.com'
                target='_blank'
                className='text-yellow-600 hover:underline focus:border-none dark:text-yellow-300'
              >
                {"'"}mn.minhtungo@gmail.com{"'"}
              </Link>
            </span>
            ,
          </p>
          <p className='text-gray-700 dark:text-gray-50'>
            &nbsp;&nbsp;&nbsp;&nbsp;website:{' '}
            <span className='text-yellow-600 dark:text-yellow-300'>
              <Link
                href='https://minhtungo.com'
                target='_blank'
                className='text-yellow-600 hover:underline focus:border-none dark:text-yellow-300'
              >
                minhtungo.com
              </Link>
              {"'"}
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
