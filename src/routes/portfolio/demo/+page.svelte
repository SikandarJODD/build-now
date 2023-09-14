<script>
	import AboutUser from '$lib/portfolio/AboutUser.svelte';
	import AllProjects from '$lib/portfolio/AllProjects.svelte';
	import ExperienceCard from '$lib/portfolio/ExperienceCard.svelte';
	import ProfileCard from '$lib/portfolio/ProfileCard.svelte';
	import ProjectCard from '$lib/portfolio/ProjectCard.svelte';
	import SkillsUser from '$lib/portfolio/SkillsUser.svelte';
	import { BarChart2, FileBox } from 'lucide-svelte';
	let exps = [
		{
			position: 'Frontend Intern',
			tech: 'React Js, Mongo DB, Node Js, Express Js, Tailwind CSS, Vercel',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			hostedLink: '/',
			githubLink: '/',
			duration: 'Jan 2023 - Present'
		},
		{
			position: 'Full Stack Developer',
			tech: 'React Js, Mongo DB, Node Js, Express Js, Tailwind CSS, Vercel',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			hostedLink: '/',
			githubLink: '/',
			duration: '3 Months'
		}
	];
</script>

<section>
	<div class="co rounded-xl shadow-md shadow-gray-400">
		<ProfileCard />
	</div>
	<AboutUser />
	<SkillsUser />
	<AllProjects />
	<div class="md:mx-6">
		<h1 class="text-3xl font-bold flex items-center">
			<BarChart2 size="30" class="mr-1" />EXPERIENCE
		</h1>
		<div id="exp" class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each exps as exp, i}
				<ExperienceCard projectData={exp} />
			{/each}
			<!-- <ExperienceCard /> -->
		</div>
	</div>
	<div class="md:mx-6 mt-3">
		<h1 class="text-3xl font-bold flex items-center ">
			<FileBox size="30" class="mr-1" />PROJECTS
		</h1>
		<ProjectCard />
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
