<script>
	import NavClean from '$lib/home/NavClean.svelte';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	export let data;
</script>

<NavClean />
<!-- <Navbar email={data.email} /> -->
<slot />
