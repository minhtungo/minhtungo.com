'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { cn } from '@/lib/utils';
import LoaderButton from '@/components/LoaderButton';
import { EMAIL_ADDRESS } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = ({ className }: { className?: string }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [isSending, setIsSending] = useState(false);

  const reset = () => {
    setFormState(initialFormState);
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
      }
    };

    const sendingPromise = sendMessage();

    toast.promise(sendingPromise, {
      loading: 'Sending...',
      success: 'Thank you for getting in touch! I will get back in touch with you soon. Have a great day!',
      error: `Something went wrong! Please try again or reach me at ${EMAIL_ADDRESS}.`,
    });
  };

  return (
    <form className={cn(className, 'space-y-4')} onSubmit={handleSubmit} ref={form}>
      <div className='grid w-full sm:grid-cols-2 gap-4'>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
      </div>
      <Input
        type='subject'
        name='subject'
        placeholder='Subject'
        value={formState.subject}
        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
      />
      <Textarea
        name='message'
        placeholder='Message'
        value={formState.message}
        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
      />
      <div className='flex w-full items-center justify-center'>
        <LoaderButton
          label='Send Message'
          isPending={isSending}
          disabled={!formState.name || !formState.email || !formState.subject || !formState.message}
          className='mt-2 flex items-center justify-center '
        />
      </div>
    </form>
  );
};

export default ContactForm;
