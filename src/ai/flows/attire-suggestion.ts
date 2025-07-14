'use server';
/**
 * @fileOverview An AI flow for suggesting headshot attire.
 * 
 * - attireSuggestion - A function that suggests outfits based on a profession.
 */

import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/googleai';
import { AttireSuggestionInputSchema, AttireSuggestionOutputSchema, type AttireSuggestionInput, type AttireSuggestionOutput } from '@/ai/schemas';

const attireSuggestionPrompt = ai.definePrompt({
    name: 'attireSuggestionPrompt',
    model: googleAI.model('gemini-1.5-flash-latest'),
    input: { schema: AttireSuggestionInputSchema },
    output: { schema: AttireSuggestionOutputSchema, format: 'json' },
    prompt: `You are a professional fashion stylist specializing in headshot photography.

Your task is to provide concise and professional outfit suggestions for a headshot based on the user's profession.

Provide one suggestion for a male-presenting person, one for a female-presenting person, and one gender-neutral option.
Keep each suggestion to a single sentence.

Profession: {{{profession}}}`,
});


const attireSuggestionFlow = ai.defineFlow(
  {
    name: 'attireSuggestionFlow',
    inputSchema: AttireSuggestionInputSchema,
    outputSchema: AttireSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await attireSuggestionPrompt(input);
    if (!output) {
      throw new Error("Unable to get attire suggestion from the AI model.");
    }
    return output;
  }
);

export async function attireSuggestion(input: AttireSuggestionInput): Promise<AttireSuggestionOutput> {
    return attireSuggestionFlow(input);
}
