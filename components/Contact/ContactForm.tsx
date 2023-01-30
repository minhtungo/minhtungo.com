import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FadeContainer } from '../../lib/FramerMotionVariants';
import { Button, LoadingSpinner } from '..';
import Input from './Input';
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
      className='flex flex-col rounded-lg mt-2 lg:mt-0'
      initial='hidden'
      whileInView='visible'
      variants={FadeContainer}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className='w-full grid grid-cols-2 gap-4 lg:gap-6'>
        <Input
          type='text'
          name='name'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='email'
          name='email'
          label='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Input
        type='subject'
        name='subject'
        label='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        textarea
        type='message'
        name='message'
        label='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className='flex items-center justify-center w-full'>
        <Button
          disabled={isSending || !name || !email || !subject || !message}
          className={`flex items-center justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed`}
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
