// @ts-nocheck

import { forwardRef } from 'react';
import { LoadingSpinner } from '../';

interface DivContainerProps {
  children: React.ReactNode;
}

interface DivContainerProps {
  children: React.ReactNode;
  ref: React.Ref<HTMLDivElement>;
}

export const DivSpinner = () => (
  <div role='status' className='mt-[98px] lg:mt-[115px]'>
    <LoadingSpinner className='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500' />
    <span className='sr-only'>Loading...</span>
  </div>
);

export const DivContainer: React.FunctionComponent<DivContainerProps> =
  forwardRef(({ children }, ref) => <div ref={ref}>{children}</div>);

DivContainer.displayName = 'DivContainer';

const ModelLoader = () => {
  return (
    <DivContainer>
      <DivSpinner />
    </DivContainer>
  );
};

export default ModelLoader;
