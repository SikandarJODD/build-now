<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { AppWindow, ArrowUpRightSquare, FileCode2, Terminal } from 'lucide-svelte';
	let projectTech = ['React Js', 'Mongo DB', 'Node Js', 'Express Js', 'Tailwind CSS', 'Vercel'];
	let colors = ['#9ceaef', '#a2d2ff', '#ffafcc', '#cdb4db', '#80ed99', '#affc41'];
	export let projectData;
	$: console.log(projectData, 'Project Data');
</script>

<div
	class="bg-white border border-primary px-3 py-5 my-4 hover:bg-gradient-to-r hover:from-white hover:to-sky-200"
>
	<h1 class="text-3xl font-bold w-fit px-0">{projectData.name}</h1>
	<div class="flex flex-wrap gap-2 my-2">
		{#each projectData?.tech.split(',') as item, i}
			<Badge variant="outline" style="background:{colors[i % colors.length]}" class="capitalize"
				>{item}</Badge
			>
		{/each}
	</div>
	<div class="my-2 mx-1">
		<p>
			{@html projectData.desc}
		</p>
	</div>
	<div class="flex gap-2 justify-end">
		<Button target="_blank" href={projectData?.hostedLink}>
			View Project
			<ArrowUpRightSquare strokeWidth="1.4" class="ml-2" size="20" />
		</Button>
		<Button target="_blank" href={projectData?.githubLink}>
			<FileCode2 strokeWidth="1.4" class="mr-1" size="20"/>
			Github</Button>
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
		left: -0.4em;
		right: -0.25em;
		border-radius: 0px 10px 10px 0px;
		background-color: #0fb3ffff;
		transform-origin: center right;
		transform: scaleX(0);
		transition: transform 0.2s ease-in-out;
	}

	h1:hover::before {
		transform: scaleX(1.05);
		transform-origin: center left;
	}
</style>
