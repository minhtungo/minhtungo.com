// displays a message when form submission is successful
import { toast } from 'react-toastify';

export const toastifySuccess = (message: string) => {
  toast.success(
    message,
    {
      icon: false,
      theme: 'dark',
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export const toastifyFailure = (message: string) => {
  toast.error(message, {
    theme: 'dark',
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
