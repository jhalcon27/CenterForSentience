import { defineCollection, z } from 'astro:content';

const reproductions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    paper: z.object({
      title: z.string(),
      authors: z.string(),
      year: z.number(),
      url: z.string().url(),
    }),
    status: z.enum(['in-progress', 'done', 'abandoned']),
    started: z.date(),
    updated: z.date(),
    claim: z.string(),
    setup: z.object({
      model: z.string(),
      libraries: z.array(z.string()),
      compute: z.string(),
    }),
    code: z.string().url().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  reproductions,
};
