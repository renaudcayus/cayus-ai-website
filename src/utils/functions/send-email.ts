import { Resend } from 'resend';

export interface ISendEmail {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ from, to, subject, html, text }: ISendEmail) {
  const { data, error } = await resend.emails.send({
    from: from,
    to: to,
    subject,
    html,
    text,
  });

  if (error) {
    return {
      status: 'failed',
      message: process.env.NODE_ENV === 'production' ? 'Failed to send email.' : error.message,
    };
  }

  return { status: 'success', data };
}
