
'use server';
/**
 * @fileOverview Provides AI-powered attire suggestions for headshots based on user input.
 *
 * - attireSuggestion - A function that takes a profession and returns attire suggestions.
 * - AttireSuggestionInput - The input type for the attireSuggestion function.
 * - AttireSuggestionOutput - The return type for the attireSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// 1. Define the input schema: We only need the user's profession.
const AttireSuggestionInputSchema = z.object({
  profession: z
    .string()
    .min(3, 'Profession must be at least 3 characters.')
    .describe('The user\'s profession, e.g., "real estate agent" or "software engineer".'),
});
export type AttireSuggestionInput = z.infer<typeof AttireSuggestionInputSchema>;

// 2. Define the output schema: We expect an array of suggestion strings.
const AttireSuggestionOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of 3-5 distinct attire suggestions. Each suggestion should be a concise, actionable phrase.'),
});
export type AttireSuggestionOutput = z.infer<typeof AttireSuggestionOutputSchema>;


// 3. Define the AI prompt. It's configured to use a specific model and expect a specific JSON output.
const attirePrompt = ai.definePrompt({
  name: 'attireSuggestionPrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: { schema: AttireSuggestionInputSchema },
  output: { schema: AttireSuggestionOutputSchema },
  prompt: `You are an expert fashion stylist advising a client on what to wear for a professional headshot.
  Based on the client's profession, provide 3-5 clear and concise attire suggestions.
  The suggestions should be suitable for a professional setting and create a positive impression.
  
  Client's Profession: {{{profession}}}
  `,
});

// 4. Define the main flow. This function orchestrates the call to the AI.
const attireSuggestionFlow = ai.defineFlow(
  {
    name: 'attireSuggestionFlow',
    inputSchema: AttireSuggestionInputSchema,
    outputSchema: AttireSuggestionOutputSchema,
  },
  async (input) => {
    // Generate content using the defined prompt and the user's input.
    const { output } = await attirePrompt(input);
    
    // Robustness check: If the AI returns a nullish value or an empty array,
    // return a valid empty suggestions array to prevent crashes.
    if (!output || !output.suggestions) {
      return { suggestions: [] };
    }
    
    return output;
  }
);

// 5. Export a wrapper function to be called by server actions.
export async function attireSuggestion(input: AttireSuggestionInput): Promise<AttireSuggestionOutput> {
  return attireSuggestionFlow(input);
}
