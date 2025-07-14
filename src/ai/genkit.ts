
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Read the API key directly from the environment variables.
// This is the most reliable method for server-side environments like Vercel or AWS Amplify.
const googleApiKey = process.env.GOOGLE_API_KEY;

if (!googleApiKey) {
  // This provides a clear error in the server logs if the key is missing.
  console.error(
    'FATAL: GOOGLE_API_KEY is not defined in the environment variables. The AI Styler will not function.'
  );
  // Throwing an error here will prevent the application from starting without the key,
  // making it clear that the configuration is missing.
  throw new Error('GOOGLE_API_KEY is not defined.');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: googleApiKey,
    }),
  ],
});
