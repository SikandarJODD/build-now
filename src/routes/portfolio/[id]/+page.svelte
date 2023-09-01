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
		background-image: radial-gradient(
			circle 248px at center,
			#16d9e3 0%,
			#30c7ec 47%,
			#46aef7 100%
		);
	}
</style>
