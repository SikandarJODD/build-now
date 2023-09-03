<script>
	import { page } from '$app/stores';
	import NavClean from '$lib/home/NavClean.svelte';
	import '../app.postcss';
	import '../app.css';

	$: routeId = $page.route.id?.split('/')[1];
</script>

{#if routeId !== 'portfolio'}
	<NavClean />
{/if}
<slot />
