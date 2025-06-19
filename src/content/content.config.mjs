// src/content/content.config.mjs
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  // Ändere den Pattern um sowohl .mdx Dateien als auch index.md in Ordnern zu finden
  loader: glob({ 
    pattern: ['**/*.mdx', '**/index.md'], 
    base: './src/content/projects' 
  }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(), // Optional falls du es noch hinzufügst
    description: z.string().optional(), // Optional falls du es noch hinzufügst
    date: z.date().optional(), // Neues Datum-Feld
    categories: z.array(z.string()).optional(), // Neue Kategorien
  }),
})

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/casestudies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    featuredImage: z.string().optional(),
    client: z.string().optional(),
    client_logo: z.string().optional(),
    myrole: z.string().optional(),
    date_start: z.date().optional(),
    date_end: z.date().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
})

export const collections = { projects, casestudies }