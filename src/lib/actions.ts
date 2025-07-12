
'use server';

import { attireSuggestion, AttireSuggestionInput } from '@/ai/flows/attire-suggestion';
import { Resend } from 'resend';

export async function getAttireSuggestionAction(input: AttireSuggestionInput): Promise<{ success: boolean; suggestions?: string[]; error?: string; }> {
  try {
    const result = await attireSuggestion(input);
    if (result && result.attireSuggestions) {
      return { success: true, suggestions: result.attireSuggestions };
    }
    return { success: false, error: 'AI did not return any suggestions.' };
  } catch (error) {
    console.error('Error in getAttireSuggestionAction:', error);
    return { success: false, error: 'Failed to get suggestions from AI. Please try again.' };
  }
}

export async function sendEmailAction(formData: FormData): Promise<{ success: boolean; error?: string; }> {
    const resend = new Resend(process.env.RESEND_API_KEY);

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
