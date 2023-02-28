'use client';
import { Toaster } from 'react-hot-toast';

const ToastWrapper = () => {
  return (
    <Toaster
      position='bottom-right'
      toastOptions={{
        duration: 3000,
        className:
          'dark:bg-[#262626] bg-gray-50 text-gray-800 dark:text-gray-200 shadow-sm min-w-[250px]',
      }}
    />
  );
};
export default ToastWrapper;
