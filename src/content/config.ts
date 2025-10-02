import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        priority: z.number(),
        // Frontmatter uses `date` as a string; coerce to Date
        date: z.string(),
        // Frontmatter uses `img` with a relative path; allow any string
        img: z.string(),
        description: z.string(),
        tools: z.array(z.string()).optional(), // 👈 opcional
        designs: z.array(z.string()).optional(), // 👈 opcional
        video: z.array(z.string()).optional(), // 👈 opcional
    }),
});

const experiences = defineCollection({
    schema: z.object({
        title: z.string(),
        priority: z.number(),
        date: z.string(),
        archivo: z.string().optional(),
        working: z.boolean().optional(),
        type: z.enum(["work", "book"]),
    }),
});

export const collections = { projects, experiences };

