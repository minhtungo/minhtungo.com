import { Button, LoadingSpinner } from '@/components';
import { toastifyFailure, toastifySuccess } from '@/components/common/ToastMessage';
import { FadeContainer } from '@/lib/FramerMotionVariants';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import Input from './Input';

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
      className='mt-2 flex flex-col rounded-lg lg:mt-0'
      initial='hidden'
      whileInView='visible'
      variants={FadeContainer}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className='grid w-full grid-cols-2 gap-4 lg:gap-6'>
        <Input
          type='text'
          name='name'
          aria-label='name'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='email'
          name='email'
          aria-label='Email Address'
          label='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Input
        type='subject'
        name='subject'
        aria-label='Subject'
        label='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        textarea
        type='message'
        name='message'
        aria-label='Message'
        label='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className='flex w-full items-center justify-center'>
        <Button
          disabled={isSending || !name || !email || !subject || !message}
          className={`mt-6 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50`}
          variant={isSending ? 'secondary' : 'primary'}
          aria-label='Send Message'
        >
          {isSending ? (
            <>
              <LoadingSpinner className='mr-3 inline h-4 w-4 animate-spin text-blue-500' />
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
