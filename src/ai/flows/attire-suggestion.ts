// 'use server';
/**
 * @fileOverview Provides AI-powered attire suggestions for headshots based on user input.
 *
 * - attireSuggestion - A function that takes a photo, profession description, and desired impression, and returns attire suggestions.
 * - AttireSuggestionInput - The input type for the attireSuggestion function.
 * - AttireSuggestionOutput - The return type for the attireSuggestion function.
 */

'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AttireSuggestionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user or a model, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  professionDescription: z
    .string()
    .describe('The user\'s profession or a description of the desired impression.'),
});
export type AttireSuggestionInput = z.infer<typeof AttireSuggestionInputSchema>;

const AttireSuggestionOutputSchema = z.object({
  attireSuggestions: z
    .array(z.string())
    .describe('A list of attire suggestions suitable for the headshot.'),
});
export type AttireSuggestionOutput = z.infer<typeof AttireSuggestionOutputSchema>;

export async function attireSuggestion(input: AttireSuggestionInput): Promise<AttireSuggestionOutput> {
  return attireSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'attireSuggestionPrompt',
  input: {schema: AttireSuggestionInputSchema},
  output: {schema: AttireSuggestionOutputSchema},
  prompt: `You are an AI assistant specializing in providing attire suggestions for professional headshots.

  Based on the user's photo and their profession or desired impression, suggest attire styles that would be suitable for their headshot. Provide a list of suggestions.

  Photo: {{media url=photoDataUri}}
  Profession/Impression: {{{professionDescription}}}
  Suggestions: `,
});

const attireSuggestionFlow = ai.defineFlow(
  {
    name: 'attireSuggestionFlow',
    inputSchema: AttireSuggestionInputSchema,
    outputSchema: AttireSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
