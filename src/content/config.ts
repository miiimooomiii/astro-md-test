import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string().default('Anonymous'),
    publishDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'markdown': blogCollection,
};
