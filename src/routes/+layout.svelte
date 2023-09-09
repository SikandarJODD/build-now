<script>
	import NavClean from '$lib/home/NavClean.svelte';
	import '../app.postcss';
	import '../app.css';
	export let data;
	$: routeId = data.urlPath.split('/');
	$: console.log(routeId);
</script>

{#if routeId[1] !== 'portfolio'}
	<NavClean />
{/if}
<slot />
