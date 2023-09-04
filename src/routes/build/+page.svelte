<script lang="ts">
	import { goto } from '$app/navigation';
	import AboutData from '$lib/build/aboutData.svelte';
	import CodeData from '$lib/build/codeData.svelte';
	import ExpsData from '$lib/build/expsData.svelte';
	import MetaData from '$lib/build/metaData.svelte';
	import ProjectsData from '$lib/build/projectsData.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let data;
	const { form } = superForm(data.form, {
		onUpdated: () => {
			window.location.reload();
		}
	});
</script>

<div>
	<MetaData {form} />
	<div class="flex justify-center flex-wrap md:gap-44">
		<AboutData {data} />
		<CodeData {data} />
	</div>
	<ExpsData {data} />
	<ProjectsData {data} />
</div>
