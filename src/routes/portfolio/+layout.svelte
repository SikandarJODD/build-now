<script>
	import SideBar from '$lib/portfolio/SideBar.svelte';
	export let data;
	$: console.log('User data', data.getUser);
</script>

<main class="h-screen co">
	<SideBar img={data.getUser}>
		<slot />
	</SideBar>
</main>

<style>
	.co {
		background-color: white;
	}
	main{
		cursor: url('$lib/cursor.png'), auto;
	}
	
</style>
