import { Button } from '..';

const ContactForm = () => {
  return (
    <form className='flex flex-col xs:p-3 s:p-4 rounded-lg'>
      <>
        <div className='w-full grid grid-cols-2 gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='name'
              id='name'
              className='block py-2 mt-2 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-transparent-white appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='name'
              className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Your Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='email'
              name='email'
              id='email'
              className='block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email
            </label>
          </div>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='subject'
            name='subject'
            id='subject'
            className='block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='subject'
            className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Subject
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <textarea
            name='message'
            id='message'
            className='block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-400 appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black'
            placeholder=' '
            required
          />
          <label
            htmlFor='message'
            className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Message
          </label>
        </div>
      </>

      <div className='flex items-center justify-center w-full'>
        <Button href='/' className='flex items-center justify-center mt-6'>
          Send Message
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
