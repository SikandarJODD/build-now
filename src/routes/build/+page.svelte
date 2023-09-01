<script lang="ts">
	import AboutData from '$lib/build/aboutData.svelte';
	import CodeData from '$lib/build/codeData.svelte';
	import ExpsData from '$lib/build/expsData.svelte';
	import MetaData from '$lib/build/metaData.svelte';
	import ProjectsData from '$lib/build/projectsData.svelte';

	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	export let data: PageData;
</script>

<div>
	<MetaData {data} />
	<div class="flex justify-center flex-wrap md:gap-44">
		<AboutData {data} />
		<CodeData {data} />
	</div>
	<ExpsData {data} />
	<ProjectsData {data} />
</div>
