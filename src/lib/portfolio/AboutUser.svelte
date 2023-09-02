<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { FileCheck2 } from 'lucide-svelte';
	export let intro =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus unde omnis recusandae minus tenetur facere, distinctio corporis necessitatibus repellendus beatae asperiores excepturi soluta blanditiis iusto! Veritatis repellat repudiandae suscipit, ullam inventore mollitia non eos quia nobis, ut fugiat nostrum.';

	export let resume = '';
</script>

<div
	class="border border-slate-300 md:border-slate-700 px-6 py-7 mt-7 from-white to-gray-200/30 bg-gradient-to-r"
>
	<div class="md:border-l-2 md:px-6 md:border-blue-600">
		<h1 class="text-2xl md:text-3xl font-bold text-center md:text-left">Introduction</h1>
		<p class="max-w-4xl py-4 text-gray-600">
			{intro}
		</p>
		<div class="flex justify-between">
			<div>
				<Button variant="outline">Svelte</Button>
				<Button variant="outline">Supabase</Button>
				<Button variant="outline">Lucia Auth</Button>
			</div>
			<!-- {#if resume.length !== 0} -->
			<Button href={resume} target="_blank"
				><FileCheck2 class="mr-1" strokeWidth="1.5px" size="20" /> Resume</Button
			>
			<!-- {/if} -->
		</div>
	</div>
</div>
