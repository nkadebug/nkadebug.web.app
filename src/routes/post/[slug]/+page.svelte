<script lang="ts">
	import type { PageData } from "./$types";
    export let data:PageData;
</script>
<article class="prose">
    <svelte:component this={data.component}/>
</article>