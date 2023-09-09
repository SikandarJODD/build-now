<script>
	import ProjectCard from './ProjectCard.svelte';
	export let projects = [];
	$: console.log(projects, 'Pro');
</script>

<div class=" my-5" id="projects">
	{#if projects.length > 0}
		{#each projects as project}
			<ProjectCard projectData={project} />
		{/each}
	{/if}
</div>
