import type { SvelteComponent } from "svelte";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    let posts = import.meta.glob(`/src/posts/*.md`, { eager: true });
    let post = posts[`/src/posts/${params.slug}.md`] as SvelteComponent
    return { component: post.default };
}) satisfies PageLoad