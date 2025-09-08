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

const postSchema = z.object({
    title: z.string(),
    summary: z.string(),
    slug: z.string(),
    pubDate: z.date(),
    tags: z.string().optional(),
    postType: z.enum(['Snippets', 'News']).optional()
})

const posts = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts" }),
    schema: postSchema
})

const snippets = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts/snippets" }),
    schema: postSchema
})

const news = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts/news" }),
    schema: postSchema
})


export const collections = { experiences, snippets, news, posts }