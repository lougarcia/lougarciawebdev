import { getCollection } from 'astro:content';

export async function GET() {

    const posts = await getCollection('posts');

    const tags = [
        ...new Set(
            posts.flatMap(post => 
                post.data.tags
                    ?.split(',')
                    .map(tag => tag.trim())   // remove extra spaces
                    .filter(Boolean)          // remove empty entries
            )
        )
    ];

    return new Response(JSON.stringify(tags), {
        headers: { 'Content-Type': 'application/json' },
    });
}