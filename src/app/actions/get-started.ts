'use server';

import { sendEmail } from '@/utils/functions/send-email';

export async function sendContactEmail({ email }: { email: string }) {
  const customerEmail = email;
  const emailTo = process.env.EMAIL_TO;
  const fromEmail = process.env.EMAIL_FROM ?? 'onboarding@resend.dev';
  const emailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p>${customerEmail} is interested in Cayus AI</p>
        </div>
      `;
  const subject = 'Potiental Client - Contacted you via Cayus AI';

  const data = await sendEmail({
    from: fromEmail as string,
    to: [emailTo as string],
    html: emailTemplate,
    subject,
  });

  return data;
}
