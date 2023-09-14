<script>
	import { isActive } from '$lib/store';
	import ProjectCard from './ProjectCard.svelte';
	export let projects = [];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class=" my-5"
	id="projects"
	on:mouseover={() => {
		if ($isActive !== '#projects') {
			isActive.set('#projects');
		}
	}}
>
	{#if projects.length > 0}
		{#each projects as project}
			<ProjectCard projectData={project} />
		{/each}
	{/if}
</div>
