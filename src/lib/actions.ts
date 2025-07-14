'use server';

import { Resend } from 'resend';
import { attireSuggestion } from '@/ai/flows/attire-suggestion';
import type { AttireSuggestionInput, AttireSuggestionOutput } from '@/ai/schemas';

export async function getAttireSuggestionAction(input: AttireSuggestionInput): Promise<AttireSuggestionOutput> {
    try {
        const result = await attireSuggestion(input);
        return result;
    } catch (error) {
        console.error('Error in getAttireSuggestionAction:', error);
        if (error instanceof Error) {
            // Re-throw the error to be caught by the client-side component
            throw new Error(error.message || 'An unexpected error occurred in the AI flow.');
        }
        // For non-Error objects, throw a generic message
        throw new Error('An unexpected error occurred.');
    }
}


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
