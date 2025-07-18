'use server';

import { Resend } from 'resend';

export async function sendEmailAction(formData: FormData): Promise<{ success: boolean; error?: string; }> {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return { success: false, error: 'The server is not configured to send emails.' };
    }
    const resend = new Resend(apiKey);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const selectedPackage = formData.get('package') as string;

    if (!name || !email || !message) {
        return { success: false, error: 'Please fill out all fields.' };
    }
    
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // This should be a configured domain in Resend
            to: 'info@ksheadshots.com', // Your receiving email
            subject: `New Headshot Inquiry from ${name}`,
            html: `
                <p>You have a new contact form submission:</p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    ${selectedPackage ? `<li><strong>Package:</strong> ${selectedPackage}</li>` : ''}
                </ul>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send message. Please try again later.' };
    }
}
