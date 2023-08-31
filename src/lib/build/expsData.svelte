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
					>Experience <Badge variant="outline" class="border-green-500">Public</Badge></Card.Title
				>
			</Card.Header>
			<form method="POST" action="?/experience" use:enhance>
				<Card.Content class="grid gap-4">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="grid gap-2">
							<Label for="name">Company Name</Label>
							<Input
								id="name"
								type="text"
								placeholder="Company Name"
								name="name"
								bind:value={$form.name}
							/>
						</div>
						<div class="grid gap-2">
							<Label for="position">Position</Label>
							<Input
								id="position"
								type="text"
								placeholder="Juniour Developer"
								name="position"
								bind:value={$form.position}
							/>
						</div>
					</div>
					<div class="grid gap-2">
						<Label for="duration">Duration</Label>
						<Input
							id="duration"
							type="text"
							placeholder="3 Months, 1 Year, 2 Years"
							bind:value={$form.duration}
							name="duration"
						/>
					</div>
					<div class="grid gap-2">
						<Label for="cert">Certificates</Label>
						<Input
							id="cert"
							type="text"
							placeholder="Any Certificates"
							bind:value={$form.cert}
							name="cert"
						/>
					</div>
					<div class="grid gap-2">
						<Label for="desc">Description</Label>
						<Textarea id="desc" name="desc" bind:value={$form.desc} />
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
