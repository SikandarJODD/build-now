<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Textarea } from '$lib/components/ui/textarea';

	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.form);

	let name = '';
	$: title = $form.metatitle;
	$: src = $form.metaimage;
	$: desc = $form.metadesc;
	$: meta_url = $form.userUrl;
	$: {
		title.length > 40 && (title = title.slice(0, 40));
		desc.length > 200 && (desc = desc.slice(0, 200));
	}
</script>

<div class="  md:container md:w-[80%] grid grid-cols-1 md:grid-cols-2 my-3 md:my-10">
	<div>
		<Card.Root class="m-4 p-3 md:m-0 md:p-0 md:w-[460px] shadow-md shadow-gray-300">
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl">Website Information</Card.Title>
				<Card.Description
					>Information is related to <span class="text-gray-700"> SEO Tags</span></Card.Description
				>
			</Card.Header>
			<form method="POST" use:enhance action="?/meta">
				<Card.Content class="grid gap-4">
					<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
						<div class="grid gap-2">
							<Label for="web_title">URL</Label>
							<Input
								id="web_title"
								type="text"
								placeholder="/aditya"
								name="web_url"
								bind:value={$form.userUrl}
							/>
						</div>
						<div class="grid gap-2">
							<Label for="name">Name</Label>
							<Input
								id="name"
								type="text"
								placeholder="Aditya"
								name="name"
								bind:value={$form.name}
							/>
						</div>
					</div>
					<div class="grid gap-2">
						<Label for="web_title" class="flex justify-between">
							Title
							<span class={title.length > 40 ? 'text-red-600' : 'text-primary'}
								>{title.length}/40</span
							>
						</Label>
						<Input
							id="web_title"
							type="text"
							placeholder="Aditya Portfolio"
							name="web_title"
							class="capitalize"
							bind:value={$form.metatitle}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="web_image">Image</Label>
						<Input
							id="web_image"
							type="text"
							placeholder="Image url"
							name="web_image"
							bind:value={$form.metaimage}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="web_title" class=" flex justify-between">
							Description
							<span class={desc.length > 200 ? 'text-red-600' : 'text-primary'}
								>{desc.length}/200</span
							>
						</Label>
						<Textarea
							placeholder="Creating exceptional web experiences through innovative design..."
							name="desc"
							bind:value={$form.metadesc}
						/>
					</div>
				</Card.Content>
				<Card.Footer>
					<Button class="w-full" type="submit">Submit</Button>
				</Card.Footer>
			</form>
		</Card.Root>
	</div>
	<div
		class=" m-3 h-fit p-3 md:px-12 md:m-0 border-2 py-3 md:py-6 border-slate-500 rounded-xl flex flex-col items-center shadow-md shadow-gray-200"
	>
		{#if src.length > 0}
			<div class=" ">
				<img
					{src}
					alt="portfolio"
					class="md:w-64 h-full object-contain rounded-3xl border border-slate-400"
				/>
			</div>
		{:else}
			<div class=" ">
				<img
					src="https://i.pinimg.com/750x/da/ad/45/daad453a6cea78070801a8c9df63bfe1.jpg"
					alt="portfolio"
					class="md:w-72 h-full object-contain rounded-3xl border border-slate-400"
				/>
			</div>
		{/if}
		<h1 class="text-2xl text-center md:text-4xl font-bold m-4 capitalize">{title || 'Aditya'}</h1>
		<div>
			<p class=" ">
				{desc || 'Creating exceptional web experiences through innovative design...'}
			</p>
			<p class="mt-2 font-mono">url : https://build-now.vercel.app/portfolio/{meta_url}</p>
		</div>
	</div>
</div>
