
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This file is stubbed out but can be used to configure Genkit
// if AI features are added back in the future.

export const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GOOGLE_API_KEY,
  })],
});

