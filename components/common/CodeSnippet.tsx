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
          'rounded-lg shadow-xl transparent-whiter dark:bg-transparent-background-black text-off-white',
          className
        )}
      >
        <div className='border-b border-transparent-border-black dark:border-transparent-white px-6 py-3'>
          <div className='inline-block w-3 h-3 mr-2 rounded-full bg-red-500'></div>
          <div className='inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300'></div>
          <div className='inline-block w-3 h-3 mr-2 rounded-full bg-green-400'></div>
        </div>
        <div className='px-6 py-5'>
          <p>
            <span className='text-blue-600 dark:text-blue-400'>const</span>{' '}
            <span className='text-green-600 dark:text-green-400'>aboutMe</span>{' '}
            <span className='text-pink-700 dark:text-pink-500 tracking-wide'>
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
                className='text-yellow-600 dark:text-yellow-300 hover:underline focus:border-none'
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
                className='text-yellow-600 dark:text-yellow-300 hover:underline focus:border-none'
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
