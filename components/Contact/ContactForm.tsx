import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FadeContainer } from '../../lib/FramerMotionVariants';
import { Button, LoadingSpinner } from '..';
import { toastifySuccess, toastifyFailure } from '../common/ToastMessage';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setIsSending(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setIsSending(false);
      reset();
      toastifySuccess(
        '😊Thank you for getting in touch! I will get back in touch with you soon. Have a great day!'
      );
    } catch (error) {
      toastifyFailure(
        'Something went wrong! Please try again or reach me at mn.minhtungo@gmail.com.'
      );
    }
  };

  return (
    <motion.form
      className='flex flex-col xs:p-3 s:p-4 rounded-lg'
      initial='hidden'
      whileInView='visible'
      variants={FadeContainer}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className='w-full grid grid-cols-2 gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='name'
            id='name'
            className='block py-2 mt-2 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-transparent-white appearance-none dark:text-gray-200 dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
            placeholder=' '
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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

      <div className='flex items-center justify-center w-full'>
        <Button
          disabled={isSending}
          className='flex items-center justify-center mt-6'
          variant={isSending ? 'secondary' : 'primary'}
        >
          {isSending ? (
            <>
              <LoadingSpinner className='inline w-4 h-4 mr-3 text-blue-500 animate-spin' />
              {' Sending...'}
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </motion.form>
  );
};
export default ContactForm;
