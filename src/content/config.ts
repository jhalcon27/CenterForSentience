import { defineCollection, z } from 'astro:content';

// Research notes: short English-only write-ups listed below the working papers
// on /reports/ and rendered at /reports/notes/[slug]/. See notes/_README.md.
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    originalPaper: z
      .object({
        title: z.string(),
        authors: z.string(),
        year: z.number().int(),
        url: z.string().url(),
      })
      .optional(),
    codeUrl: z.string().url().optional(),
    tag: z.string().optional(),
    status: z.enum(['in-progress', 'complete']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
