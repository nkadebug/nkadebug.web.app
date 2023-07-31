<script>
	import Header from '$lib/layout/Header.svelte';
import '../app.postcss';
</script>

<Header/>
<main class="mt-12 p-4">
	<slot />
</main>
