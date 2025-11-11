'use client';

import { AnimationContainer } from '@/components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MagicBadge from '@/components/ui/magic-badge';
import { ArrowRightIcon, CheckCircle2Icon, XCircleIcon } from 'lucide-react';
import React, { useState } from 'react';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const EmailCTA = () => {
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitState('error');
        setErrorMessage(data.error || 'Something went wrong.');
        return;
      }

      setSubmitState('success');
      setEmail('');

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setSubmitState('idle');
      }, 5000);
    } catch (error) {
      console.error('Subscribe error:', error);
      setSubmitState('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const isDisabled = submitState === 'loading' || submitState === 'success';

  return (
    <section className="w-full py-20 lg:py-28">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <MagicBadge title="Stay Updated" />

          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6 max-w-3xl">
            Get the latest updates on link management
          </h2>

          <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl">
            Join our newsletter to receive tips, feature updates, and insights to help you manage
            your links more effectively.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-xl mt-8">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isDisabled}
                  required
                  className="h-12 px-4 text-base"
                />
              </div>

              <Button type="submit" disabled={isDisabled} className="h-12 px-6 whitespace-nowrap">
                {submitState === 'loading' ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : submitState === 'success' ? (
                  <>
                    <CheckCircle2Icon className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Success message */}
            {submitState === 'success' && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                <CheckCircle2Icon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900 dark:text-green-100">
                    Subscribed successfully!
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              </div>
            )}

            {/* Error message */}
            {submitState === 'error' && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                <XCircleIcon className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-900 dark:text-red-100">
                    {errorMessage}
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                    Please try again or contact support if the issue persists.
                  </p>
                </div>
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-muted-foreground text-center">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </AnimationContainer>
    </section>
  );
};

export default EmailCTA;
