<script lang="ts">
	import type { PageData } from "./$types";
	export let data:PageData;
</script>
{#each data.posts as post}
        <a href="/post/{post.slug}" class="prose">
            <h2>{post.title}</h2>
            <p>{post.snippet}</p>
        </a>
{/each}