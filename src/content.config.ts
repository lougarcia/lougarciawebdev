import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/experiences" }),
    schema: z.object({
        title: z.string(),
        duration: z.string(),
        company: z.string(),
        summary: z.string(),
    })
});

export const collections = { experiences }