/**
 * @fileOverview This file contains the Zod schemas and TypeScript types for AI flows.
 * It is separated from the flow definitions to avoid issues with 'use server' exports.
 */

import { z } from 'zod';

export const AttireSuggestionInputSchema = z.object({
  profession: z.string().describe('The profession to suggest attire for.'),
});
export type AttireSuggestionInput = z.infer<typeof AttireSuggestionInputSchema>;

export const AttireSuggestionOutputSchema = z.object({
    male: z.string().describe("Outfit suggestion for a male presenting person."),
    female: z.string().describe("Outfit suggestion for a female presenting person."),
    neutral: z.string().describe("A gender-neutral outfit suggestion."),
});
export type AttireSuggestionOutput = z.infer<typeof AttireSuggestionOutputSchema>;
