
'use server';
/**
 * @fileOverview Provides AI-powered attire suggestions for headshots based on user input.
 *
 * - attireSuggestion - A function that takes a photo, profession description, and desired impression, and returns attire suggestions.
 * - AttireSuggestionInput - The input type for the attireSuggestion function.
 * - AttireSuggestionOutput - The return type for the attireSuggestion function.
 */

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
    .describe('A list of 3-5 attire suggestions suitable for the headshot. Each suggestion should be a concise, actionable phrase.'),
});
export type AttireSuggestionOutput = z.infer<typeof AttireSuggestionOutputSchema>;

export async function attireSuggestion(input: AttireSuggestionInput): Promise<AttireSuggestionOutput> {
  return attireSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'attireSuggestionPrompt',
  input: {schema: AttireSuggestionInputSchema},
  output: {schema: AttireSuggestionOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert fashion stylist specializing in professional headshots. Your task is to provide attire suggestions based on a user's profession.

  Analyze the user's profession and provide 3-5 clear, concise, and actionable attire suggestions. The suggestions should be suitable for a professional headshot. Ensure your output is a JSON object with an 'attireSuggestions' array containing the strings.

  User's Profession: {{{professionDescription}}}
  `,
});

const attireSuggestionFlow = ai.defineFlow(
  {
    name: 'attireSuggestionFlow',
    inputSchema: AttireSuggestionInputSchema,
    outputSchema: AttireSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);

    // If the model returns a null or empty response, return a valid empty array
    // to prevent the application from crashing or hanging.
    if (!output || !output.attireSuggestions) {
      return { attireSuggestions: [] };
    }

    return output;
  }
);
