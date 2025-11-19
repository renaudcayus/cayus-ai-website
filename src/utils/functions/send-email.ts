import { getScopedI18n } from '@/locals/server';
import { Resend } from 'resend';

export interface ISendEmail {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ from, to, subject, html, text }: ISendEmail) {
  const scoptedT = await getScopedI18n('getStarted.message');

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: from,
      to: to,
      subject,
      html,
      text,
    });

    return { status: 'success', data };
  } catch (error: Error | any) {
    return {
      status: 'failed',
      message: process.env.NODE_ENV !== 'development' ? scoptedT('error') : error.message,
    };
  }
}
