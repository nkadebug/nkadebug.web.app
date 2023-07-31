import type { Post } from "$lib/models";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    let posts: Post[] = [];

    const paths = import.meta.glob('/src/posts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug }
            posts.push(post)
        }
    }
    return { posts };
}) satisfies PageLoad