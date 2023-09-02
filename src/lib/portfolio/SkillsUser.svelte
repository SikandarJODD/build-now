<script>
	import Button from '$lib/components/ui/button/button.svelte';

</script>

<div class="border border-slate-300 md:border-slate-700 px-4 md:px-6 py-7 mt-7 bg-white">
	<h1 class="text-2xl md:text-3xl font-bold text-center md:text-left">Tech & Skills</h1>

	<div class="my-6 flex gap-2 flex-col border border-slate-400 bg-green-200/70 p-4 rounded-md">
		<h1 class="text-2xl font-baloo">Language</h1>
		<div class="flex gap-4 flex-wrap">
			<Button
				size="sm"
				variant="outline"
				class="md:text-md hover:border-green-400 border-slate-400 md:py-5 md:px-8">Cpp</Button
			>
			<Button
				size="sm"
				variant="outline"
				class="md:text-md hover:border-green-400 border-slate-400 md:py-5 md:px-8">Python</Button
			>
			<Button
				size="sm"
				variant="outline"
				class="md:text-md hover:border-green-400 border-slate-400 md:py-5 md:px-8">Java</Button
			>
		</div>
	</div>
	<div class="my-6 flex gap-2 flex-col border border-slate-400 bg-green-200/70 p-4 rounded-md">
		<h1 class="text-2xl font-baloo">Tech</h1>
		<div class="flex gap-4 flex-wrap">
			<Button
				size="sm"
				variant="outline"
				class="md:text-md hover:border-green-400 border-slate-400 md:py-5 md:px-8">Svelte</Button
			>
			<Button
				size="sm"
				variant="outline"
				class="md:text-md hover:border-green-400 border-slate-400 md:py-5 md:px-8">Python</Button
			>
			<Button
				size="sm"
				variant="outline"
				class="md:text-md hover:border-green-400 border-slate-400 md:py-5 md:px-8">Java</Button
			>
		</div>
	</div>
</div>

<style>
</style>
