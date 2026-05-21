import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()).default([]),
    image: z.string().default(''),
    url: z.string().default(''),
    demo: z.string().default(''),
    description: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
