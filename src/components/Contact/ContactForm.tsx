'use client';

import { Button, LoadingSpinner } from '@/components/ui';
import toast from 'react-hot-toast';
import { FadeContainer } from '@/lib/framerVariants';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import Input from './Input';
import mergeClassNames from '@/lib/mergeClassNames';

const ContactForm = ({ className }: { className: string }) => {
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

    const sendMessage = async () => {
      try {
        setIsSending(true);
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setIsSending(false);
        reset();
      } catch (error) {
        setIsSending(false);
        console.error(error);
      }
    };

    const sendingPromise = sendMessage();

    toast.promise(sendingPromise, {
      loading: 'Sending...',
      success:
        'Thank you for getting in touch! I will get back in touch with you soon. Have a great day!',
      error:
        'Something went wrong! Please try again or reach me at mn.minhtungo@gmail.com.',
    });
  };

  return (
    <motion.form
      className={mergeClassNames('flex flex-col rounded-lg', className)}
      initial='hidden'
      whileInView='visible'
      variants={FadeContainer}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className='grid w-full sm:grid-cols-2 sm:gap-4 lg:gap-6'>
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
      <div className='flex w-full items-center justify-center'>
        <Button
          disabled={isSending || !name || !email || !subject || !message}
          className='mt-6 flex items-center justify-center'
        >
          {isSending ? (
            <>
              <LoadingSpinner className='mr-3 inline h-4 w-4 animate-spin text-blue-500' />
              {'Sending...'}
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
