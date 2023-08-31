<!-- Experience of user -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Badge } from '$lib/components/ui/badge';

	import { superForm } from 'sveltekit-superforms/client';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';

	export let data;

	// Client API:
	const { form } = superForm(data.expsform);
</script>

<div class="w-full md:w-[80%] my-3 md:my-10 grid grid-cols-1 md:grid-cols-2 md:container">
	<div>
		<Card.Root class="m-4 p-3 md:m-0 md:p-0 md:w-[460px] shadow-md shadow-gray-300">
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl flex justify-between items-center"
					>Projects <Badge variant="outline" class="border-green-500">Public</Badge></Card.Title
				>
			</Card.Header>
			<form method="POST" action="?/projects" use:enhance>
				<Card.Content class="grid gap-4">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="grid gap-2">
							<Label for="project">Project Name</Label>
							<Input
								id="project"
								type="text"
								placeholder="Project Name"
								name="name"
								bind:value={$form.name}
							/>
						</div>
						<div class="grid gap-2">
							<Label for="tech">Tech Stack</Label>
							<Input
								id="tech"
								type="text"
								placeholder="Svelte,Supabase"
								name="tech"
								bind:value={$form.tech}
							/>
						</div>
					</div>
					<div class="grid gap-2">
						<Label for="github">Github Repo</Label>
						<Input
							id="github"
							type="text"
							placeholder="github.com/username/repo"
							bind:value={$form.github}
							name="github"
						/>
					</div>
					<div class="grid gap-2">
						<Label for="hosted">Hosted Link</Label>
						<Input
							id="hosted"
							type="text"
							placeholder="build-now.vercel.app"
							bind:value={$form.hosted}
							name="hosted"
						/>
					</div>
					<div class="grid gap-2">
						<Label for="desc">Description</Label>
						<Textarea id="desc" name="desc" bind:value={$form.desc} rows="7" placeholder="Poject Description..." />
					</div>
				</Card.Content>
				<Card.Footer>
					<Button class="w-full">Submit</Button>
				</Card.Footer>
			</form>
		</Card.Root>
	</div>
	<div>Expericene in Company</div>
</div>
