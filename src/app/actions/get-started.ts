'use server';

import { sendEmail } from '@/utils/functions/send-email';

export async function sendWelcomeEmail(formData: FormData) {
  const customerEmail = formData.get('email');
  const fromEmail = process.env.EMAIL_FROM ?? 'onboarding@resend.dev';
  const emailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1B1B1B; font-size: 28px; margin-bottom: 16px;">Welcome to Cayus AI! 🎉</h1>
          <p style="color: #737373; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for joining Cayus AI. We're excited to have you on board!
          </p>
          <p style="color: #737373; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            You'll receive updates about new features, tips for managing your links, and exclusive insights into how Cayus AI can streamline your workflow.
          </p>
          <p style="color: #737373; font-size: 14px; line-height: 1.6;">
            Best regards,<br />
            The Cayus AI Team
          </p>
        </div>
      `;
  const subject = 'Thanks for joining Cayus AI.';

  await saveEmailToDB(customerEmail as string);

  const data = await sendEmail({
    from: fromEmail as string,
    to: [customerEmail as string],
    html: emailTemplate,
    subject,
  });

  return data;
}

async function saveEmailToDB(email: string) {
  return null;
}
