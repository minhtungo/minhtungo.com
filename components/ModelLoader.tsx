// @ts-nocheck

import { forwardRef } from 'react';

interface DivContainerProps {
  children: React.ReactNode;
}

interface DivContainerProps {
  children: React.ReactNode;
  ref: React.Ref<HTMLDivElement>;
}

export const DivSpinner = () => <div>Loading...</div>;

export const DivContainer: React.FunctionComponent<DivContainerProps> =
  forwardRef(({ children }, ref) => <div ref={ref}>{children}</div>);

const ModelLoader = () => {
  return (
    <DivContainer>
      <DivSpinner />
    </DivContainer>
  );
};

export default ModelLoader;
