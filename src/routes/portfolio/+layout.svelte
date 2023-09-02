<script>
	import { page } from '$app/stores';
	import SideBar from '$lib/portfolio/SideBar.svelte';
	export let data;
	$: routeId = $page.route.id;
</script>

<main class="h-screen co">
	{#if routeId !== '/portfolio'}
		<!-- content here -->
		<SideBar img={data.getUser}>
			<slot />
		</SideBar>
	{:else}
		<slot />
	{/if}
</main>

<style>
	.co {
		background-color: white;
	}
	main {
		cursor: url('$lib/cursor.png'), auto;
	}
</style>
