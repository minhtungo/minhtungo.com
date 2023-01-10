import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const projectQuery = groq`
  *[_type == "project"] {
    ...,
  } 
`;
export const repoQuery = groq`
  *[_type == "repo"] {
    ...,
  } 
`;

export const journeyQuery = groq`
  *[_type == "journey"] {
    ...,
  } | order(_createdAt desc)
`;
