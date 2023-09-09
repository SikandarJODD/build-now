<script>
	import AboutUser from '$lib/portfolio/AboutUser.svelte';
	import AllProjects from '$lib/portfolio/AllProjects.svelte';
	import ProfileCard from '$lib/portfolio/ProfileCard.svelte';
	import SkillsUser from '$lib/portfolio/SkillsUser.svelte';
</script>

<section>
	<div class="co rounded-xl shadow-md shadow-gray-400">
		<ProfileCard />
	</div>
	<AboutUser />
	<SkillsUser />
	<AllProjects />
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
