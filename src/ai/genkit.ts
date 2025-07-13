
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const googleApiKey = process.env.GOOGLE_API_KEY;

if (!googleApiKey) {
  // This provides a clear error in the logs if the key is missing.
  console.warn(
    'GOOGLE_API_KEY is not defined in the environment variables. The AI Styler will not work.'
  );
  throw new Error('GOOGLE_API_KEY is not defined.');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: googleApiKey,
    }),
  ],
});
