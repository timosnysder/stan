// src/content/content.config.mjs
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

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
    featuredImage: z.string().optional(),
    client: z.string().optional(),
    client_logo: z.string().optional(),    // NEU
    myrole: z.string().optional(),         // NEU
    date_start: z.date().optional(),
    date_end: z.date().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
})
export const collections = { projects, casestudies }

// // src/content/content.config.mjs
// import { defineCollection, z } from 'astro:content'
// import { glob } from 'astro/loaders'

// // Bestehende projects Collection
// const projects = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
//   schema: z.object({
//     title: z.string(),
//     author: z.string(),
//     description: z.string(),
//   }),
// })

// // Neue casestudies Collection
// const casestudies = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/content/casestudies' }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     image: z.string(),
//     client: z.string().optional(),
//     date: z.date().optional(),
//     tags: z.array(z.string()).optional(),
//     featured: z.boolean().default(false),
//   }),
// })

// // Export beider Collections
// export const collections = { projects, casestudies }


// // 1. Import utilities from `astro:content`
// import { defineCollection, z } from 'astro:content'

// // 2. Import loader(s)
// import { glob } from 'astro/loaders'

// // 3. Define your collection(s)
// const projects = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
//   schema: z.object({
//     title: z.string(),
//     author: z.string(),
//     description: z.string(),
//   }),
// })

// const casestudies = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/content/casestudies' }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     image: z.string(),
//     client: z.string().optional(),
//     date: z.date().optional(),
//     tags: z.array(z.string()).optional(),
//     featured: z.boolean().default(false),
//   }),
// })

// // 4. Export a single `collections` object to register your collection(s)
// export const collections = { projects, casestudies }