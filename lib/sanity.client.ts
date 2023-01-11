import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const projectQuery = groq`
  *[_type == "project"] {
    ...,
  } 
`;
export const repoQuery = groq`
  *[_type == "repo"] {
    ...,
  } | order(order asc, _createdAt asc)
`;

export const journeyQuery = groq`
  *[_type == "journey"] {
    ...,
  } | order(_createdAt desc)
`;

export const resumeQuery = groq`
  *[_type == "resume"] {
    "resume": resume.asset->url
  }
`;
