<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Code2, DatabaseZap, Keyboard, QrCode } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	export let techdata;
	let alldata = [
		{
			id: 0,
			name: 'Languages',
			icon: Code2,
			dv: ['C++']
		},
		{
			id: 1,
			name: 'Frameworks',
			icon: Keyboard,
			dv: ['Svelte']
		},
		{
			id: 2,
			name: 'Database',
			icon: DatabaseZap,
			dv: ['Mongo DB']
		},
		{
			id: 3,
			name: 'Others',
			icon: QrCode,
			dv: ['Github']
		}
	];
	onMount(() => {
		alldata[2].dv = String(techdata.database)
			.split(',')
			.filter((n) => n != ' ');
		alldata[3].dv = String(techdata.others)
			.split(',')
			.filter((n) => n != ' ');
		alldata[1].dv = String(techdata.framework)
			.split(',')
			.filter((n) => n != ' ');
		alldata[0].dv = String(techdata.lang)
			.split(',')
			.filter((n) => n != ' ');
	});
	let i = 0;
	let isworking = setInterval(() => {
		i++;
		if (i == 4) i = 0;
	}, 2000);
	setTimeout(() => {
		clearInterval(isworking);
	}, 8000);
</script>

<div
	id="skills"
	class="border border-slate-300 md:border-slate-700 px-4 md:px-6 py-7 mt-7 bg-white"
>
	<h1 class="text-2xl md:text-3xl font-bold text-center md:text-left">Tech & Skills</h1>

	{#each alldata as coding}
		<div class="group">
			<div
				class="my-6 flex gap-2 flex-col border border-slate-400 bg-zinc-100 p-4 group-hover:border-slate-800 group-hover:bg-green-200 transition-all duration-150 {i ==
				coding.id
					? 'border-slate-800 bg-green-200'
					: ''}"
			>
				<h1
					class="text-2xl font-baloo text-gray-700 group-hover:text-gray-950 transition-all duration-150 flex gap-1 {i ===
					coding.id
						? ' text-gray-950  '
						: ''} "
				>
					<svelte:component this={coding.icon} strokeWidth="1.5" />
					{coding.name}
				</h1>
				<div class="flex gap-5 flex-wrap">
					{#each coding.dv as item}
						<Button
							class="md:text-[17px] md:py-5 md:px-8  transition-all duration-150 bg-yellow-200/80 text-primary border border-primary group-hover:bg-primary group-hover:text-white {i ===
							coding.id
								? ' bg-primary  text-white'
								: ''} ">{item}</Button
						>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
</style>
