import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const googleApiKey = process.env.GOOGLE_API_KEY;

if (!googleApiKey) {
  // This provides a clear error in the logs if the key is missing.
  console.warn(
    'GOOGLE_API_KEY is not defined in the environment variables. The AI Styler will not work.'
  );
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: googleApiKey,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
