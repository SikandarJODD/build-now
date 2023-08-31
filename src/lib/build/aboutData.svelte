<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Badge } from '$lib/components/ui/badge';

	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.aboutform);
</script>

<div class="w-full md:w-fit my-3 md:my-10">
	<div>
		<Card.Root class="m-4 p-3 md:m-0 md:p-0 md:w-[460px] shadow-md shadow-gray-300">
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl flex justify-between items-center"
					>About Info <Badge variant="outline" class="border-green-500">Public</Badge></Card.Title
				>
				<Card.Description>basic details about yourself</Card.Description>
			</Card.Header>
			<form method="POST" action="?/about" use:enhance>
				<Card.Content class="grid gap-4">
					<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
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
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="code@gmail.com"
								bind:value={$form.email}
								name="email"
							/>
						</div>
					</div>
					<div class="grid gap-2">
						<Label for="pos">Positon</Label>
						<Input
							id="pos"
							type="text"
							placeholder="Full Stack Developer"
							name="pos"
							bind:value={$form.pos}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="resumeLink">Resume Link</Label>
						<Input
							id="resumeLink"
							type="text"
							placeholder="Resume"
							name="resumeLink"
							bind:value={$form.resumeLink}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="githubLink">Github Link</Label>
						<Input
							id="githubLink"
							type="text"
							placeholder="github.com/your_username"
							name="githubLink"
							bind:value={$form.githubLink}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="linkedLink">Linked in Link</Label>
						<Input
							id="linkedLink"
							type="text"
							placeholder="linked.in/in/your_username"
							name="linkedLink"
							bind:value={$form.linkedLink}
						/>
					</div>
				</Card.Content>
				<Card.Footer>
					<Button class="w-full">Submit</Button>
				</Card.Footer>
			</form>
		</Card.Root>
	</div>
</div>
