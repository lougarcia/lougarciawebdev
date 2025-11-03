/**
 * Ref: https://evilmartians.com/chronicles/how-to-add-fast-client-side-search-to-astro-static-sites?q=1
 */
import { getCollection } from 'astro:content';

export async function GET() {

    const posts = await getCollection('posts');

    const index = await Promise.all(
        posts.map(async (page) => {
            return {
                ...page.data,
                slug: page.id,
            }
        })
    );

    return new Response(JSON.stringify(index));
}