<script>
	import AboutUser from '$lib/portfolio/AboutUser.svelte';
	import ProfileCard from '$lib/portfolio/ProfileCard.svelte';
</script>

<section>
	<div class="co rounded-xl shadow-md shadow-gray-400">
		<ProfileCard />
	</div>
	<div>
		<AboutUser />
	</div>
</section>

<style>
	.co {
		background-image: radial-gradient(
			circle 248px at center,
			#16d9e3 0%,
			#30c7ec 47%,
			#46aef7 100%
		);
	}
	section {
		cursor: url('$lib/cursor.png'), auto;
	}
</style>
