import 'server-only';
import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from './env';

const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.warn('[sanity] SANITY_WRITE_TOKEN not set — form submissions will fail');
}

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});
