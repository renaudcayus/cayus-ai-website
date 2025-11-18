'use client';
import { sendWelcomeEmail } from '@/app/actions/get-started';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { Input } from '../ui/input';

const EmailCTA = () => {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

  function handleFormReset() {
    if (formRef.current) formRef.current.reset();
  }

  async function handleSubmit(formData: FormData) {
    const { status, data, message } = await sendWelcomeEmail(formData);

    handleFormReset();

    if (status === 'success') {
      toast.success('Email sent successfully!');
    } else {
      toast.error('Failed to send email.');
    }
  }

  return (
    <div className="z-20 hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
      <form
        ref={formRef}
        className="flex items-center justify-center w-max rounded-full border border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-4 shadow-3xl shadow-background/40 cursor-pointer select-none"
        action={handleSubmit}
      >
        <Input
          placeholder="Your email address"
          name="email"
          className="border-none outline:none rounded-full w-full"
        />
        <Button
          size="sm"
          type="submit"
          className="rounded-full hidden lg:flex border border-foreground/20"
          disabled={pending}
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </form>
    </div>
  );
};

export default EmailCTA;
