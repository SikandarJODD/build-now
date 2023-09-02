<script>
	import AboutUser from '$lib/portfolio/AboutUser.svelte';
	import ProfileCard from '$lib/portfolio/ProfileCard.svelte';
	import SkillsUser from '$lib/portfolio/SkillsUser.svelte';
	export let data;
	// $: console.log(data.getUser);
</script>

<div class="co rounded-xl shadow-md shadow-gray-400">
	<ProfileCard data={data.getUser} />
</div>
<AboutUser intro={data.getUser?.desc} resume={String(data.getUser?.resumeLink)} />
<SkillsUser />

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
