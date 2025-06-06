// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
  }),
})

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/casestudies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    client: z.string().optional(),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, casestudies }