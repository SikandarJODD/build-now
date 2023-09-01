<script>
	import ProfileCard from '$lib/portfolio/ProfileCard.svelte';
	export let data;
	// $: console.log(data.getUser);
</script>

<div class="co rounded-xl">
	<ProfileCard data={data.getUser} />
</div>

<style>
	.co {
		border: 1px solid black;
	}
</style>
