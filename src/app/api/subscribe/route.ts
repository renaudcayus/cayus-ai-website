import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Environment-aware configuration
    // Note: In development mode, all emails go to DEV_EMAIL to prevent spamming.
    // In production, the recipient is the actual subscriber email.

    const isDev = process.env.NODE_ENV === 'development';
    const toEmail = isDev ? process.env.DEV_EMAIL || 'gtgamers123456@gmail.com' : email;
    const fromEmail = process.env.EMAIL_FROM || 'Cayus AI <onboarding@resend.dev>';

    // Send confirmation email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: 'Thanks for subscribing to Cayus AI!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1B1B1B; font-size: 28px; margin-bottom: 16px;">Welcome to Cayus AI! 🎉</h1>
          <p style="color: #737373; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for subscribing to our newsletter. We're excited to have you on board!
          </p>
          <p style="color: #737373; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            You'll receive updates about new features, tips for managing your links, and exclusive insights into how Cayus AI can streamline your workflow.
          </p>
          <p style="color: #737373; font-size: 14px; line-height: 1.6;">
            Best regards,<br />
            The Cayus AI Team
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!', data },
      { status: 200 },
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
