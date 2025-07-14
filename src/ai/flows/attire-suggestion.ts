'use server';
/**
 * @fileOverview An AI agent for suggesting headshot attire.
 *
 * This file defines the Genkit flow for generating attire suggestions.
 * It is called by a dedicated server action.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const AttireSuggestionInputSchema = z.object({
  industry: z.string().describe("The user's industry (e.g., 'Tech', 'Law', 'Creative')"),
  impression: z.string().describe("The desired impression (e.g., 'Confident', 'Approachable', 'Authoritative')"),
});
export type AttireSuggestionInput = z.infer<typeof AttireSuggestionInputSchema>;

const SuggestionSchema = z.object({
    title: z.string().describe("A short, catchy title for the attire suggestion (e.g., 'The Modern Professional')."),
    description: z.string().describe("A brief paragraph explaining the outfit choice and why it works for the given industry and impression."),
    items: z.array(z.string()).describe("A list of key clothing items for the outfit (e.g., 'Navy Blue Blazer', 'White Button-Down Shirt', 'Dark-Wash Jeans').")
});

export const AttireSuggestionOutputSchema = z.object({
    suggestions: z.array(SuggestionSchema).describe("An array of exactly three distinct attire suggestions.")
});
export type AttireSuggestionOutput = z.infer<typeof AttireSuggestionOutputSchema>;

const prompt = ai.definePrompt({
  name: 'attireSuggestionPrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: {schema: AttireSuggestionInputSchema},
  output: {schema: AttireSuggestionOutputSchema},
  prompt: `You are an expert fashion stylist specializing in professional headshots.
A user needs attire suggestions for their headshot.
Their industry is: {{{industry}}}
The impression they want to make is: {{{impression}}}

Please provide exactly three distinct and actionable attire suggestions. For each suggestion, provide a creative title, a short description, and a list of key clothing items.
Adhere strictly to the output format. You must always return suggestions.`,
});

export const suggestAttire = ai.defineFlow(
  {
    name: 'suggestAttireFlow',
    inputSchema: AttireSuggestionInputSchema,
    outputSchema: AttireSuggestionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    
    if (!output || !output.suggestions) {
      // This case should be rare with the improved prompt, but it's good practice.
      console.warn('AI returned empty or invalid suggestions.');
      return { suggestions: [] };
    }

    return output;
  }
);
