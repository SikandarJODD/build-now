<script>
	import { isActive } from '$lib/store.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { AppWindow, ArrowUpRightSquare, FileCode2, Terminal } from 'lucide-svelte';
	let projectTech = ['React Js', 'Mongo DB', 'Node Js', 'Express Js', 'Tailwind CSS', 'Vercel'];
	let colors = ['#9ceaef', '#a2d2ff', '#ffafcc', '#cdb4db', '#80ed99', '#affc41'];
	export let projectData = {
		position: 'Full Stack Developer',
		tech: 'React Js, Mongo DB, Node Js, Express Js, Tailwind CSS, Vercel',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		hostedLink: '/',
		githubLink: '/',
		duration: '3 Months'
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class="bg-white box border border-primary px-3 py-5 my-4 rounded-xl transition-all duration-200"
>
	<div class="flex justify-between items-center">
		<h1 class="text-3xl font-bold w-fit px-0">{projectData?.position}</h1>
		<p
			class="text-gray-500 text-md mt-1 font-mono border-l px-2 border-slate-500 bg-slate-200/50 rounded-r-sm"
		>
			{projectData?.duration}
		</p>
	</div>
	<div class="flex flex-wrap gap-2 my-2">
		{#each projectData?.tech.split(',') as item, i}
			<Badge variant="outline" class="capitalize border-gray-400 hover:bg-gray-100 hover:border-slate-800 transition-all duration-200">{item}</Badge>
		{/each}
	</div>
	<div class="my-2 mx-1">
		<p>
			{@html projectData?.desc}
		</p>
	</div>
	<div class="flex gap-2 justify-end">
		<Button target="_blank" href={projectData?.hostedLink} variant="outline" class="border-primary">
			View Project
			<ArrowUpRightSquare strokeWidth="1.4" class="ml-2" size="20" />
		</Button>
		<Button target="_blank" href={projectData?.githubLink}>
			<FileCode2 strokeWidth="1.4" class="mr-1" size="20" />
			Github</Button
		>
	</div>
</div>

<style>
	h1 {
		position: relative;
		z-index: 1;
	}

	h1::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		overflow: hidden;
		left: -0.4em;
		right: -0.3em;
		border-radius: 0px 10px 10px 0px;
		background-color: rgb(255, 234, 73);
		transform-origin: center left;
		transform: scaleX(0);
		transition: transform 0.2s ease-in-out;
	}

	h1:hover::before {
		transform: scaleX(1.02);
		transform-origin: center left;
	}
	.box:hover {
		box-shadow: 10px 10px 0px 0px rgb(26, 180, 252);
		transform: translate(-7px, -7px);
		background: rgb(252, 251, 245);
	}
</style>
