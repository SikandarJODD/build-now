<script>
	import { isActive } from './../store.js';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { FileBarChart, FileCheck2 } from 'lucide-svelte';
	export let intro =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus unde omnis recusandae minus tenetur facere, distinctio corporis necessitatibus repellendus beatae asperiores excepturi soluta blanditiis iusto! Veritatis repellat repudiandae suscipit, ullam inventore mollitia non eos quia nobis, ut fugiat nostrum.';

	export let resume = '';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="group"  id="about"
	on:mouseenter={() => {
		if ($isActive !== '#about') {
			isActive.set('#about');
		}
	}} >
	<div
		class="border px-6 mx-2 md:mx-10 py-7 mt-7 border-gray-900 transition-all ease-out duration-200 mint group-hover:bg-sky-400/70"
	>
		<div class="md:border-l-2 md:px-6 md:border-blue-600 group-hover:border-primary/80">
			<h1
				class="text-2xl md:text-3xl font-bold justify-center md:justify-start flex gap-1 items-center"
			>
				<FileBarChart size="27" />Introduction
			</h1>
			<p class="max-w-4xl py-4 md:text-gray-600 group-hover:text-gray-800">
				{intro}
			</p>
			<div class="flex justify-end md:justify-between">
				<div class=" flex-nowrap gap-3 hidden md:flex">
					<Button
						variant="outline"
						class="border-gray-600 rounded-none hover:bg-sky-400 transition-all duration-200"
						>Creative Thinking</Button
					>
					<Button
						variant="outline"
						class="border-gray-600 rounded-none hover:bg-sky-400 transition-all duration-200"
						>Decision Making</Button
					>
					<Button
						variant="outline"
						class="border-gray-600 rounded-none hover:bg-sky-400 transition-all duration-200 hover:scal"
						>Teamwork</Button
					>
				</div>
				<Button
					href={resume}
					target="_blank"
					class=" group-hover:scale-105 transition-all duration-150"
					><FileCheck2 class="mr-1" strokeWidth="1.5px" size="20" /> Resume</Button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.mint {
		/* transform: translate(-10px, -10px); */
		/* box-shadow: 13px 15px 0px 0px #27cafb; */
		box-shadow: 13px 15px 0px 0px #fefe0f;
	}

	@media (max-width: 768px) {
		.mint {
			box-shadow: 0px 0px 0px 0px #ffff19ff;
			background-color: rgb(24, 178, 249);
		}
	}
</style>
