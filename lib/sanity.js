import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  token: process.env.SANITY_API_TOKEN, // token for authentication
  apiVersion: '2023-09-26', // Update to your desired version
  useCdn: true, // Whether to use CDN for faster responses
});

export default client;