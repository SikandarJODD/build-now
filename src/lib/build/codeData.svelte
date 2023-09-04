<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Badge } from '$lib/components/ui/badge';

	import { superForm } from 'sveltekit-superforms/client';
	import { FileCode, FileEdit } from 'lucide-svelte';

	export let data;

	// Client API:
	const { form } = superForm(data.codingform);
</script>

<div class="w-full md:w-fit my-3 md:my-10">
	<div>
		<Card.Root class="m-4 p-3 md:m-0 md:p-0 md:w-[460px] shadow-md shadow-gray-300">
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl flex justify-between items-center"
					>Coding <Badge variant="outline" class="border-green-500">Public</Badge></Card.Title
				>
				<Card.Description
					>Add <code class="text-primary bg-slate-200 p-1 rounded-md">,</code> after each <span class="text-primary" >title</span>
				</Card.Description>
			</Card.Header>
			<form method="POST" action="?/coding" use:enhance>
				<Card.Content class="grid gap-4">
					<div class="grid gap-2">
						<Label for="lang">Language</Label>
						<Input
							id="lang"
							type="text"
							placeholder="C++, Python, Java"
							name="lang"
							bind:value={$form.lang}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="framework">Framework</Label>
						<Input
							id="framework"
							type="text"
							placeholder="Svelte, React, Vue"
							bind:value={$form.framework}
							name="framework"
						/>
					</div>
					<div class="grid gap-2">
						<Label for="database">Database</Label>
						<Input
							id="database"
							type="text"
							placeholder="SQL, MongoDB, Postgres SQL"
							name="database"
							bind:value={$form.database}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="others">Others</Label>
						<Input
							id="others"
							type="text"
							placeholder="Github, VS Code, Git"
							name="others"
							bind:value={$form.others}
						/>
					</div>
				</Card.Content>
				<Card.Footer>
					<Button class="w-full" type="submit"> <FileCode size="18" class="mr-1" strokeWidth="1.8" />Update </Button>
				</Card.Footer>
			</form>
		</Card.Root>
	</div>
</div>
