<script>
	import SideBar from '$lib/portfolio/SideBar.svelte';
	export let data;
	$: console.log('User data', data.getUser);
</script>

<SideBar img={data.getUser} >
	<slot />
</SideBar>
