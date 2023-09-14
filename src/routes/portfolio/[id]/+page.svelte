<script>
	import { page } from '$app/stores';
	import AboutUser from '$lib/portfolio/AboutUser.svelte';
	import AllProjects from '$lib/portfolio/AllProjects.svelte';
	import ExperienceCard from '$lib/portfolio/ExperienceCard.svelte';
	import ProfileCard from '$lib/portfolio/ProfileCard.svelte';
	import ProjectCard from '$lib/portfolio/ProjectCard.svelte';
	import SkillsUser from '$lib/portfolio/SkillsUser.svelte';
	import { isActive } from '$lib/store.js';
	import { BarChart2, FileBox } from 'lucide-svelte';
	export let data = {};
	$: console.log( data?.exps);
	$: exps = data?.exps || [
		{
			name: 'Plus Minus Labs',
			position: 'Frontend Intern',
			tech: 'React Js, Mongo DB, Node Js, Express Js, Tailwind CSS, Vercel',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			certificate: '/',
			githubLink: '/',
			expe: 'Jan 2023 - Present'
		},
		{
			name: 'Plus Minus Labs',
			position: 'Full Stack Developer',
			tech: 'React Js, Mongo DB, Node Js, Express Js, Tailwind CSS, Vercel',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			certificate: '/',
			githubLink: '/',
			expe: '3 Months'
		}
	];
</script>

<div class="co rounded-xl shadow-md shadow-gray-400">
	<ProfileCard data={data.getUser} img={data.getMera.metaimage} />
</div>
<AboutUser intro={data.getUser?.desc} resume={data.getUser?.resumeLink} />
<SkillsUser techdata={data?.tech} />

<div
	class="md:mx-6 mt-5"
	id="exp"
	on:mouseenter={() => {
		isActive.set('#exp');
	}}
>
	<h1 class="text-3xl font-bold flex items-center">
		<BarChart2 size="30" class="mr-1" />EXPERIENCE
	</h1>
	<div id="exp" class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
		{#each data.exps as exp, i}
			<ExperienceCard projectData={exp} />
		{/each}
		<!-- <ExperienceCard /> -->
	</div>
</div>
<div class="md:mx-6 mt-3">
	<h1 class="text-3xl font-bold flex items-center">
		<FileBox size="30" class="mr-1" />PROJECTS
	</h1>
	<AllProjects projects={data?.projects} />
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
