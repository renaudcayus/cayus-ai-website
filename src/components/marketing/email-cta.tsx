'use client';
import { sendContactEmail } from '@/app/actions/get-started';
import { Button } from '@/components/ui/button';
import { useScopedI18n } from '@/locals/client';
import { cn } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';

const contactFormSchema = z.object({
  email: z.string().email(),
});

const EmailCTA = () => {
  const { pending } = useFormStatus();
  const scopedT = useScopedI18n('getStarted');

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { email: '' },
  });

  async function handleSubmit(values: z.infer<typeof contactFormSchema>) {
    const { status, data, message } = await sendContactEmail({ email: values.email });

    form.reset();

    if (status === 'success') {
      toast.success(scopedT('message.success'));
    } else {
      toast.error(message ?? scopedT('message.error'));
    }
  }

  return (
    <div className="z-20 flex relative items-center justify-center mt-8 md:mt-12 w-full">
      <Form {...form}>
        <form
          className="flex items-center justify-center w-max rounded-full border border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-4 shadow-3xl shadow-background/40 cursor-pointer select-none"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={scopedT('input.placeholder')}
                    className={cn(
                      ' rounded-full w-full ',
                      form.formState.errors.email
                        ? 'border-destructive focus-visible:ring-destructive'
                        : '',
                    )}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            size="sm"
            type="submit"
            className="rounded-full border border-foreground/20"
            disabled={pending}
          >
            {scopedT('cta.title')}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EmailCTA;
