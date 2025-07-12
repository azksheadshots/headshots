'use server';

import { attireSuggestion, AttireSuggestionInput } from '@/ai/flows/attire-suggestion';

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
